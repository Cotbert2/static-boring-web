public bool CreateNewCustomer(CustomerEL customerToCreate)
{
    IConfigurationBuilder builder = new ConfigurationBuilder();
    builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
    var root = builder.Build();
    var connectionString = root.GetConnectionString("cn");

    using (SqlConnection cn = new SqlConnection(connectionString))
    {
        try
        {
            cn.Open();
            using (SqlCommand cmd = new SqlCommand("InsertarCliente", cn))
            {
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Cedula", customerToCreate.cedula);
                cmd.Parameters.AddWithValue("@Nombres", customerToCreate.nombres);
                cmd.Parameters.AddWithValue("@Apellidos", customerToCreate.apellidos);
                cmd.Parameters.AddWithValue("@Telefono", customerToCreate.telefono);
                cmd.Parameters.AddWithValue("@Direccion", customerToCreate.direccion);

                return cmd.ExecuteNonQuery() > 0;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error [-]: {ex.Message}");
            return false;
        }
    }
}


















