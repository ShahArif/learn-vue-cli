<template>
   <div class="form">
        <h3>This is simple Form</h3>
        <h4>{{message}}</h4>
        <slot/>
        <h3>Employee Form</h3>
        <form>
            <p>
            <label>Name :</label>
            <input type="text" name="name"  v-model.lazy="employee.name" placeholder="Enter your name">
            </p>
            <p>
            <label>Email :</label>
            <input type="email" name="email" v-model.lazy="employee.email" placeholder="Enter your name">
            </p>
            <p>
            <label>Designation : </label>
            <input type="text" name="desg" v-model="employee.desg" placeholder="Enter your Designation">
            </p>
            <p>
              <label><input type="checkbox" value="developer" v-model="employee.posts"> Developer</label>
              <label><input type="checkbox" value="business analyst" v-model="employee.posts">Business Analyst</label>
              <label><input type="checkbox" value="admin" v-model="employee.posts"> Admin</label>
              <label><input type="checkbox" value="manager" v-model="employee.posts"> Manager</label>
            </p>
            <p>Gender:
              <label><input type="radio" id="male" value="male" v-model="employee.gender">Male </label>
              <label><input type="radio" id="female" value="female" v-model="employee.gender">Female</label>
            </p>
            <p>
              <select  v-model="employee.label">
                <option v-for="label in employee.labels" :key="label.index">{{label}}</option>
              </select>
            </p>
        </form>

        <div class="data-preview">
          <h4>Name: {{employee.name}}</h4>
          <h4>Email : {{employee.email}}</h4>
          <h4>Designation : {{employee.desg}}</h4>
          <h4>Posts:</h4>
          <ul>
            <li v-for="post in employee.posts" :key="post.index">
              {{post}}
            <li/>
          </ul>
          <h4>Gender: {{employee.gender}}</h4>
          <h4>Label : {{employee.label}}</h4>
        </div>
    </div>
</template>

<script>
import Students from './components/Students';
import Employees from './components/Employees';

export default {
  data () {
    return {
      employee:{
        name:"",
        email:"",
        desg:"",
        posts:[],
        gnder:"",
        labels:["senior","junior","motivator"]
      }
    }
  },
  components:{
   
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
