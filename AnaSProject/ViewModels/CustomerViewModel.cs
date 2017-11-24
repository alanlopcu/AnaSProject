using System.ComponentModel.DataAnnotations;

namespace AnaSProject.ViewModels
{
    public class CustomerViewModel
    {
        [Required, MinLength(4)]
        public string FullName { get; set; }
        [Required, EmailAddress]
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Identity { get; set; }
    }
}