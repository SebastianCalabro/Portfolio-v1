import s from "./Projects.module.css"
import ProjectCard from "../ProjectCard/ProjectCard"
import { pokemonPro, kembaPro, weatherPro } from "../../utils/projects"
import pokeImage from "../../utils/preview-pokemon.jpg"
import kembaImage from "../../utils/preview-kemba.jpg"
import weatherImage from "../../utils/preview-weather.jpg"
import { FaArrowDown } from "react-icons/fa"
import { useContext } from "react"
import { gContext } from "../../context/global"
import { engInfo, spaInfo } from "../../utils/info"

const Projects = () => {
    const {language, toggleLanguage} = useContext(gContext)
    
    return(
        <div id={s.section} className="section">
            <div className={s.box}>
                <h1 className={s.projects_title}>{language==="eng"?engInfo.Titles.projects:spaInfo.Titles.projects}</h1>
                <div className={s.projects_container}>
                    <ProjectCard techs={pokemonPro.tecnologies} title={language==="eng"?pokemonPro.title:pokemonPro.title2} desc={language==="eng"?pokemonPro.description:pokemonPro.description2} deploy={pokemonPro.deploy} repo={pokemonPro.repo} img={pokeImage}/>
                    <ProjectCard techs={kembaPro.tecnologies} title={language==="eng"?kembaPro.title:kembaPro.title2} desc={language==="eng"?kembaPro.description:kembaPro.description2} deploy={kembaPro.deploy} repo={kembaPro.repo} img={kembaImage}/>
                    <ProjectCard techs={weatherPro.tecnologies} title={language==="eng"?weatherPro.title:weatherPro.title2} desc={language==="eng"?weatherPro.description:weatherPro.description2} deploy={weatherPro.deploy} repo={weatherPro.repo} img={weatherImage}/>
                </div>
                <a href="#Contact">
            <FaArrowDown className={s.icon_arrow}/>
            </a>
            </div>
        </div>
    )
}
export default Projects