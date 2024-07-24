import { carrousel } from "../../components/dataDisplayers/carrousel.js";
import { btnArrowDown, btnArrowUp } from "../../components/btns/btnArrow.js";
import { separatorWavy } from "../../components/separators/separatorWavy.js";
import { cardHorizontal } from "../../components/cards/cardHorizontal.js";
import { accordion } from "../../components/dataDisplayers/accordion.js";
import { form } from "../../components/forms/form.js";
import { subtitle } from "../../components/text/titles.js";


export const homeContent = `

    <!-- Wavy separator -->
    ${separatorWavy("var(--logo-bg-color)", "#9b58da", "sobre-mi")}

    <section id="about-me" class="position-relative d-flex flex-column justify-content-center align-items-center">

        ${subtitle("Sobre mi", "var(--logo-bg-color)", 1, "var(--font-hover-color)")}

        ${cardHorizontal(
            {
            img: "assets/images/imgs/profile.jpg", 
            alt: "imagen de perfil de Bruno O. Ortuño", 
            title: "", 
            text: "¡Hola! Soy Bruno Ortuño. Soy un desarrollador fullstack apasionado por el diseño y la implementación de soluciones de software escalables y eficientes. Tengo un amplio conocimiento en lenguajes de programación como Java, Python, JavaScript, PHP y SQL. Me apasiona la tecnología y siempre estoy buscando nuevos desafíos para poner a prueba mis habilidades. Actualmente me encuentro realizando múltiples cursos para certificar todos los conocimientos que menciono en mi perfil, con el fin de mantenerme actualizado y mejorar constantemente."
            }
        )}

        ${btnArrowDown("formacion", "Ver formación")}
    
    </section>

    <!-- Wavy separator -->
    ${separatorWavy("var(--main-bg-color)", "#9b58da", "formacion", "var(--logo-bg-color)")}

    <section id="formation" class="position-relative d-flex flex-column justify-content-center align-items-center gap-2" style="background-color: var(--logo-bg-color);">

        ${subtitle("Cursos y formaciones", "var(--main-bg-color)", 2, "var(--font-hover-color)")}

        ${accordion("formation-accordion",
        [
            {
                title: "ONE - Oracle Next Education",
                text: ["Formación backend en Java implementando Springboot y mySQL", "Inicio: Marzo 2023", "Finalización: Octubre 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://app.aluracursos.com/program/certificate/ad3cafe0-71e9-46b6-b916-92aebe510d8c",
                img: "assets/images/imgs/certificates/oracle_backend.png",
                alt: "certificado backend Java SpringBoot"
            },
            {
                title: "ONE - Oracle Next Education",
                text: ["Formación backend en Java implementando Springboot y mySQL", "Inicio: Marzo 2023", "Finalización: Octubre 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://app.aluracursos.com/program/certificate/ad3cafe0-71e9-46b6-b916-92aebe510d8c"
            },
            {
                title: "ONE - Oracle Next Education",
                text: ["Formación backend en Java implementando Springboot y mySQL", "Inicio: Marzo 2023", "Finalización: Octubre 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://app.aluracursos.com/program/certificate/ad3cafe0-71e9-46b6-b916-92aebe510d8c"
            },
            {
                title: "ONE - Oracle Next Education",
                text: ["Formación backend en Java implementando Springboot y mySQL", "Inicio: Marzo 2023", "Finalización: Octubre 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://app.aluracursos.com/program/certificate/ad3cafe0-71e9-46b6-b916-92aebe510d8c"
            },
            {
                title: "ONE - Oracle Next Education",
                text: ["Formación backend en Java implementando Springboot y mySQL", "Inicio: Marzo 2023", "Finalización: Octubre 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://app.aluracursos.com/program/certificate/ad3cafe0-71e9-46b6-b916-92aebe510d8c"
            },
            {
                title: "ONE - Oracle Next Education",
                text: ["Formación backend en Java implementando Springboot y mySQL", "Inicio: Marzo 2023", "Finalización: Octubre 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://app.aluracursos.com/program/certificate/ad3cafe0-71e9-46b6-b916-92aebe510d8c"
            }
        ])};

        ${btnArrowDown("proyectos", "Mira mis proyectos")}

    </section>

    <!-- Wavy separator -->
    ${separatorWavy("var(--logo-bg-color)", "#9b58da", "proyectos")}

    <section id="projects" class="position-relative d-flex flex-column justify-content-center align-items-center">

        ${subtitle("Mis últimos proyectos", "var(--logo-bg-color)", 2, "var(--font-hover-color)")}

        ${carrousel("carousel-projects",
            [
                {
                    img: "assets/images/imgs/projects/oshare.png",
                    alt: "Imagen de proyecto de Ecommerce de ropa Oshare Designs",
                    h: "Oshare Designs",
                    p: "Tienda online de ropa",
                    tags: ["Java, SpringBoot, mySQL, JavaScript, CSS, HTML"]
                }, 
                {
                    img: "assets/images/imgs/projects/nextflix.png",
                    alt: "Imagen de plataforma de peliculas",
                    h: "Nextflix",
                    p: "Plataforma de peliculas clon de Netflix",
                    tags: ["React.js, Next.js, MongoDB, JavaScript, CSS, HTML"]
                },
                {
                    img: "assets/images/imgs/projects/pokedex.png",
                    alt: "Imagen de pagina de Pokedex",
                    h: "PokeDex",
                    p: "Proyecto de Pokedex",
                    tags: ["JavaScript, CSS, HTML"]
                },
                {
                    img: "assets/images/imgs/projects/portfolio.png",
                    alt: "Imagen de portfolio personal",
                    h: "Pagina Portfolio",
                    p: "Portfolio de proyectos",
                    tags: ["JavaScript, CSS, HTML"]
                },
                {
                    img: "assets/images/imgs/projects/batch.jpg",
                    alt: "Imagen de landing page de Batch",
                    h: "Batch",
                    p: "Landing page empresarial",
                    tags: ["PHP, JavaScript, CSS, HTML"]
                },
                {
                    img: "assets/images/imgs/projects/crm.png",
                    alt: "Imagen de CRM",
                    h: "Administrador de clientes",
                    p: "CRM con sistema de roles usando php",
                    tags: ["PHP, JavaScript, CSS, HTML"]
                },
            ]
        )}

        ${btnArrowDown("contacto", "¡Escribeme!")}

    </section>

    <!-- Wavy separator -->
    ${separatorWavy("var(--main-bg-color)", "#9b58da", "contacto", "var(--logo-bg-color)")}

    <section id="contact" class="position-relative d-flex flex-column justify-content-center align-items-center" style="background-color: var(--logo-bg-color);">

        ${subtitle("Mandame un mensaje", "var(--main-bg-color)", 2, "var(--font-hover-color)")}

        ${form()}

        ${btnArrowUp("sobre-mi", "Conoceme")}

    </section>

    <!-- Wavy separator -->
    ${separatorWavy("var(--logo-bg-color)", "#9b58da", "redes")}
    `;