const db = require('../database/participants.json')

let listParticipants = db.map(data => data.nome)

let participantes1 = new Array(30).fill('')
let participantes2 = new Array(29).fill('')
let participantes3 = new Array(29).fill('')
let participantes4 = new Array(29).fill('')

// Algoritmo de embaralhamento de Fisher–Yates
function shuffleListParticipants(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//Função responsavél por dividir a lista participantes em 4
function splitParticipants(part1, part2, part3, part4, list) {
  let acumulator = 0
  part1.map((part, index) => {
    participantes1[index] = list[index]
    acumulator++
  })

  part2.map((part, index) => {
    participantes2[index] = list[acumulator]
    acumulator++
  })

  part3.map((part, index) => {
    participantes3[index] = list[acumulator]
    acumulator++
  })

  part4.map((part, index) => {
    participantes4[index] = list[acumulator]
    acumulator++
  })
}

//Função responsavél por gerar os grupos com
//os participantes de forma aleatória
function makeGroup(part1, part2, part3, par4) {

  let group1, group2, group3, group4

  group1 = Math.floor(Math.random() * (31 - 29)) + 29
  if (group1 === 30) {
    group1 = [...part1]
    group2 = [...part2]
    group3 = [...part3]
    group4 = [...par4]
  } else {
    group1 = [...part2]
    group2 = Math.floor(Math.random() * (31 - 29)) + 29
    if (group2 === 30) {
      group2 = [...part1]
      group3 = [...part3]
      group4 = [...par4]
    } else {
      group2 = [...part3]
      group3 = Math.floor(Math.random() * (31 - 29)) + 29
      if (group3 === 30) {
        group3 = [...part1]
        group4 = [...par4]
      } else {
        group3 = [...par4]
        group4 = [...part1]
      }
    }
  }

  return [group1, group2, group3, group4]
}

function generateParticipants() {
  //Armazenando a lista de participantes embaralhada
  let shuffleParticipants = shuffleListParticipants(listParticipants)

  //Função responsavél por dividir a lista participantes em 4
  splitParticipants(
    participantes1,
    participantes2,
    participantes3,
    participantes4,
    shuffleParticipants)

  const participants = makeGroup(
    participantes1,
    participantes2,
    participantes3,
    participantes4)

  return participants
}

module.exports = generateParticipants