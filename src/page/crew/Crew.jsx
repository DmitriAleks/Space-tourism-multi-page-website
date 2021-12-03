import React, {useState} from 'react';
import style from './Crew.module.scss'
import {crewData} from '../../data/data';
import image from './../../assets/no-image.jpg'
import Title  from './../../common/components/title/Title'

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
                    <Title page={'02'} value={'PICK YOUR DESTINATION'}/>
                    {/*<span> <span>02</span> PICK YOUR DESTINATION</span>*/}
                </div>
                <div className={style.description}>
                    <span>{data.job}</span>
                    <span>{data.name}</span>
                    <span>{data.description}</span>
                </div>
                <div className={style.btnContainer}>
                    <button value={'Specialist'} onClick={changePeople} className={t === 'Specialist'? style.active: ''} ></button>
                    <button value={'Pilot'} onClick={changePeople} className={t === 'Pilot'? style.active: ''}></button>
                    <button value={'Commander'} onClick={changePeople} className={t === 'Commander'? style.active: ''}></button>
                    <button value={'Engineer'} onClick={changePeople} className={t === 'Engineer'? style.active: ''}></button>
                </div>
            </div>
            <div className={style.secondaryContent}>
                <img src={image} alt=""/>
            </div>


        </div>
    )
}
export default Crew