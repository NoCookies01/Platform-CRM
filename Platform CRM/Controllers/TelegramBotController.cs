using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Platform_CRM.Telegram;
using Platform_CRM.Telegram.Bot;

namespace Platform_CRM.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TelegramController : ControllerBase
    {
        private readonly BotManager _botManager;

        public TelegramController(BotManager botManager)
        {
            _botManager = botManager;
        }

        [HttpPost]
        public async Task<bool> Login(string code = "")
        {
            return await _botManager.LoginWith(code);
        }
    }
}
