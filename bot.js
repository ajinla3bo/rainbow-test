const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`+help `,"http://twitch.tv/Death Shop")
});

client.on('message', message => {

    if (message.content === "+bot") {
var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
    let embed = new Discord.RichEmbed()

.addField('**Bot Servers**',`[ ${client.guilds.size} ]`)
.addField('**Users**',`[ ${client.users.size} ]`)
.addField('**Channels**',`[ ${client.channels.size} ]`)
.addField('**ID**',`[ ${client.user.id} ]`)
.addField('**Name**',`[ ${client.user.tag} ]`)
.addField('Requested by:', "<@" + message.author.id + ">")
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});     


client.on('guildDelete', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`❌ البوت خرج من سيرفر`)
        .setDescription(`**
→ | اسم السيرفر : \`${guild.name}\`
→ | ايدي السيرفر: \`${guild.id}\`
→ | صاحب السيرفر : ${guild.owner}
→ | عدد الاعضاء: \`${guild.memberCount}\`
→ | عدد السيرفرات الحاليه : \`${client.guilds.size}\`**`)
        .setColor('RANDOM')
client.guilds.get('557938109472309249').channels.get('562199258246414336').send(embed)
}); 

client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`البوت دخل سيرفر ✅ `)
        .setDescription(`**
→ | اسم السيرفر : \`${guild.name}\`
→ | ايدي السيرفر: \`${guild.id}\`
→ | صاحب السيرفر : ${guild.owner}
→ | عدد الاعضاء: \`${guild.memberCount}\`
→ | عدد السيرفرات الحاليه : \`${client.guilds.size}\`**`)
        .setColor('RANDOM')
client.guilds.get('557938109472309249').channels.get('562199258246414336').send(embed)
});

client.on("message", message => {
if(message.content.startsWith("+time")){
var snow = new Date()
let Day = snow.toString().split(" ")[0].concat("day");
let Month = snow.toString().split(" ")[1]
let Year = snow.toString().split(" ")[3]
const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
.addField("Today is", `\`${Day}\` ,\`${Month}\` ,\`${Year}\`\n\`Time of day:\` \`${snow.toString().split(" ")[4]}\``)
message.channel.send({ embed })
    message.react("🕰")  
};
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
.setColor('RED')
.setTitle('Removed Member')
.setDescription(`ID : ${member.id}
Last Message : ${member.lastMessage}`)
client.channels.get('553668809886793728').send(embed)
});

client.on("message", message => { //RayGamerMC Server Image Code
    const prefix = "+" //البريفكس حقك
             
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){  // "image" يمكنك تغيير اسم الامر من هنا
          const embed = new Discord.RichEmbed()
 
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp() //Snow Codes RayGamerMC
//Snow Codes
   message.channel.send({embed});
      }
  }); //كود اضهار صورة السيرفر

client.on('message', message => { //RayGamerMC //Roles Code
    var prefix = '+' //البريفكس حقك
  let args = message.content.split(" ")
  if (args[0].toLowerCase().startsWith(prefix+'roles')) {
    let str = "";
    var role = message.guild.roles.forEach(role => { //Snow Codes
      str +=" "+role.name+'\n'
    }) //Snow Codes RayGamerMC
    message.channel.send(`\`\`\`${str}\`\`\``)
  }
}) //كود اضهار رتب السيرفر

client.on('message', async message =>{ //RayGamerMC Mute Code
    if (message.author.boss) return;
      var prefix = "+"; //يمكنك تغيير البريفكس من هنا
  
  if (!message.content.startsWith(prefix)) return; //تحذير مهم!
      let command = message.content.split(" ")[0]; //و يجب ان تكون خواصها منع الاخرين من الكلام في كل الرومات Muted يجب أن تكون هناك رتبة اسمها 
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command == "mute") {
          if (!message.channel.guild) return;
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(" `MANAGE_MESSAGES` أنت لا تملك خاصية ").then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply(" `MANAGE_MESSAGES` البوت لا يملك خاصية ").then(msg => msg.delete(5000));;
          let user = message.mentions.users.first();
          let muteRole = message.guild.roles.find("name", "Muted");
          if (!muteRole) return message.reply("** `Muted` يجب أن تكون رتبة اسمها **").then(msg => {msg.delete(5000)});
          if (message.mentions.users.size < 1) return message.reply('**يجب عليك أن تمنشن الضحية**').then(msg => {msg.delete(5000)});
          let reason = message.content.split(" ").slice(2).join(" ");
          message.guild.member(user).addRole(muteRole);
          const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM") //Snow Codes RayGamerMC
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setThumbnail(user.displayAvatarURL)
          .addField("**:busts_in_silhouette:  الضحية**",  '**[ ' + `${user.tag}` + ' ]**',true)
          .addField("**:hammer:  من قبل**", '**[ ' + `${message.author.tag}` + ' ]**',true)
          .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
          .addField("User", user, true)
          message.channel.send({embed : muteembed});
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setDescription(`      
  ${user} تم عمل ميوت لأنك خالفت القوانين
  ${message.author.tag} من قبل
  [ ${reason} ] : ل سبب
  إن كنت بريء يمكنك أن تكلم ادارة السيرفر عن الأمر
  `)
          .setFooter(`السيرفر : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    } //كود عمل ميوت
  if(command === `unmute`) { //Snow Codes
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("`MANAGE_MESSAGES` أنت لا تملك خاصية").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("`MANAGE_MESSAGES` البوت لا يملك خاصية").then(msg => msg.delete(6000))
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("يجب عليك أن تمنشن الضحية ");
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("هذا الشخص لم يكن له ميوت من قبل")
  
    await toMute.removeRole(role)
    message.channel.sendMessage(":white_check_mark: تم نزع الميوت عن الشخص ب نجاح");
  
    return;
  
    }
  
  }); //كود نزع الميوت


client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**__ajinla3bo-bot__ 
            _الاوامر الاداريه_
			+mute   | لاعطاء ميوت
			+unmute | لحدف الميوت
			+banned | لاعطاء باند
			+clear  | لمسح الشات 
			+bc     | للبرودكاست
			+server | معلومات السيرفر
			_الاوامر العامه_
			+time  | لمعرفت الوقت
			+image |
			+bot   |
            **`);
            message.channel.sendEmbed(help); // رابط السيرفر يعود الى سيرفر CODES .
    }
});

