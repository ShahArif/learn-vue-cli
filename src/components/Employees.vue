<template>
    <div>
        <h3>This is simple Employees Form</h3>
        <h4>{{message}}</h4>
        <slot/>
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

