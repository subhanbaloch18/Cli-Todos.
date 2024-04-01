#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what do you like to add in your todos?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more in it?",
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
;
