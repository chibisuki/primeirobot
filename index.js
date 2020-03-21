const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NjkwOTE4MDk1MzAwMTk4NDkw.XnZtHg.SgFZCayR_1TrFQI37GQ5K3CvHME';

var dragosfuria = 10
var selenefuria = 10
var ethanfuria = 10

var dragosgnose = 6
var selenegnose = 3
var ethangnose = 6

bot.login(token)
bot.on ('ready', () => {
    console.log('estou pronto para ser usado')
})

bot.on('message', msg => {
    if (msg.author.bot) { return; 
    }
    
    if(msg.content === '-dragosfuria') {
        if(dragosfuria === 13){
            msg.reply('A furia de Dragos agora é 12 de um total de 10')
            dragosfuria = 12
            return;
        }
        if(dragosfuria === 12){
            msg.reply('A furia de Dragos agora é 11 de um total de 10')
            dragosfuria = 11
            return;
        }
        if(dragosfuria === 11){
            msg.reply('A furia de Dragos agora é 10 de um total de 10')
            dragosfuria = 10
            return;
        }
        if(dragosfuria === 10){
            msg.reply('A furia de Dragos agora é 9 de um total de 10')
            dragosfuria = 9
            return;
        }
        
        if(dragosfuria === 9){
            msg.reply('A furia de Dragos agora é 8 de um total de 10')
            dragosfuria = 8
            return;
        }
        if(dragosfuria === 8){
            msg.reply('A furia de Dragos agora é 7 de um total de 10')
            dragosfuria = 7
            return;
                    }
        if(dragosfuria === 7){
            msg.reply('A furia de Dragos agora é 6 de um total de 10')
            dragosfuria = 6
            return;
        } 
        if(dragosfuria === 6){
            msg.reply('A furia de Dragos agora é 5 de um total de 10')
            dragosfuria = 5
            return;
        }           
        if(dragosfuria === 5){
            msg.reply('A furia de Dragos agora é 4 de um total de 10')
            dragosfuria = 4
            return;
        }
        if(dragosfuria === 4){
            msg.reply('A furia de Dragos agora é 3 de um total de 10')
            dragosfuria = 3
            return;
        }
        if(dragosfuria === 3){
            msg.reply('A furia de Dragos agora é 2 de um total de 10')
            dragosfuria = 2
            return;          
        }
        if(dragosfuria === 2){
            msg.reply('A furia de Dragos agora é 2 de um total de 10')
            dragosfuria = 1
            return;
        }
        if(dragosfuria === 1){
            msg.reply('A furia de Dragos agora é 0 de um total de 10')
            dragosfuria = 0
            return;
        }
        if(dragosfuria === 0){
            msg.reply('A furia de Dragos agora é 0 de um total de 10')
            dragosfuria = 0
            return;
        }
    }

    if(msg.content === '+dragosfuria') {
        if(dragosfuria === 13){
            msg.reply('A furia de Dragos agora é 13 de um total de 10')
            dragosfuria = 13
            return;
        }
        if(dragosfuria === 12){
            msg.reply('A furia de Dragos agora é 13 de um total de 10')
            dragosfuria = 13
            return;
        }
        if(dragosfuria === 11){
            msg.reply('A furia de Dragos agora é 12 de um total de 10')
            dragosfuria = 12
            return;
        }
            if(dragosfuria === 10){
                msg.reply('A furia de Dragos agora é 11 de um total de 10')
                dragosfuria = 11
                return;
            }
        if(dragosfuria === 9){
            msg.reply('A furia de Dragos agora é 10 de um total de 10')
            dragosfuria = 10
            return;
        }
        if(dragosfuria === 8){
            msg.reply('A furia de Dragos agora é 9 de um total de 10')
            dragosfuria = 9
            return;
                    }
        if(dragosfuria === 7){
            msg.reply('A furia de Dragos agora é 8 de um total de 10')
            dragosfuria = 8
            return;
        } 
        if(dragosfuria === 6){
            msg.reply('A furia de Dragos agora é 7 de um total de 10')
            dragosfuria = 7
            return;
        }           
        if(dragosfuria === 5){
            msg.reply('A furia de Dragos agora é 6 de um total de 10')
            dragosfuria = 6
            return;
        }
        if(dragosfuria === 4){
            msg.reply('A furia de Dragos agora é 5 de um total de 10')
            dragosfuria = 5
            return;
        }
        if(dragosfuria === 3){
            msg.reply('A furia de Dragos agora é 4 de um total de 10')
            dragosfuria = 4
            return;          
        }
        if(dragosfuria === 2){
            msg.reply('A furia de Dragos agora é 3 de um total de 10')
            dragosfuria = 3
            return;
        }
        if(dragosfuria === 1){
            msg.reply('A furia de Dragos agora é 2 de um total de 10')
            dragosfuria = 2
            return;
        }
        if(dragosfuria === 0){
            msg.reply('A furia de Dragos agora é 1 de um total de 10')
            dragosfuria = 1
            return;
        }
    }

    if(msg.content === '-selenefuria') {
        if(selenefuria === 13){
            msg.reply('A furia de Selene agora é 12 de um total de 5')
            selenefuria = 12
            return;
        }
        if(selenefuria === 12){
            msg.reply('A furia de Selene agora é 11 de um total de 5')
            selenefuria = 11
            return;
        }
        if(selenefuria === 11){
            msg.reply('A furia de Selene agora é 10 de um total de 5')
            selenefuria = 10
            return;
        }
        if(selenefuria === 10){
            msg.reply('A furia de Selene agora é 9 de um total de 5')
            selenefuria = 9
            return;
        }
        
        if(selenefuria === 9){
            msg.reply('A furia de Selene agora é 8 de um total de 5')
            selenefuria = 8
            return;
        }
        if(selenefuria === 8){
            msg.reply('A furia de Selene agora é 7 de um total de 5')
            selenefuria = 7
            return;
                    }
        if(selenefuria === 7){
            msg.reply('A furia de Selene agora é 6 de um total de 5')
            selenefuria = 6
            return;
        } 
        if(selenefuria === 6){
            msg.reply('A furia de Selene agora é 5 de um total de 5')
            selenefuria = 5
            return;
        }           
        if(selenefuria === 5){
            msg.reply('A furia de Selene agora é 4 de um total de 5')
            selenefuria = 4
            return;
        }
        if(selenefuria === 4){
            msg.reply('A furia de Selene agora é 3 de um total de 5')
            selenefuria = 3
            return;
        }
        if(selenefuria === 3){
            msg.reply('A furia de Selene agora é 2 de um total de 5')
            selenefuria = 2
            return;          
        }
        if(selenefuria === 2){
            msg.reply('A furia de Selene agora é 2 de um total de 5')
            selenefuria = 1
            return;
        }
        if(selenefuria === 1){
            msg.reply('A furia de Selene agora é 0 de um total de 5')
            selenefuria = 0
            return;
        }
        if(selenefuria === 0){
            msg.reply('A furia de Selene agora é 0 de um total de 5')
            selenefuria = 0
            return;
        }
    }

    if(msg.content === '+selenefuria') {
        if(selenefuria === 13){
            msg.reply('A furia de Selene agora é 13 de um total de 5')
            selenefuria = 13
            return;
        }
        if(selenefuria === 12){
            msg.reply('A furia de Selene agora é 13 de um total de 5')
            selenefuria = 13
            return;
        }
        if(selenefuria === 11){
            msg.reply('A furia de Selene agora é 12 de um total de 5')
            selenefuria = 12
            return;
        }
            if(selenefuria === 10){
                msg.reply('A furia de Selene agora é 11 de um total de 5')
                selenefuria = 11
                return;
            }
        if(selenefuria === 9){
            msg.reply('A furia de Selene agora é 10 de um total de 5')
            selenefuria = 10
            return;
        }
        if(selenefuria === 8){
            msg.reply('A furia de Selene agora é 9 de um total de 5')
            selenefuria = 9
            return;
                    }
        if(selenefuria === 7){
            msg.reply('A furia de Selene agora é 8 de um total de 5')
            selenefuria = 8
            return;
        } 
        if(selenefuria === 6){
            msg.reply('A furia de Selene agora é 7 de um total de 5')
            selenefuria = 7
            return;
        }           
        if(selenefuria === 5){
            msg.reply('A furia de Selene agora é 6 de um total de 5')
            selenefuria = 6
            return;
        }
        if(selenefuria === 4){
            msg.reply('A furia de Selene agora é 5 de um total de 5')
            selenefuria = 5
            return;
        }
        if(selenefuria === 3){
            msg.reply('A furia de Selene agora é 4 de um total de 5')
            selenefuria = 4
            return;          
        }
        if(selenefuria === 2){
            msg.reply('A furia de Selene agora é 3 de um total de 5')
            selenefuria = 3
            return;
        }
        if(selenefuria === 1){
            msg.reply('A furia de Selene agora é 2 de um total de 5')
            selenefuria = 2
            return;
        }
        if(selenefuria === 0){
            msg.reply('A furia de Selene agora é 1 de um total de 5')
            selenefuria = 1
            return;
        }
    }

    if(msg.content === '-ethanfuria') {
        if(ethanfuria === 13){
            msg.reply('A furia de Ethan agora é 12 de um total de 7')
            ethanfuria = 12
            return;
        }
        if(ethanfuria === 12){
            msg.reply('A furia de Ethan agora é 11 de um total de 7')
            ethanfuria = 11
            return;
        }
        if(ethanfuria === 11){
            msg.reply('A furia de Ethan agora é 10 de um total de 7')
            ethanfuria = 10
            return;
        }
        if(ethanfuria === 10){
            msg.reply('A furia de Ethan agora é 9 de um total de 7')
            ethanfuria = 9
            return;
        }
        
        if(ethanfuria === 9){
            msg.reply('A furia de Ethan agora é 8 de um total de 7')
            ethanfuria = 8
            return;
        }
        if(ethanfuria === 8){
            msg.reply('A furia de Ethan agora é 7 de um total de 7')
            ethanfuria = 7
            return;
                    }
        if(ethanfuria === 7){
            msg.reply('A furia de Ethan agora é 6 de um total de 7')
            ethanfuria = 6
            return;
        } 
        if(ethanfuria === 6){
            msg.reply('A furia de Ethan agora é 5 de um total de 7')
            ethanfuria = 5
            return;
        }           
        if(ethanfuria === 5){
            msg.reply('A furia de Ethan agora é 4 de um total de 7')
            ethanfuria = 4
            return;
        }
        if(ethanfuria === 4){
            msg.reply('A furia de Ethan agora é 3 de um total de 7')
            ethanfuria = 3
            return;
        }
        if(ethanfuria === 3){
            msg.reply('A furia de Ethan agora é 2 de um total de 7')
            ethanfuria = 2
            return;          
        }
        if(ethanfuria === 2){
            msg.reply('A furia de Ethan agora é 2 de um total de 7')
            ethanfuria = 1
            return;
        }
        if(ethanfuria === 1){
            msg.reply('A furia de Ethan agora é 0 de um total de 7')
            ethanfuria = 0
            return;
        }
        if(ethanfuria === 0){
            msg.reply('A furia de Ethan agora é 0 de um total de 7')
            ethanfuria = 0
            return;
        }
    }

    if(msg.content === '+ethanfuria') {
        if(ethanfuria === 13){
            msg.reply('A furia de Ethan agora é 13 de um total de 7')
            ethanfuria = 13
            return;
        }
        if(ethanfuria === 12){
            msg.reply('A furia de Ethan agora é 13 de um total de 7')
            ethanfuria = 13
            return;
        }
        if(ethanfuria === 11){
            msg.reply('A furia de Ethan agora é 12 de um total de 7')
            ethanfuria = 12
            return;
        }
            if(ethanfuria === 10){
                msg.reply('A furia de Ethan agora é 11 de um total de 7')
                ethanfuria = 11
                return;
            }
        if(ethanfuria === 9){
            msg.reply('A furia de Ethan agora é 10 de um total de 7')
            ethanfuria = 10
            return;
        }
        if(ethanfuria === 8){
            msg.reply('A furia de Ethan agora é 9 de um total de 7')
            ethanfuria = 9
            return;
                    }
        if(ethanfuria === 7){
            msg.reply('A furia de Ethan agora é 8 de um total de 7')
            ethanfuria = 8
            return;
        } 
        if(ethanfuria === 6){
            msg.reply('A furia de Ethan agora é 7 de um total de 7')
            ethanfuria = 7
            return;
        }           
        if(ethanfuria === 5){
            msg.reply('A furia de Ethan agora é 6 de um total de 7')
            ethanfuria = 6
            return;
        }
        if(ethanfuria === 4){
            msg.reply('A furia de Ethan agora é 5 de um total de 7')
            ethanfuria = 5
            return;
        }
        if(ethanfuria === 3){
            msg.reply('A furia de Ethan agora é 4 de um total de 7')
            ethanfuria = 4
            return;          
        }
        if(ethanfuria === 2){
            msg.reply('A furia de Ethan agora é 3 de um total de 7')
            ethanfuria = 3
            return;
        }
        if(ethanfuria === 1){
            msg.reply('A furia de Ethan agora é 2 de um total de 7')
            ethanfuria = 2
            return;
        }
        if(ethanfuria === 0){
            msg.reply('A furia de Ethan agora é 1 de um total de 7')
            ethanfuria = 1
            return;
        }
    }
   
    if (msg.content === 'verdragosfuria') { 
        msg.reply('A furia de Dragos agora é ' + dragosfuria + ' de um total de 10');
       return; 
           }

    if (msg.content === 'verselenefuria') { 
        msg.reply('A furia de Selene agora é ' + selenefuria + ' de um total de 5');
       return; 
           }   

    if (msg.content === 'verethanfuria') { 
         msg.reply('A furia de Ethan agora é ' + ethanfuria + ' de um total de 7');
        return; 
               }


               if(msg.content === '-selenegnose') {
                if(selenegnose === 13){
                    msg.reply('A gnose de Selene agora é 12 de um total de 3')
                    selenegnose = 12
                    return;
                }
                if(selenegnose === 12){
                    msg.reply('A gnose de Selene agora é 11 de um total de 3')
                    selenegnose = 11
                    return;
                }
                if(selenegnose === 11){
                    msg.reply('A gnose de Selene agora é 10 de um total de 3')
                    selenegnose = 10
                    return;
                }
                if(selenegnose === 10){
                    msg.reply('A gnose de Selene agora é 9 de um total de 3')
                    selenegnose = 9
                    return;
                }
                
                if(selenegnose === 9){
                    msg.reply('A gnose de Selene agora é 8 de um total de 3')
                    selenegnose = 8
                    return;
                }
                if(selenegnose === 8){
                    msg.reply('A gnose de Selene agora é 7 de um total de 3')
                    selenegnose = 7
                    return;
                            }
                if(selenegnose === 7){
                    msg.reply('A gnose de Selene agora é 6 de um total de 3')
                    selenegnose = 6
                    return;
                } 
                if(selenegnose === 6){
                    msg.reply('A gnose de Selene agora é 5 de um total de 3')
                    selenegnose = 5
                    return;
                }           
                if(selenegnose === 5){
                    msg.reply('A gnose de Selene agora é 4 de um total de 3')
                    selenegnose = 4
                    return;
                }
                if(selenegnose === 4){
                    msg.reply('A gnose de Selene agora é 3 de um total de 3')
                    selenegnose = 3
                    return;
                }
                if(selenegnose === 3){
                    msg.reply('A gnose de Selene agora é 2 de um total de 3')
                    selenegnose = 2
                    return;          
                }
                if(selenegnose === 2){
                    msg.reply('A gnose de Selene agora é 2 de um total de 3')
                    selenegnose = 1
                    return;
                }
                if(selenegnose === 1){
                    msg.reply('A gnose de Selene agora é 0 de um total de 3')
                    selenegnose = 0
                    return;
                }
                if(selenegnose === 0){
                    msg.reply('A gnose de Selene agora é 0 de um total de 3')
                    selenegnose = 0
                    return;
                }
            }
        
            if(msg.content === '+selenegnose') {
                if(selenegnose === 13){
                    msg.reply('A gnose de Selene agora é 13 de um total de 3')
                    selenegnose = 13
                    return;
                }
                if(selenegnose === 12){
                    msg.reply('A gnose de Selene agora é 13 de um total de 3')
                    selenegnose = 13
                    return;
                }
                if(selenegnose === 11){
                    msg.reply('A gnose de Selene agora é 12 de um total de 3')
                    selenegnose = 12
                    return;
                }
                    if(selenegnose === 10){
                        msg.reply('A gnose de Selene agora é 11 de um total de 3')
                        selenegnose = 11
                        return;
                    }
                if(selenegnose === 9){
                    msg.reply('A gnose de Selene agora é 10 de um total de 3')
                    selenegnose = 10
                    return;
                }
                if(selenegnose === 8){
                    msg.reply('A gnose de Selene agora é 9 de um total de 3')
                    selenegnose = 9
                    return;
                            }
                if(selenegnose === 7){
                    msg.reply('A gnose de Selene agora é 8 de um total de 3')
                    selenegnose = 8
                    return;
                } 
                if(selenegnose === 6){
                    msg.reply('A gnose de Selene agora é 7 de um total de 3')
                    selenegnose = 7
                    return;
                }           
                if(selenegnose === 5){
                    msg.reply('A gnose de Selene agora é 6 de um total de 3')
                    selenegnose = 6
                    return;
                }
                if(selenegnose === 4){
                    msg.reply('A gnose de Selene agora é 5 de um total de 3')
                    selenegnose = 5
                    return;
                }
                if(selenegnose === 3){
                    msg.reply('A gnose de Selene agora é 4 de um total de 3')
                    selenegnose = 4
                    return;          
                }
                if(selenegnose === 2){
                    msg.reply('A gnose de Selene agora é 3 de um total de 3')
                    selenegnose = 3
                    return;
                }
                if(selenegnose === 1){
                    msg.reply('A gnose de Selene agora é 2 de um total de 3')
                    selenegnose = 2
                    return;
                }
                if(selenegnose === 0){
                    msg.reply('A gnose de Selene agora é 1 de um total de 3')
                    selenegnose = 1
                    return;
                }
            }

            
            if(msg.content === '-ethangnose') {
                if(ethangnose === 16){
                    msg.reply('A gnose de Ethan agora é 12 de um total de 6')
                    ethangnose = 12
                    return;
                }
                if(ethangnose === 12){
                    msg.reply('A gnose de Ethan agora é 11 de um total de 6')
                    ethangnose = 11
                    return;
                }
                if(ethangnose === 11){
                    msg.reply('A gnose de Ethan agora é 10 de um total de 6')
                    ethangnose = 10
                    return;
                }
                if(ethangnose === 10){
                    msg.reply('A gnose de Ethan agora é 9 de um total de 6')
                    ethangnose = 9
                    return;
                }
                
                if(ethangnose === 9){
                    msg.reply('A gnose de Ethan agora é 8 de um total de 6')
                    ethangnose = 8
                    return;
                }
                if(ethangnose === 8){
                    msg.reply('A gnose de Ethan agora é 7 de um total de 6')
                    ethangnose = 7
                    return;
                            }
                if(ethangnose === 7){
                    msg.reply('A gnose de Ethan agora é 6 de um total de 6')
                    ethangnose = 6
                    return;
                } 
                if(ethangnose === 6){
                    msg.reply('A gnose de Ethan agora é 5 de um total de 6')
                    ethangnose = 5
                    return;
                }           
                if(ethangnose === 5){
                    msg.reply('A gnose de Ethan agora é 4 de um total de 6')
                    ethangnose = 4
                    return;
                }
                if(ethangnose === 4){
                    msg.reply('A gnose de Ethan agora é 6 de um total de 6')
                    ethangnose = 6
                    return;
                }
                if(ethangnose === 3){
                    msg.reply('A gnose de Ethan agora é 2 de um total de 6')
                    ethangnose = 2
                    return;          
                }
                if(ethangnose === 2){
                    msg.reply('A gnose de Ethan agora é 2 de um total de 6')
                    ethangnose = 1
                    return;
                }
                if(ethangnose === 1){
                    msg.reply('A gnose de Ethan agora é 0 de um total de 6')
                    ethangnose = 0
                    return;
                }
                if(ethangnose === 0){
                    msg.reply('A gnose de Ethan agora é 0 de um total de 6')
                    ethangnose = 0
                    return;
                }
            }
        
            if(msg.content === '+ethangnose') {
                if(ethangnose === 16){
                    msg.reply('A gnose de Ethan agora é 16 de um total de 6')
                    ethangnose = 16
                    return;
                }
                if(ethangnose === 12){
                    msg.reply('A gnose de Ethan agora é 16 de um total de 6')
                    ethangnose = 16
                    return;
                }
                if(ethangnose === 11){
                    msg.reply('A gnose de Ethan agora é 12 de um total de 6')
                    ethangnose = 12
                    return;
                }
                    if(ethangnose === 10){
                        msg.reply('A gnose de Ethan agora é 11 de um total de 6')
                        ethangnose = 11
                        return;
                    }
                if(ethangnose === 9){
                    msg.reply('A gnose de Ethan agora é 10 de um total de 6')
                    ethangnose = 10
                    return;
                }
                if(ethangnose === 8){
                    msg.reply('A gnose de Ethan agora é 9 de um total de 6')
                    ethangnose = 9
                    return;
                            }
                if(ethangnose === 7){
                    msg.reply('A gnose de Ethan agora é 8 de um total de 6')
                    ethangnose = 8
                    return;
                } 
                if(ethangnose === 6){
                    msg.reply('A gnose de Ethan agora é 7 de um total de 6')
                    ethangnose = 7
                    return;
                }           
                if(ethangnose === 5){
                    msg.reply('A gnose de Ethan agora é 6 de um total de 6')
                    ethangnose = 6
                    return;
                }
                if(ethangnose === 4){
                    msg.reply('A gnose de Ethan agora é 5 de um total de 6')
                    ethangnose = 5
                    return;
                }
                if(ethangnose === 3){
                    msg.reply('A gnose de Ethan agora é 4 de um total de 6')
                    ethangnose = 4
                    return;          
                }
                if(ethangnose === 2){
                    msg.reply('A gnose de Ethan agora é 6 de um total de 6')
                    ethangnose = 3
                    return;
                }
                if(ethangnose === 1){
                    msg.reply('A gnose de Ethan agora é 2 de um total de 6')
                    ethangnose = 2
                    return;
                }
                if(ethangnose === 0){
                    msg.reply('A gnose de Ethan agora é 1 de um total de 6')
                    ethangnose = 1
                    return;
                }
            }

            
            if(msg.content === '-dragosgnose') {
                if(dragosgnose === 16){
                    msg.reply('A gnose de Dragos agora é 12 de um total de 6')
                    dragosgnose = 12
                    return;
                }
                if(dragosgnose === 12){
                    msg.reply('A gnose de Dragos agora é 11 de um total de 6')
                    dragosgnose = 11
                    return;
                }
                if(dragosgnose === 11){
                    msg.reply('A gnose de Dragos agora é 10 de um total de 6')
                    dragosgnose = 10
                    return;
                }
                if(dragosgnose === 10){
                    msg.reply('A gnose de Dragos agora é 9 de um total de 6')
                    dragosgnose = 9
                    return;
                }
                
                if(dragosgnose === 9){
                    msg.reply('A gnose de Dragos agora é 8 de um total de 6')
                    dragosgnose = 8
                    return;
                }
                if(dragosgnose === 8){
                    msg.reply('A gnose de Dragos agora é 7 de um total de 6')
                    dragosgnose = 7
                    return;
                            }
                if(dragosgnose === 7){
                    msg.reply('A gnose de Dragos agora é 6 de um total de 6')
                    dragosgnose = 6
                    return;
                } 
                if(dragosgnose === 6){
                    msg.reply('A gnose de Dragos agora é 5 de um total de 6')
                    dragosgnose = 5
                    return;
                }           
                if(dragosgnose === 5){
                    msg.reply('A gnose de Dragos agora é 4 de um total de 6')
                    dragosgnose = 4
                    return;
                }
                if(dragosgnose === 4){
                    msg.reply('A gnose de Dragos agora é 6 de um total de 6')
                    dragosgnose = 6
                    return;
                }
                if(dragosgnose === 3){
                    msg.reply('A gnose de Dragos agora é 2 de um total de 6')
                    dragosgnose = 2
                    return;          
                }
                if(dragosgnose === 2){
                    msg.reply('A gnose de Dragos agora é 2 de um total de 6')
                    dragosgnose = 1
                    return;
                }
                if(dragosgnose === 1){
                    msg.reply('A gnose de Dragos agora é 0 de um total de 6')
                    dragosgnose = 0
                    return;
                }
                if(dragosgnose === 0){
                    msg.reply('A gnose de Dragos agora é 0 de um total de 6')
                    dragosgnose = 0
                    return;
                }
            }
        
            if(msg.content === '+dragosgnose') {
                if(dragosgnose === 16){
                    msg.reply('A gnose de Dragos agora é 16 de um total de 6')
                    dragosgnose = 16
                    return;
                }
                if(dragosgnose === 12){
                    msg.reply('A gnose de Dragos agora é 16 de um total de 6')
                    dragosgnose = 16
                    return;
                }
                if(dragosgnose === 11){
                    msg.reply('A gnose de Dragos agora é 12 de um total de 6')
                    dragosgnose = 12
                    return;
                }
                    if(dragosgnose === 10){
                        msg.reply('A gnose de Dragos agora é 11 de um total de 6')
                        dragosgnose = 11
                        return;
                    }
                if(dragosgnose === 9){
                    msg.reply('A gnose de Dragos agora é 10 de um total de 6')
                    dragosgnose = 10
                    return;
                }
                if(dragosgnose === 8){
                    msg.reply('A gnose de Dragos agora é 9 de um total de 6')
                    dragosgnose = 9
                    return;
                            }
                if(dragosgnose === 7){
                    msg.reply('A gnose de Dragos agora é 8 de um total de 6')
                    dragosgnose = 8
                    return;
                } 
                if(dragosgnose === 6){
                    msg.reply('A gnose de Dragos agora é 7 de um total de 6')
                    dragosgnose = 7
                    return;
                }           
                if(dragosgnose === 5){
                    msg.reply('A gnose de Dragos agora é 6 de um total de 6')
                    dragosgnose = 6
                    return;
                }
                if(dragosgnose === 4){
                    msg.reply('A gnose de Dragos agora é 5 de um total de 6')
                    dragosgnose = 5
                    return;
                }
                if(dragosgnose === 3){
                    msg.reply('A gnose de Dragos agora é 4 de um total de 6')
                    dragosgnose = 4
                    return;          
                }
                if(dragosgnose === 2){
                    msg.reply('A gnose de Dragos agora é 6 de um total de 6')
                    dragosgnose = 3
                    return;
                }
                if(dragosgnose === 1){
                    msg.reply('A gnose de Dragos agora é 2 de um total de 6')
                    dragosgnose = 2
                    return;
                }
                if(dragosgnose === 0){
                    msg.reply('A gnose de Dragos agora é 1 de um total de 6')
                    dragosgnose = 1
                    return;
                }
            }

            if (msg.content === 'verdragosgnose') { 
                msg.reply('A gnose de Dragos agora é ' + dragosgnose + ' de um total de 6');
               return; 
                   }
        
            if (msg.content === 'verselenegnose') { 
                msg.reply('A gnose de Selene agora é ' + selenegnose + ' de um total de 3');
               return; 
                   }   
        
            if (msg.content === 'verethangnose') { 
                 msg.reply('A gnose de Ethan agora é ' + ethangnose + ' de um total de 6');
                return; 
                       }

            if(msg.content === 'verdragosrenome') {
               msg.reply('Dragos atualmente possui:')
               msg.reply('Gloria:  2 Pontos permanetes e 5 temporarios')
               msg.reply('Honra:  1 Ponto permanete e 2 temporarios')
               msg.reply('Sabedoria:  0 Pontos permanetes e 4 temporarios')
               msg.reply('Poderá avançar de posto quando atingir Glória 4, Honra 1 e Sabedoria 1 em pontos permanentes')
                  return;
            }

            if(msg.content === 'verselenerenome') {
                msg.reply('Selene atualmente possui:')
                msg.reply('Gloria:  1 Ponto permanete e 5 temporarios')
                msg.reply('Honra:  1 Ponto permanete e 4 temporarios')
                msg.reply('Sabedoria:  1 Pontos permanete e 2 temporarios')
                msg.reply('Poderá avançar de posto quando atingir 7 em pontos permanentes, em qualquer divisão')
                   return;
             }

             if(msg.content === 'verethanrenome') {
                msg.reply('Ethan atualmente possui:')
                msg.reply('Gloria:  2 Pontos permanetes e 6 temporarios')
                msg.reply('Honra:  1 Ponto permanete e 1 temporario')
                msg.reply('Sabedoria:  0 Pontos permanetes e 2 temporarios')
                msg.reply('Poderá avançar de posto quando atingir Glória 4, Honra 1 e Sabedoria 1 em pontos permanentes')
                   return;
                   
             }

})