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
    </div>
</template>

<script>
    export default {
        props:['socialNetworks',"name"],
        data(){
            return{
                content:'Welcome to Playlist Dude',
            }
        },
        methods:{
            sayHello:function(){
                alert('Say hello Dude');
                console.log(this.content);
            }
        }
        
    }
</script>