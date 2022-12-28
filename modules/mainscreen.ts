import inquirer from "inquirer";

async function mainscreen(balance:number) {
    let option = await inquirer.prompt ([{
        name:"Menu",
        type:"list",
        message:"Please select any of following",
        choices:["cashWidraw","cashDeposit","BalanceCheck","UtilityBills","Exits"]
    }]);
    switch (option.Menu) {
        case "cashWidraw":
            console.log("widraw");
            break;
        
            case "cashDeposit":
                console.log("cashDeposit");
                break;
         case "BalanceCheck":
            console.log(`your balance is ${balance}`);
            break;
        case "UtilityBills":
                console.log("UtilityBills");
                break;
        case "Exits":
                    console.log("Exits");
                    break;
    
        default:
            break;
    }
}

export default mainscreen;