
let katzDeliLine =[]
let newNumber = 0

function takeANumber(katzDeliLine){
  newNumber += 1
  katzDeliLine.push(newNumber)
  return `Welcome! You're ticket number ${newNumber}`
}


// takeANumber(katzDeliLine) => "Welcome! You're ticket number 1!" [1]
// takeANumber(katzDeliLine) => "Welcome! You're ticket number 2!" [1, 2]

// nowServing(katzDeliLine) => "Currently serving: #1" [2]
// nowServing(katzDeliLine) => "Currently serving: #2" []

// takeANumber(katzDeliLine) => "Welcome! You're ticket number #3!" [3]



function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  const prefix = "The line is currently: "
  const suffix = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  for(let i = 0; i < katzDeliLine.length; i++) {
    suffix.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  
  return prefix + suffix.join(", ")
}