
alert("Welcome to Jankenpon")
let respone = confirm("Do you want to play")
if (respone == true) {
    let nama = prompt("What is your name?")
    
        let senjata = prompt("Choose your weapon: rock, paper and scissors")
        if (senjata == "rock"){
            alert( "computer : rock\n" + nama + " : " + senjata + "\nThe result is a tie \nScore : 0" )
        }
        if (senjata == "paper"){
            alert( alert( "computer : rock\n" + nama + " : " + senjata + "\nThe result is " + nama + " win \nScore : 1" ))
        }
        if (senjata == "scissors"){
            alert( alert( "computer : rock\n" + nama + " : " + senjata + "\nThe result is " + "computer" + " win \nScore : -1" ))
        }
        
        alert("Choose your weapon again")
}else{
    alert("See you next time👌")
}