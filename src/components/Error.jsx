import React from 'react'

const Error = ({children}) => {
  return (
    <div className='text-white text-center font-bold p-3 uppercase my-4 bg-red-600'>
        {children}
    </div>
  )
}

export default Error