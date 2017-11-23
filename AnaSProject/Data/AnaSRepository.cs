using AnaSProject.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnaSProject.Data
{
    public class AnaSRepository : IAnaSRepository
    {
        private readonly AnaSContext _context;

        public AnaSRepository(AnaSContext context)
        {
            _context = context;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _context.Products
                            .OrderBy(p => p.Title)
                            .ToList();
        }

        public IEnumerable<Product> GetProductsByCategory(int categoryId)
        {
            return _context.Products
                            .Where(p => p.Category.CategoryId == categoryId)
                            .ToList();
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
