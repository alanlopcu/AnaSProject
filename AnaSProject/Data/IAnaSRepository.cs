using System.Collections.Generic;
using AnaSProject.Data.Entities;

namespace AnaSProject.Data
{
    public interface IAnaSRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(int categoryId);

        IEnumerable<Order> GetAllOrders();
        Order GetOrderById(int id);

        bool SaveChanges();
    }
}