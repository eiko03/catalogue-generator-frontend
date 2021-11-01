<template>

  <div class="flex-container">
    <div><button type="button" class="btn btn-primary" @click="gen_catalogue()">Catalogue</button></div>
    <div><button type="button" class="btn btn-primary" @click="open_form()">Add Product</button></div>
  </div>
  <form v-if="open">
    <div class="form-row flex-container">
      <div>
        <div class="form-group col-md-6">
          <label for="inputEmail4">Name</label>
          <input type="text" class="form-control" id="inputEmail4" v-model="name" placeholder="Name">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Description</label>
          <input type="text" class="form-control" id="inputPassword4" v-model="description" placeholder="Description">
        </div>
      </div>
      <div>
        <div class="form-group col-md-6">
          <label for="inputAddress">Price</label>
          <input type="number" class="form-control" id="inputAddress" v-model="price" placeholder="Price">
        </div>
        <div class="form-group col-md-6">
          <label for="inputAddress2">Image</label>
          <input type="file" @change="onFileChange" class="form-control" id="inputAddress2" >
        </div>
      </div>
    </div>

    <button type="submit" @click="submit" class="btn btn-primary">Add Product</button>
  </form>
  <table class="table table-bordered table-dark">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
    </tr>
    </thead>
    <tbody>
          <tr v-for="product in allproducts[0]" :key="product.id">
            <input class="form-check-input" type="checkbox" value={{product.id}} id="flexCheckDefault"
                   @click="checked(product.id)">
            <th scope="row">{{product.id}}</th>
            <td>{{product.name}}</td>
            <td>{{product.description}}</td>
            <td><img v-bind:src="''+product.image" /></td>
            <td>{{product.unit_price}}</td>
          </tr>

    </tbody>
  </table>

<!--  </div>-->
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import api from "../service/api";
export default {
  name: "ProductView",
  data() {
    return {
      checked_id:[],
      open:false,
      name:"",
      description:"",
      price:"",
      image:"",
    };
  },
  computed: mapGetters(["allproducts"]),
  methods: {
    ...mapActions(["fetchproducts"]),
    ...mapActions(["addcatalogues"]),
    ...mapActions(["addproducts"]),
    checked(e) {
      this.checked_id.push(e);
      console.log(this.checked_id);
    },
    open_form() {
      this.open=!this.open;
    },
    gen_catalogue(){

      let payload = {
         name: "Catalogue",
         product_id : this.checked_id
      };
      // let response = api.add_catalogues(payload);
      // console.log(response);
      this.addcatalogues(payload);
      localStorage.setItem("key", this.checked_id);
      localStorage.setItem("name", "Catalogue");
      this.$router.push('/temp');
    },
    submit(e){
      e.preventDefault();
      let payload = {
        name: this.name,
        description : this.description,
        unit_price : this.price,
        image : this.image,
      };
      // let response = api.add_products(payload);
      this.addproducts(payload);

    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var imagef = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function (e) {
      this.image = '';
    }


  },
  created() {
    this.fetchproducts();

  },
};
</script>
<style scoped>
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css';
.flex-container {
  display: flex;
}
</style>
