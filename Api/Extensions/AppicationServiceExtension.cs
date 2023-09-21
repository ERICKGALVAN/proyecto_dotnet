using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.data;
using Api.Interfaces;
using Api.Services;
using Microsoft.EntityFrameworkCore;

namespace Api.Extensions;

public static class AppicationServiceExtension
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddDbContext<DataContext>(opt =>
        {
            opt.UseSqlite(config.GetConnectionString("DefaultConnection"));

        });
        services.AddCors();
        services.AddScoped<ITokenService, TokenService>();
        return services;
    }
}

