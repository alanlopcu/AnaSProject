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
                .ReverseMap()
                .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

            CreateMap<Order, OrderViewModel>()
                .ReverseMap();
            //ForMember(o => o.OrderId, ex => ex.MapFrom(o => o.[My original variable]));//Changed before

            CreateMap<OrderItem, OrderItemViewModel>()
                .ReverseMap();

            CreateMap<Customer, CustomerViewModel>()
                .ReverseMap();

            CreateMap<Category, CategoryViewModel>()
                .ReverseMap();
        }
    }
}
