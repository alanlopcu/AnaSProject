using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnaSProject.ViewModels
{
    public class OrderViewModel
    {
        [Required]
        public CustomerViewModel Customer { get; set; }
        public DateTime OrderDate { get; set; }
        [Required, MinLength(4)]
        public string OrderNumber { get; set; }

        public ICollection<OrderItemViewModel> Items { get; set; }

        [Required]
        public int CustomerId { get; set; }
    }
}
