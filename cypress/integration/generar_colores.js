describe("Generacion de Colores", function() {
  it("Visitar la pagina para generar paleta de colores", function() {
    cy.visit("https://afcarrion.github.io/VRT_colorPallete/palette.html");
    cy.contains("botonGenerar").click();
  });
});
