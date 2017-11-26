using System.ComponentModel.DataAnnotations;

namespace AnaSProject.ViewModels
{
    public class CategoryViewModel
    {
        public int CategoryId { get; set; }
        [Required, MinLength(4)]
        public string Name { get; set; }
        public string Description { get; set; }
    }
}