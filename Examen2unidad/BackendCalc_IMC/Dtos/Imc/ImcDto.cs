namespace BackendCalc_IMC.Dtos.Imc
{
    public class ImcDto
    {
        public Guid Id { get; set; }

        public string nombre { get; set; }
        public string genero { get; set; }

        public decimal altura { get; set; }

        public decimal peso { get; set; }

        public string resultado { get; set; }
    }
}
