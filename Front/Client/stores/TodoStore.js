import $ from "jquery";

export default function TodoStore(dataService, userStore){
    "use strict";
    let todos = [];
    let eventEmitter = $.Callbacks();
    
    function setLocalTodos(newTodos){
      todos = newTodos;
      eventEmitter.fire();
    }
    
    function fetch() {
      return dataService.get().then(setLocalTodos);
    }
    
    function toViewModel(todo){
      return Object.freeze({
        id : todo.id,
        title : todo.title,
        userName : userStore.getById(todo.userId).name
      });
    }
    
    function descById(todo1, todo2){
      return parseInt(todo2.id) - parseInt(todo1.id);
    }
    
    function getBy(query) {
      let top = 25;
      
      function byQuery(todo){
        if(query && query.text){
          return todo.title.includes(query.text);
        }
        return true;
      }
      
      return todos.filter(byQuery)
                  .map(toViewModel)
                  .sort(descById).slice(0, top);
    }
    
    return Object.freeze({ 
      fetch,
      getBy,
      onChange : eventEmitter.add
    });
 }