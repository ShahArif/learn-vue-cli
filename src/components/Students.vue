<template>
    <div>
        <h3>{{message}}</h3>
       <button v-on:click="updateMessage">Update Message From Child </button>
    </div>
</template>
<script>
export default {
    props:["message"],
    data(){
        return{
            
        }
    },
    methods:{
        updateMessage(){
            // this.message ="Message Updated From Child"
            this.$emit("updateMessageVariable","Message Updated From Child");
        }
    }
}
</script>

