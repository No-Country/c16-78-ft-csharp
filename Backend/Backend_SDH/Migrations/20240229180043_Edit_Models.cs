using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend_SDH.Migrations
{
    /// <inheritdoc />
    public partial class Edit_Models : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UsersFavouriteRecipes");

            migrationBuilder.DropColumn(
                name: "KcalTotal",
                table: "Recipes");

            migrationBuilder.AddColumn<int>(
                name: "Portion",
                table: "Recipes",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Portion",
                table: "Recipes");

            migrationBuilder.AddColumn<decimal>(
                name: "KcalTotal",
                table: "Recipes",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.CreateTable(
                name: "UsersFavouriteRecipes",
                columns: table => new
                {
                    FavouriteRecipesId = table.Column<int>(type: "int", nullable: false),
                    UsersId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsersFavouriteRecipes", x => new { x.FavouriteRecipesId, x.UsersId });
                    table.ForeignKey(
                        name: "FK_UsersFavouriteRecipes_Recipes_FavouriteRecipesId",
                        column: x => x.FavouriteRecipesId,
                        principalTable: "Recipes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UsersFavouriteRecipes_Users_UsersId",
                        column: x => x.UsersId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UsersFavouriteRecipes_UsersId",
                table: "UsersFavouriteRecipes",
                column: "UsersId");
        }
    }
}
