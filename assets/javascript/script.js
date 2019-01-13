$(document).ready(function () {
    var themeSelect;
    var startTrivia;
    var ff;
    var k = 0;
    var time = 30;
    var goodAns = 0;
    var badAns = 0;
    var propArray = [];
    var arrayCount = 0;
    var chosenObject = { };

    var triviaThemes = {
        music : {
            firstQuestion : { 
                text: "What musician is often referred to as the fifth Beatle?",
                funFact: "Pete Best was the drummer for The Beatles from 1960-1962; he was later replaced by Ringo Starr.",
                firstAnswer : ["Pete Best", true],
                secondAnswer : ["George Michael", false],
                thirdAnswer : ["Pistol Pete", false],
                fourthAnswer : ["Ringo Starr", false],
                ansArray : []                
            },
            secondQuestion : {
                text: "How many keys are on most baby grand pianos?",
                funFact:"The Piano is a stringed musical instrument invented around the year 1700, in which the strings are struck by hammers.",
                firstAnswer : ["88", true],
                secondAnswer : ["44", false],
                thirdAnswer : ["132", false],
                fourthAnswer : ["8", false],
                ansArray : []
            },
            thirdQuestion : {
                text: "What musician won the Nobel Prize for Literature in 2016?",
                funFact:"Bob Dylan is an American singer, songwriter, writer, and artist. He has been extremely influential in music culture for more than 50 years. One of his most popular songs is Blowin' in the Wind from 1963.",
                firstAnswer : ["Bob Dylan", true],
                secondAnswer : ["Juan Santos", false],
                thirdAnswer : ["John Lennon", false],
                fourthAnswer : ["Louis Armstrong", false],
                ansArray : []
            },
            fourthQuestion : {
                text: "Rapper Vanilla Ice had a hit song titled Ice Ice Baby, from which other song did Ice Ice Baby sample from?",
                funFact: "Under Pressure is a song made by Queen and David Bowie, released in 1982 with the album Hot Space",
                firstAnswer : ["Under Pressure", true],
                secondAnswer : ["Cold as Ice", false],
                thirdAnswer : ["Baby come back", false],
                fourthAnswer : ["We are the champions", false],
                ansArray : []
            },
            fifthQuestion : {
                text: "Who is the most successful UK solo artist in the US?",
                funFact:"Elton John was knighted by Queen Elizabeth in 1998",
                firstAnswer : ["Elton John", true],
                secondAnswer : ["John Lennon", false],
                thirdAnswer : ["Tony Blair", false],
                fourthAnswer : ["Queen", false],
                ansArray : []
            },
            sixthQuestion : {
                text: "Who is the author of the poem Ode to the Joy?",
                funFact:"Beethoven's 9th symphony is the first that introduces a singing choir. For the lyrics Beethoven used the Poem Ode to the Joy",
                firstAnswer : ["Friedrich Schiller", true],
                secondAnswer : ["Beethoven", false],
                thirdAnswer : ["Wolfgang Amadeus Mozart", false],
                fourthAnswer : ["Johan Sebastian Bach", false],
                ansArray : []
            },
            seventhQuestion : { 
                text: "What was Elvis Presley's first hit in 1956?",
                funFact: "Elvis' famous black hair was dyed - his natural color was brown.",
                firstAnswer : ["Heartbreak Hotel", true],
                secondAnswer : ["Can't help falling in love", false],
                thirdAnswer : ["Blue Christmas", false],
                fourthAnswer : ["Always on my mind", false],
                ansArray : []                
            },
            eighthQuestion : {
                text: "Hallelujah is part of what Handel's Oratorium?",
                funFact: "Handel's lawyer father was not a huge fan of his son's musical ambitions. In fact, when he was a boy, Handel had to sneak to the attic to play a clavichord that had been hidden up there.",
                firstAnswer : ["The Messiah", true],
                secondAnswer : ["The Elijah", false],
                thirdAnswer : ["The Creation", false],
                fourthAnswer : ["The Bible", false],
                ansArray : []   
            },
            ninthQuestion : {
                text: "Which electronic musical instrument emits the eeriest of sounds and is the only instrument played without touching it?",
                funFact : "The theremin's familiar, haunting tones are coaxed out of the machine by waving one's hands around it.",
                firstAnswer : ["Theremin", true],
                secondAnswer : ["Piano", false],
                thirdAnswer : ["Trumpet", false],
                fourthAnswer : ["Fagot", false],
                ansArray : []   
            },
            tenthQuestion : {
                text: "Who was the lead singer of the band Queen?",
                funFact : "Freddie Mercury was a British singer, songwriter, and record producer. He was best known as the lead vocalist of the rock band Queen",
                firstAnswer : ["Freddie Mercury", true],
                secondAnswer : ["Bryan May", false],
                thirdAnswer : ["Rami Malek", false],
                fourthAnswer : ["Elton John", false],
                ansArray : []  
            }
        },
        sports : {
            firstQuestion : { 
                text: "What male tennis player has won the most Grand Slam titles?",
                funFact: " Roger Federer is a Swiss Tennis Player. He has won 20 Grand Slam Titles.",
                firstAnswer : ["Roger Federer", true],
                secondAnswer : ["Pete Sampras", false],
                thirdAnswer : ["Rod Laver", false],
                fourthAnswer : ["Rafael Nadal", false],
                ansArray : []                
            },
            secondQuestion : {
                text: "How many holes are there in a full round of golf?",
                funFact:" A traditional golf course is 18 holes, but nine-hole courses are common and can be played twice through for a full round of 18 holes.",
                firstAnswer : ["18", true],
                secondAnswer : ["44", false],
                thirdAnswer : ["13", false],
                fourthAnswer : ["8", false],
                ansArray : []
            },
            thirdQuestion : {
                text: "Who is the only athlete ever to play in a Super Bowl and a World Series?",
                funFact:"Deion Sanders is now a former American football and baseball player who works as an analyst for CBS Sports and the NFL Network.",
                firstAnswer : ["Deion Sanders", true],
                secondAnswer : ["Michael Jordan", false],
                thirdAnswer : ["Lebron James", false],
                fourthAnswer : ["Ussain Bolt", false],
                ansArray : []
            },
            fourthQuestion : {
                text: "What is the regulation height for a basketball hoop?",
                funFact: "The basketball hoop remains placed at 10 feet (3.05m) above the court since the original invention of the game in late 1891.",
                firstAnswer : ["10 feet", true],
                secondAnswer : ["2.85 meters", false],
                thirdAnswer : ["13 feet", false],
                fourthAnswer : ["10 yards", false],
                ansArray : []
            },
            fifthQuestion : {
                text: "What city hosted the 2012 Summer Olympics?",
                funFact:"London is the capital of England and is often known for the Queen's Guards, The London Eye, and Big Ben.",
                firstAnswer : ["London", true],
                secondAnswer : ["Pekin", false],
                thirdAnswer : ["Rio do Janeiro", false],
                fourthAnswer : ["Atlanta", false],
                ansArray : []
            },
            sixthQuestion : {
                text: "Tiger Woods became a professional golfer in what year?",
                funFact:"Besides golfing, Tiger Woods also creates golf courses in different countries like Jack's Bay in the Bahamas.",
                firstAnswer : ["1996", true],
                secondAnswer : ["2006", false],
                thirdAnswer : ["2001", false],
                fourthAnswer : ["1998", false],
                ansArray : []
            },
            seventhQuestion : { 
                text: "How many soccer players per team should be on the field at the same time?",
                funFact: "Soccer was invented in England. The only place where it is known as soccer is USA, the rest of the world calls it Futbol",
                firstAnswer : ["11", true],
                secondAnswer : ["22", false],
                thirdAnswer : ["5", false],
                fourthAnswer : ["9", false],
                ansArray : []                
            },
            eighthQuestion : {
                text: "What tennis player is known as Pistol Pete?",
                funFact: "Pete Sampras won 13 Grand Slam Titles. The only Grand Slam he didn't win was Roland Garros",
                firstAnswer : ["Pete Sampras", true],
                secondAnswer : ["Andre Agassi", false],
                thirdAnswer : ["Pedro Navajas", false],
                fourthAnswer : ["Peter and the Wolf", false],
                ansArray : []   
            },
            ninthQuestion : {
                text: "In what city was the first modern Olympic Games held?",
                funFact : "The first Olimpic Games took place in 1896 in Athens, Greece.",
                firstAnswer : ["Athens", true],
                secondAnswer : ["Atlanta", false],
                thirdAnswer : ["Sparta", false],
                fourthAnswer : ["London", false],
                ansArray : []   
            },
            tenthQuestion : {
                text: "What NFL Quarterback has been in the most Super Bowls?",
                funFact : "Brady was born on Aug. 3, 1977 in San Mateo, California",
                firstAnswer : ["Tom Brady", true],
                secondAnswer : ["Michael Vic", false],
                thirdAnswer : ["Peyton Manning", false],
                fourthAnswer : ["Brett Favre", false],
                ansArray : []  
            }
        },
        tvShows : {
            firstQuestion : { 
                text: "Who played Chandler's father on Friends?",
                funFact : "Kathleen Turner played Chandler's father, Charles Bing, in several episodes of Friends, including The One with Chandler's Dad which aired on May 10",
                firstAnswer : ["Kathleen Turner", true],
                secondAnswer : ["Michael Douglas", false],
                thirdAnswer : ["Luke Perry", false],
                fourthAnswer : ["Elliot Gould", false],
                ansArray : []                
            },
            secondQuestion : {
                text: "Every episode of Seinfeld contains an image or reference to what superhero?",
                funFact:"The original concept for Seinfeld wasn’t for an ongoing series, but a one-off, 90-minute special titled Stand Up that was set to run for one night only in Saturday Night Live’s timeslot.",
                firstAnswer : ["Superman", true],
                secondAnswer : ["Captain Planet", false],
                thirdAnswer : ["Batman", false],
                fourthAnswer : ["Spiderman", false],
                ansArray : []
            },
            thirdQuestion : {
                text: "In Bewitched, what part of her body does Samantha twitch to practice magic?",
                funFact:"Samantha's very first nose twitch occurs about five minutes into the pilot episode of Bewitched, which premiered on ABC on September 17, 1964.",
                firstAnswer : ["Her nose", true],
                secondAnswer : ["Her forehead", false],
                thirdAnswer : ["her ears", false],
                fourthAnswer : ["Her hands", false],
                ansArray : []
            },
            fourthQuestion : {
                text: "What TV series showed the first interracial kiss on American network television?",
                funFact: "The first interracial kiss on American network television was in the Star Trek episode entitled Plato's Stepchildren, which aired on November 22, 1968, when Captain Kirk (William Shatner) kissed Lieutenant Uhura (Nichelle Nichols).",
                firstAnswer : ["Star Trek", true],
                secondAnswer : ["Family Feud", false],
                thirdAnswer : ["The Cosby Show", false],
                fourthAnswer : ["Bewitched", false],
                ansArray : []
            },
            fifthQuestion : {
                text: "What is the phrase on the UFO poster in Fox Mulder's office in X-Files?",
                funFact:"The famous I Want to Believe UFO poster from Fox Mulder's office in the X-Files continually had to be replaced as copies kept disappearing from the set.",
                firstAnswer : ["I want to believe", true],
                secondAnswer : ["The truth is out there", false],
                thirdAnswer : ["Trust no one", false],
                fourthAnswer : ["We are not alone", false],
                ansArray : []
            },
            sixthQuestion : {
                text: "What television series was the first to air the sound of a toilet being flushed?",
                funFact:"In 1971, All in the Family became the first series to be videotaped in front of a live studio audience, as well as the first to air the sound of a toilet being flushed.",
                firstAnswer : ["All in the family", true],
                secondAnswer : ["Leave it to beaver", false],
                thirdAnswer : ["Maude", false],
                fourthAnswer : ["The Addams family", false],
                ansArray : []
            },
            seventhQuestion : { 
                text: "Who was Alex P. Keaton's youngest sibling on Family Ties?",
                funFact: "Steven and Elyse had a fourth child, Andy, who was born in 1985 and quickly moulded in Alex's conservative image.",
                firstAnswer : ["Andy", true],
                secondAnswer : ["Mallory", false],
                thirdAnswer : ["Jennifer", false],
                fourthAnswer : ["Skippy", false],
                ansArray : []                
            },
            eighthQuestion : {
                text: "In what reality TV show are contestants eliminated in tribal council?",
                funFact: "Survivor features a group of contestants who are marooned in an isolated location, where they must provide food, water, fire, and shelter for themselves.",
                firstAnswer : ["Survivor", true],
                secondAnswer : ["Hell's kitchen", false],
                thirdAnswer : ["The Bachelor", false],
                fourthAnswer : ["Duck dinaty", false],
                ansArray : []   
            },
            ninthQuestion : {
                text: "What TV show is credited for a massive surge of applications for courses in forensic science?",
                funFact : "The extreme popularity of CSI: Crime Scene Investigation has been credited for a massive surge of applications for courses in forensic science.",
                firstAnswer : ["CSI", true],
                secondAnswer : ["NCIS", false],
                thirdAnswer : ["X-Files", false],
                fourthAnswer : ["Friends", false],
                ansArray : []   
            },
            tenthQuestion : {
                text: "What product was advertised in the first television commercial?",
                funFact : "The first television commercial appeared on New York station WNBT (now WNBC) during a Dodgers and Phillies game on July 1, 1941. It was a 10-second ad for Bulova watches.",
                firstAnswer : ["Bulova Watches", true],
                secondAnswer : ["Phillips Morris cigarretes", false],
                thirdAnswer : ["Charmin bath tissue", false],
                fourthAnswer : ["Dunkin' Donuts", false],
                ansArray : []  
            }
        },
        geography : {
            firstQuestion : { 
                text: "What is Earth's largest continent?",
                funFact : "Currently, Asia is Earth's largest continent at approximately 17,300,000 square miles (44,806,812 sq km).",
                firstAnswer : ["Asia", true],
                secondAnswer : ["Europe", false],
                thirdAnswer : ["Antartic", false],
                fourthAnswer : ["Africa", false],
                ansArray : []                
            },
            secondQuestion : {
                text: "What river runs through Baghdad?",
                funFact:"The Tigris river runs through Baghdad. It is about 1,150 miles (1,800 km) long. The name Tigris comes from Old Persian and translates as the fast one.",
                firstAnswer : ["Tigris", true],
                secondAnswer : ["Euphrates", false],
                thirdAnswer : ["Amazon", false],
                fourthAnswer : ["Jordan", false],
                ansArray : []
            },
            thirdQuestion : {
                text: "What country has the most natural lakes?",
                funFact:"Canada has more than half of all the natural lakes in the world. An impressive nine percent of the country is covered in fresh water.",
                firstAnswer : ["Canada", true],
                secondAnswer : ["USA", false],
                thirdAnswer : ["Australia", false],
                fourthAnswer : ["India", false],
                ansArray : []
            },
            fourthQuestion : {
                text: "What is the driest place on Earth?",
                funFact: "The driest place on Earth: the McMurdo Dry Valleys in Antarctica. It hasn't rained there for more than 2 million years!",
                firstAnswer : ["McMurdo Dry Valleys, Antarctica", true],
                secondAnswer : ["Sahara Desert", false],
                thirdAnswer : ["Atacama Desert", false],
                fourthAnswer : ["Kufra, Libya", false],
                ansArray : []
            },
            fifthQuestion : {
                text: "In what country can you visit Machu Picchu?",
                funFact:"Machu Picchu is a 15th-century Inca citadel located in the Cusco Region, in Peru, above the Sacred Valley.",
                firstAnswer : ["Peru", true],
                secondAnswer : ["Colombia", false],
                thirdAnswer : ["Chile", false],
                fourthAnswer : ["Bolivia", false],
                ansArray : []
            },
            sixthQuestion : {
                text: "What African country served as the setting for Tatooine in Star Wars?",
                funFact:"Tatooine derived its name from Tataouine, a city in Tunisia located near the site where various scenes were filmed.",
                firstAnswer : ["Tunisia", true],
                secondAnswer : ["Ghana", false],
                thirdAnswer : ["Ethiopia", false],
                fourthAnswer : ["Gabon", false],
                ansArray : []
            },
            seventhQuestion : { 
                text: "What is the oldest city in the world?",
                funFact: "Damascus, the capital of Syria, is widely believed to be the oldest continuously inhabited city in the world, with evidence of habitation dating back at least 11,000 years.",
                firstAnswer : ["Damascus", true],
                secondAnswer : ["Jerusalem", false],
                thirdAnswer : ["Jericho", false],
                fourthAnswer : ["Athens", false],
                ansArray : []                
            },
            eighthQuestion : {
                text: "Which U.S. state has the most active volcanoes?",
                funFact: "There are about 169 volcanoes in the United States that scientists consider active. Most of these (about 130) are located in Alaska, where eruptions occur virtually every year.",
                firstAnswer : ["Alaska", true],
                secondAnswer : ["Hawaii", false],
                thirdAnswer : ["California", false],
                fourthAnswer : ["Washington", false],
                ansArray : []   
            },
            ninthQuestion : {
                text: "What is the largest country in South America?",
                funFact : "Brazil is the largest and most populous country in South America. It is so large, in fact, that it borders every South American country except for Ecuador and Chile. Brazil covers nearly half of South America and is larger in area than the continental United States of America.",
                firstAnswer : ["Brazil", true],
                secondAnswer : ["Argentina", false],
                thirdAnswer : ["Colombia", false],
                fourthAnswer : ["Surinam", false],
                ansArray : []   
            },
            tenthQuestion : {
                text: "What is the tallest mountain in the world?",
                funFact : "At 8,850 meters (29,035 ft), Mount Everest is the tallest mountain in the world. In Nepali, Everest is called Sagarmatha or Forehead of the Sky and in Tibetan it is known as Qomolangma or Mother of the Universe.",
                firstAnswer : ["Mount Everest", true],
                secondAnswer : ["Mount Kilimanjaro", false],
                thirdAnswer : ["Qogir", false],
                fourthAnswer : ["Aconcagua", false],
                ansArray : []  
            }
        }
    };

    initializeGame();
    
    // endGame();
    
    function emptyGame() {
        $("#question").empty();
        $("#answers").empty();
        $("#time-display").empty();
    }




    function initializeGame () {
        goodAns = 0;
        badAns = 0;
        emptyGame();

        $("#question").text("Choose the trivia theme: ");
        $("#answers").append('<button type="button" class="btn btn-outline-secondary theme" id="music-btn" value="music">Music</button> <button type="button" class="btn btn-outline-secondary theme" id="sports-btn" value="sports">Sports</button> <button type="button" class="btn btn-outline-secondary theme" id="tv-btn" value="tvShows">T.V. Shows</button> <button type="button" class="btn btn-outline-secondary theme" id="geo-btn" value="geography">Geography</button>');
        
        console.log(triviaThemes);
        
        $(".theme").click(function(){
            themeSelect = $(this).val();
            emptyGame();
            $("#question").text("INSTRUCTIONS");
            $("#answers").text("You have chosen the " + themeSelect + " trivia. You'll have to answer 10 questions and you will have 30 seconds per question. Please press the Start button to initiate the game.")
            $("#answers").append('<button type="button" class="btn btn-block btn-warning" id="start-trivia">Start</button>');
            startTrivia = $("#start-trivia");
            console.log(startTrivia);
            chosenObject = triviaThemes[themeSelect];
            console.log(chosenObject);
            for (var properiter in chosenObject) {
                propArray[arrayCount] = properiter;
                arrayCount ++;
                console.log(propArray);
            };
            startTrivia.click(function() {
                loadQuestions();
                
                // startQuestions();
            });
            
        });
    };

    function loadQuestions () {
        
            var quest = propArray[k];
            console.log("proparry: " + propArray);
            console.log("quest "+quest);
            console.log("chosenObject[quest]: "+chosenObject[quest]);

            shuffleAnswers(chosenObject[quest]);

            startQuestions(chosenObject[quest]);
            time = 30;
            startTimer =  setInterval(thirtyTimer, 1000);
            
            $(".theme").click(function(){
                clearInterval(startTimer);
                var ansValidator = $(this).val();
                console.log(ansValidator);
                if (ansValidator == "false"){
                    
                    wrongAns();
                    
                }
                else {
                    corrAns();
                    
                }
            });


        // };
        
    };

    function corrAns () {
        emptyGame();
        goodAns++;
        k++;
        $("#question").text("NICE!!!");
        $("#answers").append("<div>"+ ff +"</div>");
        $("#answers").append("<div> Now you have " + goodAns + " correct answers and " + badAns + " uncorrect answers.</div>");
        $("#answers").append('<img src="https://i.giphy.com/media/l2Sqdb0SoKNY8RLry/giphy-downsized.gif" class="img-fluid" id="gif-img">');
        $("#answers").append('<button type="button" class="btn btn-block btn-warning" id="cont-button">Continue</button>');
        console.log (k + " | " + propArray.length);

        // setTimeout(contGame,5000);
        $("#cont-button").click(function() {
            contGame();
        });

    };

    function contGame() {
        if (k >= propArray.length) {
            
            endGame();
        }
        else {
            
            loadQuestions();
        }
    };

    function wrongAns () {
        emptyGame();
        badAns++;
        k++;
        $("#question").text("WRONG!!!");
        $("#answers").append("<div>"+ ff +"</div>");
        $("#answers").append("<div> Now you have " + goodAns + " correct answers and " + badAns + " uncorrect answers.</div>");
        $("#answers").append('<img src="https://i.giphy.com/media/NQL7Wuo2JSQSY/giphy.webp" class="img-fluid" id="gif-img">');
        $("#answers").append('<button type="button" class="btn btn-block btn-warning" id="cont-button">Continue</button>');
        
        // setTimeout(contGame,5000);

        $("#cont-button").click(function() {
            contGame();
        });
       
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
            
            ff = objQuest1.funFact;
            
              
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
        for (var m = 0 ; m < indexArray.length ; m++) {
            switch (indexArray[m]) {
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
        // console.log(objAns1.text + " " + objAns1.ansArray);
    }

    function endGame() {
        emptyGame();
        $("#question").text("TRIVIA RESULTS:")
        $("#answers").text("You got " + goodAns + " correct answers and " + badAns + " incorrect answers. Do you want to play again?");
        $("#answers").append('<div class="btn-group" role="group" id="finalBtns"></div>');
        $("#finalBtns").append('<button type="button" class="btn btn-block btn-warning" id="again-trivia">Start</button>');
        $("#finalBtns").append('<button type="button" class="btn btn-block btn-warning" id="end-trivia">Finish</button>');
        $("#again-trivia").click(function () {
            initializeGame();
        });
        $("#end-trivia").click(function() {
            emptyGame();
            $("#question").text("THANKS FOR PLAYING RANDOM TRIVIA GAME!!!");
        });

    }

    function thirtyTimer() {
        
        console.log(time);
        var timeDisp = timeConverter(time);
    
        $("#time-display").text(timeDisp);

        time--;

        if (time < 0) {
            $("#time-display").text("00:00");
            clearInterval(startTimer);
            wrongAns();
            
        }
        
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
    
});