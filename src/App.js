import style from './App.module.scss'
import {useEffect, useState} from "react";

function App() {
    const [theme,setTheme] = useState('destination')
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
                    <button value={'home'} onClick={changeTheme}>00 home</button>
                    <button value={'destination'} onClick={changeTheme}>01 destination</button>
                    <button value={'crew'} onClick={changeTheme}>02 crew</button>
                    <button value={'technology'} onClick={changeTheme}>03 technology</button>
                </div>

            </div>
            <div className={style.content}>


            </div>
        </div>
    );
}

export default App;
