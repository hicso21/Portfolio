import "../styles/Main.css";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export default function Main() {
    return (
        <article>
            <Home />
            <AboutMe />
            <Projects />
        </article>
    );
}
