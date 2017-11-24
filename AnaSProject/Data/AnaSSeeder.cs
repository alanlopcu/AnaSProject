using AnaSProject.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnaSProject.Data
{
    public class AnaSSeeder
    {
        private readonly AnaSContext _context;
        private readonly IHostingEnvironment _hosting;

        public AnaSSeeder(AnaSContext context, IHostingEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }

        public void Seed()
        {
            _context.Database.EnsureCreated();//Check if database exists
            if (!_context.Products.Any() && !_context.Categories.Any() && !_context.Customers.Any() && !_context.Orders.Any())//First time for this assessment
            {
                //I need to insert some data
                //Lets add two random categories
                var category1 = new Category()
                {
                    Name = "Electronics",
                    Description = "Electronics is the science of controlling electrical energy electrically, in which the electrons have a fundamental role. Electronics deals with electrical circuits that involve active electrical components (such as vacuum tubes, transistors, diodes, integrated circuits, optoelectronics, and sensors), associated passive electrical components, and interconnection technologies. --@Wikipedia--"
                };
                var category2 = new Category()
                {
                    Name = "Christmas stuff",
                    Description = "Christmas is an annual festival commemorating the birth of Jesus Christ, observed most commonly on December 25 as a religious and cultural celebration among billions of people around the world.. --@Wikipedia--"
                };
                _context.Categories.Add(category1);
                _context.Categories.Add(category2);

                //Adding some well-known customers
                var customer1 = new Customer()
                {
                    FullName = "Donald Trump",
                    Email = "mrtop@whitehouse.gov",
                    PhoneNumber = "911666",
                    Identity = "Unknown"
                };
                var customer2 = new Customer()
                {
                    FullName = "Vladimir Putin",
                    Email = "virp@marvel.ru",
                    PhoneNumber = "197010030",
                    Identity = "Unknown"
                };
                var customer3 = new Customer()
                {
                    FullName = "Kim Jong un",
                    Email = "kju@hollywood.com",
                    PhoneNumber = "390312575",
                    Identity = "Unknown"
                };
                _context.Customers.Add(customer1);
                _context.Customers.Add(customer2);
                _context.Customers.Add(customer3);

                //Products list from my json previously created using my database design. Note: Some categories are not correct at this moment.
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Migrations/sanac_seed_products.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _context.Products.AddRange(products);

                //My example order
                var order = new Order()
                {
                    Customer = customer3,
                    OrderDate = DateTime.Now,
                    OrderNumber = "SANA-458138486622",
                    Items = new List<OrderItem>() {
                        new OrderItem(){
                            Product = products.First(),
                            Quantity = 2,
                            UnitPrice = products.First().Price
                        }
                    }
                };
                _context.Orders.Add(order);

                //Save all changes
                _context.SaveChanges();

            }
        }
    }
}
