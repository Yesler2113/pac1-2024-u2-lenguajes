using System.ComponentModel.DataAnnotations;

namespace BackendCalc_IMC.Dtos.Imc
{
    public class ImcCreateDto
    {
        [Required(ErrorMessage = "El nombre es requerido")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "El genero es requerido")]
        public string genero { get; set; }

        [Required(ErrorMessage = "El peso es requerido")]
        public decimal peso { get; set; }

        [Required(ErrorMessage = "la altura es requerido")]
        public decimal altura { get; set; }

        [Required(ErrorMessage = "El resultado es requerido")]
        public string resultado { get; set; }
    }
}
