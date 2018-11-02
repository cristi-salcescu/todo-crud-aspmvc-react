using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Core.Dtos;

namespace Front.Controllers
{
    public class UsersController : ApiController
    {
        // GET api/todos
        public IEnumerable<UserDto> Get()
        {
            return new List<UserDto>()
            {
                new UserDto() { Id=1, Name = "Name1", UserName = "UserName1"},
                new UserDto() { Id=2, Name = "Name2", UserName = "UserName2" },
                new UserDto() { Id=3, Name = "Name3", UserName = "UserName3" }
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
