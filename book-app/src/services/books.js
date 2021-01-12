import api from './apiConfig'

export const getBooks = async () => {
  try {
    const response = await api.get("/api")
    return response
  } catch (error) {
    throw error
  }
}

export const getBook = async id => {
  try {
    const response = await api.get(`/api/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const createBook = async book => {
  try {
    const response = await api.post('/api', book)
    return response
  } catch (error) {
    throw error
  }
}

export const updateBook = async (id, book) => {
  try {
    const response = await api.put(`/api/${id}`, book)
    return response
  } catch (error) {
    throw error
  }
}

export const deleteBook = async id => {
  try {
    const response = await api.delete(`/api/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const addComment = async (bookId, commentBody) => {
  try {
    const response = await api.post(`/api/${bookId}`, commentBody)
    return response
  } catch (error) {
    throw error
  }
}

export const deleteComment = async (bookId, commentId) => {
  try {
    const response = await api.delete(`/api/${bookId}/${commentId}`)
    return response
  } catch (error) {
    throw error
  }
}