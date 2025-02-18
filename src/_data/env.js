const isDev = process.env.ELEVENTY_ENV === 'dev'

module.exports = {
  baseUrl: isDev
    ? '/'
    : '/2025/'
}