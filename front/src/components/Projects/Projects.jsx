import s from "./Projects.module.css"
import ProjectCard from "../ProjectCard/ProjectCard"
import { pokemonPro, kembaPro } from "../../utils/projects"
import image from "../../utils/preview-pokemon.jpg"

const Projects = () => {
    console.log("HOLA", pokemonPro.tecnologies)
    return(
        <div id={s.section} className="section">
            <div className={s.box}>
                <div className={s.projects_container}>
                    <ProjectCard techs={pokemonPro.tecnologies} title={pokemonPro.title} desc={pokemonPro.description} deploy={pokemonPro.deploy} repo={pokemonPro.repo} img={image}/>
                </div>
                
            </div>
        </div>
    )
}
export default Projects