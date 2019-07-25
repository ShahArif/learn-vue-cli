<template>
    <div class="container">
        <h4>{{content}}</h4>
        <h1>{{name}} Bhai</h1>
        <ul>
            <li v-for="listitem  in socialNetworks" :key="listitem.id">
                <a v-bind:href="listitem.link" >
                    {{listitem.title}}
                </a>
            </li>
        </ul>
        {{sayHello()}}
        <!-- {{author}}
        {{project}}
        {{isActive}} -->
        <h2>Student List</h2>
        <ul>
            <li v-for="student in students">{{student}}</li>
        </ul>
        <button v-on:click="deleteStudent">Delete Student</button>
    </div>
</template>

<script>
    export default {
        // props:['socialNetworks',"name"],  //Simply accepting props without validation
        props:{
            name:{
                type: String,
                required:true,
            },
            socialNetworks:{
                type: Array
            },
            author:{
                default:"Default Name"
            },
            project:{
                type:Object
            },
            isActive:{
                type:Boolean,
                default:false
            },
            students:{
                type: Array
            }
        },
        data(){
            return{
                content:'Welcome to Playlist Dude',
            }
        },
        methods:{
            sayHello:function(){
                console.log(this.content);
            },
            deleteStudent(){
                this.students.pop();
            }
        }
        
    }
</script>