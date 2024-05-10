#! /usr/bin/env node
import inquirer from "inquirer";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Competitor {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

console.log("\nWelcome to the adventure game!\n\n");

let player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Please enter your name:",
  },
]);

let competitor = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: "Select your competitor:",
    choices: ["Commando", "Terminator", "Boss"],
  },
]);

let p1 = new Player(player.name);
let c1 = new Competitor(competitor.select);

do {
  if (competitor.select == "Commando") {
    let ask = await inquirer.prompt([
      {
        name: "option",
        type: "list",
        message: "What would you like to do?",
        choices: ["Attack", "Energy Drink", "Medical"],
      },
    ]);
    if (ask.option == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(` ${p1.name} fuel is ${p1.fuel}`);
        console.log(` ${c1.name} fuel is ${c1.fuel}`);

        if (p1.fuel <= 0) {
          console.log("\noh! You Lose");
          process.exit();
        }
      }
      if (num <= 0) {
        c1.fuelDecrease();
        console.log(` ${p1.name} fuel is ${p1.fuel}`);
        console.log(` ${c1.name} fuel is ${c1.fuel}`);
        if (c1.fuel <= 0) {
          console.log("\n*****You Win*****");
          process.exit();
        }
      }
    }
    if (ask.option == "Energy Drink") {
      p1.fuelIncrease();
      console.log(`You get a energy drink now your fuel is ${p1.fuel}`);
    }
    if (ask.option == "Medical") {
      console.log("\nYou have been defeated! Game Over");
      process.exit();
    }
  }
  if (competitor.select == "Terminator") {
    let ask = await inquirer.prompt([
      {
        name: "option",
        type: "list",
        message: "What would you like to do?",
        choices: ["Attack", "Energy Drink", "Medical"],
      },
    ]);
    if (ask.option == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(` ${p1.name} fuel is ${p1.fuel}`);
        console.log(` ${c1.name} fuel is ${c1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("\n oh! You Lose");
          process.exit();
        }
      }
      if (num <= 0) {
        c1.fuelDecrease();
        console.log(` ${p1.name} fuel is ${p1.fuel}`);
        console.log(` ${c1.name} fuel is ${c1.fuel}`);
        if (c1.fuel <= 0) {
          console.log("\n*****You Win*****");
          process.exit();
        }
      }
    }
    if (ask.option == "Energy Drink") {
      p1.fuelIncrease();
      console.log(`You get a energy drink now your fuel is ${p1.fuel}`);
    }
    if (ask.option == "Medical") {
      console.log("\nYou have been defeated! Game Ove");
      process.exit();
    }
  }
  if (competitor.select == "Boss") {
    let ask = await inquirer.prompt([
      {
        name: "option",
        type: "list",
        message: "What would you like to do?",
        choices: ["Attack", "Energy Drink", "Medical"],
      },
    ]);
    if (ask.option == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(` ${p1.name} fuel is ${p1.fuel}`);
        console.log(` ${c1.name} fuel is ${c1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("\n oh! You Lose");
          process.exit();
        }
      }
      if (num <= 0) {
        c1.fuelDecrease();
        console.log(` ${p1.name} fuel is ${p1.fuel}`);
        console.log(` ${c1.name} fuel is ${c1.fuel}`);
        if (c1.fuel <= 0) {
          console.log("\n*****You Win*****");
          process.exit();
        }
      }
    }
    if (ask.option == "Energy Drink") {
      p1.fuelIncrease();
      console.log(`you get a energy drink now your fuel is ${p1.fuel}`);
    }
    if (ask.option == "Medical") {
      console.log("\nYou have been defeated! Game Over.");
      process.exit();
    }
  }
} while (true);
