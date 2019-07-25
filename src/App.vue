<template>
  <div id="app">
    <Header/>
    <Content name="arif Shah" 
       v-bind:socialNetworks="socialNetworks"
       author="Master Mind" 
       v-bind:students="students"
       v-bind:project="{name:'Learning',Level:'Easy'}"
       v-bind:isActive="true"
      />
      <Students v-bind:students="students"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Students from './components/Students';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your First Program',
      students:['arif','shah','sahab'],
      firstName:"Arif",
      lastName:"Shah",
      socialNetworks:[
          {title:"Facebook", link:"http://facebook.com", id:0},
          {title:"Github", link:"http://Github.com",id:1},
          {title:"Twitter", link:"http://twitter.com",id:2},
          {title:"Linkedin", link:"http://linkedin.com",id:3},
      ],
      students:[
        "Arif",
        "Zahid",
        "Umer",
        "Asif",
        "Arfat"
      ]
    }
  },
  components:{
    Header,
    Content,
    Footer,
    Students,
  },
  methods:{
    sayHello(dayTime){
      return "Good "+ dayTime;
    }
  },
  computed:{
     hello(){
       return this.firstName+" "+ this.lastName
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
