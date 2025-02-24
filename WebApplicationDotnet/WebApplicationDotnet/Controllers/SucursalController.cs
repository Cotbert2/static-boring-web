using DataLayer;
using EntityLayer;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDotnet.Controllers
{
    public class SucursalController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public List<EntityLayer.SucursalEL> listarSucursales()
        {
            BussinesLayer.SucursalBL sucursal = new BussinesLayer.SucursalBL();
            return sucursal.listarSucursales();
        }


        public List<EntityLayer.SucursalEL> filtrarSucursales(string nombre)
        {
            nombre = (nombre == null)? "" : nombre;
            BussinesLayer.SucursalBL sucursal = new BussinesLayer.SucursalBL();
            return sucursal.filtrarSucursal(nombre);
        }


        public List<EntityLayer.SucursalEL> filtrarSucursalesConDireccion(SucursalEL mySucursal)
        {
            BussinesLayer.SucursalBL sucursal = new BussinesLayer.SucursalBL();
            return sucursal.filtrarSucursalConDireccion(mySucursal);
        }


        public int guardarDatos(SucursalEL mySucursal)
        {
            BussinesLayer.SucursalBL sucursal = new BussinesLayer.SucursalBL();
            return sucursal.guardarDatos(mySucursal);
            //return 1;
        }
    }
}
