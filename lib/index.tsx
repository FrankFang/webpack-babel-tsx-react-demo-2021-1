import * as React from 'react'
import './index.css'
const FButton:React.FC = ({children})=>{
    return <button className="FButton">{children}</button>
}

export {FButton}