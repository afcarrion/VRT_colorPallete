describe("Generacion de Colores", function() {
  it("Visitar la pagina para generar paleta de colores", function() {
    cy.visit("https://afcarrion.github.io/VRT_colorPallete/palette.html");
    cy.screenshot("Primero de generacion");
    cy.get(".buttons")
      .contains("Generar")
      .click();
    cy.wait(2000);
    cy.screenshot("Segundo de generacion");
  });
});

describe("Limpiar Paleta de Colores", function() {
  it("Visitar la pagina para generar paleta de colores", function() {
    cy.visit("https://afcarrion.github.io/VRT_colorPallete/palette.html");
    cy.screenshot("Primero de Limpiar");
    cy.get(".buttons")
      .contains("Generar")
      .click();
    cy.wait(650);
    cy.get(".buttons")
      .contains("Limpiar")
      .click()
      .end();
    cy.wait(2000);
    cy.screenshot("Segundo de Limpiar");
  });
});
