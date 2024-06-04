import React from 'react'

export default function UseEscapeKey (callback) {
  const callbackWrapper = event => {
    if (event.key === 'Escape') {
      callback(event)
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', callbackWrapper)

    return () => {
      window.removeEventListener('keydown', callbackWrapper)
    }
  })
}
