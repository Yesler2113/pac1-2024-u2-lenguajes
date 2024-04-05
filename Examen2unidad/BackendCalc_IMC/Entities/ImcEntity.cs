using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendCalc_IMC.Entities
{
    [Table("DtosImc")]
    public class ImcEntity
    {
        [Column("id")]
        [Key]
        public Guid Id { get; set; }

        [Column("nombre")]
        [Required]
        [StringLength(50)]

        public string nombre { get; set; }

        [Column("genero")]
        [Required]
        [StringLength(50)]
        public string genero { get; set; }

        [Column("peso")]
        [Required]
        public decimal peso { get; set; }


        [Column("altura")]
        [Required]
        public decimal altura { get; set; }

        [Column("resultado")]
        [Required]
        [StringLength(100)]
        public string resultado { get; set; }

    }
}
