<!-- hide script from old browsers

var i = 0;


var cars = ["Saab", "Volvo", "BMW", "Toyota", "Lexus", "Chevrolet", "Chrysler", "Mercedes", "Ford", "Jeep"];
var SelectedWord = "";
var aGuessWord = [];
var aUserKeys = [];
var gNumTries = 0;
var gcMaxTries = 10;
var gWinCtr = 0;

//generate an index no from 1-10
function GenerateRandomWordIndex()
{
	var GuessWord = "";

    var x = Math.floor((Math.random() * 10) + 1);
   
	
	console.log("Inside Function");
    return x-1;

}

//show as many dashes as the the length of the computer generated word
function DetermineWordLength(Pos)
{
	var StrWord = cars[Pos];
	var StrDisplayWord = ""
	for (var i = 0; i < StrWord.length; i++)
	{
		StrDisplayWord += "-";
		aGuessWord[i] = "-";

	}
	// Updated Selected Word
	SelectedWord = cars[Pos];	
	StrDisplayWord = "GuessWord is: " + StrDisplayWord;
	console.log(SelectedWord);
	document.getElementById("guessword").innerHTML = StrDisplayWord;
}

//search for the entered letter in the m/c selected word and fill array at all positions where the letter occurs
function CheckAlphabetExists(StrSub)
{
   var n = SelectedWord.indexOf(StrSub);
   console.log("We are looking for" + StrSub);
   for(var i = 0; i < SelectedWord.length; i++)
   {
		//check if the char matches our value. If so add at that index   	
   		if( SelectedWord.charAt(i) == StrSub)
   		{
   			console.log("found match")
			aGuessWord[i] = StrSub;   			
   		}


   }	
   return n;
}

function DisplayAllOccurenceofGuessedLetter()
{
	var DisplayText = ""
	console.log("In DisplayAllOccurenceofGuessedLetter")

	CheckAlphabetExists(aUserKeys[aUserKeys.length-1]);
	
	//now loop through the array to display the letters and - for user
    for(i = 0; i < aGuessWord.length; i++)
    {
    	DisplayText += aGuessWord[i];
    }
	console.log(DisplayText);	
    DisplayText = "GuessWord is: " + DisplayText;
	document.getElementById("guessword").innerHTML = DisplayText;

	console.log(DisplayText);
	console.log(SelectedWord);
    if(DisplayText === SelectedWord)
    {

    	//increment win counter
    	gWinCtr = gWinCtr+1;
    	var sWinCtr = gWinCtr.toString();
    	alert("YOU WIN");    		
    	document.getElementById("Wins").innerHTML = "Your Win Total is: " + sWinCtr;
    	setTimeout(InitializeGlobals, 3000);
    	return;
    }	
    
}

function GenerateWord()
{
	console.log("calling GenerateRandomWordIndex");
	InitializeGlobals();
	var LtrCnt = GenerateRandomWordIndex();
	console.log("calling DetermineWordLength");
	DetermineWordLength(LtrCnt);
	var StrDash = "";
	console.log("after call");
	console.log(LtrCnt);
	console.log(cars[LtrCnt]);
				

}

// initialize all global variables
function InitializeGlobals()
{
	SelectedWord = "";
	aGuessWord.length = 0;
	i = 0;
	aUserKeys.length = 0;
	gNumTries = 0;
	gcMaxTries = 10;
	document.getElementById("Lives").innerHTML = "Number of Lives Left is: ---";
	//document.getElementById("Wins").innerHTML = "You Win Total is:----"	;
	document.getElementById("guessword").innerHTML = "GuessWord is: -----";
	document.getElementById("LettersUsed").innerHTML = "Letters Used is: ------ ";
	document.getElementById("KeyInput").value = "";
	document.getElementById("KeyInput").value = "Write a character into this field! ";

}


function ProcessKeys(event)
{

    var keynum;
    var nLives = 0;
    var sLives = "";
    var StrLettersUsed = "";
     console.log("key");
    if(window.event) 
    { // IE                    
      keynum = event.keyCode;
    } 
    else if(event.which)
    { // Netscape/Firefox/Opera                   
      keynum = event.which;
    }
    if(gNumTries == gcMaxTries)
    {

    	alert("You are a LOSER!!!. Please try again")

    	setTimeout(InitializeGlobals, 1000);
    	return;

    }	
    aUserKeys.push(String.fromCharCode(keynum));
    for(i=0; i<aUserKeys.length; i++)
    {
    	StrLettersUsed += aUserKeys[i];
    }
    //alert(String.fromCharCode(keynum));
    document.getElementById("LettersUsed").innerHTML = "Letters Used is: " + StrLettersUsed;
	console.log(event.key);
	//increment try counter
	gNumTries = gNumTries + 1;
	nLives = gcMaxTries - gNumTries;
	sLives = nLives.toString();
	document.getElementById("Lives").innerHTML = "Number of Lives Left is: " + sLives;
	DisplayAllOccurenceofGuessedLetter();
}



// end hiding script from old browsers -->