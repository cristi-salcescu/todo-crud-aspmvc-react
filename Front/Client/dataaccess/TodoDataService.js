export default function TodoDataService(){
    "use strict";
    let url = "api/todos";
    
    function toJson(response){
      return response.json();
    }
    function get() {
      return fetch(url).then(toJson);
    }
    
    function add(todo) {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify(todo),
      }).then(toJson);
    }
    
    return  Object.freeze({
      get,
      add
    });
  }