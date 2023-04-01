const myQuestions = [
	{
		id=0;
		question: "1. Courtney Cox initially auditioned for which FRIENDS character ?",
		answers: [{ text: "Monica", isCorrect: false },
            { text: "Phoebe", isCorrect: false },
            { text: "Rachel", isCorrect: true }
        ]
	},
	{
		id=1;
		question: "2. Which Jonas Brother's idea was to call for a hiatus ?",
		answers: [{ text: "Joe", isCorrect: false },
            { text: "Kevin", isCorrect: false },
            { text: "Nick", isCorrect: true }
        ]
	},
    {
		id=2;
		question: "3. Who inspired Jungkook to join the band ?",
		answers: [{text: "RM",isCorrect: true},
			{text: "Suga",isCorrect: false},
			{text: "Jin", isCorrect: false}
	        ]   
	},
    {
		id=3;
		question: "4. Which member of One Direction had an acting career before ?",
		answers: [{text: "Zayn",isCorrect: false},
			{text: "Harry Styles",isCorrect: false},
			{text: "Louis Tomlinson",isCorrect: true}
	]
	},
    {
		id=4;
		question: "5. Which actor from The Big Bang Theory has a PhD degree ?",
		answers: [{text: "Kaley Cuoco",isCorrect: false},
			{text: "Jim Parsons",isCorrect: false},
			{text: "Mayim Bialik",isCorrect: true}
	]
	},
    {
		id=5;
		question: "6. Which member from The Game Of Thrones auditioned seven times ?",
		answers: [{text:"Emilia Clarke" ,isCorrect: false},
			{text: "Sam Heughan", isCorrect:true},
			{text: "Charles Dance", isCorrect:false}
	     ]
		},
    {   
		id=6;
		question: "7. What was Marilyn Monroe's real name ?",
		answers: [{text: "Norma Jeane Mortenson",isCorrect: true},
			{text: "Elizabeth Lauren McAdams",isCorrect: false},
			{text: "Judy Marigold Cooper", isCorrect:false}
	    ]
		},
    {
		id=7;
		question: "8. Which Beatles song holds the record for the most versions recorded by different artists ?",
		answers: [{text: "Hey Jude",isCorrect: false},
			{text: "Let It Be",isCorrect: false},
			{text: "Yesterday",isCorrect: true}
	    ]
	},
    {
		id=8;
		question: "9. Which member from The Game Of Thrones auditioned seven timesWhich is NOT a rumor about Regina George ?",
		answers: [{text: "She does car commercials in Japan.",isCorrect: false},
			{text: "Donatella Versace is on her speed dial.",isCorrect:true},
			{text: "She met John Stamos on a plane.",isCorrect: false}
	]
	},
    {
		id=9;
		question: "10. At what age did Taylor Swift first picked up the guitar",
		answers: [{text: "12",isCorrect: true},
			{text: "8",isCorrect: false},
			{true: "10",isCorrect:false}
	 ]
	}

]


// Set start
var start = true;
 
// Iterate
function iterate(id) {
 
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
 
    // Getting the question
    const question = document.getElementById("question");
 
 
    // Setting the question text
    question.innerText = myQuestions[id].q;
 
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    //const op4 = document.getElementById('op4');
 
 
    // Providing option text
    op1.innerText = myQuestions[id].answers[0].text;
    op2.innerText = myQuestions[id].answers[1].text;
    op3.innerText = myQuestions[id].answers[2].text;
    //op4.innerText = Questions[id].answers[3].text;
 
    // Providing the true or false value to the options
    op1.value = myQuestions[id].answers[0].isCorrect;
    op2.value = myQuestions[id].answers[1].isCorrect;
    op3.value = myQuestions[id].answers[2].isCorrect;
    //op4.value = Questions[id].answers[3].isCorrect;
 
    var selected = "";
 
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
 
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
 
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
 
    /*// Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })*/
 
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
 
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
 
if (start) {
    iterate("0");
}
 
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
 
next.addEventListener("click", () => {
    start = false;
    if (id < 10) {
        id++;
        iterate(id);
        console.log(id);
    }
 
})