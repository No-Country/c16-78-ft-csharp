using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend_SDH.Migrations
{
    /// <inheritdoc />
    public partial class Add_CookingMinutes_to_Recipes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CookingMinutes",
                table: "Recipes",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CookingMinutes",
                table: "Recipes");
        }
    }
}
