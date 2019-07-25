<template>
  <div>
    <Students/>
    <Employees/>
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
    Employees,
  },  
  beforeCreate(){
      console.log('Its is Before Initializing Data In Data Object');
      alert("Before Created");
  },
  created(){
      console.log('After Initializing Data In Data Object');
      alert("After Created");
  }
}
</script>

