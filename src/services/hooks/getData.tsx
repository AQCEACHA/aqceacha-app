import axios from 'axios'
import  api  from '../api'

export const getData = () => {
  const getVendedor = async () => {
    try {
      const response = await axios.get('/vendedor')
      return response.data
    } catch (error) {
      console.log({ error }, "teste")
      return { error }
    }
  }

  const getVendedorTodos = async () => {
    try {
      const response = await api.get('/vendedor/todos')
      return response.data
    } catch (error) {
      console.log({ error }, "teste2")
      return { error }
    }
  }

  const getRamo = async () => {
    try {
      const response = await api.get('/ramoatv')
      return response.data
    } catch (error) {
      console.log({ error }, "teste3")
      return { error }
    }
  }

  const getRamoTodos = async () => {
    try {
      const response = await api.get('/ramoatv/todos')
      return response.data
    } catch (error) {
      console.log({ error }, "teste4")
      return { error }
    }
  }

  const getServico = async () => {
    try {
      const response = await api.get('/servico')
      return response.data
    } catch (error) {
      console.log({ error }, "teste5")
      return { error }
    }
  }

  const getServicoTodos = async () => {
    try {
      const response = await api.get('/servico/todos')
      return response.data
    } catch (error) {
      console.log({ error }, "teste6")
      return { error }
    }
  }

  const getCidade = async () => {
    try {
      const response = await api.get('/cidade')
      return response.data
    } catch (error) {
      console.log({ error }, "teste7")
      return { error }
    }
  }

  const getCidadeTodos = async () => {
    try {
      const response = await api.get('/cidade/todos')
      return response.data
    } catch (error) {
      console.log({ error }, "teste8")
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
    getVendedorTodos,
    getRamo,
    getRamoTodos,
    getServico,
    getServicoTodos,
    getCidade,
    getCidadeTodos
  }
}
