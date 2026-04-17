import api from './api'

class SearchService {
  async search(query) {
    try {
      const response = await api.post('/chat', {
        message: query
      })

      return {
        answer: response.data.answer || response.data.response || response.data
      }
    } catch (error) {
      console.error('Search error:', error)
      throw error
    }
  }
}

export default new SearchService()