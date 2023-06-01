using WTelegram;

namespace Platform_CRM.Telegram.Bot
{
    public class BotManager
    {
        async Task<string> DoLogin(string? loginInfo, Client client, string code = "") // (add this method to your code)
        {
            int verificationCodeCount = 0;
            bool stop = false;
            while (client.User == null && !stop)
            {
                var reason = await client.Login(loginInfo);

                switch (reason) // returns which config is needed to continue login
                {
                    case "email":
                    case "email_verification_code":
                    case "password":
                    case "verification_code":
                        loginInfo = code;
                        if (verificationCodeCount > 0) return reason;
                        verificationCodeCount++;
                        break;
                    default: loginInfo = null; break;
                }
            }
            return "";
        }

        public async Task<bool> LoginWith(string code = "")
        {
            using var client = new Client(20790770, "b71211aa7cf9d79bf41d1b8623c668a6");
            var result = await DoLogin("+380977903314", client, code);

            return result == "" || result == null;
        }
        public async Task SendMessage(string message)
        {
            using var client = new Client(20790770, "b71211aa7cf9d79bf41d1b8623c668a6");
            await DoLogin("+380977903314", client);
            var chats = await client.Messages_GetAllDialogs();
            var text2 = message;
            await client.SendMessageAsync(chats.users.Values.First(v => v.username == "demyanzv").ToInputPeer(), text2);
        }
    }
}