using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendCalc_IMC.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DtosImc",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    nombre = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    genero = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    peso = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    altura = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    resultado = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DtosImc", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DtosImc");
        }
    }
}
