using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using EntityLayer;
using Microsoft.Extensions.Configuration;

namespace DataLayer
{
    public class DatabaseConnection : IDisposable
    {
        private readonly SqlConnection _connection;

        public DatabaseConnection()
        {
            IConfigurationBuilder builder = new ConfigurationBuilder();
            builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = builder.Build();
            string connectionString = root.GetConnectionString("cn");

            _connection = new SqlConnection(connectionString);
            _connection.Open();
        }

        public SqlConnection GetConnection()
        {
            return _connection;
        }

        public void Dispose()
        {
            if (_connection != null && _connection.State == System.Data.ConnectionState.Open)
            {
                _connection.Close();
                _connection.Dispose();
            }
        }
    }
}