import comunytLP from "../../assets/comunytLP.gif";
import chat from "../../assets/chat.jpg";
import calendar from "../../assets/calendar.jpg";
import home from "../../assets/home.jpg";
import multimedia from "../../assets/multimedia.jpg";
import stats from "../../assets/stats.jpg";

export default [
    {
        id: 1,
        title: "Comuny-T | Landing Page",
        shortDescription: `Landing Page para Comuny-T.`,
        description: `Desarrollé una Landing Page para la empresa de Comuny-T. Esta página fue creada con el objetivo de presentar la empresa y sus servicios de manera atractiva y funcional.
        La página usa una API Rest hecha por el equipo de Backend para poder toda la información proporcionada en la misma.
        La página es completamente responsiva, lo que significa que se adapta a diferentes tamaños de pantalla, desde dispositivos móviles hasta computadoras de escritorio.
        Además, implementé un diseño atractivo y moderno utilizando Material UI, lo que mejora la experiencia del usuario y hace que la página sea más fácil de navegar.`,
        technologies: ["HTML", "CSS", "JavaScript", "React", "Material UI"],
        link: "https://comunyt.com/",
        imageUrl: comunytLP,
    },
    {
        id: 2,
        title: "Comuny-T | Plataforma de Tokenización",
        shortDescription: `Aplicación web de compra de activos Real Estate tokenizados.`,
        description: `Implementé una aplicación web de vanguardia para Comuny-T, revolucionando la forma en que los usuarios interactúan con activos inmobiliarios tokenizados.
        La plataforma facilita la compra, venta y gestión de estos activos, priorizando la seguridad y la eficiencia. Las características clave incluyen:`,
        unorderedList: [
            "Seguridad: Encriptación avanzada y autenticación multifactor para proteger los datos y transacciones de los usuarios.",
            "Verificación de identidad: Integración de servicios KYC de terceros para un proceso de registro seguro y conforme a la normativa.",
            "Smart contracts: Firma digital de contratos para agilizar y asegurar las transacciones.",
            "Experiencia de usuario: Interfaz intuitiva y responsiva, diseñada con Material UI, que se adapta a cualquier dispositivo.",
            "Funcionalidades: visualización de saldos en tiempo real, historial detallado de transacciones, notificaciones instantáneas sobre actividades relevantes, generación automática de comprobantes en PDF.",
            "Arquitectura: API Rest desarrollada por el equipo de Backend para una comunicación eficiente y escalable entre el frontend y el backend.",
        ],
        technologies: [
            "JavaScript",
            "React",
            "Material UI",
            "Web3",
            "KYC",
            "Smart Contracts",
        ],
        link: "https://app.comunyt.com/",
        imageUrl: "",
    },
    {
        id: 3,
        title: "Delaf | Freelance",
        shortDescription: `Plataforma integral para corredores con rutinas y nutrición personalizadas, tracking y chat en tiempo real.`,
        description: `Desarrollo y mantenimiento de una solución tecnológica integral para el entrenamiento personalizado de corredores, compuesta por tres componentes principales que trabajan en conjunto para ofrecer una experiencia completa y eficiente tanto para los usuarios como para los entrenadores.`,
        unorderedList: [
            "Aplicación móvil (React Native): permite a los usuarios visualizar sus rutinas diarias personalizadas, incluyendo entrenamientos y recomendaciones nutricionales. Se sincroniza con relojes inteligentes para registrar métricas de rendimiento y cuenta con un sistema de mensajería para la interacción entre corredores.",
            "Panel de administración (React + Material UI): plataforma web privada para el propietario y entrenadores, donde pueden monitorear el progreso de los usuarios, ajustar rutinas y planes nutricionales personalizados y gestionar la asignación de entrenamientos.",
            "Servidor backend (Node.js + Express): núcleo del sistema que conecta la app y el panel de administración mediante una API RESTful. Implementa WebSockets para mensajería en tiempo real, encriptación de contraseñas para mayor seguridad y generación de gráficos basados en el rendimiento de los usuarios.",
        ],
        technologies: [
            "React",
            "React Native",
            "Node.js",
            "Express",
            "MongoDB",
            "Material UI",
        ],
        link: "",
        images: [chat, calendar, home, multimedia, stats],
        imageUrl: "",
    },
];
