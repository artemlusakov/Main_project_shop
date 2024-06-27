import React from 'react'
import s from "./GamesCatalog.module.css"

export default function GamesCatalog(props) {
  return (
    <div className={s.GamesCatalog}>
        <h2>{props.GamesCatalogName}</h2>

        <div className={s.GamesCatalogBox}>
            
        </div>
    </div>
  )
}
