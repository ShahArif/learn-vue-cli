<template>
     <div>
       <p>
         <!--router-link is used to create rout links or linking url with page -->
         <router-link to="/">Home</router-link>
         <router-link to="/about">About</router-link>
         <router-link to="/services">Services</router-link>
         <router-link to="/blogs">Blogs</router-link>
       </p>
       <router-view></router-view>
     </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  
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
