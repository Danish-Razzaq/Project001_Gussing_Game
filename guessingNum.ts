#! /usr/lib/env node
import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"
import figlet from "figlet"


const rainbowsleep = () =>
    new Promise((resolve) => {
        return setTimeout(resolve, 1000)
    })
const rainbowsleep2 = () =>
    new Promise((resolve) => {
        return setTimeout(resolve, 2500)
    })

let wellcome = chalkAnimation.rainbow(figlet.textSync("Well Come") + ("(Guessing Game!!!)"))
await rainbowsleep();
wellcome.stop();
let startup = chalkAnimation.karaoke(`You have 4 Rounds.Let's start....`)
await rainbowsleep2();
startup.stop()

const Guess = async () => {
    const ques = (await inquirer.prompt([
        {
            name: "input",
            type: 'number',
            message: "Guess The Number :",
        }
    ]));

    const { input } = ques;

    if (input === 5) {
        console.log(chalk.blue(figlet.textSync("Wow")), chalk.cyan(`...... Congrats you guess the Right Number.`))
    }
    else if (input === 1 || input === 2 || input === 3 || input === 4) {
        console.log(chalk.red(`Ooops.... Your's Guess Number Not Match.. Number is grater then ${chalk.yellow(input)} `))
    }
    else if (input === 6 || input === 7 || input === 8 || input === 9) {
        console.log(chalk.red(`Ooops.... Your's Guess Number Not Match.. Number is lesser then ${chalk.yellow(input)} `))
    }

    else {
        console.log("PLz enter Numarical Value B/w 0-9");
    }
}

for (let i = 1; i < 4; i++) {

    await Guess();

}
do {
    await Guess();

    var restart = await inquirer.prompt({
        type: 'input',
        name: 'again',
        message: chalk.magentaBright('Did you want to Play again press y otherwise n:') + '( y/n )',
        default: 'y'

    })

    if (restart.again === 'Y' || restart.again === 'y' || restart.again === 'Yes' || restart.again === 'yes') {
        for (let i = 1; i < 4; i++) {

            await Guess();
        }
    }
    else { }

} while (restart.again === 'Y' || restart.again === 'y' || restart.again === 'Yes' || restart.again === 'yes');
