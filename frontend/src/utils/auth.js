const BASE_URL = 'https://domainlea.students.nomoredomainsicu.ru';

const getResponseData = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
  })
    .then(getResponseData)
}

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
    })
    .then(getResponseData)
}