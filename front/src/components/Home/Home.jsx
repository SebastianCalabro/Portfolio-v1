import s from "./Home.module.css"
import { VscGithub } from "react-icons/vsc"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { FaArrowDown } from "react-icons/fa"

const Home = () => {

    return(
        <div id={s.section} className="section">
            <div className={s.box}>
                {/* <Nav/> */}
                <div className={s.left_side}>
                    <h1 className={s.name}>Sebastián Calabró</h1>
                    <h2 className={s.fullstack}>Fullstack Web Developer</h2>
                </div>
                <div className={s.right_side}>
                    <div className={s.links_container}>
                        <a className={s.link} rel="noreferrer" href="https://github.com/SebastianCalabro" target="_blank">
                            <VscGithub className={s.icon1}/>
                        </a>
                        <a className={s.link} rel="noreferrer" href="https://www.linkedin.com/in/sebastian-calabro/" target="_blank">
                            <TiSocialLinkedinCircular className={s.icon2}/>
                        </a>
                    </div>
                    
                </div>
            </div>
            <a href="#secondPage">
                <FaArrowDown className={s.icon_arrow}/>
            </a>
        </div>
    )
}

export default Home