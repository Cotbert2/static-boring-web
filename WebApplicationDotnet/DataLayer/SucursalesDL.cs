using EntityLayer;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace DataLayer
{
    public class SucursalesDL : DatabaseConnection
    {

        public SucursalesDL() {
            cn.Open();
        }


        public int guardarDatos(SucursalEL mySucursal)
        {
            int result = 0;
            try
            {
                using (SqlCommand cmd = new SqlCommand("insert into Sucursal(NOMBRE,DIRECCION, BHABILITADO) values(@nombre,@direccion, 1)", cn))
                {
                    cmd.CommandType = System.Data.CommandType.Text;
                    cmd.Parameters.AddWithValue("@nombre", mySucursal.nombre);
                    cmd.Parameters.AddWithValue("@direccion", mySucursal.direccion);
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




        public List<SucursalEL> listarSucursales()
        {
            List<SucursalEL> listSucursal = new List<SucursalEL>();

            try
            {
                using (SqlCommand cmd = new SqlCommand("sp_ListarSucursal", cn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    using (SqlDataReader drd = cmd.ExecuteReader())
                    {
                        while (drd.Read())
                        {
                            listSucursal.Add(new SucursalEL
                            {
                                //idSucursal = drd.GetInt32(0),
                                //nombre = drd.GetString(1),
                                //direccion = drd.GetString(2)
                                idSucursal = drd.GetInt32(drd.GetOrdinal("IIDSUCURSAL")),
                                nombre = drd.GetString(drd.GetOrdinal("NOMBRE")),
                                direccion = drd.GetString(drd.GetOrdinal("DIRECCION"))

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


        public List<SucursalEL> filtrarSucursal(string nombre)
        {
            List<SucursalEL> listSucursal = new List<SucursalEL>();

            try
            {
                using (SqlCommand cmd = new SqlCommand("uspFiltrarSucursal", cn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@nombresucursal", nombre);
                    using (SqlDataReader drd = cmd.ExecuteReader())
                    {
                        while (drd.Read())
                        {
                            listSucursal.Add(new SucursalEL
                            {
                                idSucursal = drd.GetInt32(0),
                                nombre = drd.GetString(1),
                                direccion = drd.GetString(2)
                                //idSucursal = drd.GetInt32(drd.GetOrdinal("IIDSUCURSAL")),
                                //nombre = drd.GetString(drd.GetOrdinal("NOMBRE")),
                                //direccion = drd.GetString(drd.GetOrdinal("DIRECCION"))

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



        public List<SucursalEL> filtrarSucursalConDireccion(SucursalEL mySucursal)
        {
            List<SucursalEL> listSucursal = new List<SucursalEL>();

            try
            {
                using (SqlCommand cmd = new SqlCommand("uspFiltrarSucursalPorDireccion", cn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@nombresucursal", mySucursal.nombre == null ? "" : mySucursal.nombre);
                    cmd.Parameters.AddWithValue("@direccion", mySucursal.direccion == null ? "" : mySucursal.direccion);
                    using (SqlDataReader drd = cmd.ExecuteReader())
                    {
                        while (drd.Read())
                        {
                            listSucursal.Add(new SucursalEL
                            {
                                idSucursal = drd.GetInt32(0),
                                nombre = drd.GetString(1),
                                direccion = drd.GetString(2)
                                //idSucursal = drd.GetInt32(drd.GetOrdinal("IIDSUCURSAL")),
                                //nombre = drd.GetString(drd.GetOrdinal("NOMBRE")),
                                //direccion = drd.GetString(drd.GetOrdinal("DIRECCION"))

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

    }
}
