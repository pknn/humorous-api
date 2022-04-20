module.exports = async () => {
  return {
    clearMocks: true,
    verbose: true,
    transform: {
      '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
  }
}
