using System.Collections.Generic;
using AnaSProject.Data.Entities;
using System.Threading.Tasks;

namespace AnaSProject.Data
{
    public interface IAnaSRepository
    {
        //Basic DB Operations
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAllAsync();

        //Products
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(int categoryId);
        Product GetProductById(int id);

        //Orders
        IEnumerable<Order> GetAllOrders();
        Order GetOrderById(int id);

        //Customers
        IEnumerable<Customer> GetAllCustomers();
        Customer GetCustomerById(int id);

        //Customers
        IEnumerable<Category> GetAllCategories();
        Category GetCategoryById(int id);

        bool SaveChanges();
        void AddEntity(object model);
    }
}