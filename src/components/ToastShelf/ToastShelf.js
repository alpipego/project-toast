import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'
import { ShowToastContext } from '../ToastProvider'

function ToastShelf ({ toasts }) {
  const { clearToasts } = React.useContext(ShowToastContext)
  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        clearToasts()
      }
    })
  })

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast id={toast.id} variant={toast.variant}>{toast.message}</Toast>
        </li>
      ))}
    </ol>
  )
}

export default React.memo(ToastShelf)
