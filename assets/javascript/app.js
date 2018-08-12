var region = ['africa', 'asia', 'europe', 'theAmericas'];
var chosenRegion, curentQuestion, currentAnswers, correctAnswer;
var rightCount = 0;
var wrongCount = 0;
var missed = 0;
var questionCount = 0;
var timerTime = 60;
var africa = {
    title: 'Africa',
    map: 'assets/images/africa.png',
    image: ['assets/images/ouroboros.jpg', 'assets/images/set.jpg', 'assets/images/masks.jpg', 'assets/images/olorun.jpg'],
    question: ['This Egyptian serpent that is eating its own tail symbolizes the circle of life, death and eternity.',
        'According to the Egyptian Myth of Osiris, who murdered Osiris?',
        'In African mythology, Anansi is a trickster and storyteller who takes the shape of which animal?',
        'This sky god was the great king of the Universe and the glorious pinnacle of Yoruba mythology.'
    ],
    answers: [['Ouroboros', 'Thoth', 'Anubis', 'Scarab'],
    ['Set', 'Horus', 'Ra', 'Anhur'],
    ['Spider', 'Wild dog', 'Monkey', 'Crocodile'],
    ['Olorun', 'Obatala', 'Eshu', 'Yemaya']]
}

var asia = {
    title: 'Asia',
    map: 'assets/images/asia.png',
    image: ['assets/images/amaterasu.jpg', 'assets/images/rannamaari.jpg', 'assets/images/ganesha.jpg', 'assets/images/baishuchen.jpg'],
    question: ['Who is the Japanese goddess of the sun and fertility who brings light to the world?',
        'This was a sea demon that haunted the people of the Maldives and had to be appeased monthly with the sacrifice of a virgin girl.',
        'This Hindu diety is known as the god of beginnings, the remover of obstacles, the patron of arts and sciences, and the deva of intellect and wisdom.',
        'What is the name of the Chinese romantic legend tells of the romance and devoted love between a snake fairy, Bai Shu Chen, and a poor scholar who runs a medicinal shop?'
    ],
    answers: [['Amaterasu', 'Hachiman', 'Inari', 'Izanami'],
    ['Rannamaari', 'Koimala', 'Hulhu-le', 'Shitala'],
    ['Ganesha', 'Ishvara', 'Brahma', 'Vishnu'],
    ['Legend of the White Snake', 'Jingwei Determines to Fill up the Sea', 'The Thousand-day Liquor', 'The Foolish Old Man Removes the Mountains']
    ]
}

var europe = {
    title: 'Europe',
    map: 'assets/images/europe.png',
    image: ['assets/images/gods.jpg', 'assets/images/orpheus.jpg', 'assets/images/nidhogg.jpg', 'assets/images/loki.jpg'],
    question: ['This Greek mythological figure is the god/goddess of battle strategy (among other things).',
        'Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?',
        'In Norse mythology, what is the name of the serpent which eats the roots of the ash tree Yggdrasil?', 'Which of the following is NOT a god in Norse Mythology.'],
    answers: [['Athena', 'Ares', 'Artemis', 'Apollo'],
    ['Orpheus', 'Hercules', 'Perseus', 'Daedalus'],
    ['Nidhogg', 'Bragi', 'Odin', 'Ymir'],
    ['Jens', 'Loki', 'Tyr', 'Snotra']
    ]
}

var theAmericas = {
    title: 'The Americas',
    map: 'assets/images/theAmericas.png',
    image: ['assets/images/mancoCapac.jpg', 'assets/images/wendigo.jpg', 'assets/images/mictlantecuhtli.jpg', 'assets/images/totem.jpg'],
    question: ['Who was the legendary founder of the Inca Dynasty in Peru and the Cusco Dynasty at Cusco?',
        'According to Algonquian folklore, how does one transform into a Wendigo?',
        'What Aztec god of the dead was the king of Mictlan (Chicunauhmictlan), the lowest and northernmost section of the underworld?',
        'According some natives from the Pacific Northwest of America, this trickster spirit disguised himself as a baby to steal from the Sky Chief.'],
    answers: [['Manco Cápac', 'Viracocha', 'Inti', 'Pacha Kamaq'],
    ['Participating in cannibalism.', 'Excessive mutilation of animal corpses.', 'Performing a ritual involving murder.', 'Drinking the blood of many slain animals.'],
    ['Mictlantecuhtli', 'Quetzalcoatl', 'Tonatiuh', 'Xipe Totec'],
    ['Raven', 'Crow', 'Raven Mocker', 'Coyote']
    ]
}

