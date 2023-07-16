// 1, Create the container element and add a class to it.
function createContent(product) {
    const content = document.createElement("div");
    content.className = "content";

    // 2, Create the HTML for the inner content using a string templete.
    const tagsHTML = product.tags.map(createTagElement).map(el => el.outerHTML).join("");

    // 3, Set innerHTML on the container element.
    content.innerHTML = `
        <a class="header">${product.name}</a>
        <div class="meta"><span>$${product.price} / ${product.unit}</span></div>
        <div class="extra">${tagsHTML}</div>
    `;

    return content;
}