import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    baseUrl: 'https://playground.bondaracademy.com',
  },
})
