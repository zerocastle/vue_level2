<template>

  <div>
    <TransitionGroup name="list" tag="ul">
        <li v-for="(todoItem ,index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
            <i class="checkBtn fa-solid fa-check" v-bind:class="{ checkBtnCompleted :todoItem.completed }"
             v-on:click="toggleComplete({todoItem , index})"></i>
        <span v-bind:class="{textCompleted : todoItem.completed}"> {{todoItem.item}} </span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
        </li>
    </TransitionGroup>
  </div>

</template>


<script>
import { mapMutations } from 'vuex'

export default {
  
    methods : {
        ...mapMutations({
          removeTodo : 'removeOneItem'
        , toggleComplete : 'toggleComplete'
        })
    }
    
}
</script>

<style scoped>
    ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 트렌지션 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>