<template>
  <div id="app">
    <Header/>
      <Students v-bind:message="msg" v-on:updateMessageVariable="updateMessagefn($event)"></Students>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Students from './components/Students.vue'

export default {
  data () {
    return {
      msg: 'Message From Parent to Child Component',
    }
  },
  components:{
    Header,
    Footer,
    Students,
  },
  methods:{
    updateMessagefn(newMessage){
      this.msg = newMessage;
    }
  }
  
}
</script>

<style lang="scss">
body{
  margin: 0px;
  header{
    width: 100%;
    background-color: cadetblue;
    height: 100px;
    margin: 0px;
    text-align: center;
    color:#ffffff;
    padding: 10px;
    box-shadow:5px 5px 2px 2px grey;
  }
  h1{
    margin: 0px;
  }
  .container{
    padding: 1%;
    p{
      font-size:12px;
      color:red;
    }
  }
  footer{
    width: 100%;
    background-color: coral;
    margin-bottom:0px; 
    text-align:center;
    padding: 5px;
  }
}

</style>