client.on('message', message => {  //RayGamerMC ChatClear Code
    var prefix = "+"; //البريفكس الي تبيه
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) {
    if(!message.channel.guild) return message.reply('هذا الأمر شغال في السيرفرات فقط');
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | ! انت لا تحمل خاصية **MANAGE_MESSAGES**');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ |! البوت لا يحمل خاصية **MANAGE_MESSAGES**');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args); //Snow Codes RayGamerMC
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100'; //Snow Codes
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });  //كود مسح الشات
  
  client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية **");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية **");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});



client.on("message", async message => {
    if(message.content == prefix + "server") {
        if(!message.channel.guild) return;
            if(!message.member.hasPermission("ADMINISTRATOR")) {
                return message.channel.send("ليس لديك الصلآحية الكآفية . :broken_heart:");
            }

                let server = new Discord.RichEmbed()
                    .setAuthor(message.guild.name)
                    .setColor("RANDOM")
                    .setTitle("Server Info :hearts: :sparkles:")
                    .setDescription(`Members :bust_in_silhouette: : ${message.guild.memberCount}\nOwner :crown: : ${message.guild.owner.user.username}\nServer ID :id: : ${message.guild.id}\nRoles :lock: : ${message.guild.roles.size}\nRegion :earth_africa: : ${message.guild.region.toUpperCase()}`);

                    message.channel.sendEmbed(server);

    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "banned")) {
        if(!message.guild) return;
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**\`${b}\` | ${bb}**`);
        });
    }
});

client.on("message", message => { //clear
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**? اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**?  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
})

  
  let room = "id room"

client.on("guildMemberAdd", member => {
    let guild = client.channels.get(576903215392751638).guild.id

    if(member.guild.id != guild) return;
    client.channels.get(576903215392751638).setName("Welcome "+member.user.username).then(m=> { setTimeout(() => {
        client.channels.get(576903215392751638).setName(member.guild.name+" - "+member.guild.members.size)
    }, 3000)})
} )

client.on("guildMemberRemove", member => {
    let guild = client.channels.get(576903215392751638).guild.id

    if(member.guild.id != guild) return;
    client.channels.get(576903215392751638).setName("Member Left :(").then(m=> { setTimeout(() => {
        client.channels.get(576903215392751638).setName(member.guild.name+" - "+member.guild.members.size)
    }, 3000)})
})

client.on("voiceStateUpdate" , (oldMember, newMember) => {
    let guild = client.channels.get(576903215392751638).guild.id

    if(oldMember.guild.id != guild) return;
    let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  if(oldUserChannel === undefined && newUserChannel !== undefined) {
        client.channels.get(576903215392751638).setName("Hi, "+oldMember.user.username).then(m=> { setTimeout(() => {
            client.channels.get(576903215392751638).setName(oldMember.guild.name+" - "+oldMember.guild.members.size)
            }, 3000)})
  } else if(newUserChannel === undefined){
        client.channels.get(576903215392751638).setName("Bye, "+oldMember.user.username).then(m=> { setTimeout(() => {
            client.channels.get(576903215392751638).setName(oldMember.guild.name+" - "+oldMember.guild.members.size)
        }, 3000)})
  }
} )
  
  client.on('ready', () => {// افنت التشغيل 
  setInterval(function(){
      client.guilds.forEach(g => { // فور ايرج تدخل للسيرفرات كلها
                  var role = g.roles.find('name', 'Rainbow');//Rainbow  اسم الرتبة عشان يسوي ريمبو غيرها اذا تبي
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 60000);// وقت الريمبو لا تغيرة لانه الوقت المسموح للتغيير
})
  
client.login('NTU2NzkxMDA0OTQzMDg5Njc1.XPkJMg.X9rga2S0w1x7b1gPZ8rOfkAegVY');
