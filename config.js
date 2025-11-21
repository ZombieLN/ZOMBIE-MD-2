const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//gg
module.exports = {
SESSION_ID: 'ZOMBIE-MD=yc1CiYqL#Mvlwh86TBRK_Ic1-VAUd53Q4FsUZn9a0M1cIoqhHylw', // PUT YOUR SESSION ID WITH ZOMBIE-MD=
ANTI_DELETE: process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE, 
MV_BLOCK: process.env. MV_BLOCK === undefined ? 'true' : process.env. MV_BLOCK,    
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK, 
SEEDR_MAIL: '',
SEEDR_PASSWORD: '',
SUDO: '',//
DB_NAME: 'Zombie-DataBase-For-Movie-Mafia',
LANG: 'SI',
OWNER_NUMBER: '94754871798',
TG_GROUP: 'https://t.me/+Zombie-BotMafia1'

};
//GITHUB_AUTH_TdOKEN: 'ouvnI0xSDsmfWA1filVxx.SZ0vJGYkjlC5VX54U0e10',

