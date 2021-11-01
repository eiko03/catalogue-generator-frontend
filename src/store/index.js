import { createStore } from "vuex";
import api from "../service/api.js";

const ProductModule = {
  state: {
    products: [],
  },
  getters: {
    allproducts: (state) => state.products,
  },
  mutations: {
    setproducts: (state, products) => (state.products = products),
    addnewproducts:(state, product)=>state.products.unshift(product)
  },
  actions: {
    async fetchproducts({ commit }) {
      const response = await api.get_products();
      commit("setproducts", response.data);
    },
    async addproducts({ commit },name,description,price) {
      const response = await api.add_products({name,description,price});
      commit("addnewproducts", {name,description,price});
    },
  },
};

const CatelogueModule = {
  state: {
    catalogues: [],
  },
  getters: {
    allcatalogues: (state) => state.catalogues,
  },
  mutations: {
    setcatalogues: (state, catalogues) => (state.catalogues = catalogues),
    addnewcatalogues:(state, catalogues)=>state.catalogues.unshift(catalogues)
  },
  actions: {
    async fetchcatalogues({ commit }) {
      const response = await api.get_catalogues();
      commit("setcatalogues", response.data);
    },
    async addcatalogues({ commit },name,product_id) {
      const response = await api.add_catalogues();
      commit("addnewcatalogues", {name,product_id});
    },
  },
};

export default createStore({
  modules: {
    product: ProductModule,
    catalogue: CatelogueModule,
  },
});
