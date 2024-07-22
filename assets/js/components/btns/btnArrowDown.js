export const btnArrowDown = (toSection = "", title = "") => {

    let btn = 
    `
    <div class="down-arrow">
        <a href="#${toSection}">
            <i class='bx bx-down-arrow-alt' title="${title}"></i>
        </a>
    </div>
    `;
    
    return btn;
}