import React from 'react'

import useEscapeKey from '../../hooks/use-escape-key'

export const ToastContext = React.createContext()

function ToastProvider ({ children }) {
  const [toasts, setToasts] = React.useState([])
  const escapeCallback = React.useCallback(() => {
    setToasts([])
  }, [])
  useEscapeKey(escapeCallback)

  function addToastToStack({variant, message}) {
    const newToasts = [...toasts, { id: crypto.randomUUID(), variant, message }];
    setToasts(newToasts);
  }

  function removeToastFromStack(id) {
    const newToasts = toasts.filter(toast => toast.id !== id)
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider value={{
      toasts,
      addToastToStack,
      removeToastFromStack,
    }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
