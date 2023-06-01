using Platform_CRM.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Platform_CRM.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public List<Product> GetAllProducts()
        {
            ProductContext context = HttpContext.RequestServices.GetService(typeof(Platform_CRM.Models.ProductContext)) as ProductContext;
            return context.GetAllProducts();
        }

        [HttpPost]
        public List<Product> AddProduct(Product product)
        {
            ProductContext context = HttpContext.RequestServices.GetService(typeof(Platform_CRM.Models.ProductContext)) as ProductContext;
            return context.AddProduct(product);
        }

        [HttpDelete]
        public void DeleteProduct(int id)
        {
            ProductContext context = HttpContext.RequestServices.GetService(typeof(Platform_CRM.Models.ProductContext)) as ProductContext;
            context.DeleteProduct(id);
        }

        [HttpPatch]
        public void OrderProduct(Product product)
        {
            ProductContext context = HttpContext.RequestServices.GetService(typeof(Platform_CRM.Models.ProductContext)) as ProductContext;
            context.OrderProduct(product.Id);
        }
    }
} 
