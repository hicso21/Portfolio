import avatar from "../assets/avatar.png";
import { usePage } from "../lib/reducer/PageContext";

export default function AboutMe() {
    const { page } = usePage();

    return (
        <section
            className={page == "about" ? "about active" : "about inactive"}
        >
            <div id="paragraph">
                <h4 className="about-title">Sobre mí</h4>
                <p className="about-paragraph">
                    En 2019 comenzaron mis estudios en ingeniería y fue recién 3
                    años después, en 2022, donde me introduje en un curso
                    introductorio de programación y descubrí mi verdadera
                    pasión. Ese mismo año, me inscribí en un bootcamp de
                    desarrollo fullstack en Argentina. Allí aprendí a usar
                    tecnologías como React, Node, Express y MongoDB.
                    <br />
                    <br />
                    Actualmente, me especializo en el desarrollo frontend con
                    React y estoy en constante aprendizaje para mejorar mis
                    habilidades como desarrollador. Cuento con casi dos años de
                    experiencia en el desarrollo de aplicaciones web y mobile,
                    me apasiona trabajar en proyectos que me permitan seguir
                    creciendo y avanzar en mi formación académica.
                </p>
            </div>
            <div>
                <div className="imageContainer">
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </section>
    );
}
