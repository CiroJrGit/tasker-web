import cookies from 'js-cookie'

// TO-DO: remover
export function setAuthorization() {
  const token = cookies.get('token')

  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  return authorization
}
