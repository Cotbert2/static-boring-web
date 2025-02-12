using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using EntityLayer;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace DataLayer
{
    public class TipoMedicamentoDL : IDisposable
    {
        private readonly SqlConnection _connection;

        public TipoMedicamentoDL()
        {
            IConfigurationBuilder builder = new ConfigurationBuilder();
            builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = builder.Build();
            string connectionString = root.GetConnectionString("cn");

            _connection = new SqlConnection(connectionString);
            _connection.Open();
        }

        public List<TipoMedicamentoEL> listTipoMedicamento()
        {
            List<TipoMedicamentoEL> listTipoMedicamento = new List<TipoMedicamentoEL>();

            try
            {
                using (SqlCommand cmd = new SqlCommand("sp_ListarTipoMedicamento", _connection))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    using (SqlDataReader drd = cmd.ExecuteReader())
                    {
                        while (drd.Read())
                        {
                            listTipoMedicamento.Add(new TipoMedicamentoEL
                            {
                                idMedicamento = drd.GetInt32(0),
                                nombre = drd.GetString(1),
                                descripcion = drd.GetString(2)
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Log del error si es necesario
                return null;
            }

            return listTipoMedicamento;
        }


        public List<SucursalEL> listarSucursales()
        {
            List<SucursalEL> listSucursal= new List<SucursalEL>();

            try
            {
                using (SqlCommand cmd = new SqlCommand("sp_ListarSucursal", _connection))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    using (SqlDataReader drd = cmd.ExecuteReader())
                    {
                        while (drd.Read())
                        {
                            listSucursal.Add(new SucursalEL
                            {
                                idSucursal = drd.GetInt32(0),
                                nombre = drd.GetString(1),
                                direccion = drd.GetString(2)
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Log del error si es necesario
                return null;
            }

            return listSucursal;
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
