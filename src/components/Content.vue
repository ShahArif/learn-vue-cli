<template>
    <div class="container">
        <h4>{{content}}</h4>
        <ul>
            <li v-for="listitem in socialNetworks">
                <a v-bind:href="listitem.link">
                    {{listitem.title}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                content:'Welcome to Playlist Dude',
                socialNetworks:[
                    {title:"Facebook", link:"http://facebook.com"},
                    {title:"Github", link:"http://Github.com"},
                    {title:"Twitter", link:"http://twitter.com"},
                    {title:"Linkedin", link:"http://linkedin.com"},
                ]
            }
        },
    }
</script>