import React from 'react'
import s from './ModalWindow.module.css'

export default function ModalWindow({active, setActiv, children}) {
  return (
    <div className={active ? `${s.Modal} ${s.Active}` : s.Modal} onClick={()=> setActiv(false)}>
      <div className={s.ModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
