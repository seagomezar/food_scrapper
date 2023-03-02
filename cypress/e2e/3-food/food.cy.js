/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

import { foods } from "./csvjson";
let items = [];

describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://www.bedca.net/bdpub/");
    items = [];
  });

  const chunkSize = Math.floor(foods.length / 100)+1;
  for (let chunkId of [96]){
  //for(let chunkId = 95; chunkId < 100; chunkId++){

  
  it(`Part-${chunkId}`, () => {
    
    for (let i = chunkId*chunkSize; i < (chunkId+1)*chunkSize; i++) {
      cy.get("#navigation > div:nth-child(4) > a").click();
      cy.get("#Avanzada > span").click();
      cy.get("#content2 > form:nth-child(5) > fieldset > p:nth-child(3) > input").click();
      cy.get("#content2 > form:nth-child(5) > fieldset > p:nth-child(3) > input").type(foods[i].Nombre);
      cy.get("#content2 > form:nth-child(5) > fieldset > input").click();
      cy.get("#foodname > a").first().click();
      // Extract the thing
      const newFood = {
        id: foods[i].Id,
        nombre: foods[i].Nombre,
        name: foods[i].Name,
        information: "",
        proximals: {},
        carbohydrates: {},
        fats: [],
        vitamins: [],
        minerals: [],
      };
      cy.get("#content2 h4:nth-child(11)").then(($el) => {
        newFood.information = $el.text();
      });

      // Alcohol
      cy.get("#content2 tbody:nth-child(2) > tr > td:nth-child(1)").then(
        ($el) => {
          newFood.proximals.alcoholEtanol = { name: $el.text() };
        }
      );

      cy.get("#content2 tbody:nth-child(2) > tr > td:nth-child(2)").then(
        ($el) => {
          newFood.proximals.alcoholEtanol.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(2) > tr > td:nth-child(3)").then(
        ($el) => {
          newFood.proximals.alcoholEtanol.unit = $el.text();
        }
      );

      // Energia Total: totalEnergy
      cy.get("#content2 tbody:nth-child(3) > tr > td:nth-child(1)").then(
        ($el) => {
          newFood.proximals.totalEnergy = { name: $el.text() };
        }
      );

      cy.get("#content2 tbody:nth-child(3) > tr > td:nth-child(2)").then(
        ($el) => {
          newFood.proximals.totalEnergy.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(3) > tr > td:nth-child(3)").then(
        ($el) => {
          newFood.proximals.totalEnergy.unit = $el.text();
        }
      );

      // proteina, total: protein, whole
      cy.get("#content2 tbody:nth-child(4) > tr > td:nth-child(1)").then(
        ($el) => {
          newFood.proximals.proteinWhole = { name: $el.text() };
        }
      );

      cy.get("#content2 tbody:nth-child(4) > tr > td:nth-child(2)").then(
        ($el) => {
          newFood.proximals.proteinWhole.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(4) > tr > td:nth-child(3)").then(
        ($el) => {
          newFood.proximals.proteinWhole.unit = $el.text();
        }
      );

      // agua (humedad):water (humidity)
      cy.get("#content2 tbody:nth-child(5) > tr > td:nth-child(1)").then(
        ($el) => {
          newFood.proximals.water = { name: $el.text() };
        }
      );

      cy.get("#content2 tbody:nth-child(5) > tr > td:nth-child(2)").then(
        ($el) => {
          newFood.proximals.water.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(5) > tr > td:nth-child(3)").then(
        ($el) => {
          newFood.proximals.water.unit = $el.text();
        }
      );
      // Seguir hasta carbohidratos
      // fibra, dietetica total : fiber, total dietary
      cy.get("#content2 tbody:nth-child(8) > tr > td:nth-child(1)").then(
        ($el) => {
          newFood.carbohydrates.fiberTotal = { name: $el.text() };
        }
      );

      cy.get("#content2 tbody:nth-child(8) > tr > td:nth-child(2)").then(
        ($el) => {
          newFood.carbohydrates.fiberTotal.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(8) > tr > td:nth-child(3)").then(
        ($el) => {
          newFood.carbohydrates.fiberTotal.unit = $el.text();
        }
      );

      // carbohydrates
      cy.get("#content2 tbody:nth-child(9) > tr > td:nth-child(1)").then(
        ($el) => {
          newFood.carbohydrates.carbohydrates = { name: $el.text() };
        }
      );

      cy.get("#content2 tbody:nth-child(9) > tr > td:nth-child(2)").then(
        ($el) => {
          newFood.carbohydrates.carbohydrates.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(9) > tr > td:nth-child(3)").then(
        ($el) => {
          newFood.carbohydrates.carbohydrates.unit = $el.text();
        }
      );

      // Fats
      const newFat10 = {};
      cy.get("#content2 tbody:nth-child(10) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat10.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(10) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat10.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(10) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat10.unit = $el.text();
        }
      );
      newFood.fats.push(newFat10);

      const newFat11 = {};
      cy.get("#content2 tbody:nth-child(11) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat11.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(11) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat11.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(11) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat11.unit = $el.text();
        }
      );
      newFood.fats.push(newFat11);

      const newFat12 = {};
      cy.get("#content2 tbody:nth-child(12) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat12.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(12) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat12.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(12) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat12.unit = $el.text();
        }
      );
      newFood.fats.push(newFat12);

      const newFat13 = {};
      cy.get("#content2 tbody:nth-child(13) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat13.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(13) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat13.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(13) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat13.unit = $el.text();
        }
      );
      newFood.fats.push(newFat13);

      const newFat14 = {};
      cy.get("#content2 tbody:nth-child(14) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat14.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(14) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat14.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(14) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat14.unit = $el.text();
        }
      );
      newFood.fats.push(newFat14);

      const newFat15 = {};
      cy.get("#content2 tbody:nth-child(15) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat15.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(15) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat15.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(15) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat15.unit = $el.text();
        }
      );
      newFood.fats.push(newFat15);

      const newFat16 = {};
      cy.get("#content2 tbody:nth-child(16) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat16.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(16) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat16.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(16) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat16.unit = $el.text();
        }
      );
      newFood.fats.push(newFat16);

      const newFat17 = {};
      cy.get("#content2 tbody:nth-child(17) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat17.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(17) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat17.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(17) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat17.unit = $el.text();
        }
      );
      newFood.fats.push(newFat17);

      const newFat18 = {};
      cy.get("#content2 tbody:nth-child(18) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat18.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(18) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat18.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(18) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat18.unit = $el.text();
        }
      );
      newFood.fats.push(newFat18);

      const newFat19 = {};
      cy.get("#content2 tbody:nth-child(19) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat19.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(19) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat19.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(19) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat19.unit = $el.text();
        }
      );
      newFood.fats.push(newFat19);

      const newFat20 = {};
      cy.get("#content2 tbody:nth-child(20) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat20.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(20) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat20.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(20) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat20.unit = $el.text();
        }
      );
      newFood.fats.push(newFat20);

      const newFat21 = {};
      cy.get("#content2 tbody:nth-child(21) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat21.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(21) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat21.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(21) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat21.unit = $el.text();
        }
      );
      newFood.fats.push(newFat21);

      const newFat22 = {};
      cy.get("#content2 tbody:nth-child(22) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat22.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(22) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat22.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(22) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat22.unit = $el.text();
        }
      );
      newFood.fats.push(newFat22);

      // Vitamins
      const newFat23 = {};
      cy.get("#content2 tbody:nth-child(23) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat23.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(23) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat23.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(23) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat23.unit = $el.text();
        }
      );
      newFood.vitamins.push(newFat23);

      const newFat24 = {};
      cy.get("#content2 tbody:nth-child(24) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat24.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(24) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat24.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(24) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat24.unit = $el.text();
        }
      );
      newFood.vitamins.push(newFat24);

      const newFat25 = {};
      cy.get("#content2 tbody:nth-child(25) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat25.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(25) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat25.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(25) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat25.unit = $el.text();
        }
      );
      newFood.vitamins.push(newFat25);

      const newFat26 = {};
      cy.get("#content2 tbody:nth-child(26) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat26.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(26) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat26.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(26) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat26.unit = $el.text();
        }
      );
      newFood.vitamins.push(newFat26);

      const newFat27 = {};
      cy.get("#content2 tbody:nth-child(27) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat27.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(27) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat27.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(27) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat27.unit = $el.text();
        }
      );
      newFood.vitamins.push(newFat27);

      const newFat28 = {};
      cy.get("#content2 tbody:nth-child(28) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat28.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(28) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat28.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(28) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat28.unit = $el.text();
        }
      );
      newFood.vitamins.push(newFat28);

      const newFat29 = {};
      cy.get("#content2 tbody:nth-child(29) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat29.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(29) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat29.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(29) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat29.unit = $el.text();
        }
      );
      newFood.vitamins.push(newFat29);

      const newFat30 = {};
      cy.get("#content2 tbody:nth-child(30) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat30.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(30) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat30.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(30) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat30.unit = $el.text();
        }
      );
      newFood.vitamins.push(newFat30);

      const newFat31 = {};
      cy.get("#content2 tbody:nth-child(31) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat31.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(31) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat31.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(31) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat31.unit = $el.text();
        }
      );
      newFood.vitamins.push(newFat31);

      const newFat32 = {};
      cy.get("#content2 tbody:nth-child(32) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat32.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(32) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat32.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(32) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat32.unit = $el.text();
        }
      );
      newFood.vitamins.push(newFat32);

      //minerals
      const newFat33 = {};
      cy.get("#content2 tbody:nth-child(33) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat33.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(33) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat33.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(33) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat33.unit = $el.text();
        }
      );
      newFood.minerals.push(newFat33);

      const newFat34 = {};
      cy.get("#content2 tbody:nth-child(34) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat34.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(34) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat34.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(34) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat34.unit = $el.text();
        }
      );
      newFood.minerals.push(newFat34);

      const newFat35 = {};
      cy.get("#content2 tbody:nth-child(35) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat35.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(35) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat35.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(35) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat35.unit = $el.text();
        }
      );
      newFood.minerals.push(newFat35);
