import React from 'react'

import Button from '../Button'

import styles from './ToastPlayground.module.css'
import { ToastContext } from '../ToastProvider'
import ToastShelf from '../ToastShelf'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground () {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
  const [message, setMessage] = React.useState('')
  const { toasts, addToastToStack } = React.useContext(ToastContext)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png"/>
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts}/>

      <div className={styles.controlsWrapper}>
        <form onSubmit={e => {
          e.preventDefault()
          addToastToStack({ variant, message })
          setVariant(VARIANT_OPTIONS[0])
          setMessage('')
        }}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              required={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((option) => (
                <label htmlFor={`variant-${option}`} key={option}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    onChange={(e) => setVariant(e.target.value)}
                    checked={variant === option}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}/>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ToastPlayground
