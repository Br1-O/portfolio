import { carrousel } from "../../components/carrousel.js";
import { btnArrowDown } from "../../components/btns/btnArrowDown.js";
import { separatorWavy } from "../../components/separators/separatorWavy.js";


export const homeContent = `

    <!-- Wavy separator -->
    ${separatorWavy("rgb(67, 75, 82)", "#9b58da", "#about-me")}

    <div class="d-flex flex-row justify-content-center align-items-center">

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

        ${btnArrowDown("formation", "Ver formación")}
    
    </div>

    <!-- Wavy separator -->
    ${separatorWavy("rgb(224, 187, 228)", "#9b58da", "#formation", "rgb(67, 75, 82)")}


    <div id="formation" class="position-relative" style="background-color: rgb(67, 75, 82);">





        ${btnArrowDown("projects", "Mira mis proyectos")}

    </div>

    <!-- Wavy separator -->
    ${separatorWavy("rgb(67, 75, 82)", "#9b58da", "#projects")}


    <div id="projects" class="position-relative" style="background-color: rgb(67, 75, 82);">





        ${btnArrowDown("contact", "¡Escribeme!")}

    </div>

    `;