import  api  from '../api'

export const useGetData = () => {
  const getVendedor = async () => {
    try {
      const response = await api.get('/vendedor')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getRamo = async () => {
    try {
      const response = await api.get('/ramoatv')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getServico = async () => {
    try {
      const response = await api.get('/servico')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getCidade = async () => {
    try {
      const response = await api.get('/cidade')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }


  /*
  const getSearchResult = async (query) => {
    try {
      const response = await api.get(`search?query=${query}`)
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }
  */

  return {
    getVendedor,
    getRamo,
    getServico,
    getCidade
  }
}