/*
      const newFat36 = {};
      cy.get("#content2 tbody:nth-child(36) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat36.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(36) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat36.value = $el.text();
        }
      );
      
      cy.get("#content2 tbody:nth-child(36) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat36.unit = $el.text();
        }
      );
      newFood.minerals.push(newFat36);

      
      const newFat37 = {};
      cy.get("#content2 tbody:nth-child(37) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat37.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(37) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat37.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(37) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat37.unit = $el.text();
        }
      );
      newFood.minerals.push(newFat37);

      const newFat38 = {};
      cy.get("#content2 tbody:nth-child(38) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat38.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(38) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat38.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(38) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat38.unit = $el.text();
        }
      );
      newFood.minerals.push(newFat38);
      

      const newFat39 = {};
      cy.get("#content2 tbody:nth-child(39) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat39.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(39) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat39.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(3) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat39.unit = $el.text();
        }
      );
      newFood.minerals.push(newFat39);

      const newFat40 = {};
      cy.get("#content2 tbody:nth-child(40) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat40.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(40) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat40.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(40) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat40.unit = $el.text();
        }
      );
      newFood.minerals.push(newFat40);

      const newFat41 = {};
      cy.get("#content2 tbody:nth-child(41) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat41.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(41) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat41.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(41) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat41.unit = $el.text();
        }
      );
      newFood.minerals.push(newFat41);

      const newFat42 = {};
      cy.get("#content2 tbody:nth-child(42) > tr > td:nth-child(1)").then(
        ($el) => {
          newFat42.name = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(42) > tr > td:nth-child(2)").then(
        ($el) => {
          newFat42.value = $el.text();
        }
      );
      cy.get("#content2 tbody:nth-child(42) > tr > td:nth-child(3)").then(
        ($el) => {
          newFat42.unit = $el.text();
        }
      );
      newFood.minerals.push(newFat42);
      */
      items.push(newFood);
      expect(items).to.have.length.greaterThan(0);
      cy.writeFile(`part-${chunkId}.json`, items);
    }
    
    
    expect(items).to.have.length(chunkSize)
  });

}

});
