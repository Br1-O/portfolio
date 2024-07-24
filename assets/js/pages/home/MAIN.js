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

        ${subtitle("Sobre mí", "var(--logo-bg-color)", 1, "var(--font-hover-color)")}

        ${cardHorizontal(
            {
            img: "assets/images/imgs/profile.jpg", 
            alt: "imagen de perfil de Bruno O. Ortuño", 
            title: "", 
            text: "¡Hola! Soy Bruno Ortuño. Soy un desarrollador fullstack apasionado por el diseño y la implementación de soluciones de software escalables y eficientes. <br> <br> Tengo un amplio conocimiento en lenguajes de programación como Java, Python, JavaScript, PHP y SQL. Me apasiona la tecnología y siempre estoy buscando nuevos desafíos para poner a prueba mis habilidades. <br> <br> Actualmente me encuentro realizando múltiples cursos para certificar todos los conocimientos que menciono en mi perfil, con el fin de mantenerme actualizado y mejorar constantemente.",
            textColor: "var(--font-hover-color)",
            backgroundColor: "var(--logo-bg-color)",
            links: 
            [
                {
                    anchorText: "Ver curriculum",
                    anchorLink: "assets/documents/bruno_ortuno_fullstack_developer_CV.pdf"
                }
            ]
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
                title: "Programador Backend Java con SpringBoot",
                text: ["Formación de ONE - Oracle Next Education de backend en Java implementando Springboot y mySQL", "Inicio: Marzo 2023", "Finalización: Octubre 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://app.aluracursos.com/program/certificate/ad3cafe0-71e9-46b6-b916-92aebe510d8c",
                img: "assets/images/imgs/certificates/oracle_backend.png",
                alt: "certificado de backend con Java SpringBoot"
            },
            {
                title: "Adm. de bases de datos",
                text: ["Formación del IFP N° 415 en Administrador de bases de datos con MySQL, SQLServer y MongoDB", "Inicio: Marzo 2023", "Finalización: Julio 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://media.licdn.com/dms/image/D4D2DAQHkTqZUATwRXA/profile-treasury-image-shrink_800_800/0/1702167896291?e=1722430800&v=beta&t=aEEesxNkkC1b3EjydxhgSMusDb5uMz7LdDCDe_I2arM",
                img: "assets/images/imgs/certificates/451_admBaseDeDatos.jpeg",
                alt: "certificado de administrador de bases de datos"
            },
            {
                title: "Programación en Java",
                text: ["Formación del IFP N° 415 de Programación en Java", "Inicio: Febrero 2023", "Finalización: Mayo 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://media.licdn.com/dms/image/D4D2DAQH6ItTpxXlx5Q/profile-treasury-image-shrink_800_800/0/1702168342389?e=1722430800&v=beta&t=mHVNNYPTB8iQrpqXmbohZn7GY51MVqSuyYfMh9Hj7yY",
                img: "assets/images/imgs/certificates/451_java.jpeg",
                alt: "certificado de programación en Java"
            },
            {
                title: "Programación en Python",
                text: ["Formación del IFP N° 415 de Programación en Python", "Inicio: Marzo 2023", "Finalización: Mayo 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://media.licdn.com/dms/image/D4D2DAQH1etZc4nhXlw/profile-treasury-image-shrink_800_800/0/1702166722105?e=1722430800&v=beta&t=tC1JFULa0siWigspypv5Z2OVEAaF8PiiO4gmwnUUMho",
                img: "assets/images/imgs/certificates/451_python.jpeg",
                alt: "certificado de programación en Python"
            },
            {
                title: "Programación en Python avanzado",
                text: ["Formación del IFP N° 415 de Programación en Python avanzado para Ciencias de datos implementando Pandas y Numpy", "Inicio: Mayo 2023", "Finalización: Julio 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://media.licdn.com/dms/image/D4D2DAQHzbSSZJT23MA/profile-treasury-image-shrink_800_800/0/1702167297570?e=1722430800&v=beta&t=z98g-pSfSrzvt0zbi-7sn6_3nGuRmLb0YLfdI7qMLmY",
                img: "assets/images/imgs/certificates/451_python_avanzado.jpeg",
                alt: "certificado de programación en Python avanzado para Ciencias de datos"
            },
            {
                title: "Procesamiento de datos en Python",
                text: ["Formación de Argentina Programa en procesamiento de datos con Python implementando Pandas, Numpy e introducción al Machine Learning", "Inicio: Diciembre 2022", "Finalización: Marzo 2023"],
                anchorText: "Ver certificado",
                anchorLink: "https://media.licdn.com/dms/image/D4D2DAQFgiGiv9bNn_g/profile-treasury-image-shrink_800_800/0/1702168823129?e=1722430800&v=beta&t=QN66glvKoaRf7saITD-tEdSgZAvsQ8dFzTspz8bb26s",
                img: "assets/images/imgs/certificates/arg_programa_python.jpeg",
                alt: "certificado de procesamiento de datos en Python"
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
                    tags: ["Java, SpringBoot, mySQL, JavaScript, CSS, HTML"],
                    links: 
                    [
                        {anchorLink: "https://br1-o.github.io/oshare-store/", anchorText: "<i class='bx bx-desktop fs-2' title='Ver sitio web'></i>"},
                        {anchorLink: "https://github.com/Br1-O/oshare-store", anchorText: "<i class='bx bxl-github fs-2' title='Ver repositorio frontend'></i>"},
                        {anchorLink: "https://github.com/Br1-O/oshare_designs_api", anchorText: "<i class='bx bxl-github fs-2' title='Ver repositorio backend'></i>"},
                    ]
                }, 
                {
                    img: "assets/images/imgs/projects/nextflix.png",
                    alt: "Imagen de plataforma de peliculas",
                    h: "Nextflix",
                    p: "Plataforma de peliculas clon de Netflix",
                    tags: ["React.js, Next.js, MongoDB, JavaScript, CSS, HTML"],
                    links: 
                    [
                        {anchorLink: "https://nextflix-br1.vercel.app/", anchorText: "<i class='bx bx-desktop fs-2' title='Ver sitio web'></i>"}
                    ]
                },
                {
                    img: "assets/images/imgs/projects/pokedex.png",
                    alt: "Imagen de pagina de Pokedex",
                    h: "PokeDex",
                    p: "Proyecto de Pokedex",
                    tags: ["JavaScript, CSS, HTML"],
                    links: 
                    [
                        {anchorLink: "https://br1-o.github.io/pokedex/", anchorText: "<i class='bx bx-desktop fs-2' title='Ver sitio web'></i>"},
                        {anchorLink: "https://github.com/Br1-O/pokedex", anchorText: "<i class='bx bxl-github fs-2' title='Ver repositorio'></i>"}                    ]
                },
                {
                    img: "assets/images/imgs/projects/portfolio.png",
                    alt: "Imagen de portfolio personal",
                    h: "Pagina Portfolio",
                    p: "Portfolio de proyectos",
                    tags: ["JavaScript, CSS, HTML"],
                    links: 
                    [
                        {anchorLink: "https://br1-o.github.io/", anchorText: "<i class='bx bx-desktop fs-2' title='Ver sitio web'></i>"},
                        {anchorLink: "https://github.com/Br1-O/Br1-O.github.io", anchorText: "<i class='bx bxl-github fs-2' title='Ver repositorio'></i>"}
                    ]
                },
                {
                    img: "assets/images/imgs/projects/batch.jpg",
                    alt: "Imagen de landing page de Batch",
                    h: "Batch",
                    p: "Landing page empresarial",
                    tags: ["PHP, JavaScript, CSS, HTML"],
                    links: 
                    [
                        {anchorLink: "https://github.com/Br1-O/batch_landing", anchorText: "<i class='bx bxl-github fs-2' title='Ver repositorio'></i>"}
                    ]
                },
                {
                    img: "assets/images/imgs/projects/crm.png",
                    alt: "Imagen de CRM",
                    h: "Administrador de clientes",
                    p: "CRM con sistema de roles usando php",
                    tags: ["PHP, JavaScript, CSS, HTML"],
                    links: 
                    [
                        {anchorLink: "https://github.com/Br1-O/PHP-mySQL--Login-Forms-Table-CRUD", anchorText: "<i class='bx bxl-github fs-2' title='Ver repositorio'></i>"}
                    ]
                },
            ]
        )}

        ${btnArrowDown("contacto", "¡Escribeme!")}

    </section>

    <!-- Wavy separator -->
    ${separatorWavy("var(--main-bg-color)", "#9b58da", "contacto", "var(--logo-bg-color)")}

    <section id="contact" class="position-relative d-flex flex-column justify-content-center align-items-center" style="background-color: var(--logo-bg-color);">

        ${subtitle("Mandame un mensaje", "var(--main-bg-color)", 2, "var(--font-hover-color)")}

        ${form("form-contact")}

        ${btnArrowUp("sobre-mi", "Conoceme")}

    </section>

    <!-- Wavy separator -->
    ${separatorWavy("var(--logo-bg-color)", "#9b58da", "redes")}
    `;