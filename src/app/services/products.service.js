import httpService from './http.service'
const productsEndPoint = 'products/'

const productsService = {
  get: async () => {
    const { data } = await httpService.get(productsEndPoint)
    return data
  }
}
export default productsService
