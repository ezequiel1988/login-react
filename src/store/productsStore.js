import { observable, decorate } from "mobx";
import ProductsProvider from "../providers/providerProducts";


class productsStore {

    rest = new ProductsProvider()
    constructor() {
        this.productos = '';
        this.rowsPerPage = 0;
        this.page = 0;
        this.openModal = false;
        this.objModal = [];
    }

    async obtenerProductos () {
        try {
            const { data } = await this.rest.getAllProducts();
            this.productos = data;
            console.log(this.productos)
        } catch (e) {
            console.log(e)
        }
    }
}

decorate(productsStore, {
    productos: observable,
    rowsPerPage: observable,
    page: observable,
    openModal : observable,
    objModal: observable,
})

const ProductStore = new productsStore();

export default ProductStore;