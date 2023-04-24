#! /usr/bin/env node
import inquirer from "inquirer"
import { type } from "os"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"
import figlet from "figlet"
import { log } from "console"
import { CLIENT_RENEG_LIMIT } from "tls"

const freeze = () =>
    new Promise((resolve) => {
        return setTimeout(resolve, 1000)
    })
const freeze2 = () =>
    new Promise((resolve) => {
        return setTimeout(resolve, 2500)
    })

let wellcome = chalkAnimation.rainbow(figlet.textSync("Well Come") + ("(Guessing Game!!!)"))
await freeze();
wellcome.stop();
let startup = chalkAnimation.karaoke(`You have 3 Rounds.Let's start....`)
await freeze2();
startup.stop()
const Guess = async () => {
    const ques = (await inquirer.prompt([
        {
            name: "input1",
            type: 'number',
            message: "Guess the Number",
        }
    ]));

    const { input1 } = ques;

    if (input1 === 3) {
        console.log(chalk.blue(figlet.textSync("Wow")), chalk.cyan(`...... Congrats you guess the Right Number in ${1}st time.`))
    }
    else console.log(chalk.red("Ooops.... Your's Guess Number Not Match.. "))

    let round2 = await inquirer.prompt(
        {
            name: "input01",
            type: 'number',
            message: "Round 2: Guess the Number",

        })
    const input01 = round2;
    if (round2.input01 === 3) {
        console.log(chalk.blue(figlet.textSync("Wow")), chalk.cyan(`...... Congrats you guess the Right Number in ${2}nd time.`))
    }
    else { console.log(chalk.red("Ooops....Your's Guess Number Not Match.. ")) }

    let round3 = await inquirer.prompt(
        {
            name: "input001",
            type: 'number',
            message: "Round 3: Guess the Number",

        })
    const input001 = round3;
    if (round3.input001 === 3) {
        console.log(chalk.blue(figlet.textSync("Wow")), chalk.cyan(`...... Congrats you guess the Right Number in ${3}rd time.`))
    }
    else { console.log(chalk.red("Ooops....Again Your's Guess Number Not Match.. ")) }

}

const startagain = async () => {
    do {
        await Guess();
        var restart = await inquirer.prompt({
            type: 'input',
            name: 'again',
            message: `Did you want to Play again press y otherwise n: ( y/n )`
        })

    } while (restart.again === 'y' || restart.again === 'Y' || restart.again === 'yes' || restart.again === 'YES' || restart.again === 'yea')
}

startagain()
