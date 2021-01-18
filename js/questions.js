// Global Variables
var index = 0;
var counter;
var correctAnswers = 0;
var timerSeconds = 30;
var timeEl = document.getElementById("timer");
var nameOfPlayer = document.getElementById("first-name").value;
var scores = [];


// Questions 
var questions = [{
      question: "Single line Java Script comments start with: ",
      answer1: "//",
      answer2: "##",
      answer3: "^^",
      answer4: "??",
      correctAnswer: "//"
   },
   {
      question: "Is Javascript a case-sensitive language?",
      answer1: "Yes",
      answer2: "No",
      answer3: "Kinda Sorta",
      answer4: "Depends on the day? ",
      correctAnswer: "Yes"
   },
   {
      question: "What is a NaN in JavaScript?",
      answer1: "Not a Number",
      answer2: "Not a Null Object",
      answer3: "Not a Node variable",
      answer4: "Number on Number Sequencing",
      correctAnswer: "Not a Number"
   },
   {
      question: "Which command will show the version of jQuery?",
      answer1: "console.log(jQuery().jquery);",
      answer3: "jQuery -System --version",
      answer4: "JQuery has no differing versions",
      correctAnswer: "console.log(jQuery().jquery);"
   },
   {
      question: "",
      answer1: "",
      answer3: "",
      answer4: "",
      correctAnswer: ""
   }

]



// SETS DOCUMENT OBJECT TO BE READY BEFOR RUNNING SCRIPT // 
$(document).ready(function () {

   // Hide List elements
   $(".hover").hide();
   $("#HighScore").hide();
   $("#pAgain").hide();

   // Log values to console
   $("#startBtn").click(function () {

      nameOfPlayer = document.getElementById("first-name").value;
      console.log(nameOfPlayer);
   })

   // Start the Timer
   $("#startBtn").click(function setTime() {
      var timerInterval = setInterval(function () {
         timerSeconds--;
         // console.log(timerSeconds);
         timeEl.textContent = `${timerSeconds} Seconds left to finish quiz`;

         if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            // alert("Times Up!");
            document.getElementById("questionToBeAsked").innerHTML = "You have: " + correctAnswers + " correct answer.";
            $(".hover").hide();
            $(startBtn).hide();
            $("#HighScore").show();
            $("#pAgain").show();

            // var storedScored = JSON.parse(localStorage.setItem)
            correctAnswer = 0;
            index = 0;

         }

      }, 1000);
   })

   // Hide Name Field & write set key
   $("#startBtn").click(function () {
      $("#first-name").hide();
      var setName = JSON.stringify(nameOfPlayer);
      console.log(setName);
      localStorage.setItem('Name', setName);

   })

   // Start the Questions 
   $("#startBtn").click(function () {
      $(this).text('Next');
      $(startBtn).hide();
      $("#HighScore").hide();
      $(".hover").show();
      $("#indexAlert").text("index of: " + index);


      // const element = questions[index];
      document.getElementById("questionToBeAsked").innerHTML = questions[index].question;
      document.getElementById("option1").innerHTML = questions[index].answer1;
      document.getElementById("option2").innerHTML = questions[index].answer2;
      document.getElementById("option3").innerHTML = questions[index].answer3;
      document.getElementById("option4").innerHTML = questions[index].answer4;

      // Checks to see if index is 0 to begin with and increments it accordingly for sub functions
      if (index === 0) {
         var solution = this.innerHTML;

         if (solution === questions[index].correctAnswer) {
            console.log(solution);
            correctAnswers = correctAnswers + 1
            
            $("#indexAlert").text("index of: " + index);

         }
         if (solution != questions[index].correctAnswer) {
            
            $("#indexAlert").text("index of: " + index);
         }

      }

      // Starts Second Set of variable to increment and cycle through questions and answers
      $(".wow").click(function () {
         var solution = this.innerHTML;
         console.log("index: " + index);



         // console.log(questions[index -1].correctAnswer);
         if (solution === questions[index].correctAnswer) {
            console.log(solution);
            correctAnswers = correctAnswers + 1
            
            $("#indexAlert").text("index of: " + index);

         }
         if (solution != questions[index].correctAnswer) {
            
            $("#indexAlert").text("index of: " + index);
         }

         if (index <= 4) {
            index++;
            document.getElementById("questionToBeAsked").innerHTML = questions[index].question;
            document.getElementById("option1").innerHTML = questions[index].answer1;
            document.getElementById("option2").innerHTML = questions[index].answer2;
            document.getElementById("option3").innerHTML = questions[index].answer3;
            document.getElementById("option4").innerHTML = questions[index].answer4;
            
         }
         if (index >= 4) {
            
            document.getElementById("questionToBeAsked").innerHTML = nameOfPlayer + " uou have: " + correctAnswers + " of 4 correct answer.";
            $(".hover").hide();
            $(startBtn).hide();
            $("#HighScore").show();
            $("#pAgain").show();

            
            var player =   nameofPlayer
            localStorage.setItem(player);
            localStorage.setItem(correctAnswers); 
            correctAnswer = 0;
            index = 0;
            
         }

       
      })
      console.log(index);


   });

   $("#pAgain").click(function () {
      index = 0;
      console.log(index);
      location.reload();
   })


   $("#HighScore").click(function () {
      alert("High Scores");

   })


});