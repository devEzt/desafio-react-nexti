import mock from '../mock.json'

export const mutationLogin = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const userLogging = mock.users.find((user) => user.email === email && user.password === password)

    if (userLogging) {
      return resolve(userLogging)
    }

    return reject({
      message: 'Login Incorreto!',
    })
  })
}
