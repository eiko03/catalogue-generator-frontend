<template>
  <div >
    <table class="table table-bordered table-dark">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Products</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="catalogue in allcatalogues[0]" :key="catalogue.id">
        <input class="form-check-input" type="checkbox" value={{product.id}} id="flexCheckDefault"
               @click="checked()">
        <td>{{catalogue.name}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CatelogView",
  data() {
    return {
    };
  },
  computed: mapGetters(["allcatalogues"]),
  methods: {
    ...mapActions(["fetchcatalogues"]),
  },
  created() {
    this.fetchcatalogues();

  },
};
</script>