using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Platform_CRM.Models

{
    public class ProductContext
    {
        public string ConnectionString { get; set; }

        public ProductContext(string connectionString)
        {
            ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public List<Product> GetAllProducts()
        {
            List<Product> list = new List<Product>();
            using (MySqlConnection connectionDb = GetConnection())
            {
                connectionDb.Open();
                MySqlCommand cmd = new MySqlCommand("select * from products", connectionDb);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new Product()
                        {
                            Id = Convert.ToInt32(reader["Id"]),
                            Image = reader["Image"].ToString(),
                            Count = Convert.ToInt32(reader["Count"]),
                            Title = reader["Title"].ToString(),
                            Price = Convert.ToInt32(reader["Price"]),
                        });
                    }
                }
            }
            return list;
        }


        public List<Product> AddProduct(Product product)
        {
            List<Product> list = new List<Product>();
            using (MySqlConnection connectionDb = GetConnection())
            {
                connectionDb.Open();
                string insertQuery = "INSERT INTO products (Image, count, title, price) VALUES (@value1, @value2, @value3, @value4)";

                using (MySqlCommand command = new MySqlCommand(insertQuery, connectionDb))
                {
                    command.Parameters.AddWithValue("@value1", product.Image);
                    command.Parameters.AddWithValue("@value2", product.Count);
                    command.Parameters.AddWithValue("@value3", product.Title);
                    command.Parameters.AddWithValue("@value4", product.Price);
                    command.ExecuteNonQuery();
                }

                MySqlCommand cmd = new MySqlCommand("select * from products ORDER BY id DESC LIMIT 1", connectionDb);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new Product()
                        {
                            Id = Convert.ToInt32(reader["Id"]),
                            Image = reader["Image"].ToString(),
                            Count = Convert.ToInt32(reader["Count"]),
                            Title = reader["Title"].ToString(),
                            Price = Convert.ToInt32(reader["Price"]),
                        });
                    }
                }
            }

            return list;
        }

        public void DeleteProduct(int id)
        {
            using (MySqlConnection connectionDb = GetConnection())
            {
                connectionDb.Open();
                string insertQuery = "DELETE FROM products WHERE id = @id";

                using (MySqlCommand command = new MySqlCommand(insertQuery, connectionDb))
                {
                    command.Parameters.AddWithValue("@id", id);
                    command.ExecuteNonQuery();
                }
            }
        }

        public void OrderProduct(int id)
        {
            using (MySqlConnection connectionDb = GetConnection())
            {
                connectionDb.Open();
                string insertQuery = "UPDATE products SET count = count - 1 WHERE id = @id";

                using (MySqlCommand command = new MySqlCommand(insertQuery, connectionDb))
                {
                    command.Parameters.AddWithValue("@id", id);
                    command.ExecuteNonQuery();
                }
            }
        }

    }
}
