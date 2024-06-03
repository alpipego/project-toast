import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider({children}) {
  const [showToast, setShowToast] = React.useState(false)

  return (
    <ToastContext.Provider value={{ showToast, setShowToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
