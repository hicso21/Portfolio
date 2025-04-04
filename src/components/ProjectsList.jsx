import projects from "../lib/constants/projects";
import { usePage } from "../lib/reducer/PageContext";

function Project({ projects, setModal }) {
    return (
        <div className="projects-list">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="project"
                    onClick={() => setModal(project)}
                >
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-short-description">
                        {project.shortDescription}
                    </p>
                    <div className="technologies">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="technology">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ProjectsList() {
    const { setModal } = usePage();

    return <Project projects={projects} setModal={setModal} />;
}
