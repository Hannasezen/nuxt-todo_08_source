export default function ({ store, error }) {
  if (!store.state.auth.loggedIn) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}