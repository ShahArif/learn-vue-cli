<template>
    <div>
        <button v-on:click="passData()">Click Here to Send Data</button>
    </div>
</template>
<script>
import {EventBus} from '../main'
export default {
   
    data(){
        return{
            
        }
    },
    methods:{
        passData(){
            console.log('This is simple messsage passed');
            EventBus.$emit("emittedData","This is simple messsage passed");
        }
    }
}
</script>

