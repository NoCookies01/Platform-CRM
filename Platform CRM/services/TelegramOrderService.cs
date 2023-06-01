using Platform_CRM.Models;
using Platform_CRM.Telegram.Bot;
using System.Threading.Tasks;
using TL;

namespace Platform_CRM.services
{
    public class TelegramOrderService
    {
            private readonly BotManager _manager;
            public TelegramOrderService(BotManager manager)
            {
                _manager = manager;
            }

            public async Task ProceedOrder(Product product)
            {
                await _manager.SendMessage(FormatOrder(product));
            }

            private string FormatOrder(Product product)
            {
                var message = 
                    $"{product.Id} \n" +
                    $"******************** \n" +
                    $"Name: {product.Title} \n" +
                    $"Color: {product.Price} $ \n";
                return message;
            }
        
    }
}
