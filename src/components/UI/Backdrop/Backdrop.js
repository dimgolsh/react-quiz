import React from 'react'
import css from './Backdrop.module.scss';


const Backdrop = props => {
    return (

        <div
        className={css.Backdrop}
        onClick={props.onClose}
        ></div>
    )
}

export default Backdrop;