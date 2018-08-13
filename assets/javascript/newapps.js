var rightCount = 0;
var wrongCount = 0;
var missedCount = 0;
var timerTime = 30;
var response = '';
var currentCorrectAnswer = '';
var current = 0;
var questionsArray = [
    {
        question: 'This Egyptian serpent that is eating its own tail symbolizes the circle of life, death and eternity.',
        answers: ['Ouroboros', 'Thoth', 'Anubis', 'Scarab'],
        correctAnswer: 'Ouroboros',
        title: 'Africa',
        regionMap: 'assets/images/africa.png',
        image: 'assets/images/ouroboros.jpg'
    },
    {
        question: 'Who is the Japanese goddess of the sun and fertility who brings light to the world?',
        answers: ['Inari', 'Amaterasu', 'Hachiman', 'Izanami'],
        correctAnswer: 'Amaterasu',
        title: 'Asia',
        regionMap: 'assets/images/asia.png',
        image: 'assets/images/amaterasu.jpg'
    },
    {
        question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
        answers: ['Athena', 'Ares', 'Artemis', 'Apollo'],
        correctAnswer: 'Athena',
        title: 'Europe',
        regionMap: 'assets/images/europe.png',
        image: 'assets/images/gods.jpg'
    },
    {
        question: 'Who was the legendary founder of the Inca Dynasty in Peru and the Cusco Dynasty at Cusco?',
        answers: ['Manco Cápac', 'Viracocha', 'Inti', 'Pacha Kamaq'],
        correctAnswer: 'Manco Cápac',
        title: 'The Americas',
        regionMap: 'assets/images/theAmericas.png',
        image: 'assets/images/mancoCapac.jpg'
    },
    {
        question: 'According to the Egyptian Myth of Osiris, who murdered Osiris?',
        answers: ['Set', 'Horus', 'Ra', 'Anhur'],
        correctAnswer: 'Set',
        title: 'Africa',
        regionMap: 'assets/images/africa.png',
        image: 'assets/images/set.jpg'
    },
    {
        question: 'This was a sea demon that haunted the people of the Maldives and had to be appeased monthly with the sacrifice of a virgin girl.',
        answers: ['Rannamaari', 'Koimala', 'Hulhu-le', 'Shitala'],
        correctAnswer: 'Rannamaari',
        title: 'Asia',
        regionMap: 'assets/images/asia.png',
        image: 'assets/images/rannamaari.jpg'
    },
    {
        question: 'Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?',
        answers: ['Orpheus', 'Hercules', 'Perseus', 'Daedalus'],
        correctAnswer: 'Orpheus',
        title: 'Europe',
        regionMap: 'assets/images/europe.png',
        image: 'assets/images/orpheus.jpg'
    },
    {
        question: 'According to Algonquian folklore, how does one transform into a Wendigo?',
        answers: ['Participating in cannibalism.', 'Excessive mutilation of animal corpses.', 'Performing a ritual involving murder.', 'Drinking the blood of many slain animals.'],
        correctAnswer: 'Participating in cannibalism.',
        title: 'The Americas',
        regionMap: 'assets/images/theAmericas.png',
        image: 'assets/images/wendigo.jpg'
    },
    {
        question: 'In African mythology, Anansi is a trickster and storyteller who takes the shape of which animal?',
        answers: ['Spider', 'Wild dog', 'Monkey', 'Crocodile'],
        correctAnswer: 'Spider',
        title: 'Africa',
        regionMap: 'assets/images/africa.png',
        image: 'assets/images/masks.jpg'
    },
    {
        question: 'This Hindu diety is known as the god of beginnings, the remover of obstacles, the patron of arts and sciences, and the deva of intellect and wisdom.',
        answers: ['Ganesha', 'Ishvara', 'Brahma', 'Vishnu'],
        correctAnswer: 'Ganesha',
        title: 'Asia',
        regionMap: 'assets/images/asia.png',
        image: 'assets/images/ganesha.jpg'
    },
    {
        question: 'In Norse mythology, what is the name of the serpent which eats the roots of the ash tree Yggdrasil?',
        answers: ['Nidhogg', 'Bragi', 'Odin', 'Ymir'],
        correctAnswer: 'Nidhogg',
        title: 'Europe',
        regionMap: 'assets/images/europe.png',
        image: 'assets/images/nidhogg.jpg'
    },
    {
        question: 'What Aztec god of the dead was the king of Mictlan (Chicunauhmictlan), the lowest and northernmost section of the underworld?',
        answers: ['Mictlantecuhtli', 'Quetzalcoatl', 'Tonatiuh', 'Xipe Totec'],
        correctAnswer: 'Mictlantecuhtli',
        title: 'The Americas',
        regionMap: 'assets/images/theAmericas.png',
        image: 'assets/images/mictlantecuhtli.jpg'
    },
    {
        question: 'This sky god was the great king of the Universe and the glorious pinnacle of Yoruba mythology.',
        answers: ['Olorun', 'Obatala', 'Eshu', 'Yemaya'],
        correctAnswer: 'Olorun',
        title: 'Africa',
        regionMap: 'assets/images/africa.png',
        image: 'assets/images/olorun.jpg'
    },
    {
        question: 'What is the name of the Chinese romantic legend tells of the romance and devoted love between a snake fairy, Bai Shu Chen, and a poor scholar who runs a medicinal shop?',
        answers: ['Legend of the White Snake', 'Jingwei Determines to Fill up the Sea', 'The Thousand-day Liquor', 'The Foolish Old Man Removes the Mountains'],
        correctAnswer: 'Legend of the White Snake',
        title: 'Asia',
        regionMap: 'assets/images/asia.png',
        image: 'assets/images/baishuchen.jpg'
    },
    {
        question: 'Which of the following is NOT a god in Norse Mythology.',
        answers: ['Loki', 'Tyr', 'Jens', 'Snotra'],
        correctAnswer: 'Jens',
        title: 'Europe',
        regionMap: 'assets/images/europe.png',
        image: 'assets/images/loki.jpg'
    },
    {
        question: 'According some natives from the Pacific Northwest of America, this trickster spirit disguised himself as a baby to steal from the Sky Chief.',
        answers: ['Raven', 'Crow', 'Raven Mocker', 'Coyote'],
        correctAnswer: 'Raven',
        title: 'The Americas',
        regionMap: 'assets/images/theAmericas.png',
        image: 'assets/images/totem.jpg'
    }
];

