<template>
    <div>
        <h2>Students Merit List</h2>
        <p>{{message}}</p>
        <ul>
            <li v-for="student in students">
                {{student}}
            </li>
        </ul>
        <button v-on:click="updateMessage">Update Message</button>
    </div>
</template>
<script>
export default {
    props:{
        students:{
            type: Array
        },
        message:{
            type: String,
        }
    },
    data(){
        return{
            message:'Its Students Merit List Here'
        }
    },
    methods:{
        updateMessage(){
            this.message="Message Has been Changed or Updated"
        }
    }
    
}
</script>

