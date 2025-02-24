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
    public class LaboratorioDL : DatabaseConnection
    {
        public LaboratorioDL() {
            cn.Open();
        }


        public List<LaboratorioEL> listarLaboratorios()
        {
            List<LaboratorioEL> listSucursal = new List<LaboratorioEL>();

            try
            {
                using (SqlCommand cmd = new SqlCommand("sp_GetLaboratorios", cn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    using (SqlDataReader drd = cmd.ExecuteReader())
                    {
                        while (drd.Read())
                        {
                            listSucursal.Add(new LaboratorioEL
                            {
                                idLaboratorio = drd.GetInt32(0),
                                nombre = drd.GetString(1),
                                direccion = drd.GetString(2),
                                personaContacto = drd.GetString(3),
                                numeroContacto = drd.GetString(4)
                                //idSucursal = drd.GetInt32(0),
                                //nombre = drd.GetString(1),
                                //direccion = drd.GetString(2)
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


        public List<LaboratorioEL> filtrarLaboratorios(LaboratorioEL myLaboratorio)
        {
            List<LaboratorioEL> listSucursal = new List<LaboratorioEL>();

            try
            {
                using (SqlCommand cmd = new SqlCommand("uspFiltrarLaboratorio", cn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@nombre", myLaboratorio.nombre == null ? "" : myLaboratorio.nombre);
                    cmd.Parameters.AddWithValue("@direccion", myLaboratorio.direccion == null ? "" : myLaboratorio.direccion);
                    cmd.Parameters.AddWithValue("@personacontacto", myLaboratorio.personaContacto == null ? "" : myLaboratorio.personaContacto);
                    using (SqlDataReader drd = cmd.ExecuteReader())
                    {
                        while (drd.Read())
                        {
                            listSucursal.Add(new LaboratorioEL
                            {
                                idLaboratorio = drd.GetInt32(0),
                                nombre = drd.GetString(1),
                                direccion = drd.GetString(2),
                                personaContacto = drd.GetString(3),
                                numeroContacto = null //drd.GetString(4)
                                //idSucursal = drd.GetInt32(0),
                                //nombre = drd.GetString(1),
                                //direccion = drd.GetString(2)
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
