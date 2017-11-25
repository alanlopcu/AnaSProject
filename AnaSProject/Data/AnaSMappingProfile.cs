using AnaSProject.Data.Entities;
using AnaSProject.ViewModels;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnaSProject.Data
{
    public class AnaSMappingProfile : Profile
    {
        public AnaSMappingProfile()
        {
            CreateMap<Product, ProductViewModel>()
                .ForMember(c => c.CategoryId, ex => ex.MapFrom(o => o.Category.CategoryId))
                .ReverseMap()
                .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

            CreateMap<Order, OrderViewModel>()
                .ForMember(c => c.CustomerId, ex => ex.MapFrom(o => o.Customer.CustomerId))
                .ReverseMap();

            CreateMap<OrderItem, OrderItemViewModel>()
                .ForMember(p => p.ProductId, ex => ex.MapFrom(o => o.Product.ProductId))
                .ReverseMap();

            CreateMap<Customer, CustomerViewModel>()
                .ReverseMap();

            CreateMap<Category, CategoryViewModel>()
                .ReverseMap();
        }
    }
}
