const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let string = ''

rl.question('What\'s your name? ', (answerName) => {
  string += `Hey! My name is ${answerName}. `
  rl.question("Favourite sport? ", (answerSport) => {
    string += `My favourite sport is ${answerSport}. `
    rl.question("Favourite song? ", (answerSong) => {
      string += `I like listening to ${answerSong}. `
      rl.question("Favourite food? ", (answerFood) => {
        string += `My favourite food is ${answerFood}. `
        rl.question("Favourite snack? ", (answerSnack) => {
          string += `My favourite snack is ${answerSnack}. `
          rl.question('If you could have a superpower, what would it be? ', (superpower) => {
            string += (`If I could have a super power, it would be ${superpower}. `)
            console.log(string)
            rl.close()
          })
        })
      })
    })
  })
})
// rl.question('is this working? ', (answer) => {
//   console.log(`${answer}: you bet your ass it is`)
//   rl.close()
// })

const phrase = `Hey! My name is _. I like _. I like listening to _. My favourite meal is _. `