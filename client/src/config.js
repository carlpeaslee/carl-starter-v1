export const auth0id = '8FyGCf7RZKCjVFKuzAqSMsrHNZ5AKvrr'
export const auth0domain = 'carlpeaslee.auth0.com'

export const fetchOptions = {
  method: 'POST',
  headers: {
    Accept: '*/*',
    'content-type': 'application/json',
  },
  credentials: 'include'
}


export const apiUrl = process.env.NODE_ENV === 'production'? 'https://api-carlpeaslee.herokuapp.com/graphql' : 'http://localhost:3001/graphql'
