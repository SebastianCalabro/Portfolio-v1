import s from "./About.module.css"
import { engDesc, espDesc } from "../../utils/about.js"
import { useState, useContext } from "react"
import { FaArrowDown } from "react-icons/fa"
import { gContext } from "../../context/global"
import {engInfo, spaInfo} from "../../utils/info.js"
import spainFlag from "../../utils/spain.webp"
import usaFlag from "../../utils/usa.webp"


const About = () =>{
    const flags={
        eng:usaFlag,
        esp:spainFlag
    }
    const {language, toggleLanguage} = useContext(gContext)
    return(
        <div id={s.section} className="section">
            <div className={s.box}>
                <div className={s.top_side}>
                    <h1 className={s.about_title}>{language==="eng"?engInfo.Titles.about:spaInfo.Titles.about}</h1>
                </div>
                <div className={s.bot_side}>
                <button onClick={()=>toggleLanguage()} className={s.lang_button}><img height="25rem" src={flags[language]} alt="spainFlag"/></button>
                    <div className={s.desc_container}>
                        { 
                                language==="eng" ?
                                <p className={s.my_desc}>{engDesc}</p> :
                                <p className={s.my_desc}>{espDesc}</p>  
                            }
                    </div>
                </div>
            <a  href="#Technologies">
                <FaArrowDown className={s.icon_arrow1}/>
            </a>
            <a  href="#Technologies">
                <FaArrowDown className={s.icon_arrow2}/>
            </a>
            </div>
        </div>
    )
}
export default About