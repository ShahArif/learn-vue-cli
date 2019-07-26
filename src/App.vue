<template>
  <div>
    <!-- Use <component> tag to use dynamic components -->
      <!-- is="name of the component" -->
    <!-- <component is="Students"></component> -->
    <!-- Use <keep-alive> tag to preserve the values -->
      <keep-alive>
        <component v-bind:is="component"></component>
      </keep-alive>
    <button v-on:click="component = 'Students'">Student Form</button>
    <button v-on:click="component = 'Employee'">Employee Form</button>
  </div>
</template>

<script>
import Students from './components/Students';
import Employees from './components/Employees';

export default {
  data () {
    return {
      msg: 'Message From Parent to Child Component',
      component:"Students",
    }
  },
  components:{
    Students,
    "Employee":Employees,
  },  
}
</script>

<style>
.form{
  padding: 5%;
  background-color: aqua;
  margin: auto;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 4px;
  border:1px solid grey;
}
</style>
