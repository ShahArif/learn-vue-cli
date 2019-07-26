export default{
    filters:{
        capitalize(value){
            if(!value) return ''
            return value.toUpperCase();
        },
        contentSnippet(value){
            if(!value) return ''
            return value.slice(0,70) + '...';
        }
    }
}