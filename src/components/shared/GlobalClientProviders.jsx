import { Suspense } from 'react'
import ContactModal from './ContactModal'

export default function GlobalClientProviders({ children }) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <ContactModal />
      </Suspense>
    </>
  )
}
