import { BASE_URL } from '../index'

class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl
      this._headers = options.headers
    }
  
    _checkResponse(response) {
      return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`)
    }
  
    async getUserInfo() {
      const response = await fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        credentials: "include",
      })
      return this._checkResponse(response)
    }
  
    async getInitialCards() {
      const response = await fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
        credentials: "include",
      })
      return this._checkResponse(response)
    }
  
    async updateUserInfo(userData) {
      const response = await fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        credentials: "include",
        method: 'PATCH',
        body: JSON.stringify(userData)
      })
      return this._checkResponse(response)
    }
  
    async addNewCard(cardData) {
      const response = await fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
        credentials: "include",
        method: 'POST',
        // mode: 'no-cors',
        body: JSON.stringify(cardData),
      })
      return this._checkResponse(response)
    }
  
    async deleteCard(cardId) {
      const response = await fetch(`${this._baseUrl}/cards/${cardId}`, {
        headers: this._headers,
        credentials: "include",
        method: 'DELETE'
      })
      return this._checkResponse(response)
    }
  
    async likeCard(cardId) {
      const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        headers: this._headers,
        credentials: "include",
        method: 'PUT'
      })
      return this._checkResponse(response)
    }
  
    async dislikeCard(cardId) {
      const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        headers: this._headers,
        credentials: "include",
        method: 'DELETE'
      })
      return this._checkResponse(response)
    }

      
    async updateAvatar(userData) {
      const response = await fetch(`${this._baseUrl}/users/me/avatar`, {
        headers: this._headers,
        credentials: "include",
        method: 'PATCH',
        body: JSON.stringify(userData)
      })
      return this._checkResponse(response)
    }
  }
  
  const api = new Api({
    baseUrl: BASE_URL,   /// добавить в заголовое токен 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  export default api