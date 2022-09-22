import s from "./ProjectCard.module.css"
import { FiGithub } from "react-icons/fi"
import { BsBoxArrowUpRight } from "react-icons/bs"
import { FaReact } from "react-icons/fa"
import { SiExpress } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiSequelize } from "react-icons/si"
import { SiPostgresql } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { GrNode } from "react-icons/gr"
import { SiJavascript } from "react-icons/si"


const ProjectCard = ({img, title, desc, deploy, repo, techs}) =>{
    const allTechs = ["react","express","redux","sequelize","postgresql","html5","css3","nodejs","javascript"]
    const myTechs = []
    // console.log("my techs", techs)
    // console.log("my title", title)
    for (let i = 0; i < allTechs.length; i++) {
        for (let u = 0; u < techs.length; u++) {
            if(techs[u]===allTechs[i]){
                myTechs.push(techs[i])
            }
        }
    }
    return(
        <div className={s.card}>
            <div className={s.card_inner}>
                <div className={s.card_front}>
                    <div style={{background: `url(${img.img});`}} className={s.img_container}>
                        <img className={s.image} src={img} alt="" />
                        <div className={s.filter}></div>
                    </div>
                    <div className={s.info_front}>
                        <h3 className={s.project_title}>{title}</h3>
                        <div className={s.techs_container}>
                            {
                                myTechs.map(t=>
                                    t=== "html5"? <AiFillHtml5 className={s.tech_icons}/> :
                                    t=== "css3"? <DiCss3 className={s.tech_icons}/> :
                                    t=== "javascript"? <SiJavascript className={s.tech_icons}/> :
                                    t=== "react"? <FaReact className={s.tech_icons}/> :
                                    t=== "redux"? <SiRedux className={s.tech_icons}/> :
                                    t=== "express"? <SiExpress className={s.tech_icons}/> :
                                    t=== "sequelize"? <SiSequelize className={s.tech_icons}/> :
                                    t=== "postgresql"? <SiPostgresql className={s.tech_icons}/> :
                                    t === "nodejs"? <GrNode className={s.tech_icons}/> : 
                                    ""
                                    )
                            }
                        </div>
                    </div>
                </div>
                <div className={s.card_back}>
                    <p className={s.project_desc}>{desc}</p>
                    <div className={s.br}></div>
                    <div className={s.deploy_and_repo}>
                        <a className={s.link} href={deploy} target="_blank" rel="noreferrer">
                            <span className={s.button_span}>deploy</span> <BsBoxArrowUpRight className={s.button_icons}/>
                        </a>
                        <a className={s.link} href={repo} target="_blank" rel="noreferrer">
                            <span className={s.button_span}>repository</span> <FiGithub className={s.button_icons}/>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default ProjectCard