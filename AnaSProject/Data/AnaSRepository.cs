using AnaSProject.Data.Entities;
using Microsoft.EntityFrameworkCore;
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

        public IEnumerable<Order> GetAllOrders()
        {
            return _context.Orders
                .Include(c => c.Customer)
                .Include(o => o.Items)
                .ThenInclude(i => i.Product)
                .ToList();
        }

        public Order GetOrderById(int id)
        {
            return _context.Orders
                .Include(c => c.Customer)
                .Include(o => o.Items)
                .ThenInclude(i => i.Product)
                .Where(o => o.OrderId == id)
                .FirstOrDefault();
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
