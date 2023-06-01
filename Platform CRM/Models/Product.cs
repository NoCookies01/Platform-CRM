
namespace Platform_CRM.Models
{
    public class Product
    {
        private ProductContext context;
        public int Id { get; set; }
        public string Image { get; set; }
        public int Count { get; set; }
        public string Title { get; set; }
        public int Price { get; set; }
    }
}
