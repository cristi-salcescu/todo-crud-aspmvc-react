using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Core.Dtos
{
    [DataContract]
    public class TodoDto
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Title { get; set; }
        [DataMember]
        public string Description { get; set; }
        [DataMember]
        public bool Completed { get; set; }
        [DataMember]
        public int UserId { get; set; }
    }
}
