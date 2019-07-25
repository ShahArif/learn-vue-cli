<template>
    <div>
       <h1>Employee: {{message}}</h1>
    </div>
</template>
<script>
import {EventBus} from '../main';
export default {
   
    data(){
        return{
            message:"Default Message"
        }
    },
    methods:{
       
    },
    mounted(){
        EventBus.$on("emittedData", data=>{
            this.message = data;
        });
    }
}
</script>

