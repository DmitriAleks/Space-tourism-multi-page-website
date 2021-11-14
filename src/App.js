import style from './App.module.scss'
import {useEffect, useState} from "react";
import Home from "./page/home/home";

function App() {
    const [theme, setTheme] = useState('destination')
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);
    const changeTheme = (e) => {
        setTheme(e.target.value)
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
                    <Home/>
                </div>
            </div>
        </div>
    );
}

export default App;
