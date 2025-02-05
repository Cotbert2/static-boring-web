using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDotnet.Controllers
{
    public class TipoMedicamento : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Inicio()
        {
            return View();
        }

        //public IActionResult ListTipoMedicamento()
        //{
        //    BussinesLayer.TipoMedicamentoBL tipoMedicamentoBL = new BussinesLayer.TipoMedicamentoBL();
        //    return View();
        //}

        public List<EntityLayer.TipoMedicamentoEL> listTipoMedicamento()
        {
            BussinesLayer.TipoMedicamentoBL tipoMedicamentoBL = new BussinesLayer.TipoMedicamentoBL();
            return tipoMedicamentoBL.listTipoMedicamento();
        }

    }

}
