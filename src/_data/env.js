const isProd = process.env.ELEVENTY_ENV === 'prod'

module.exports = {
  baseUrl: isProd
    ? '/2025/'
    : '/'
}