

using DataLayer;
using EntityLayer;

namespace BussinesLayer
{
    public  class SucursalBL
    {
        public List<SucursalEL> listarSucursales()
        {
            TipoMedicamentoDL tipoMedicamentoDL = new TipoMedicamentoDL();
            return tipoMedicamentoDL.listarSucursales();

        }
    }
}
