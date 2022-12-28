import users from "./users.js";
import inquirer from "inquirer";
import mainscreen from "./mainscreen.js";
async function login() {
    const answer = await inquirer.prompt([{
            name: "AccountNumber",
            type: "input",
            message: "Please Enter Your Account Number "
        }, {
            name: "pin",
            type: "password",
            message: "Please Enter your PIN COAD "
        }]);
    let user = users.find(x => x.accounnumber == answer.AccountNumber && x.pincoad == answer.pin);
    if (typeof user != "undefined") {
        console.log(`WELCOME ${user.name}`);
        mainscreen(user.balance);
    }
    else {
        console.log("Please enter a correct information ");
    }
}
;
export default login;
