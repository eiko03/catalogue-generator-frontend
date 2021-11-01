<template>
<div>
  <div class="flex-container">
    <button @click="img(1)" class="image rounded float-left">
      <img width="350" height="250" src="/1.jpg">
    </button>
    <button @click="img(2)" class="image rounded mx-auto d-block">
      <img width="350" height="250" src="/2.jpg">
    </button>
    <button @click="img(3)" class="image rounded float-right">
      <img width="350" height="250" src="/3.jpg">
    </button>
  </div>
  <div v-if="image">
    <div ref="content">
    <div>
      <img width="600" height="500" v-bind:src=file />
    </div>

<!--    <div :style="{ 'background-image': file }">-->
      <div class="centered">
      <p>{{this.image_data_name}}</p>
      <p>{{this.image_data}}</p>
    </div>
<!--  </div>-->
    </div>
    <button @click="generatePdf">Gen PDF</button>
</div>
</div>
</template>

<script>
// import {mapActions} from "vuex";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export default {
  name: "catalogue",
  data() {
    return {
      styleObject: {
        "background-color": this.file,
      },
      activeColor:"red",
      image:false,
      file:"",
      image_data:null,
      image_data_name:null
    };
  },
  created(){
     if(localStorage.getItem("key")!== null){
       this.image_data=localStorage.getItem("key");
       this.image_data_name=localStorage.getItem("name");
       console.log(this.image_data.name)
     }



  },
  methods: {
    img(data){
      if (this.image === false){
        this.image=!this.image
      }

      this.file="/"+data+".jpg"
    },
    generatePdf(){

      const doc = new jsPDF();
      /** WITH CSS */
      var canvasElement = document.createElement('canvas');
      html2canvas(this.$refs.content, { canvas: canvasElement
      }).then(function (canvas) {
        const img = canvas.toDataURL("image/jpeg", 0.8);
        doc.addImage(img,'JPEG',20,20);
        doc.save("export.pdf");
      });
    }
  },

}
</script>

<style scoped>
.flex-container {
  display: flex;
}
.image{
  padding-left: 50px;
  padding-right: 50px;
  /*display: block;*/
  /*max-width: 20px;*/
  /*width: auto;*/
  /*max-height: 100px;*/
  /*height: auto;*/
}
.background{
  /*background-image: url("paper.gif");*/
  /*background-color: #cccccc;*/
}
.centered {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>