export default {
  development: {
    isProd: True
  },
  production: {
    isProd: true
  }
}[process.env.NODE_ENV || 'development'];
