import React, { useState } from 'react'

type Props = {
    buttonLabel:string,
    children:React.ReactNode
}

const Togglable = ({children,buttonLabel}: Props) => {
    const [visible,setVisible] = useState(false)

    const hideWhenVisible={
        display:visible ? 'none' : ''
    }
    const showWhenVisible={
        display:visible ? '' : 'none'
    }

    const toggleVisibility = () => {
        setVisible(!visible)
    }
  return (
    <div>
        <div style={hideWhenVisible}>
            <button 
            onClick={toggleVisibility} 
            className='px-4 py-1 my-2 rounded bg-gray-300'>
            {buttonLabel}
            </button>
        </div>
        <div style={showWhenVisible}>
           {children}
            <button 
            onClick={toggleVisibility} 
            className='px-4 py-1 my-2 rounded bg-gray-300'>
                cancel
            </button>
        </div>
    </div>
  )
}

export default Togglable