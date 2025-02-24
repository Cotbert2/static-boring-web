using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using EntityLayer;
using Microsoft.Extensions.Configuration;
using System.IO;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace DataLayer
{
    public class TipoMedicamentoDL : DatabaseConnection
    {

        public TipoMedicamentoDL()
        {
            //IConfigurationBuilder builder = new ConfigurationBuilder();
            //builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            //var root = builder.Build();
            //string connectionString = root.GetConnectionString("cn");

            //_connection = new SqlConnection(connectionString);
            //_connection.Open();
            cn.Open();
        }


        public int guardarDatos(TipoMedicamentoEL myTipoMedicamento)
        {
            int result = 0;
            try
            {
                using (SqlCommand cmd = new SqlCommand("insert into TipoMedicamento(NOMBRE,DESCRIPCION, BHABILITADO) values(@nombre,@descripcion, 1)", cn))
                {
                    cmd.CommandType = System.Data.CommandType.Text;
                    cmd.Parameters.AddWithValue("@nombre", myTipoMedicamento.nombre);
                    cmd.Parameters.AddWithValue("@descripcion", myTipoMedicamento.descripcion);
                    result = cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                // Log del error si es necesario
                return 0;
            }
            return result;
        }

        public List<TipoMedicamentoEL> listTipoMedicamento()
        {
            List<TipoMedicamentoEL> listTipoMedicamento = new List<TipoMedicamentoEL>();

            try
            {
                using (SqlCommand cmd = new SqlCommand("sp_ListarTipoMedicamento", cn))
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


        public List<TipoMedicamentoEL> filtrarTipoMedicamento(string descripcion)
        {
            List<TipoMedicamentoEL> listTipoMedicamento = new List<TipoMedicamentoEL>();

            try
            {
                using (SqlCommand cmd = new SqlCommand("sp_FiltrarTipoMedicamento", cn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@descripcion", descripcion);
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




        public TipoMedicamentoEL recuperarTipoMedicamento(int idMedicamento)
        {
            List<TipoMedicamentoEL> listTipoMedicamento = new List<TipoMedicamentoEL>();

            try
            {
                using (SqlCommand cmd = new SqlCommand("SELECT IIDTIPOMEDICAMENTO, NOMBRE, DESCRIPCION FROM TipoMedicamento WHERE BHABILITADO = 1 and IIDTIPOMEDICAMENTO = @iidtipomedicamento", cn))
                {
                    cmd.CommandType = System.Data.CommandType.Text;
                    cmd.Parameters.AddWithValue("@iidtipomedicamento", idMedicamento);
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

            return listTipoMedicamento[0];
        }


        public int updateTipoMedicamento(TipoMedicamentoEL myTipoMedicamento)
        {
            int result = 0;
            try
            {
                using (SqlCommand cmd = new SqlCommand("sp_UpdateTipoMedicamento", cn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IIDTIPOMEDICAMENTO", myTipoMedicamento.idMedicamento);
                    cmd.Parameters.AddWithValue("@NOMBRE", myTipoMedicamento.nombre);
                    cmd.Parameters.AddWithValue("@DESCRIPCION", myTipoMedicamento.descripcion);
                    result = cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                // Log del error si es necesario
                return 0;
            }

            return result;
        }



        public void Dispose()
        {
            if (cn != null && cn.State == System.Data.ConnectionState.Open)
            {
                cn.Close();
                cn.Dispose();
            }
        }
    }
}
