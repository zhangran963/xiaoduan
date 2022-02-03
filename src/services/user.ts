export const login = () => {
  return fetch('/api/user/login')
    .then((response) => response.json())
    .then((res) => {
      return res.data
    })
}
