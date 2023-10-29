// Iteration 1: Names and Input

hacker1 = "Jackie Chan"
console.log("The driver's name is " + hacker1)
hacker2 = "Bruce Lee"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//Printing char with space in capital letter
for(let i = 0; i <= hacker1.length; i++){
    console.log(hacker1.charAt(i).toUpperCase())
    console.log("")
}

//reverse string
for(let j = hacker2.length ; j >= 0 ; j--){
    console.log(hacker2.charAt(j).trim())
}

//lexicographic order
let minlen = Math.min(hacker1.length, hacker2.length)
for(let k = 0; k < minlen; k++){
    if(hacker1.charAt(k) < hacker2.charAt(k)){
        console.log("The driver's name goes first.")
        break;
    }
    else if(hacker1.charAt(k) > hacker2.charAt(k)){
        console.log("Yo, the navigator goes first definitely.")
        break;
    }
    else{
        console.log("What?! You both have the same name?")
        break;
    }
}