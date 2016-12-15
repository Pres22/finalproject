/*
Steve,

The only way you can test this is to download Discord (or running it in the web might work), you
will also need to download discord.js and node.js, as well as making a bot through the Discord api
and assigning it a specific ID and then changing the ID in the code before you run it.

Basically what I'm saying is that if you need a demo of what the bot does, the easiest way
would probably be to talk to me and I can either show you in person, or I can talk to you
over Discord while I demo what it does.

*/


const Discord = require("discord.js");
var bot = new Discord.Client();
let skill = {
    begals: 11,
    shelby: 18,
    stan: 10,
    collin: 9,
    brent: 14,
    chris: 12,
    billy: 11,
    spencer: 17,
    miah: 15,
    ann: 16,
    graeson: 11,
    jordan: 6,
    dallas: 16,
    foy: 7,
    matt: 10,
    b5: 1,
    b4: 2,
    b3: 3,
    b2: 4,
    b1: 5,
    s5: 6,
    s4: 7,
    s3: 8,
    s2: 9,
    s1: 10,
    g1: 11,
    g2: 12,
    g3: 13,
    g4: 14,
    g5: 15,
    p1: 16,
    p2: 17,
    p3: 18,
    p4: 19,
    p5: 20,
}
let rank = {
    begals: "Gold V",
    shelby: "Plat III",
    stan: "Gold VI",
    collin: "Silver II",
    brent: "Gold II",
    chris: "Gold IV",
    billy: "Gold V",
    spencer: "Plat IV",
    miah: "Gold I",
    gshade: "https://gyazo.com/ca26302021fa13dda29914fbc4b54cb7",
    gshader: "https://gyazo.com/0ddcda6e1355b80f6ac33b6c6331a614",
    ramadan: "Gold II",
    ann: "Plat V",
    graeson: "http://i.imgur.com/PsgnJpE.png",
    jordan: "Silver V",
    dallas: "Plat V",
    foy: "Silver IV",
    matt: "Silver I",
}
let rankpersonal = {
    "125545610546905088":"Gold V", // begals
    "213410626062647296":"Plat III", // shelby
    "149344909151698946":"Silver I", // stan
    "167376167379271681":"Silver II", // collin
    "185576747956174848":"Gold II", // brent
    "218989382055624704":"Gold IV", // chris
    "191016210056347648":"Gold V", // billy
    "183287099347173377":"Plat IV", // spencer
    "175535525099339776":"Gold II", // miah
    "124725335487938564":"Plat V", // ann
    "182899308511756288":"Gold VI", // graeson
    "173870940994666496":"Silver V", // jordan
    "159799341102399488":"Plat V", // dallas
    "160821287281754112":"Silver IV", // foy
    "143519234352349184":"Silver I", // matt
}

let bluetotal = 0;
let redtotal = 0;

