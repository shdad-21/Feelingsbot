const express = require("express");
const app = express();

app.listen(() => console.log("LOADING ava.js"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود



const prefix = "!"
const developers = "765572477317283840"
/////////////

client.on('message', ff => {
  if(ff.content.startsWith(prefix + "ava")){
          ff.delete();
   let user = ff.mentions.users.first()|| client.users.cache.get(ff.content.split(' ')[1])
if(!user) return ff.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`[Avatar Link](${ff.author.avatarURL({dynamic : true})})`)
.setImage(`${ff.author.avatarURL({dynamic : true})}`)
.setTimestamp()
.setFooter(`Request by ${ff.author.username}`)
)

var embed = new Discord.MessageEmbed()
.setColor('RANDOM')
    .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
    .setTimestamp()
.setImage(`${user.avatarURL({dynamic : true})}`)
.setFooter(`Request by ${ff.author.username}`)
  }

  ff.channel.send(embed)
})

client.login(process.env.token);







//////////////////// hi                       
/////////////////// hi                        
////////////////// hi
///////////////// hi
//////////////// hi
/////////////// hi
////////////// hi
///////////// hi
//////////// hi
/////////// hi
////////// hi
///////// hi
//////// hi
/////// hi 
////// hi
///// hi
//// hi
/// hi
// hi