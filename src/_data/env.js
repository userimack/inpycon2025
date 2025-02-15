const isDev = process.env.ELEVENTY_ENV === 'dev'

module.exports = {
  baseUrl: isDev
    ? '/inpycon2025/'
    : '/2025/'
}