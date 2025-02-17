using EntityLayer;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public class SucursalesDL : DatabaseConnection
    {

        public SucursalesDL() {
            cn.Open();
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


    }
}
