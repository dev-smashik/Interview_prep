import { ReactNode } from 'react'
// import "../globals.css";

const AuthLayout = ({children} : {children: ReactNode}) => {
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout