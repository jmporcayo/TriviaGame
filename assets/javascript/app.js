console.log("hello");

//$(function() {});


var questions = ["How many Power Rangers were in the first 5 episodes?", "What high school did they go to?", "Who is the first villan they encounter?", "Who is the leader?", "What are they constantly fighting in the first season?", "What is their mentors name?", "It's ???????? time!", "What is their combines zords called?"];
var answers = [["5", "2", "8", "6"], ["Lawndale","Angel Grove","Hogwarts","Northshore"], ["Darth Vader", "Zedd", "Rita Repulsa", "Magneto"], ["Tommy","Zack","Jason","Billy"], ["Z Putties", "Tenga Warriors", "Sting Wingers", "Putty Patrol"], ["Zordan","Bulk","Skull","Alpha"], ["Butt Kicking", "Morphing", "Zords", "lunch"], ["Dinozord","Dragonzord","Titanus","Megazord"]];
var correctAnswers = [" 5", "Angel Grove", "Rita Repulsa", "Jason", "Putty Patrol", "Zordan", "Morphing", "Mega Zord"];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerInMs = 15000;

var questionBank = [
    {
        question: "How many Power Rangers were in the first 5 episodes?",
        answerChoices: ["5", "2", "8", "6"],
        correctAnswerIndex: 0
    },
    {
        question: "What high school did they go to?",
        answerChoices: ["Lawndale","Angel Grove","Hogwarts","Northshore"],
        correctAnswerIndex: 1
    },
    {
        question: "Who is the first villan they encounter?",
        answerChoices: ["Darth Vader", "Zedd", "Rita Repulsa", "Magneto"],
        correctAnswerIndex: 2
    },
    {
        question: "Who is the leader?",
        answerChoices: ["Tommy","Zack","Jason","Billy"],
        correctAnswerIndex: 2
    },
    {
        question: "What are they constantly fighting in the first season?",
        answerChoices: ["Z Putties", "Tenga Warriors", "Sting Wingers", "Putty Patrol"],
        correctAnswerIndex: 3
    },
    {
        question: "What is their mentors name?",
        answerChoices: ["Zordan","Bulk","Skull","Alpha"],
        correctAnswerIndex: 0
    },
    {
        question: "It's ???????? time!",
        answerChoices: ["Butt Kicking", "Morphing", "Zords", "lunch"],
        correctAnswerIndex: 1
    },
    {
        question: "What is their combined zords called?",
        answerChoices: ["Dinozord","Dragonzord","Titanus","Megazord"],
        correctAnswerIndex: 3
       // class: 'zords'
    }
]
   
   //---------------------------------------------------------------------------------- 
    function resetQuiz() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        seconds = 30;
     
    }
//--------------------------------------------------------------------------------------
function startQuiz() {

    $("#startGame").empty();
    //first question, multiple choice
    for (var i = 0; i < questionBank.length; i++) {
        $(".quizbox").append("<h4>" + questionBank[i].question + "</h4>");

            for(var j = 0; j < questionBank[i].answerChoices.length; j++){
                // $(".quizbox").append("<input type='radio' name=question-'" + i + "' value='" + questionBank[i].answerChoices[j] + "' >" + questionBank[i].answerChoices[j]);

                $(".quizbox").append(`<input type=radio class="${questionBank[i].class}" name=question-${i} data-choice=${j} data-answer=${questionBank[i].correctAnswerIndex} value=${questionBank[i].answerChoices[j]} >` + questionBank[i].answerChoices[j]);
            }
    }

    $(".quizbox").append(`<br><br> <button id=submit-quiz>Submit</button>`);
}

//---------------------------------------------------------------------------------------------
function gradeQuiz(){

        // Worked with tutor on learning a bit of new ES6 syntax including let/const and template literals
        let attemptCounter = 0;
    for(let i = 0; i < questionBank.length; i++){
        $.each($(`input[name=question-${i}]:checked`), function(){
        // console.log($(this));

        console.log($(this).data('answer'))
         console.log($(this).data('choice'));


        if($(this).data("answer") == $(this).data("choice")){
            correct = correct + 1;
            attemptCounter++;
        }
        else{
            incorrect = incorrect + 1;
            attemptCounter++;
        }

        
    })
    } 

    // unanswered = questionBank.length - attemptCounter;
    unanswered = questionBank.length - (correct + incorrect);

    alert(`You got ${correct} answers correct! You got ${incorrect} incorrect and did not answer ${unanswered}`)  
    
}
//-------------------------------------------------------------------------------------
   


    $("#startGame").on("click", function(){
        console.log($(this));
         //start game
         startQuiz();    
    })
    //---------------------------------------------------------------------------------

    $(document).on("click", "#submit-quiz", function(){
        gradeQuiz();
            
            
    
    })
// //------------------------------------------------------------------------------------
//   let windowTimeout = SetTimeout(function() {
//       alert("New Game");
//   }, 30000);


// var inter = setInterval(function() {
//    i++;
//    if (i > 10){
//        claerInterval(inter);
//    }
//    }, 30000)
//    // console.log('test')
// },30000);

// var i = 0;
// var inter = setInterval(function() {
//     i++;
//     console.log(i);
//     if (i > 10) {
//         clearInterval(inter);
//     }
// }, 3000)



    //30 second delay


//      listen click function
//      30000 
//      alert .text("TIMES UP!")

// function timesUp () {
//     $("#timer")

function timesUp() {
    console.log('times up')
    alert('Times Up');
    gradeQuiz();
}

$("#timer").on("click", function() {
    //  Set the button alert's timeout to run three seconds after the function's called.
    var timeout1 = setTimeout(timesUp, timerInMs);
    $("#timer").html("<h2>" + number + "</h2>");
})

    
   
