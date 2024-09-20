const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

 program.command('countLines')
 .description('Count the number of lines in a file')
 .argument('<file>', 'file to count')
 .action((file) => {
    const fs = require('fs');
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err) {
            return console.log(err);
        }
        let total = 0;
        for(let i=1; i<data.length; i++) {
            if(data[i] === '\n') {
                total++;
            }
        }
        console.log(`total number of lines in ${file} is ${total}`)
    });
 });


 program.parse();