function setGame() {
    $('.start').hide();
    runQuiz();

    function runQuiz() {
        var answerTimer = setTimeout(Timer, 30000);
        $("#questionArea").html(questionsArray[current].question);
        $('#answerArea').text('');
        var btn1 = $('<button>').text(questionsArray[current].answers[0]).attr('value', questionsArray[current].answers[0]).attr('id', 'btn0');
        var btn2 = $('<button>').text(questionsArray[current].answers[1]).attr('value', questionsArray[current].answers[1]).attr('id', 'btn1');
        var btn3 = $('<button>').text(questionsArray[current].answers[2]).attr('value', questionsArray[current].answers[2]).attr('id', 'btn2');
        var btn4 = $('<button>').text(questionsArray[current].answers[3]).attr('value', questionsArray[current].answers[3]).attr('id', 'btn3');
        $('#answerArea').append(btn1, btn2, btn3, btn4);
        currentCorrectAnswer = questionsArray[current].correctAnswer;
        $('#title').text(questionsArray[current].title);
        $('#map').attr('src', questionsArray[current].regionMap);
        $('#image').attr('src', questionsArray[current].image);
        $('#timerArea').html('Time Remaining: <span id="stopwatch">' + timerTime + '</span> Seconds');
        $('#timerArea').css('border', '3px solid black')
        $('#timerArea').css('margin', '5px');
        $('#timerArea').css('padding', '5px');

        $('button').on('click', function () {
            response = $(this).val();
            if (response === currentCorrectAnswer) {
                rightCount++;
                $('#answerArea').text('Correct!');
                clearTimeout(answerTimer);
                clearTimeout(tictoc);
                setTimeout(function () { current++; runQuiz(); }, 3000);
                checkForComplete();
                timerTime = 30;
            } else {
                wrongCount++;
                $('#answerArea').text('Wrong! The correct answer was ' + currentCorrectAnswer);
                clearTimeout(answerTimer);
                clearTimeout(tictoc);
                setTimeout(function () { current++; runQuiz(); }, 3000);
                checkForComplete();
                timerTime = 30;
            }
        })

        function Timer() {
            showAnswer();
        }

        function showAnswer() {
            $('#answerArea').html('The correct answer was ' + currentCorrectAnswer + '.');
            current++;
            missedCount++;
            timerTime = 30;
            setTimeout(function () { current++; runQuiz(); }, 3000);

        }

        console.log(rightCount + ' ' + wrongCount + ' ' + missedCount)

        function checkForComplete() {
            if (current > 16) {
                $('#answerArea').html("<h2> Results: <br>" + rightCount + " Correct<br>" + wrongCount + " Wrong<br>" + missedCount + "</h2>");
            } else {
                runQuiz;
            }
        }


    }
}

var tictoc = setInterval(countdown, 1000);
function countdown() {
    if (timerTime > 1) {
        timerTime--;
        $('#stopwatch').html(timerTime);
    } else {
        $('#timerArea').html('Time\'s Up!');
    }
}







//run game
// function runGame() {
//     var windowTimeout = setTimeout(function () {
//         ;
//     }, 1000);
//     $('.start').show().text('Try Again');

// }
//reset button