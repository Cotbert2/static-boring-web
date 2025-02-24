using DataLayer;
using EntityLayer;

namespace BussinesLayer
{
    public class TipoMedicamentoBL
    {
        public List<TipoMedicamentoEL> listTipoMedicamento()
        {
            TipoMedicamentoDL tipoMedicamentoDL = new TipoMedicamentoDL();
            return tipoMedicamentoDL.listTipoMedicamento();
        }

        public List<TipoMedicamentoEL> filtrarTipoMedicamento(string descripcion)
        {
            TipoMedicamentoDL tipoMedicamentoDL = new TipoMedicamentoDL();
            return tipoMedicamentoDL.filtrarTipoMedicamento(descripcion);
        }

        public int guardarDatos(TipoMedicamentoEL myTipoMedicamento)
        {
            TipoMedicamentoDL tipoMedicamentoDL = new TipoMedicamentoDL();
            return tipoMedicamentoDL.guardarDatos(myTipoMedicamento);
        }

        public TipoMedicamentoEL recuperarTipoMedicamento(int idMedicamento)
        {
            TipoMedicamentoDL tipoMedicamentoDL = new TipoMedicamentoDL();
            return tipoMedicamentoDL.recuperarTipoMedicamento(idMedicamento);
        }

        public int updateTipoMedicamento(TipoMedicamentoEL myTipoMedicamento)
        {
            TipoMedicamentoDL tipoMedicamentoDL = new TipoMedicamentoDL();
            return tipoMedicamentoDL.updateTipoMedicamento(myTipoMedicamento);
        }
    }
}
