<template>

     <div class="form">
        <div class="data-preview" v-for="post in posts" :key="post.index" >
          <h3>{{post.title}}</h3>
          <p>{{post.body}}</p>
        </div>
     </div>
</template>

<script>
export default {
  data () {
    return {
      posts:[],
    }
  },
  methods:{
    
  }, 
  beforeMount(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(response){
        //  Response section
        this.posts = response.data;
       });
  } 
}
</script>

<style scoped>
.form{
  padding: 5%;
  width: 30%;
  background-color: aqua;
  margin: auto;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 4px;
  border:1px solid grey;
}
.data-preview{
  margin: 2%;
  border:1px solid grey;
  padding: 10px;
}
</style>