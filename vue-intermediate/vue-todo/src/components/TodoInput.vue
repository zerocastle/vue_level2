<template>
  <div style="display:flex;justify-content: center;" class="shadow">
    <input type="text" class="" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>
    </span>
   
      <!-- use the modal component, pass in the prop -->
      <AlertModal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <template v-slot:header>
            <h3>경고
            <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
            </h3>
        </template> 
        <template v-slot:body>
            <h3>바디</h3>
        </template> 
        <template v-slot:footer>
            <h3>푸터</h3>
        </template>  
        <!--  -->
      </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'
export default {
    data : function(){
        return {
            newTodoItem : "",
            showModal : false
        }
    },
    methods : {
        addTodo : function(){
            if(this.newTodoItem != ''){
           //this.$emit('addItem', this.newTodoItem);
           this.$store.commit('addTodoItemF' , this.newTodoItem);
           this.clearInput();
           }else{
            this.showModal = !this.showModal
           }
        },
        clearInput : function(){
            this.newTodoItem = '';
        }
    },
    components : {
        'AlertModal' : AlertModal
    }
}
</script>

<style scoped>
    input:focus{
        outline: none;
    }
    .inputBox{
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input{
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right , #6478FB , #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
    .closeModalBtn{
        color: green;
    }

</style>