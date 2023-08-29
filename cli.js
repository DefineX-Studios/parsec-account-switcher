#!/usr/bin/env node
const {addAccount,deleteAccount,returnAccountList, switchAccount} = require('./lib/account-handler')
const {global_state,initialize} = require("./lib/initialize")
const packageJSON = require('./package.json')
const {error, errorToMessage} = require("./lib/error");
const docopt = require('docopt').docopt;
const {checkAdmin} = require("./lib/process-handler")
const doc = `
Parsec Account Switcher

Usage:
  parsec-switcher -s <nickname> | --switch <nickname>
  parsec-switcher -a <nickname> | --add <nickname>
  parsec-switcher -d <nickname> | --delete <nickname>
  parsec-switcher -l | --list
  parsec-switcher -h | --help
  parsec-switcher setup <parsecdLocation>
  parsec-switcher --version

Options:
  -h --help     Show this screen.
  --version     Show version.
`;

const options = docopt(doc, { version: packageJSON.version });
/**
 *
 * @returns {errorCode}
 */
async function main(){
    let error1 = await initialize()
    if (error1){
        return error1
    }
    if(!global_state.flags.parsecDataLocationFound){

        return error.PARSEC_NOT_INSTALLED
    }
    if(!global_state.flags.parsecdFound){
        return error.PARSECD_NOT_IN_DEFAULT
    }
    if (!await checkAdmin()){
        return error.ADMIN_REQUIRED
    }
    if (options['-a'] || options['--add']){

    console.log(`Adding ${options['<nickname>']}`);

    return addAccount(options['<nickname>']);

    }
    if (options['-d'] || options['--delete']){
        console.log(` Deleting account ${options['<nickname>']}`);
       return deleteAccount(options['<nickname>']);

    }
    if (options['-s'] || options['--switch']){
        console.log(`Switching account to ${options['<nickname>']}`);
        return switchAccount(options['<nickname>'])


    }
    if (options['-l'] || options['--list']){
        console.log('Printing the list ')
        console.log(returnAccountList())
        return error.SUCCESS
    }
    if(options['setup']){
        global_state.config.parsecdLocation = options['<parsecdLocation>']
    }
    return error.SUCCESS
}
async function runProg(){
    let code = await main()
    console.log(errorToMessage[code])
}
runProg()