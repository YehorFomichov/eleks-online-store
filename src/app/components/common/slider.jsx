import React, { useCallback, useEffect, useRef, useState } from 'react'
import './slider.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const Slider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(null)
  const maxValRef = useRef(null)
  const range = useRef(null)
  const getPercent = useCallback(
    (value) => {
      Math.round(((value - min) / (max - min)) * 100)
    },
    [min, max]
  )
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value)

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])
  useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])
  return (
    <div className='d-flex'>
      <input
        type='range'
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        className={classNames('thumb thumb--zindex-3', {
          'thumb--zindex-5': minVal > max - 100
        })}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1)
          setMinVal(value)
          event.target.value = value.toString()
        }}
      />
      <input
        type='range'
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1)
          setMaxVal(value)
          event.target.value = value.toString()
        }}
        className='thumb thumb--zindex-4'
      />
      <div className='slider'>
        <div className='slider__track' />
        <div ref={range} className='slider__range' />
        <div className='slider__left-value'>{minVal}</div>
        <div className='slider__right-value'>{maxVal}</div>
      </div>
    </div>
  )
}
Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}
export default Slider
