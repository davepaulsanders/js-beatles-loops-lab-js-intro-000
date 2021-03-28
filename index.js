// add solution here



function theBeatlesPlay(musicians, instruments){
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  var roles = []
  for(let i = 0, len = musicians.length; i < len; i++) {
    roles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
   return roles;
}

function johnLennonFacts(facts) {
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  "While on tour, he enjoyed playing Monopoly",
  "Harmonica was the first instrument Lennon learned to play"
]

let i = 0
while(i < facts.length){
      facts = facts[i] += '!!!'
        i++
      }
return facts
}

function iLoveTheBeatles(number) {
}
