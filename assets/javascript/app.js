
$(document).ready(function () {
    $('.start-btn').click(function () {

        // $('.start-btn').attr("style", "display:none");
        $('.start-btn').hide();
        $('.quiz-section').empty();
        // Generate quiz page with jquery
        var quiz = {
            set1: {
                question: "1. What is the difference between hurricanes and typhoons?",
                answer: ["Direction of spin", "Location", "Wind speed", "None of these", "ans1"],
                correct: "Location"
            },
            set2: {
                question: "2. The Great Storm of 1900 caused numerous deaths and mainly affected which city?",
                answer: ["New Orleans", "Miami", "Houston", "Galveston", "ans2"],
                correct: "Galveston"
            },
            set3: {
                question: "3. At what wind speed does a tropical storm system reach hurricane strength?",
                answer: ["76 mph (122 kph)", "74 mph (119 kph)", "72 mph (116 kph)", "70 mph (113 kph)", "ans3"],
                correct: "74 mph (119 kph)"
            },
            set4: {
                question: "4. In 2004, what rare hurricane-related weather phenomenon occured?",
                answer: ["A hurricane in the Southern Atlantic", "No tropical systems in the Eastern Pacific", "No hurricanes with U.S. landfall", "A hurricane off the coast of California", "ans4"],
                correct: "A hurricane in the Southern Atlantic "
            },
            set5: {
                question: "5. How many name lists are used in rotation for the Atlantic Hurricane season?",
                answer: ["Six", "Seven", "Five", "It's different every year", "ans5"],
                correct: "Six"
            },
            set6: {
                question: "6. At one time, tropical storm systems were given exclusively female names. In what year did male names start appearing on the lists?",
                answer: [" 1980", "1981", " 1979", "1978", "ans6"],
                correct: "1978"
            },
            set7: {
                question: "7. When is the Atlantic hurricane season?",
                answer: ["June 1 - November 30", "May 15 - December 15", "May 1 - October 31", "July 1 - October 31", "ans7"],
                correct: "June 1 - November 30"
            },
            set8: {
                question: "8. When a tropical depression forms, it is closely monitored for any further development. When the sustained wind speeds reach a certain point, the system is then elevated to Tropical Storm status and it is given a name. At which wind speed does this occur?",
                answer: ["39 mph (63 k/ph)", "45 mph (72 k/ph)", "35 mph (56 k/ph)", "42 mph (68 k/ph)", "ans8"],
                correct: "39 mph (63 k/ph)"
            },
            set9: {
                question: "9. Which of the following pairs of Atlantic hurricane names are the first ones to be retired?",
                answer: ["Betsy and Cleo", "Agnes and Elena", "Audrey and Janet", "Carol and Hazel", "ans9"],
                correct: "Carol and Hazel"
            },
            set10: {
                question: "10. In what year were names first officially assigned to Atlantic tropical systems?",
                answer: ["1964", "1959", "1953", "1945", "ans10"],
                correct: "1953"
            }

        };

        $('.quiz-section').append('<div class="timer"><p>You have <span class="time-Text">??</span> second to answer!</p></div>');

        var isTimerOn = false;
        //Timer
        var timeCountDown = 120; // 2mins
        if (isTimerOn == false) {
            var timer = setInterval(function () {
                timeCountDown--;
                $('.time-Text').text(timeCountDown);
                if (timeCountDown <= 0) {
                    getResult();
                }
            }, 1000);
            isTimerOn = true;
        }


        //quiz layout            
        console.log(ansArray);
        var ansArray = [];

        for (var set in quiz) {
            //Correct Ans array
            ansArray.push(quiz[set].correct);
            //Display question
            $(".quiz-section").append('<br><p>' + quiz[set].question + '</p><br>');
            for (var i = 0; i < 4; i++) {
                var addInput = $("<input>");
                addInput.addClass("radioChoice");
                addInput.attr("type", 'radio');
                addInput.attr("name", quiz[set].answer[4]);
                addInput.attr("value", quiz[set].answer[i]);
                addInput.text(quiz[set].answer[i]);
                //Display choices
                $(".quiz-section").append(addInput);
                $(".quiz-section").append('<p style="display:inline">' + quiz[set].answer[i] + '</p><br>');
            }

        };

        console.log(ansArray);

        var addSubmitBtn = $("<button>");
        addSubmitBtn.addClass("button submit-btn");
        addSubmitBtn.text('Submit');
        $(".quiz-section").append('<br>');
        $(".quiz-section").append(addSubmitBtn);

        var correctCount;
        var skippedCount;
        var wrongCount;
        //generate an array to store user's choice
        var userArray = [];

        $('.submit-btn').click(function () {
            getResult();
        });

        //time up and submit will trigger this function


        function getResult() {
            correctCount = 0;
            var getCheckedInput = $('Input:checked');
            $('Input:checked').each(function () {
                userArray.push($(this).val());
            });
            // Compare userArray and ansArray
            for (var i = 0; i < userArray.length; i++) {
                if (ansArray.indexOf(userArray[i]) > -1) {
                    correctCount++;
                }
            }
            skippedCount = ansArray.length - userArray.length;
            wrongCount = ansArray.length - correctCount - skippedCount;

            console.log(correctCount);
            console.log(skippedCount);
            console.log(wrongCount);
            $('.quiz-section').empty();
            $('.quiz-section').append("<p> Correct:" + correctCount + "</p>");
            $('.quiz-section').append("<p> Wrong:" + wrongCount + "</p>");
            $('.quiz-section').append("<p> Skipped:" + skippedCount + "</p>");
            $('.quiz-section').append("<p> Try Again!</p>");
            $('.start-btn').show();
            isTimerOn == false;
            clearInterval(timer);
        }
    });
})