<template>
  <div>
    <student></student>
    <Employees></Employees>
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
   "student":Students,
   Employees,
  },
  methods:{

  }
}
</script>

