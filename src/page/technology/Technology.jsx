import React, {useState} from 'react';
import style from './Technology.module.scss';
import technologyData from '../../data/data';

const Technology = () => {
    const [t, setT] = useState('Spaceport')
    const data = technologyData[t]
    console.log(data)
    const changePlanet = (e) => {
        setT(e.target.value)
    }
    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <span> <span>01</span> PICK YOUR DESTINATION</span>
                <div className={style.contentContainer}>
                    <div className={style.btnContainer}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button></div>
                    <div className={style.content}>asds</div>
                </div>
            </div>
            <div className={style.secondaryContent}>
                <img src="" alt=""/>
            </div>


        </div>
    )
}
export default Technology