bot.on("message", msg => {
    if (msg.content.startsWith("!!customs")) {
        let redtemp = 0;
        let bluetemp = 0;
        let namesnocommand = msg.content.split(" ").slice(1).join(" ");
            console.log ("names no command:" + namesnocommand)
            let names2groups = namesnocommand.split(" : ");
                console.log("names 2 groups:" + names2groups)
                let namesblue = names2groups[0].split(" ");
                    console.log("names blue:" + namesblue)
                let namesred = names2groups[1].split(" ");
                    console.log("names red:" + namesred)

                let bluearray = namesblue.map(n=> skill[n]);
                console.log("blue array: " + bluearray)
                let redarray = namesred.map(n=> skill[n]);
                console.log("red array: " + redarray)

            if (msg.content.startsWith("!!customs5")) 
            {    
                for (var i = 0; i < 5; i++)
                    {
                        bluetemp = (bluearray[i] + bluetemp)
                        console.log(bluetemp)
                    }
                console.log ("blue temp:" + bluetemp)

                for (var j = 0; j < 5; j++)
                    {
                        redtemp = (redarray[j] + redtemp)
                        console.log(redtemp)
                    }
                console.log ("red temp:" + redtemp)

            }
            else
            {
                for (var i = 0; i < 4; i++)
                    {
                        bluetemp = (bluearray[i] + bluetemp)
                        console.log(bluetemp)
                    }
                console.log ("blue temp:" + bluetemp)

                for (var j = 0; j < 4; j++)
                    {
                        redtemp = (redarray[j] + redtemp)
                        console.log(redtemp)
                    }
                console.log ("red temp:" + redtemp)
            }
        var bluetotal = bluetemp;
        var redtotal = redtemp;
        var messageblue = "Blue side: " + bluetotal;
        var messagered = "Red side: " + redtotal;
        msg.channel.sendMessage(messageblue);
        msg.channel.sendMessage(messagered);
    }

    if (msg.content.startsWith("is gshade plat")) {
        var rand1 = Math.floor((Math.random() * 21) + 1);
        var platresponse = ["No", "Nope", "Hell nah", "Not a chance", "No way", "Hehe, nope", "Dank me.me", "Naw", "Soontm", "Ask Spencer L. Tan from the Altoona Region.", "Nu-uh", "Did Shelby clutch on Cache?", "Negative", "Ah... nope", "Under no circumstances","http://www.reactiongifs.com/wp-content/gallery/no/754.gif", "http://www.reactiongifs.com/wp-content/gallery/no/oh-hell-no.gif", "http://www.reactiongifs.com/wp-content/gallery/no/jonah-hill-no.gif", "http://www.reactiongifs.com/wp-content/gallery/no/jake-no.gif", "http://www.reactiongifs.com/wp-content/gallery/no/987.gif","https://giphy.com/gifs/mrw-reddit-years-CZBw0OGj0UIF2"];
        msg.channel.sendMessage(platresponse[rand1]);
        console.log("gshade plat?:" + platresponse[rand1])
    }

    if (msg.content.startsWith("!!help")) {
        msg.channel.sendCode("plain","LIST OF COMMANDS\n\n--------------------------\n\n- !!customs5 {name1} {name2} {name3} {name4} {name5} : {name6} {name7} {name8} {name9} {name10}\n\n- !!customs4 {name1} {name2} {name3} {name4} : {name5} {name6} {name7} {name8}\n\n- what rank is {name}\n\n- what rank am i");
    }

    if (msg.content.startsWith("goodnight")) {
        msg.channel.sendMessage(`Goodnight ${msg.author}`);
        console.log(`Goodnight ${msg.author}`)
    }


    if (msg.content.startsWith("what rank is")) {
        let rankname = msg.content.split(" ").slice(3,4)
        console.log("Rank name: " + rankname)
             let ranknameresponse = rankname.map(n=> rank[n]);
             console.log("Rank response: " + ranknameresponse)
             msg.channel.sendMessage(ranknameresponse)
    }

    if (msg.content.startsWith("what rank am i")) {
        console.log(`Rank personal request id: ${msg.author.id}`)
            let authorid = msg.author.id;
                console.log("Author id: " + authorid)
            let authoridsplit = authorid.split(" ")
                console.log("Author id split: " + authoridsplit)
            let ranknamepersonalresponse = authoridsplit.map(n=> rankpersonal[n]);
                console.log("Rank personal response: " + ranknamepersonalresponse)
            msg.channel.sendMessage(ranknamepersonalresponse).catch(error => console.log(error.stack))
    }

  if (msg.content.startsWith("what rank are we")) {
        msg.channel.sendMessage("Gold V");
        console.log("Rank Team: Gold V")
    }
   

});

bot.on('ready', () => {
  console.log('I am ready!');
});



bot.login("MjM1MTUxODI0MjAwNTMxOTY4.Ct2v7w.yYWdW1v5lSxuEuGmRbzzPHeY2aE");