const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
    {
        type:'input',
        message:'Project Title?',
        name:'title',
        
    },
    {
        type:'input',
        message:'Project Description?',
        name:'description',
        
    },
    {
        type:'input',
        message:'Installation instructions?',
        name:'installation',
        
    },
    {
        type:'input',
        message:'Usage Information?',
        name:'usage',
       
    },
    {
        type:'input',
        message:'Contribution Guidelines?',
        name:'contributing',
        
    },
    {
        type:'input',
        message:'Test Instructions?',
        name:'tests',
       
    },
    {
        type:'input',
        message:'For question(email)?',
        name:'email',
        
    },
    {
        type:'input',
        message:'For question(github)?',
        name:'github',
        
    },
    {
        type:'list',
        choices:["MIT", "ISC", "MOZILLA", "ODBL"],
        message:'License?',
        name:'license',
        
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            console.log("Could not save file: ", err);
        }else {
        console.log("Sucess: new README.md file generated inside the docs folder!");
        }
    });
}

function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>{
        deleteReadme();
        const mark = generateMarkdown(answers);
        writeToFile('./docs/README.md', mark);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment.")
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
          console.log("error other than prompt")
        }
    });
}

function deleteReadme(){
    try {
        if (fs.existsSync('./docs/README.md')) {
            fs.unlink('./docs/README.md', (err) => {
                if (err) {
                    throw err;
                }
                console.log("Old README.md file deleted successfully.");
            });
        }
      } catch(err) {
        console.error(err)
      }
}

init();