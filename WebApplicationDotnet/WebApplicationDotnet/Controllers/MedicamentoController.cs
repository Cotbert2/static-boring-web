using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDotnet.Controllers
{
    public class MedicamentoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public string saludo()
        {
            return "Buenos dias";
        }

        public int numeroEntero()
        {
            return 20;
        }
    }
}
