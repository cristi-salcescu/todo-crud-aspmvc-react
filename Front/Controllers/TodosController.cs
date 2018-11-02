using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Core.Dtos;

namespace Front.Controllers
{
    public class TodosController : ApiController
    {
        // GET api/todos
        public IEnumerable<TodoDto> Get()
        {
            return new List<TodoDto>()
            {
                new TodoDto() { Id=1, Title = "todo1", UserId = 1 },
                new TodoDto() { Id=2, Title = "todo2", UserId = 2 },
                new TodoDto() { Id=3, Title = "todo3", UserId = 3 }
            };
        }

        // GET api/todos/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/todos
        public void Post([FromBody]string value)
        {
        }

        // PUT api/todos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/todos/5
        public void Delete(int id)
        {
        }
    }
}
