const addTodoItemF = function(state , todoItem ){
    console.log('receive');
    var obj = {completed : false , item : todoItem};
    localStorage.setItem(todoItem , JSON.stringify(obj));
    state.todoItems.push(obj);
};

const removeOneItem = function(state , payload){
    console.log('delete');
    localStorage.removeItem(payload.todoItem.item);
    //state.todoItems;
    state.todoItems.splice(payload.index , 1);
};

const toggleComplete = function(state , payload){
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item , JSON.stringify(payload.todoItem));
};

const clear = function(state){
    localStorage.clear();
    state.todoItems = [];
};

export {addTodoItemF , removeOneItem ,toggleComplete , clear}