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

function johnLennonFacts() {
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  
]

let i = 0
var newFacts = []
while(i < facts.length){
      newFacts.push(facts[i] + '!!!')
        i++
      }
return newFacts
}

function iLoveTheBeatles(number) {
}
