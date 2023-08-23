<template>
  <div>
    {{str}}
    <app-header v-bind:propsdata="receiveData" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  data : function(){
    return {
      str : 'hi!!!',
      receiveData : 'header...'
    }
  },
  components : {
    'app-header' : AppHeader
  },
  methods : {
    renewStr : function(){
      this.receiveData = 'hi';
    }
  }

}
</script>

<style>

</style>