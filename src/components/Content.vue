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
        {{author}}
        {{project}}
        {{isActive}}
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
        },
        data(){
            return{
                content:'Welcome to Playlist Dude',
            }
        },
        methods:{
            sayHello:function(){
                console.log(this.content);
            }
        }
        
    }
</script>