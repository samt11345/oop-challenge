const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
    }
}
const generateLogo = require('./utils/generateLogo');
const questions = [
    {
        type: 'list',
        message: 'what shape would you like?',
        name: 'shape',
        choices: [
            'triangle',
            'square',
            'circle'
        ]
    },

    {
        type: 'input',
        message: 'what color would you like the shape to be?',
        name: 'shapeColor'
    },

    {
        type: 'input',
        message: ' type in character set of 3 letters',
        name: 'text',
    },

    {
        type: 'input',
        message: 'what color would you like the text?',
        name: 'textColor'

    },

]

inquirer.prompt (questions).then(anwsers=>{
const logo = generateLogo(anwsers)
console.log(logo)
fs.writeFile("logo.svg",logo,function(err){
    if(err){throw err} else (console.log("file was written!!"))
})
})

