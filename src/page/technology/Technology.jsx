import React, {useState} from 'react';
import style from './Technology.module.scss';
import {technologyData} from './../../data/data';
import Button from "../../common/components/button/button";

const Technology = () => {
    const [t, setT] = useState('Spaceport')
    const data = technologyData[t]
    const changeValue = (e) => {
        setT(e.target.value)
    }
    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <span> <span>03</span> SPACE LAUNCH 101</span>
                <div className={style.contentContainer}>
                    <div className={style.btnContainer}>
                        <button value={'Vehicle'} onClick={changeValue} className={t === 'Vehicle'? style.active: ''}>1</button>
                        {/*<Button name='1' value='Vehicle' func={changeValue} class={'active'}/>*/}
                        {/*<Button name='2' value='Spaceport' func={changeValue} class={'active'}/>*/}
                        {/*<Button name='3' value='Capsule' func={changeValue} class={'active'}/>*/}
                        <button value={'Spaceport'} onClick={changeValue} className={t === 'Spaceport'? style.active: ''}>2</button>
                        <button value={'Capsule'} onClick={changeValue} className={t === 'Capsule'? style.active: ''}>3</button>
                    </div>
                    <div className={style.content}>
                        <p>THE TERMINOLOGY...</p>
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
            <div className={style.secondaryContent}>
                <img src='' alt=""/>
            </div>


        </div>
    )
}
export default Technology