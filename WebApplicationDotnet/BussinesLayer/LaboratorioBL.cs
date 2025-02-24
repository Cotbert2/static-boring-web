

using DataLayer;
using EntityLayer;

namespace BussinesLayer
{
    public class LaboratorioBL
    {

        public List<LaboratorioEL> listarLaboratorios()
        {
            LaboratorioDL laboratorios = new LaboratorioDL();
            return laboratorios.listarLaboratorios();

        }


        public List<LaboratorioEL> filtrarLaboratorio(LaboratorioEL myLaboratorio)
        {
            LaboratorioDL laboratorios = new LaboratorioDL();
            return laboratorios.filtrarLaboratorios(myLaboratorio);

        }
    }
}
