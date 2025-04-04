import logo from "../assets/logo.svg";
import { usePage } from "../lib/reducer/PageContext";
import "../styles/Header.css";

export default function Header() {
    const { setPage } = usePage();

    const scrollHome = () => setPage("home");
    const scrollAbout = () => setPage("about");
    const scrollProjects = () => setPage("projects");

    return (
        <HeaderContent
            scrollHome={scrollHome}
            scrollAbout={scrollAbout}
            scrollProjects={scrollProjects}
        />
    );
}

function HeaderContent({ scrollHome, scrollAbout, scrollProjects }) {
    return (
        <header>
            <div className="logo" onClick={scrollHome}>
                <img src={logo} alt="Logo" id="logo" />
            </div>
            <div className="redirects">
                <button onClick={scrollHome}>Contact</button>
                <button onClick={scrollAbout}>Sobre mí</button>
                <button onClick={scrollProjects}>Proyectos</button>
            </div>
        </header>
    );
}
