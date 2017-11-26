using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using AnaSProject.Services;
using AnaSProject.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using AutoMapper;

namespace AnaSProject
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                .AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);//Handling my Json error
            services.AddDbContext<AnaSContext>(cfg => {
                cfg.UseSqlServer(_config.GetConnectionString("AnaSConnectionString"));
            });
            services.AddAutoMapper();//Including Auto Mapping Support
            services.AddTransient<AnaSSeeder>();
            services.AddScoped<IAnaSRepository, AnaSRepository>();//Playing with my repository pattern
            services.AddTransient<IMailService, NullMailService>();//Just my own core test purposes
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())//Testing purposes
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }
            app.UseStaticFiles();

            //MVC Route
            app.UseMvc(cfg =>
            {
                cfg.MapRoute("Default",
                    "{controller}/{action}/{id?}",
                    new { controller = "App", Action = "Shop" });
            });

            if (env.IsDevelopment())//My assessment environment at this point
            {
                //Seeding my assessment data
                using (var scope = app.ApplicationServices.CreateScope())
                {
                    var seeder = scope.ServiceProvider.GetService<AnaSSeeder>();
                    seeder.Seed();
                }
            }
        }
    }
}
