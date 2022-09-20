import s from "./Tecnologies.module.css"
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

const Tecnologies = () => {
    // const techContainer = document.querySelector(".tech_container")
    // const mostX = 10;
    // const mostY = 10;

    // techContainer.addEventListener("mousemove", (e)=>{
    //     techContainer.getElementsByClassName.transition = "none";
    //     const x = e.offsetX;
    //     const y = e.offsetY;
    //     const { width, height } = techContainer.getBoundingClientRect()
    //     const halfWidth = width / 2;
    //     const halfHeight = height / 2;
    //     const rotationY = ((x - halfWidth) / halfWidth) * mostX;
    //     const rotationX = ((y - halfHeight) / halfHeight) * mostY;
    //     techContainer.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`
    // })

    return(
        <div id={s.section} className="section">
            <div className={s.box}>
            <h1 className={s.stack_title}>STACK</h1>
                <div className={s.tech_container}>
                    <div className={s.each_tech_div}>
                        <div className={s.top_tech_div}>
                            <AiFillHtml5 className={s.html_icon}/>
                        </div>
                        <span className={s.each_tech_span}>HTML5</span>
                    </div>
                    <div className={s.each_tech_div}>
                        <div className={s.top_tech_div}>
                            <DiCss3 className={s.css3_icon}/>
                        </div>
                        <span className={s.each_tech_span}>CSS3</span>
                    </div>
                    <div className={s.each_tech_div}>
                        <div className={s.top_tech_div}>
                            <SiJavascript className={s.js_icon}/>
                        </div>
                        <span className={s.each_tech_span}>JavaScript</span>
                    </div>
                    <div className={s.each_tech_div}>
                        <div className={s.top_tech_div}>
                            <FaReact className={s.react_icon}/>
                        </div>
                        <span className={s.each_tech_span}>React</span>
                    </div>
                    <div className={s.each_tech_div}>
                        <div className={s.top_tech_div}>
                            <SiRedux className={s.redux_icon}/>
                        </div>
                        <span className={s.each_tech_span}>Redux</span>
                    </div>
                    <div className={s.each_tech_div}>
                        <div className={s.top_tech_div}>
                            <GrNode className={s.node_icon}/>
                        </div>
                        <span className={s.each_tech_span}>Nodejs</span>
                    </div>
                </div>
                <div className={s.br}></div>
            </div>
            <a href="#thirdPage">
            <FaArrowDown className={s.icon_arrow}/>
            </a>
        </div>
    )
}
export default Tecnologies