import React from 'react';
import style from './Title.module.scss'

const Title = (props) => {
    return(
        <span className={style.title}> <span className={style.value}>{props.page}</span>{props.value}</span>
    )
}
export default Title;