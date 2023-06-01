using Microsoft.AspNetCore.Mvc;
using Platform_CRM.Models;
using static Platform_CRM.services.TelegramOrderService;
using System.Threading.Tasks;
using Platform_CRM.services;

namespace Platform_CRM.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly TelegramOrderService _orderService;

        public OrderController(TelegramOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost]
        public async Task ProceedOrder(Product product)
        {
            await _orderService.ProceedOrder(product);
        }
    }
}
