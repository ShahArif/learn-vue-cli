<template>
   
     <div class="form" v-list:orange="'narrow'">
        <div class="data-preview"  v-for="post in posts" :key="post.index" >
          <p v-format>{{ post.title | capitalize }}</p>
          <p>{{post.body | contentSnippet}}</p>
          <a v-bind:href="link | capitalize" v-bind:title="title | capitalize">Read More</a>
        </div>
     </div>
</template>

<script>
import filterMixin from './mixins/filters'

export default {
  mixins:[
    filterMixin  //rendering the mixing
  ],
  data () {
    return {
      posts:[],
      link:'http://www.google.com',
      title:'Go to google'
    }
  },
  beforeMount(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts",)
    .then(function(response){
        this.posts = response.data;
       });
  } 
}
</script>

<style scoped>
.form{
  padding: 5%;
  /* width: 30%; */
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