function setGame() {
    $('.start').hide();

    function runQuiz() {
        if (quiz.over()) {
            displayResults();
        } else {
            // display question
            var addQuestions = $("questionArea");
            addQuestions.text(quiz.getQuestionCount().text);

            // display answers
            $('#answerArea').text('');
            var newbtn1 = $('<button>').text(answers0).attr('id', 'btn0');
            var newbtn2 = $('<button>').text(answers1).attr('id', 'btn1');
            var newbtn3 = $('<button>').text(answers2).attr('id', 'btn2');
            var newbtn4 = $('<button>').text(answers3).attr('id', 'btn3');
            $('#answerArea').append(newbtn1, newbtn2, newbtn3, newbtn4);

            var choices = quiz.getQuestionCount().answers;
            for (var i = 0; i < answers.length; i++) {
                var element = $("answers" + i);
                element.text = answers[i];
                response("btn" + i, answers[i]);
            }

            // display title, map, and image
            $('#title').text(theAmericas.title);
            $('#map').attr('src', theAmericas.map);
            $('#image').attr('src', theAmericas.image[1]);

            // add timer
            $('#timerArea').html('Time Remaining: <span id="stopwatch">' + timerTime + '</span> Seconds');
            $('#timerArea').css('border', '3px solid black')
            $('#timerArea').css('margin', '5px');
            $('#timerArea').css('padding', '5px');
            setInterval(countdown, 1000);
            function countdown() {
                if (timerTime > 1) {
                    timerTime--;
                    $('#stopwatch').html(timerTime);
                } else {
                    $('#timerArea').html('Time\'s Up!');
                }
            }

        }
    };

    // react to player response
    function response(id, guess) {
        var button = $(id);
        button.onclick = function () {
            quiz.response(guess);
            runQuiz();
        }
    };

    // end game display result
    function displayResults() {
        var results = "<h2>Result</h2>";
        results += "<h2 id='score'> Result:<br>Correct Answers: " + rightCount + "<br>Wrong Answers: " + wrongCount + "<br>Missed Questions: " + missed + "</h2>";
        var element = $("answerArea").text(results);
    };

    // create questions
    var questions = [
        new question('This Egyptian serpent that is eating its own tail symbolizes the circle of life, death and eternity.', ['Ouroboros', 'Thoth', 'Anubis', 'Scarab'], 'Ouroboros', 'Africa', 'assets/images/africa.png', 'assets/images/ouroboros.jpg'),
        new question('Who is the Japanese goddess of the sun and fertility who brings light to the world?', ['Inari', 'Amaterasu', 'Hachiman', 'Izanami'], 'Amaterasu', 'Asia', 'assets/images/asia.png', 'assets/images/amaterasu.jpg'),
        new question('This Greek mythological figure is the god/goddess of battle strategy (among other things).', ['Athena', 'Ares', 'Artemis', 'Apollo'], 'Athena', 'Europe', 'assets/images/europe.png', 'assets/images/gods.jpg'),
        new question('Who was the legendary founder of the Inca Dynasty in Peru and the Cusco Dynasty at Cusco?', ['Manco Cápac', 'Viracocha', 'Inti', 'Pacha Kamaq'], 'Manco Cápac', 'The Americas', 'assets/images/theAmericas.png', 'assets/images/mancoCapac.jpg'),
        new question('According to the Egyptian Myth of Osiris, who murdered Osiris?', ['Set', 'Horus', 'Ra', 'Anhur'], 'Set', 'Africa', 'assets/images/africa.png', 'assets/images/set.jpg'),
        new question('This was a sea demon that haunted the people of the Maldives and had to be appeased monthly with the sacrifice of a virgin girl.', ['Rannamaari', 'Koimala', 'Hulhu-le', 'Shitala'], 'Rannamaari', 'Asia', 'assets/images/asia.png', 'assets/images/rannamaari.jpg'),
        new question('Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?', ['Orpheus', 'Hercules', 'Perseus', 'Daedalus'], 'Orpheus', 'Europe', 'assets/images/europe.png', 'assets/images/orpheus.jpg'),
        new question('According to Algonquian folklore, how does one transform into a Wendigo?', ['Participating in cannibalism.', 'Excessive mutilation of animal corpses.', 'Performing a ritual involving murder.', 'Drinking the blood of many slain animals.'], 'Participating in cannibalism.', 'The Americas', 'assets/images/theAmericas.png', 'assets/images/wendigo.jpg'),
        new question('In African mythology, Anansi is a trickster and storyteller who takes the shape of which animal?', ['Spider', 'Wild dog', 'Monkey', 'Crocodile'], 'Spider', 'Africa', 'assets/images/africa.png', 'assets/images/masks.jpg'),
        new question('This Hindu diety is known as the god of beginnings, the remover of obstacles, the patron of arts and sciences, and the deva of intellect and wisdom.', ['Ganesha', 'Ishvara', 'Brahma', 'Vishnu'], 'Ganesha', 'Asia', 'assets/images/asia.png', 'assets/images/ganesha.jpg'),
        new question('In Norse mythology, what is the name of the serpent which eats the roots of the ash tree Yggdrasil?', ['Nidhogg', 'Bragi', 'Odin', 'Ymir'], 'Nidhogg', 'Europe', 'assets/images/europe.png', 'assets/images/nidhogg.jpg'),
        new question('What Aztec god of the dead was the king of Mictlan (Chicunauhmictlan), the lowest and northernmost section of the underworld?', ['Mictlantecuhtli', 'Quetzalcoatl', 'Tonatiuh', 'Xipe Totec'], 'Mictlantecuhtli', 'The Americas', 'assets/images/theAmericas.png', 'assets/images/mictlantecuhtli.jpg'),
        new question('This sky god was the great king of the Universe and the glorious pinnacle of Yoruba mythology.', ['Olorun', 'Obatala', 'Eshu', 'Yemaya'], 'Olorun', 'Africa', 'assets/images/africa.png', 'assets/images/olorun.jpg'),
        new question('What is the name of the Chinese romantic legend tells of the romance and devoted love between a snake fairy, Bai Shu Chen, and a poor scholar who runs a medicinal shop?', ['Legend of the White Snake', 'Jingwei Determines to Fill up the Sea', 'The Thousand-day Liquor', 'The Foolish Old Man Removes the Mountains'], 'Legend of the White Snake', 'Asia', 'assets/images/asia.png', 'assets/images/baishuchen.jpg'),
        new question('Which of the following is NOT a god in Norse Mythology.', ['Loki', 'Tyr', 'Jens', 'Snotra'], 'Jens', 'Europe', 'assets/images/europe.png', 'assets/images/loki.jpg'),
        new question('According some natives from the Pacific Northwest of America, this trickster spirit disguised himself as a baby to steal from the Sky Chief.', ['Raven', 'Crow', 'Raven Mocker', 'Coyote'], 'Raven', 'The Americas', 'assets/images/theAmericas.png', 'assets/images/totem.jpg')
    ];

    // create quiz
    var quiz = new quiz(questions);

    // display quiz
    runQuiz();

    function question(text, answers, correctAnswer, title, regionMap, image) {
        this.text = text;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.title = title;
        this.regionMap = regionMap;
        this.image = image;
    }

    question.prototype.isCorrect = function (response) {
        return this.correctAnswer === response;
    }

    question.prototype.isWrong = function (response) {
        return this.correctAnswer !== response;
    }

    function quiz(questions) {
        this.rightCount = 0;
        this.questions = questions;
        this.questionCount = 0;
    }

    // check status of question
    quiz.prototype.getQuestionCount = function () {
        return this.questions[this.questionCount];
    }

    // evaluate correctness of players response
    quiz.prototype.response = function (response) {
        this.questionCount++
        if (this.getQuestionCount().isCorrect(response)) {
            this.rightCount++;
        } else if (this.getQuestionCount().isWrong(response)) {
            this.wrongCount++;
        } else {
            this.missed++;
        }
    }

    quiz.prototype.over = function () {
        return this.questionCount === this.questions.length;
    }






    // function randomRegions(regionArray) {
    //     for (var i = 0; i < regionArray.length - 1; i++) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = region[i];
    //         regionArray[i] = regionArray[j];
    //         regionArray[j] = temp;
    //     }
    // }
    // randomRegions(region);
    // chosenRegion = region.pop();
    // console.log('a' + chosenRegion);
    // var question1 = chosenRegion + ".answers[0]";
    // console.log(question1);


    // function genCurrentAnswers() {
    //     for(var a = 0; a < )
    // }
    // currentAnswers = currentRegion +
    // console.log('current region: ' + currentRegion);
    // console.log('new region: ' + region);

    // function randomAnswers(answersArray) {
    //     for (var i = 0; i < answersArray.length - 1; i++) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = answers[i];
    //         if (answersArray[i] === answersArray[0]) {
    //             correctAnswer = answersArray[j];
    //         }
    //         answersArray[i] = answersArray[j];
    //         answersArray[j] = temp;
    //     }
    // }
    // console.log(correctAnswer);





    // add timer
    $('#timerArea').html('Time Remaining: <span id="stopwatch">' + timerTime + '</span> Seconds');
    $('#timerArea').css('border', '3px solid black')
    $('#timerArea').css('margin', '5px');
    $('#timerArea').css('padding', '5px');
    setInterval(countdown, 1000);
    function countdown() {
        if (timerTime > 1) {
            timerTime--;
            $('#stopwatch').html(timerTime);
        } else {
            $('#timerArea').html('Time\'s Up!');
        }
    }
    // add question and answer buttons
    $('#questionArea').text(question1);
    $('#title').text(theAmericas.title);
    $('#map').attr('src', theAmericas.map);
    $('#image').attr('src', theAmericas.image[1]);
    $('#answerArea').text('');
    var btn1 = $('<button>').text(answers0).attr('id', 'btn0');
    var btn2 = $('<button>').text(answers1).attr('id', 'btn1');
    var btn3 = $('<button>').text(answers2).attr('id', 'btn2');
    var btn4 = $('<button>').text(answers3).attr('id', 'btn3');
    $('#answerArea').append(btn1, btn2, btn3, btn4);
}





//run game
function runGame() {
    var windowTimeout = setTimeout(function () {
        ;
    }, 1000);
    $('.start').show().text('Try Again');

}
//reset button