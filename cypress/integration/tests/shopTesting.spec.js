/* eslint-disable no-undef */

beforeEach(() => {
  cy.visit("http://localhost:3000");
});

describe("Shop", () => {
  // beforeEach(() => {
  //   store.dispatch({ type: actions.RESET });
  //   store.dispatch({
  //     type: actions.SET_PRODUCTS,
  //     payload: {
  //       products: [
  //         { id: 1, name: "item1", amount: 3, cost: 10 },
  //         { id: 2, name: "item2", amount: 3, cost: 25 },
  //         { id: 3, name: "item3", amount: 3, cost: 35 },
  //       ],
  //     },
  //   });
  // });
  it("Can add products to cart", () => {
    cy.get(".addToCartBtn").eq(0).click();
    cy.contains("Cost: $10");
    cy.contains("Amount: 1");
    cy.get(".addToCartBtn").eq(0).click();
    cy.contains("Amount: 2");
  });

  it("Can buy from shop", () => {
    cy.get(".addToCartBtn").eq(0).click();
    cy.get(".addToCartBtn").eq(0).click();
    cy.get(".addToCartBtn").eq(1).click();
    cy.get(".buyBtn").click();
    cy.get(".totalH3").contains("Total: $0");
  });

  it("If all products has been moved to cart then show massage", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(".addToCartBtn").eq(0).click();
    }
    cy.contains("No products for now");
  });
});
