// process.stdout.write

// const { log } = require("console")


const questionsBestME = [
    "Como foi seu dia ? ",
    "Oque você fez no dia amigo?",
    "Oque eu tenho que fazer para melhorar?",
    "vai fazer isso denovo amigo"
]



const seach = (valueQuest = 0)  => {
    process.stdout.write('\n\n' + questionsBestME[valueQuest] +'>>>  ' ) 
}
seach()
const respostas =[]
 process.stdin.on("data",data => {
     respostas.push(data.toString().trim()) 
        if(respostas.length < questionsBestME.length){
        seach(respostas.length)    
        }
        else{
            process.exit()
        }
      
})
process.on("exit", () =>{
    console.log(`
    Como foi seu dia ? 
    ${respostas[0]}
    Oque você fez no dia amigo?
    ${respostas[1]}
    Oque eu tenho que fazer para melhorar?
    ${respostas[2]}
    vai fazer isso denovo amigo
    ${respostas[3]}
    `);
})
