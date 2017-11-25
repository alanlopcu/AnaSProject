using System.ComponentModel.DataAnnotations;

namespace AnaSProject.ViewModels
{
    public class ProductViewModel
    {
        public int ProductId { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required, MinLength(4)]
        public string Title { get; set; }
        public string Description { get; set; }
        public string Picture { get; set; }

        public CategoryViewModel Category { get; set; }

        [Required]
        public int CategoryId { get; set; }
        //public string CategoryName { get; set; }
        //public string CategoryDescription { get; set; }
    }
}