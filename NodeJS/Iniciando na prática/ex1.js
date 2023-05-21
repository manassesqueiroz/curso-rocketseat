function SeachFlags(Valueflag) {
   let flag = process.argv.indexOf(Valueflag) + 1
      return process.argv[flag]
    
    
}


// console.log(`Hello, my name is ${SeachFlags('--name')}, ${SeachFlags('--greeting')}`);


module.exports = SeachFlags;