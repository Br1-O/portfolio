export const btnArrowDown = (toSection = "", title = "") => {

    let btn = 
    `
    <div class="arrow down-arrow">
        <a href="#${toSection}">
            <i class='bx bx-down-arrow-alt' title="${title}"></i>
        </a>
    </div>
    `;
    
    return btn;
}

export const btnArrowUp = (toSection = "", title = "") => {

    let btn = 
    `
    <div class="arrow up-arrow">
        <a href="#${toSection}">
            <i class='bx bx-up-arrow-alt' title="${title}"></i>
        </a>
    </div>
    `;
    
    return btn;
}