import TodoStore from "../stores/TodoStore"

QUnit.test("TodoStore can filter by title text", function(assert) {
    //arrage
    let allTodos = [
        { id: 1, title : "title 1" },
        { id: 2, title : "title 2" },
        { id: 3, title : "title 3" }
    ]
    let todoDataService = {
        get : function(){
            return $.Deferred().resolve(allTodos).promise();
        }
    }
    let userStore = {
        getById : function(){
            return  {
                name : "Test"
            }
        }
    }
    let todoStore = TodoStore(todoDataService, userStore);
    let query = { text: "title 1" };
    let expectedOutputTodos = [
        { id: 1, title : "title 1" , userName : "Test"}
    ]

    //act
    var done = assert.async();
    todoStore.fetch().then(function makeAssertions(){
        //assert
        assert.deepEqual(expectedOutputTodos, todoStore.getBy(query), "Can filter by text");
        done();
    });
});