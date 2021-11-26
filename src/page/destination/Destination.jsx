import React, {useState} from 'react';
import style from './Destination.module.scss';
import destinationData from '../../data/data';


const Destination = () => {
    const [t, setT] = useState('Moon')
    const data = destinationData[t]
    const changePlanet = (e) => {
        setT(e.target.value)
    }

    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <span> <span>01</span> PICK YOUR DESTINATION</span>
                <img src={data.img}/>
            </div>
            <div className={style.secondaryContent}>
                <div className={style.btnContainer}>

                </div>
                <div className={style.description}>
                    <span>{data.name}</span>
                    <span>{data.description}</span>
                </div>
                <div className={style.distanceInfo}>
                    <div className={style.info}>
                        <span>AVG. DISTANCE</span>
                        <span> {data.distance.avg}</span>
                    </div>
                    <div className={style.info}>
                        <span>EST. TRAVEL TIME</span>
                        <span> {data.distance.travelTime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination