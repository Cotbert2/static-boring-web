﻿using EntityLayer;
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


        public List<EntityLayer.TipoMedicamentoEL> filtrarTipoMedicamento(string descripcion)
        {
            descripcion = (descripcion == null) ? "" : descripcion;
            BussinesLayer.TipoMedicamentoBL tipoMedicamentoBL = new BussinesLayer.TipoMedicamentoBL();
            return tipoMedicamentoBL.filtrarTipoMedicamento(descripcion);
        }


        public string connectionString() {
            IConfigurationBuilder builder= new ConfigurationBuilder();
            builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = builder.Build();
            var cadenaDato = "not string connection found";
            cadenaDato = root.GetConnectionString("cn");
            return cadenaDato;
        }


        public int guardarDatos(TipoMedicamentoEL myTipoMedicamento)
        {
            BussinesLayer.TipoMedicamentoBL tipoMedicamentoBL = new BussinesLayer.TipoMedicamentoBL();
            return tipoMedicamentoBL.guardarDatos(myTipoMedicamento);
        }


        public TipoMedicamentoEL recuperarTipoMedicamento(int idMedicamento)
        {


            BussinesLayer.TipoMedicamentoBL tipoMedicamentoBL = new BussinesLayer.TipoMedicamentoBL();
            return tipoMedicamentoBL.recuperarTipoMedicamento(idMedicamento);
        }

        public int updateTipoMedicamento(TipoMedicamentoEL myTipoMedicamento)
        {
            BussinesLayer.TipoMedicamentoBL tipoMedicamentoBL = new BussinesLayer.TipoMedicamentoBL();
            return tipoMedicamentoBL.updateTipoMedicamento(myTipoMedicamento);
        }

    }



}
