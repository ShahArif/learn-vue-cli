<template>
    <div>
        <!-- We can use Name slot for diffrentiating all slots -->
        <h3>This is simple Student Form</h3> 
        <!-- <h4>{{message}}</h4> -->
         <slot name="Std-Header"/>
        <slot name="Std-paragraph"/>
        <slot name="form">
           
        </slot>
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

