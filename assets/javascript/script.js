$(document).ready(function () {
    var themeSelect;
    var startTrivia;
    var chosenObject = { };

    var triviaThemes = {
        music : {
            firstQuestion : { 
                text: "First Question?",
                firstAnswer : ["bla bla bla 1", true],
                secondAnswer : ["bla bla bla 2", false],
                thirdAnswer : ["bla bla bla 3", false],
                fourthAnswer : ["bla bla bla 4", false],
                ansArray : []                
            },
            secondQuestion : {
                text: "Second Question?",
                firstAnswer : ["bla bla bla 1", true],
                secondAnswer : ["bla bla bla 2", false],
                thirdAnswer : ["bla bla bla 3", false],
                fourthAnswer : ["bla bla bla 4", false],
                ansArray : []
            }
        },
        sports : {
            firstQuestion : { 
                text: "First Question?",
                firstAnswer : ["bla bla bla 1", true],
                secondAnswer : ["bla bla bla 2", false],
                thirdAnswer : ["bla bla bla 3", false],
                fourthAnswer : ["bla bla bla 4", false],
                ansArray : []                
            },
            secondQuestion : {
                text: "Second Question?",
                firstAnswer : ["bla bla bla", true],
                secondAnswer : ["bla bla bla", false],
                thirdAnswer : ["bla bla bla", false],
                fourthAnswer : ["bla bla bla", false],
                ansArray : []
            }
        },
        tvShows : {
            firstQuestion : { 
                text: "First Question?",
                firstAnswer : ["bla bla bla 1", true],
                secondAnswer : ["bla bla bla 2", false],
                thirdAnswer : ["bla bla bla 3", false],
                fourthAnswer : ["bla bla bla 4", false],
                ansArray : []                
            },
            secondQuestion : {
                text: "Second Question?",
                firstAnswer : ["bla bla bla", true],
                secondAnswer : ["bla bla bla", false],
                thirdAnswer : ["bla bla bla", false],
                fourthAnswer : ["bla bla bla", false],
                ansArray : []
            }
        },
        geography : {
            firstQuestion : { 
                text: "First Question?",
                firstAnswer : ["bla bla bla 1", true],
                secondAnswer : ["bla bla bla 2", false],
                thirdAnswer : ["bla bla bla 3", false],
                fourthAnswer : ["bla bla bla 4", false],
                ansArray : []                
            },
            secondQuestion : {
                text: "Second Question?",
                firstAnswer : ["bla bla bla", true],
                secondAnswer : ["bla bla bla", false],
                thirdAnswer : ["bla bla bla", false],
                fourthAnswer : ["bla bla bla", false],
                ansArray : []
            }
        }
    };

    initializeGame();
    
    function emptyGame() {
        $("#question").empty();
        $("#answers").empty();
    }




    function initializeGame () {
        emptyGame();

        $("#question").text("Choose the trivia theme: ");
        $("#answers").append('<button type="button" class="btn btn-outline-secondary theme" id="music-btn" value="music">Music</button> <button type="button" class="btn btn-outline-secondary theme" id="sports-btn" value="sports">Sports</button> <button type="button" class="btn btn-outline-secondary theme" id="tv-btn" value="tvShows">T.V. Shows</button> <button type="button" class="btn btn-outline-secondary theme" id="geo-btn" value="geography">Geography</button>');
        
        console.log(triviaThemes);

        $(".theme").click(function(){
            themeSelect = $(this).val();
            emptyGame();
            $("#question").text("INSTRUCTIONS");
            $("#answers").text("You have chosen the " + themeSelect + " trivia. You'll have to answer 10 questions and you will have 30 seconds per question. Please press the Start button to intiate the game.")
            $("#answers").append('<button type="button" class="btn btn-block btn-warning" id="start-trivia">Start</button>');
            startTrivia = $("#start-trivia");
            console.log(startTrivia);
            startTrivia.click(function() {
                loadQuestions();
                
                // startQuestions();
            });
            
        });
    };

    function loadQuestions () {
        chosenObject = triviaThemes[themeSelect];
        console.log(chosenObject);
        var chosenObjectSize = 0;
        var startQuestTime;

        // for (var key in chosenObject) {
        //     if (chosenObject.hasOwnProperty(key)) chosenObjectSize++;
        // }
        // for (var quest = 0; quest < chosenObjectSize ; quest++) 

        
        // $.each(chosenObject, function (quest, value){
        for (var quest in chosenObject) {
            
            alert ("shuffle answers"+quest);
            shuffleAnswers(chosenObject[quest]);
            
            alert ("start questions"+quest);
            startQuestions(chosenObject[quest]);
            
            
            //alert(quest);
            // start timer function to wait for response
            // winLoose function
        };
    };

    function startQuestions (objQuest1) { 
            var idArray = ["#answer1", "#answer2", "#answer3", "#answer4"];
            var stquest = objQuest1.text;
            var startTimer;

            emptyGame(); 
            
            $("#question").text(stquest);
            $("#answers").append('<button type="button" class="btn btn-outline-secondary theme" id="answer1">Answer 1</button> <button type="button" class="btn btn-outline-secondary theme" id="answer2">Answer 2</button> <button type="button" class="btn btn-outline-secondary theme" id="answer3">Answer 3</button> <button type="button" class="btn btn-outline-secondary theme" id="answer4">Answer 4</button>');

            for (var i = 0 ; i < 4 ; i++){
                var ansTextArr = objQuest1.ansArray[i];
                $(idArray[i]).text(ansTextArr[0]);
                $(idArray[i]).val(ansTextArr[1]);
            }
            
            // var time = 30;
            // startTimer =  setInterval(thirtyTimer(time), 1000);

            
            
           
        
    };

    function shuffleAnswers (objAns1) {
        var indexArray = [];
        var test = false;
        var j = 0;

        while (!test){
            var index = Math.floor(Math.random()*4);
            var i;
            for (i = j; i >=0 ; i--){
                if (index == indexArray[i]){
                    i = -2;
                }
            }
            if (i == -1){
                indexArray[j] = index;
                if (j == 3) {
                    test = true;
                } else {
                    j++;
                };
            }
        }
        for (var k = 0 ; k < indexArray.length ; k++) {
            switch (indexArray[k]) {
                case 0:
                    objAns1.ansArray.push(objAns1.firstAnswer);
                    break;
                    
                case 1:
                    objAns1.ansArray.push(objAns1.secondAnswer);
                    break;

                case 2:
                    objAns1.ansArray.push(objAns1.thirdAnswer);
                    break;

                case 3:
                    objAns1.ansArray.push(objAns1.fourthAnswer);
                    break;

                default:
                    break;

            }
        }
        console.log(objAns1.ansArray);
    }

    function thirtyTimer(clock) {
        clock--;
    
        //  TODO: Get the current time, pass that into the timeConverter function,
        //        and save the result in a variable.
        var timeDisp = timeConverter(clock);
    
        //  TODO: Use the variable you just created to show the converted time in the "display" div.
        $("#time-display").text(timeDisp);
      }

    function timeConverter(t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
    
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
      }
    


    

   
    // startQuestions();
    // console.log(startTrivia);
    


});