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
    addnewproducts:(state, product)=>state.products[0].unshift(product)
  },
  actions: {
    async fetchproducts({ commit }) {
      const response = await api.get_products();
      commit("setproducts", response.data);
    },
    async addproducts({ commit },payload) {
      const response = await api.add_products(payload);
      commit("addnewproducts", payload);
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
    addnewcatalogues:(state, catalogues)=>state.catalogues[0].unshift(catalogues)
  },
  actions: {
    async fetchcatalogues({ commit }) {
      const response = await api.get_catalogues();
      commit("setcatalogues", response.data);
    },
    async addcatalogues({ commit },payload) {
      const response = await api.add_catalogues(payload);
      commit("addnewcatalogues", {payload});
    },
  },
};

export default createStore({
  modules: {
    product: ProductModule,
    catalogue: CatelogueModule,
  },
});
