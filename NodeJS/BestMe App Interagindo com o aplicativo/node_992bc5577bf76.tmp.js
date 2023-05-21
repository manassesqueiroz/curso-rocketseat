// process.stdout.write

const { log } = require("console")


const questionsBestME = [
    "Como foi seu dia ? ",
    "Oque você fez no dia amigo?",
    "Oque eu tenho que fazer para melhorar?",
    "vai fazer isso denovo amigo"
]



const seach = valueQuest  => {

    valueQuest = 0
    process.stdout.write(questionsBestME[valueQuest]  + '\n\n') 
}
seach()

 process.stdin.on("data",data => {
     process.stdout.write(data.toString() + '\n\n') 
     process.exit()
      
})

