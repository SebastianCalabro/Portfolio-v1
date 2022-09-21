import s from "./Projects.module.css"
import ProjectCard from "../ProjectCard/ProjectCard"
import { pokemonPro, kembaPro } from "../../utils/projects"
import pokeImage from "../../utils/preview-pokemon.jpg"
import kembaImage from "../../utils/preview-kemba.jpg"
import { FaArrowDown } from "react-icons/fa"

const Projects = () => {
    console.log("HOLA", pokemonPro.tecnologies)
    return(
        <div id={s.section} className="section">
            <div className={s.box}>
                <h1 className={s.projects_title}>PROJECTS</h1>
                <div className={s.projects_container}>
                    <ProjectCard techs={pokemonPro.tecnologies} title={pokemonPro.title} desc={pokemonPro.description} deploy={pokemonPro.deploy} repo={pokemonPro.repo} img={pokeImage}/>
                    <ProjectCard techs={kembaPro.tecnologies} title={kembaPro.title} desc={kembaPro.description} deploy={kembaPro.deploy} repo={kembaPro.repo} img={kembaImage}/>
                </div>
                <a href="#Contact">
            <FaArrowDown className={s.icon_arrow}/>
            </a>
            </div>
        </div>
    )
}
export default Projects