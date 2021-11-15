import React from 'react'
import style from './Destination.module.scss'


const Destination = () => {
    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <span> <span>01</span> PICK YOUR DESTINATION</span>
                <img src='http://assets.stickpng.com/images/580b585b2edbce24c47b270b.png'/>
            </div>
            <div className={style.secondaryContent}>
                <div className={style.btnContainer}>
                    <button>MOON</button>
                    <button>MARS</button>
                    <button>EUROPA</button>
                    <button>TITAN</button>
                </div>
                <div className={style.description}>
                    <span>MOON</span>
                    <span>See our planet as you’ve never seen it before. A perfect relaxing trip away to help
  regain perspective and come back refreshed. While you’re there, take in some history
  by visiting the Luna 2 and Apollo 11 landing sites.</span>
                </div>
                <div className={style.distanceInfo}>
                    <div className={style.info}>
                        <span>Avg. distance</span>
                        <span> 384,400 km</span>
                    </div>
                    <div className={style.info}>
                        <span>Est. travel time</span>
                        <span> 3 days</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination