<template>
    <div>
        <h2>{{message}}</h2>
    </div>
</template>
<script>

export default {
   
    data(){
        return{
            message:"Default Message"
        }
    },
    beforeMount(){
        console.log('Its Running before Mounts');
        // alert('Before Mount');
        // this.message = "Before Mount Messsage";
    },
    mounted(){
         console.log('Its Running After Mounts');
            // alert('After Mounted');
           
            this.message = "After Mount Messsage";
    }
}
</script>

