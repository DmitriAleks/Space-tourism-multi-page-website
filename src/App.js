import style from './App.module.scss'
import {useEffect, useState} from "react";
import Home from "./page/home/home";
import Destination from "./page/destination/Destination";

function App() {
    const [theme, setTheme] = useState('destination')
    const [content, setContent] = useState('home')
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);
    const changeTheme = (e) => {
        setTheme(e.target.value)
        setContent(e.target.value)
    }

    return (
        <div className={style.app}>
            <div className={style.header}>
                <div className={style.btn}>
                    <button value={'home'} onClick={changeTheme}>00 HOME</button>
                    <button value={'destination'} onClick={changeTheme}>01 DESTINATION</button>
                    <button value={'crew'} onClick={changeTheme}>02 CREW</button>
                    <button value={'technology'} onClick={changeTheme}>03 TECHNOLOGY</button>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.infoContent}>
                    {content === 'home' && <Home/>}
                    {content === 'destination' && <Destination/>}
                </div>
            </div>
        </div>
    );
}

export default App;
