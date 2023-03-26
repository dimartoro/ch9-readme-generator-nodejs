// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
inquirer
.prompt([
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

    ])
    .then((answers) =>{
        //writeToFile(answers.ProjectTitle + '.md', answers);
        const mark = generateMarkdown(answers);
        fs.writeFile('./docs/README.md', mark, function(err){
            if(err){
                console.log("Could not save file: ", err);
            }else {
            console.log("Sucess: new README.md file generated inside the docs folder!");
            }
        });

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

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


