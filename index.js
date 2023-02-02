/*
  _____                .___.__                             
  _/ ____\___________  __| _/|__|   ____________ ___________ 
  \   __\/ __ \_  __ \/ __ | |  |  /  _ \___   // __ \_  __ \
   |  | \  ___/|  | \/ /_/ | |  | (  <_> )    /\  ___/|  | \/
   |__|  \___  >__|  \____ | |__|  \____/_____ \\___  >__|   
             \/           \/                  \/    \/       
................................................ferdiozer.com
*/



const { CryptoBlock } = require("./Block");
const { CryptoBlockchain } = require("./Blockchain");



let csprimeCoin = new CryptoBlockchain();

console.log("csprimeCoin mining in progress....");


csprimeCoin.startGenesisBlock()

csprimeCoin.addNewBlock(
    new CryptoBlock(1, "24/05/2022", {
        sender: "gönderen1",
        recipient: "alıcı",
        quantity: 100
    })
)

csprimeCoin.addNewBlock(
    new CryptoBlock(2, "24/05/2022", {
        sender: "gönderen2",
        recipient: "alıcı",
        quantity: 100
    })
)

console.log(JSON.stringify(csprimeCoin, null, 4));
