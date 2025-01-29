const isPord = process.env.ELEVENTY_ENV === 'prod'

module.exports = {
  baseUrl: isPord
    ? '/inpycon2025/'
    : '/'
}