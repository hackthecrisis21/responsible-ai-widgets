import { getSpan } from "../../support/App";

describe("dashboard", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:4200/#/fairlearn/binaryClassifier/light/english/Version-2"
    );
  });

  it("should display header", () => {
    getSpan("Fairlearn dashboard").should("exist");
  });
});
