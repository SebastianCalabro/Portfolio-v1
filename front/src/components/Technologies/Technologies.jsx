import s from "./Technologies.module.css"
import { FaArrowDown } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { SiExpress } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiSequelize } from "react-icons/si"
import { SiPostgresql } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa"
import { GrNode } from "react-icons/gr"
import { SiJavascript } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import {useContext} from "react"
import { gContext } from "../../context/global"
import { engInfo, spaInfo } from "../../utils/info"

const Technologies = () => {
    const {language, toggleLanguage} = useContext(gContext)
    return(
        <div id={s.section} className="section">
            <div className={s.box}>
            <h1 className={s.stack_title}>{language==="eng"?engInfo.Titles.technologies:spaInfo.Titles.technologies}</h1>
                <div className={s.tech_container}>
                    <div className={s.tech_box}>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://developer.mozilla.org/es/docs/Web/HTML">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <AiFillHtml5 className={s.html_icon}/>
                                </div>
                                <span className={s.each_tech_span}>HTML5</span>
                            </div>
                        </a>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://developer.mozilla.org/es/docs/Web/CSS">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <DiCss3 className={s.css3_icon}/>
                                </div>
                                <span className={s.each_tech_span}>CSS3</span>
                            </div>
                        </a>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <SiJavascript className={s.js_icon}/>
                                </div>
                                <span className={s.each_tech_span}>JavaScript</span>
                            </div>
                        </a>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://www.typescriptlang.org/">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <SiTypescript className={s.ts_icon}/>
                                </div>
                                <span className={s.each_tech_span}>TypeScript</span>
                            </div>
                        </a>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://es.reactjs.org/">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <FaReact className={s.react_icon}/>
                                </div>
                                <span className={s.each_tech_span}>React</span>
                            </div>
                        </a>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://redux.js.org/">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <SiRedux className={s.redux_icon}/>
                                </div>
                                <span className={s.each_tech_span}>Redux</span>
                            </div>
                        </a>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://nodejs.org/es/">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <GrNode className={s.node_icon}/>
                                </div>
                                <span className={s.each_tech_span}>Nodejs</span>
                            </div>
                        </a>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://expressjs.com/es/">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <SiExpress className={s.express_icon}/>
                                </div>
                                <span className={s.each_tech_span}>Express</span>
                            </div>
                        </a>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://www.postgresql.org/">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <SiPostgresql className={s.postgres_icon}/>
                                </div>
                                <span className={s.each_tech_span}>PostgreSQL</span>
                            </div>
                        </a>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://sequelize.org/">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <SiSequelize className={s.sequelize_icon}/>
                                </div>
                                <span className={s.each_tech_span}>Sequelize</span>
                            </div>
                        </a>
                        <a className={s.link} target="_blank" rel="noreferrer" href="https://git-scm.com/">
                            <div className={s.each_tech_div}>
                                <div className={s.top_tech_div}>
                                    <FaGitAlt className={s.git_icon}/>
                                </div>
                                <span className={s.each_tech_span}>Git</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={s.br}></div>
            </div>
            <a /* onClick={()=>dispatch(changePage())} */ href="#Projects">
            <FaArrowDown className={s.icon_arrow}/>
            </a>
        </div>
    )
}
export default Technologies