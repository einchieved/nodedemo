const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("\nFirst Number: ", function (valueA) {
    rl.question("\nSecond Number: ", function (valueB) {
        rl.write('\nResult: ' + (parseFloat(valueA) + parseFloat(valueB)) + '\n');
        rl.close();
    })
})
