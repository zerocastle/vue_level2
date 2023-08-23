<template>
    <div>
        <h1>Header</h1>
        <h2>{{propsdata}}</h2>
        <button v-on:click="sendEvent">send</button>
    </div>
</template>

<script>
export default {
    props : ['propsdata'],
    methods : {
        sendEvent : function(){
            this.$emit('renew');
        }
    }
}
</script>

<style>

</style>