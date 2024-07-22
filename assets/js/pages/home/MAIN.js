import { carrousel } from "../../components/carrousel.js";
import { btnArrowDown } from "../../components/btns/btnArrowDown.js";
import { separatorWavy } from "../../components/separators/separatorWavy.js";
import { cardHorizontal } from "../../components/cards/cardHorizontal.js";


export const homeContent = `

    <!-- Wavy separator -->
    ${separatorWavy("rgb(67, 75, 82)", "#9b58da", "sobre-mi")}

    <div id="about-me" class="position-relative d-flex flex-row justify-content-center align-items-center">

        ${cardHorizontal(
            {
            img: "assets/images/imgs/profile.jpg", 
            alt: "imagen de perfil de Bruno O. Ortuño", 
            title: "Sobre mí", 
            text: "¡Hola! Soy Bruno Ortuño. Soy un desarrollador fullstack apasionado por el diseño y la implementación de soluciones de software escalables y eficientes. Tengo un amplio conocimiento en lenguajes de programación como Java, Python, JavaScript, PHP y SQL. Me apasiona la tecnología y siempre estoy buscando nuevos desafíos para poner a prueba mis habilidades. Actualmente me encuentro realizando múltiples cursos para certificar todos los conocimientos que menciono en mi perfil, con el fin de mantenerme actualizado y mejorar constantemente."
            }
        )}

        ${btnArrowDown("formacion", "Ver formación")}
    
    </div>

    <!-- Wavy separator -->
    ${separatorWavy("rgb(224, 187, 228)", "#9b58da", "formacion", "rgb(67, 75, 82)")}

    <div id="formation" class="position-relative" style="background-color: rgb(67, 75, 82);">

        <p>
            SOY UN PLACEHOLDER
            SOY UN PLACEHOLDER
            SOY UN PLACEHOLDER
            SOY UN PLACEHOLDER
            SOY UN PLACEHOLDER
            SOY UN PLACEHOLDER
            SOY UN PLACEHOLDER
            SOY UN PLACEHOLDER
            SOY UN PLACEHOLDER
        </p>

        ${btnArrowDown("proyectos", "Mira mis proyectos")}

    </div>

    <!-- Wavy separator -->
    ${separatorWavy("rgb(67, 75, 82)", "#9b58da", "proyectos")}

    <div id="projects" class="position-relative d-flex flex-row justify-content-center align-items-center">

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

    </div>

    `;