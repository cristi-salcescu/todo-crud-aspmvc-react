export default function UserDataService(){
  "use strict";
  let url = "api/users";

  function get() {
    return fetch(url).then(toJson);
  }
  
  function toJson(response){
    return response.json();
  }
  
  return  Object.freeze({
      get
  });
}