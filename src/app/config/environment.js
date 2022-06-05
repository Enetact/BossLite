export default {
  development: {
    isProd: true
  },
  production: {
    isProd: false
  }
}[process.env.NODE_ENV || 'development'];
