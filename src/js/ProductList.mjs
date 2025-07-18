import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `
    <li class="product-card">
        <a href="product_page/?products=${product.Id}">
            <img src="${product.Image}" alt="${product.Name}">
            <h2>${product.Brand.Name}</h2>
            <h3>${product.Name}</h3>
            <p class="product-card__price">$${product.FinalPrice}</p>
        </a>
    </li>
    `;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const List = await this.dataSource.getData();
        this.renderList(List);
    }

    renderList(list) {
        //apply use utility function instead of the commented code
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}