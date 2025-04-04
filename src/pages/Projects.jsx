import ProjectsList from "../components/ProjectsList";
import { usePage } from "../lib/reducer/PageContext";

function ProjectsContent({ page }) {
    return (
        <section
            className={
                page == "projects" ? "projects active" : "projects inactive"
            }
        >
            <h4 className="projects-title">Projectos</h4>
            <ProjectsList />
            <br />
        </section>
    );
}

export default function Projects() {
    const { page } = usePage();

    return <ProjectsContent page={page} />;
}
