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
    }
}
