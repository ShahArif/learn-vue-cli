<template>
  <div id="app">
    {{msg}}
    <h3>Hello</h3>
    {{sayHello("Morning")}}
    <ul>
      <li v-for="student in students">
          {{student}}
      </li>
    </ul>
    <h2>{{hello}}</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your First Program',
      students:['arif','shah','sahab'],
      firstName:"Arif",
      lastName:"Shah"
    }
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

</style>
