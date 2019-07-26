<template>
    <div>
        <h3>Student Form</h3>
        <form>
            <p>
            <label>Name :</label>
            <input type="text" name="name" placeholder="Enter your name">
            </p>
            
            <p>
            <label>Roll No : </label>
            <input type="text" name="desg" placeholder="Enter your Designation">
            </p>
            <p>
            <label>Email :</label>
            <input type="email" name="email" placeholder="Enter your name">
            </p>
        </form>
    </div>
</template>

<script>
props:["message"];
export default {
    data(){
        return{
            message:"This Message comes from Student Component"
        }
    }
}
</script>

