const PORT: number = (Cypress.env("PORT") as number) || 8089;

describe("Express", () => {
  it("returns pong", () => {
    cy.request(`http://localhost:${PORT}/api/ping`).then(
      (response: Cypress.Response<{ message: string }>) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("pong");
      },
    );
  });

  it("handles not found", () => {
    cy.request({
      url: `http://localhost:${PORT}/api/pig`,
      failOnStatusCode: false,
    })
      .its("status")
      .should("eq", 404);
  });
});
