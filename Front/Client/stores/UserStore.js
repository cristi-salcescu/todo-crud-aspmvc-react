export default function UserStore(dataService){
    "use strict";
    let users = [];
    
    let eventEmitter = $.Callbacks();
  
    function setLocalUsers(newUsers){
      users = newUsers;
      eventEmitter.fire();
    }
    
    function fetch() {
      return dataService.get().then(setLocalUsers);
    }
    
    function getById(id){
      function byId(user){
        return parseInt(user.id) === parseInt(id); 
      }

      return users.find(byId);
    }
    
    return Object.freeze({ 
      fetch,
      getById,
      onChange : eventEmitter.add
    });
}