import React from 'react'
import s from './ModalWindow.module.css'

export default function ModalWindow({active, setActive, children}) {

    let SetActive = () => {
        setActive(false)
    }

    return (
        <div
            className={active ? `${s.Modal} ${s.Active}` : s.Modal}
            onClick={SetActive}
        >
            <div className={s.PosBtn}>

            </div>
            <div className={s.ModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
