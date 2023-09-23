const questions = [
    {
        question: "What is the legal age to vote in the United States?",
        options: ["16", "18", "21"],
        answer: "18"
    },
    {
        question: "Which amendment protects the freedom of speech?",
        options: ["First Amendment", "Second Amendment", "Fourth Amendment"],
        answer: "First Amendment"
    },
    {
        question: "What does 'Habeas Corpus' mean?",
        options: ["Guilty until proven innocent", "Innocent until proven guilty", "No right to a trial"],
        answer: "Innocent until proven guilty"
    },
    {
        question: "Who is responsible for making sure a trial is fair?",
        options: [ "A superhero", "A judge"," A teacher"," A chef"],
        answer: "A judge"
    },
    {
        question: " What does innocent until proven guilty mean?",
        options: ["Everyone is always guilty","The accused person is considered innocent unless proven guilty","You can never be proven guilt" ,"Guilt is always assumed"],
        answer: "The accused person is considered innocent unless proven guilty"
    },
     {
        question: "  What do laws do in a society?",
        options: [" Make people rich","Maintain order and fairnes","Create chaos","Decide what games to play"],
        answer: "Maintain order and fairness"
    },
    {
        question: "   What is the Constitution?",
        options: [" A bedtime story","A set of fundamental laws for a country","A type of dessert","A type of bird"],
        answer: " A set of fundamental laws for a country"
    },
    {
        question: "   What are rights in the context of the law?",
        options: [" Delicious snacks","Freedoms and protections for every person","The names of your friends","Rules to follow in a game"],
        answer: " Freedoms and protections for every person"
    },
    {
        question: " What is the role of a jury in a trial?",
        options: ["  To bring snacks to the courtroom","To decide whether the accused person is guilty or not guilty","To give legal advice to the judge","To perform magic tricks"],
        answer: " To decide whether the accused person is guilty or not guilty"
    },
    {
        question: " What is a witness in a trial?",
        options: ["  Someone who saw a movie","Someone who knows a secre","Someone who has information about the case","Someone who likes to sing"],
        answer: " Someone who has information about the case"
    },
    {
        question: " Can laws change over time?",
        options: ["  No, they always stay the same","Only on leap years","Yes, laws can change as society changes","Laws only change in winter"],
        answer: "  Yes, laws can change as society changes"
    },
    {
        question: " What is the role of the police in a community?",
        options: [" To tell jokes","To enforce laws, maintain public safety, and help people in emergencies","To fix cars","To bake cookies"],
        answer: " To enforce laws, maintain public safety, and help people in emergencies"
    },
    {
        question: "Who can change or create new laws in a country?",
        options: [" Teachers","Doctors","The government, including elected officials","Bus drivers"],
        answer: " The government, including elected officials"
    },
    {
        question: "Which document outlines the fundamental laws of a country?",
        options: [" Recipe book","The Constitution","Comic book","Telephone directory"],
        answer: " The Constitution"
    },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.textContent = questions[currentQuestion].options[i];
        optionButton.classList.add("btn");
        optionButton.addEventListener("click", checkAnswer);
        optionsElement.appendChild(optionButton);
    }
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    displayQuestion();
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = `Score: ${score} out of ${questions.length}`;
        document.getElementById("next-button").style.display = "none";
    }
}

displayQuestion();