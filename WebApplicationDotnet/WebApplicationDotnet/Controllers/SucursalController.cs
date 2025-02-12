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
    }
}
