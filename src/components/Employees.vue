<template>
    <div>
        <h3>Employee Form</h3>
        <form>
            <p>
            <label>Name :</label>
            <input type="text" name="name" placeholder="Enter your name">
            </p>
            <p>
            <label>Email :</label>
            <input type="email" name="email" placeholder="Enter your name">
            </p>
            <p>
            <label>Designation : </label>
            <input type="text" name="desg" placeholder="Enter your Designation">
            </p>
        </form>
        
    </div>
</template>

<script>
props:["message"];
export default {
    data(){
        return{
            message:"This Message comes from Employees Component"
        }
    }
}
</script>

