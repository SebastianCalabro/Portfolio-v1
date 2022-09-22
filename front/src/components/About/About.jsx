import s from "./About.module.css"
import { engDesc, espDesc } from "../../utils/about.js"
import { useState } from "react"
import { FaArrowDown } from "react-icons/fa"

const About = () =>{
    const [lang, setLang] = useState("eng")
    const handleLang = () =>{
        if(lang==="eng"){
            setLang("esp")
        }else{
            setLang("eng")
        }
    }
    return(
        <div id={s.section} className="section">
            <div className={s.box}>
                <div className={s.top_side}>
                    <h1 className={s.about_title}>ABOUT ME</h1>
                </div>
                <div className={s.bot_side}>
                    { 
                        lang==="eng" ?
                        <button onClick={()=>handleLang("eng")} className={s.lang_button}>ESP</button> :
                        <button onClick={()=>handleLang("esp")} className={s.lang_button}>ENG</button> 
                    }
                    <div className={s.desc_container}>
                        { 
                                lang==="eng" ?
                                <p className={s.my_desc}>{engDesc}</p> :
                                <p className={s.my_desc}>{espDesc}</p>  
                            }
                    </div>
                </div>
            <a  href="#Tecnologies">
                <FaArrowDown className={s.icon_arrow1}/>
            </a>
            <a  href="#Tecnologies">
                <FaArrowDown className={s.icon_arrow2}/>
            </a>
            </div>
        </div>
    )
}
export default About