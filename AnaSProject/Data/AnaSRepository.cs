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

        /*--- Basic DB Operations ---*/
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<bool> SaveAllAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        /*--- Products Operations ---*/
        public IEnumerable<Product> GetAllProducts()
        {
            return _context.Products
                            .Include(c => c.Category)
                            .OrderBy(p => p.Title)
                            .ToList();
        }

        public IEnumerable<Product> GetProductsByCategory(int categoryId)
        {
            return _context.Products
                            .Where(p => p.Category.CategoryId == categoryId)
                            .ToList();
        }

        public Product GetProductById(int id)
        {
            return _context.Products
                .Where(c => c.ProductId == id)
                .FirstOrDefault();
        }

        /*--- Orders Operations ---*/
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

        /*--- Customers Operations ---*/
        public IEnumerable<Customer> GetAllCustomers()
        {
            return _context.Customer
                .OrderBy(c => c.FullName)
                .ToList();
        }

        public Customer GetCustomerById(int id)
        {
            return _context.Customer
                .Where(c => c.CustomerId == id)
                .FirstOrDefault();
        }

        /*--- Categories Operations ---*/
        public IEnumerable<Category> GetAllCategories()
        {
            return _context.Categories
                .OrderBy(c => c.Name)
                .ToList();
        }

        public Category GetCategoryById(int id)
        {
            return _context.Categories
                .Where(c => c.CategoryId == id)
                .FirstOrDefault();
        }

        //Others
        public bool SaveChanges()
        {
            return _context.SaveChanges() > 0;
        }

        public void AddEntity(object model)
        {
            _context.Add(model);
        }
    }
}
