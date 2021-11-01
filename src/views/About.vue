<template>
  <div >
    <table class="flex border-2 p-2">
      <tr v-for="catalogue in allcatalogues[0]" :key="product.id">
        <td>{{catalogue.name}}</td>
        <td>{{product.product_id}}</td>
      </tr>
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