using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnaSProject.Data.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public Category Category { get; set; }
        public decimal Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Picture { get; set; }
    }
}