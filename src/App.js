import style from './App.module.scss'
import {useEffect, useState} from "react";
import Home from "./page/home/home";
import Destination from "./page/destination/Destination";
import Crew from "./page/crew/Crew";
import Technology from "./page/technology/Technology";

function App() {
    const [content, setContent] = useState('home')
    useEffect(() => {
        document.body.setAttribute('data-theme', content)
    }, [content]);
    const changeTheme = (e) => {
        setContent(e.target.value)
    }

    return (
        <div className={style.app}>
            <div className={style.header}>
                <div className={style.logo}>L</div>
                <div className={style.btn}>
                    <button value={'home'} onClick={changeTheme} className={content === 'home' ? style.active: ''}>00 HOME</button>
                    <button value={'destination'} onClick={changeTheme} className={content === 'destination' ? style.active: ''}>01 DESTINATION</button>
                    <button value={'crew'} onClick={changeTheme} className={content === 'crew' ? style.active: ''}>02 CREW</button>
                    <button value={'technology'} onClick={changeTheme} className={content === 'technology' ? style.active: ''}>03 TECHNOLOGY</button>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.infoContent}>
                    {content === 'home' && <Home/>}
                    {content === 'destination' && <Destination/>}
                    {content === 'crew' && <Crew/>}
                    {content === 'technology' && <Technology/>}
                </div>
            </div>
        </div>
    );
}

export default App;
