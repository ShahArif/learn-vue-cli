<template>
   <div class="form">
        <form>
          <p>
            <label>Title :</label>
            <input type="text" name="title" v-model.lazy="post.title">
          </p>
           <p>
              <textarea name="body" v-model.lazy="post.body" placeholder="description"></textarea>
          </p> 
          <p>
            <button v-on:click.prevent="blogPost">Publish</button>
          </p>
        </form>

        <div class="data-preview">
          <h3>{{post.title}}</h3>
          <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>


export default {
  data () {
    return {
      post:{
        userId:'1',
        id:'1',
        title:'',
        body:''
      }
    }
  },
  methods:{
    blogPost(){
      // Data section for Post Request
       this.$http.post("https://jsonplaceholder.typicode.com/posts",{
          title:this.post.title,
          userId:1,
          id:2,
          body:this.post.body
       }).then(function(data){
        //  Response section
          console.log(data);
       });
    }
  },  
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
</style>
