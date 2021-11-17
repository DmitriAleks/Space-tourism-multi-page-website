import React, {useState} from 'react';
import style from './Crew.module.scss'
import {crewData} from '../../data/data';
 const Crew = () => {
     const [t, setT] = useState('Specialist')
     const data = crewData[t]
     const changePeople = (e) => {
         setT(e.target.value)
     }

    return(
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.title}>
                    <span> <span>02</span> PICK YOUR DESTINATION</span>
                </div>
                <div className={style.description}>
                    <span>{data.job}</span>
                    <span>{data.name}</span>
                    <span>{data.description}</span>
                </div>
                <div className={style.btnContainer}>
                    <button value={'Specialist'} onClick={changePeople}></button>
                    <button value={'Pilot'} onClick={changePeople}></button>
                    <button value={'Commander'} onClick={changePeople}></button>
                    <button value={'Engineer'} onClick={changePeople}></button>
                </div>
            </div>
            <div className={style.secondaryContent}>
                12
                <img src="./../../assets/crew/image-anousheh-ansari.png" alt=""/>
            </div>


        </div>
    )
}
export default Crew