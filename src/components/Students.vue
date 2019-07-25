<template>
    <div>
        <h2>Students Merit List</h2>
        <p>{{message}}</p>
        <ul>
            <li v-for="student in students">
                {{student}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        students:{
            type: Array
        }
    },
    data(){
        return{
            message:'Its Students Merit List Here'
        }
    }
}
</script>

