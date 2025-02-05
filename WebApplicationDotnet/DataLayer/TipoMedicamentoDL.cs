
using EntityLayer;
namespace DataLayer
{
    public class TipoMedicamentoDL
    {
        public List<TipoMedicamentoEL> listTipoMedicamento()
        {
            List<TipoMedicamentoEL> listTipoMedicamento = new List<TipoMedicamentoEL>();
            listTipoMedicamento.Add(new TipoMedicamentoEL { idMedicamento = 1, nombre = "Medicamento 1", descripcion = "Descripcion 1" });
            listTipoMedicamento.Add(new TipoMedicamentoEL { idMedicamento = 2, nombre = "Medicamento 2", descripcion = "Descripcion 2" });
            listTipoMedicamento.Add(new TipoMedicamentoEL { idMedicamento = 3, nombre = "Medicamento 3", descripcion = "Descripcion 3" });

            return listTipoMedicamento;
        }
    }
}
