

using DataLayer;
using EntityLayer;

namespace BussinesLayer
{
    public  class SucursalBL
    {
        public List<SucursalEL> listarSucursales()
        {
            SucursalesDL sucursales = new SucursalesDL();
            return sucursales.listarSucursales();

        }

        public List<SucursalEL> filtrarSucursal(string nombre)
        {
            SucursalesDL sucursales = new SucursalesDL();
            return sucursales.filtrarSucursal(nombre);

        }
        public List<SucursalEL> filtrarSucursalConDireccion(SucursalEL mySucursal)
        {
            SucursalesDL sucursales = new SucursalesDL();
            return sucursales.filtrarSucursalConDireccion(mySucursal);

        }

        public int guardarDatos(SucursalEL mySucursal)
        {
            SucursalesDL sucursales = new SucursalesDL();
            return sucursales.guardarDatos(mySucursal);
        }

    }
}
