module.exports = {
  name: "8ball",
  code: `$reply
8ball is Thinking... $editIn[1s;||$randomText[YES YES YES YES **Y E S**;NO NO NO NO;Like duh;An error occurred, please ask another question;My sources say no;Yes;No;Maybe;Yes, definitely;Ask again later;Better not tell you now;You will never reach the truth;Concentrate and ask again;THAT'S A SOLID NO;When you grow one braincell, yes;No! Shut up! You're damn annoying!;I'm short on magical energy so I can't give you an answer yet;Give this poor 8ball a break;Sure, why not?;There's a 50-50 chance it's true]||]
   
   $onlyIf[$message!=;$djsEval[const errormsg = require('./config/error.js');
    channel.send(errormsg.eightball)]]`
};