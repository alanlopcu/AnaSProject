using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnaSProject.Data.Entities
{
    public class Order
    {
        public int OrderId { get; set; }
        public Customer Customer { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderNumber { get; set; }
        public ICollection<OrderItem> Items { get; set; }
    }
}