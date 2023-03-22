import { afterEach, beforeEach, vi } from 'vitest'

window.alert = vi.fn()

const originalClipboard = { ...navigator.clipboard }

beforeEach(() => {
  let clipboardData = '' //initalizing clipboard data so it can be used in testing
  const mockClipboard = {
    writeText: vi.fn((data) => {
      clipboardData = data
    }),
    readText: vi.fn(() => {
      return clipboardData
    })
  }

  navigator.clipboard = mockClipboard
})

afterEach(() => {
  navigator.clipboard = originalClipboard
})
