<template>
  <div >
    <table class="flex border-2 p-2">
      <tr v-for="product in allproducts[0]" :key="product.id">
        <td>{{product.name}}</td>
        <td>{{product.description}}</td>
        <td>{{product.image}}</td>
        <td>{{product.price}}</td>
      </tr>
    </table>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductView",
  data() {
    return {
    };
  },
  computed: mapGetters(["allproducts"]),
  methods: {
    ...mapActions(["fetchproducts"]),
  },
  created() {
    this.fetchproducts();

  },
};
</script>
