<template>
  <div >
    <ul>
      <li v-for="student in students">
          {{student}}
      </li>
    </ul>
    <h3>{{hello}} student</h3>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
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

<style scoped>
 h3{
     color: red;
     font-size: 35px;
 }
</style>
