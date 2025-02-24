using EntityLayer;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDotnet.Controllers
{
    public class LaboratorioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public List<EntityLayer.LaboratorioEL> listarSucursales()
        {
            BussinesLayer.LaboratorioBL laboratorio = new BussinesLayer.LaboratorioBL();
            return laboratorio.listarLaboratorios();
        }


        public List<EntityLayer.LaboratorioEL> filtrarLaboratorio(LaboratorioEL objLaboratorio)
        {
            BussinesLayer.LaboratorioBL laboratorio = new BussinesLayer.LaboratorioBL();
            return laboratorio.filtrarLaboratorio(objLaboratorio);
        }
    }
}
