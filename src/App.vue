<template>
  <div>
    <Students v-bind:message="msg">
      <!-- We are assigning slot="some name" to identitfy particular tag  -->
    <h3 slot="Std-Header">This Header Tag for Slot</h3>
    <p slot="Std-paragraph">This is Paragraph Tag for Slot</p>
    <div class="form" slot="form">
        
    </div>
    </Students>
    <Employee>
      <h1>Employee Header Tag</h1>
      <a href="Test">Employee Link</a>
    </Employee>
  </div>
</template>

<script>
import Students from './components/Students';
import Employees from './components/Employees';

export default {
  data () {
    return {
      msg: 'Message From Parent to Child Component',
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
