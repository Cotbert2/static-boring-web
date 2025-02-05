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
    }
}
