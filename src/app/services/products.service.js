import httpService from './http.service'
const productsEndPoint = 'products/'
const categoriesEndPoint = 'category/'
const brandsEndPoint = 'brand/'

const productsService = {
  get: async () => {
    const { data } = await httpService.get(productsEndPoint)
    return data
  },
  getCategories: async () => {
    const { data } = await httpService.get(categoriesEndPoint)
    return data
  },
  getBrands: async () => {
    const { data } = await httpService.get(brandsEndPoint)
    return data
  }
}
export default productsService
