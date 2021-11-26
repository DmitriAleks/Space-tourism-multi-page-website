import React from 'react'
import style from './home.module.scss'

const Home = () => {
    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <span>SO, YOU WANT TO TRAVEL TO</span>
                <span>SPACE</span>
                <span> Let’s face it; if you want to go to space, you might as well genuinely go to
  outer space and not hover kind of on the edge of it. Well sit back, and relax
  because we’ll give you a truly out of this world experience!</span>
            </div>
            <div className={style.secondaryContent}>
                <div>
                    <span>EXPLORE</span>
                </div>
            </div>
        </div>
    )
}
export default Home;