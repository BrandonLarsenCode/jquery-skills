$(document).ready(function() {
    let formattedQuestion; // Variable to store formatted question object

    // Sample quiz questions
    const sampleQuestions = [
        {
            question: "What is the capital city of France?",
            choices: ["London", "Paris", "Berlin", "Rome"],
            correctAnswer: "Paris"
        },
        {
            question: "Who wrote the play 'Hamlet'?",
            choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "What is the tallest mountain in the world?",
            choices: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
            correctAnswer: "Mount Everest"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            choices: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "What is the largest mammal in the world?",
            choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correctAnswer: "Blue Whale"
        },
        {
            question: "Which country won the FIFA World Cup in 2018?",
            choices: ["Brazil", "Germany", "Argentina", "France"],
            correctAnswer: "France"
        },
        {
            question: "What is the chemical symbol for water?",
            choices: ["H2O", "CO2", "O2", "H2SO4"],
            correctAnswer: "H2O"
        },
        {
            question: "Who invented the light bulb?",
            choices: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Galileo Galilei"],
            correctAnswer: "Thomas Edison"
        },
        {
            question: "Which planet is known as the 'Morning Star'?",
            choices: ["Venus", "Mercury", "Mars", "Jupiter"],
            correctAnswer: "Venus"
        },
        {
            question: "What year did the Titanic sink?",
            choices: ["1912", "1905", "1923", "1898"],
            correctAnswer: "1912"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            choices: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald", "Ernest Hemingway"],
            correctAnswer: "Harper Lee"
        },
        {
            question: "Which country is famous for its tulips?",
            choices: ["Netherlands", "France", "Italy", "Germany"],
            correctAnswer: "Netherlands"
        },
        {
            question: "Who painted the ceiling of the Sistine Chapel?",
            choices: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
            correctAnswer: "Michelangelo"
        },
        {
            question: "Which ocean is the largest?",
            choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            correctAnswer: "Pacific Ocean"
        },
        {
            question: "What is the largest organ in the human body?",
            choices: ["Liver", "Brain", "Skin", "Heart"],
            correctAnswer: "Skin"
        },
        {
            question: "Who is known as the 'Father of Modern Physics'?",
            choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
            correctAnswer: "Albert Einstein"
        },
        {
            question: "Which animal is known as the 'King of the Jungle'?",
            choices: ["Lion", "Tiger", "Elephant", "Giraffe"],
            correctAnswer: "Lion"
        },
        {
            question: "Who discovered penicillin?",
            choices: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
            correctAnswer: "Alexander Fleming"
        },
        {
            question: "What is the smallest bone in the human body?",
            choices: ["Stapes", "Femur", "Tibia", "Radius"],
            correctAnswer: "Stapes"
        },
        {
            question: "Who wrote '1984'?",
            choices: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "Ray Bradbury"],
            correctAnswer: "George Orwell"
        },
        {
            question: "Which country hosted the 2016 Summer Olympics?",
            choices: ["Brazil", "China", "Russia", "United States"],
            correctAnswer: "Brazil"
        },
        {
            question: "What is the largest desert in the world?",
            choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
            correctAnswer: "Sahara Desert"
        },
        {
            question: "Who invented the telephone?",
            choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
            correctAnswer: "Alexander Graham Bell"
        },
        {
            question: "Which city is known as the 'Eternal City'?",
            choices: ["Rome", "Athens", "Paris", "London"],
            correctAnswer: "Rome"
        },
        {
            question: "What is the largest species of bear?",
            choices: ["Polar Bear", "Grizzly Bear", "Kodiak Bear", "Brown Bear"],
            correctAnswer: "Polar Bear"
        },
        {
            question: "Who painted 'The Starry Night'?",
            choices: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Georgia O'Keeffe"],
            correctAnswer: "Vincent van Gogh"
        },
        {
            question: "Which planet is closest to the Sun?",
            choices: ["Mercury", "Venus", "Earth", "Mars"],
            correctAnswer: "Mercury"
        },
        {
            question: "Who wrote 'Pride and Prejudice'?",
            choices: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson", "Agatha Christie"],
            correctAnswer: "Jane Austen"
        },
        {
            question: "What is the smallest country in the world?",
            choices: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
            correctAnswer: "Vatican City"
        },
        {
            question: "Which continent is the largest?",
            choices: ["Asia", "Africa", "North America", "South America"],
            correctAnswer: "Asia"
        },
        {
            question: "Who discovered America?",
            choices: ["Christopher Columbus", "Marco Polo", "Amerigo Vespucci", "Vasco da Gama"],
            correctAnswer: "Christopher Columbus"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            choices: ["Diamond", "Graphite", "Quartz", "Topaz"],
            correctAnswer: "Diamond"
        },
        {
            question: "Who wrote 'The Great Gatsby'?",
            choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
            correctAnswer: "F. Scott Fitzgerald"
        },
        {
            question: "What is the longest river in the world?",
            choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            correctAnswer: "Nile River"
        },
        {
            question: "Which country is known as the 'Land of the Rising Sun'?",
            choices: ["Japan", "China", "Korea", "Vietnam"],
            correctAnswer: "Japan"
        },
        {
            question: "What is the national animal of Australia?",
            choices: ["Kangaroo", "Koala", "Emu", "Platypus"],
            correctAnswer: "Kangaroo"
        },
        {
            question: "Who painted 'The Persistence of Memory'?",
            choices: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
            correctAnswer: "Salvador Dalí"
        },
        {
            question: "What is the largest reptile in the world?",
            choices: ["Saltwater Crocodile", "Komodo Dragon", "Green Anaconda", "Nile Crocodile"],
            correctAnswer: "Saltwater Crocodile"
        },
        {
            question: "Which country is famous for its pyramids?",
            choices: ["Egypt", "Mexico", "Greece", "Iraq"],
            correctAnswer: "Egypt"
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "What is the largest bird in the world?",
            choices: ["Ostrich", "Eagle", "Albatross", "Emu"],
            correctAnswer: "Ostrich"
        },
        {
            question: "Who discovered the theory of relativity?",
            choices: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galileo Galilei"],
            correctAnswer: "Albert Einstein"
        },
    ];

    // Function to select a random question from sampleQuestions
    function fetchQuizQuestions() {
        const randomIndex = Math.floor(Math.random() * sampleQuestions.length);
        return sampleQuestions[randomIndex];
    }

    // Function to format the question object
    function formatQuestion(questionObj) {
        const formattedQuestion = {
            question: questionObj.question,
            choices: questionObj.choices,
            correctAnswer: questionObj.correctAnswer
        };
        return formattedQuestion;
    }

    // Function to display the question and choices
    function displayQuestion(questionObj) {
        if (!questionObj || !questionObj.choices) {
            console.error('Invalid question object or choices are undefined');
            return;
        }

        formattedQuestion = formatQuestion(questionObj); // Store formatted question globally

        // Fade out animation for quiz container
        $('#quiz').css({ opacity: 0, transform: 'translateY(-20px)' });

        setTimeout(() => {
            $('#question').text(questionObj.question);

            const choicesList = $('#choices');
            choicesList.empty(); // Clear previous choices

            questionObj.choices.forEach((choice, index) => {
                const choiceId = 'choice' + index;
                const input = $('<input>').attr({
                    type: 'radio',
                    id: choiceId,
                    name: 'choice',
                    value: choice
                });
                const label = $('<label>').attr('for', choiceId).text(choice);
                const li = $('<li>').append(input).append(label).css({ opacity: 0, transform: 'translateX(-20px)' });
                choicesList.append(li);

                // Apply delay and animation to each choice item
                setTimeout(() => {
                    li.css({ opacity: 1, transform: 'translateX(0)' });
                }, 100 * index);
            });

            // Fade in animation for quiz container
            $('#quiz').css({ opacity: 1, transform: 'translateY(0)' });

        }, 300); // Delay to allow fade out animation to complete
    }

    // Function to handle user submission
    function submitAnswer() {
        const selectedAnswer = $('input[name="choice"]:checked').val();
        if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
        }

        if (formattedQuestion) {
            const correctAnswer = formattedQuestion.correctAnswer;

            if (selectedAnswer === correctAnswer) {
                $('#feedback').text("Correct!").css({ opacity: 1 });
            } else {
                $('#feedback').text("Incorrect!").css({ opacity: 1 });
            }

            // After submitting, fetch and display a new random question
            setTimeout(() => {
                const randomQuestion = fetchQuizQuestions();
                displayQuestion(randomQuestion);
                $('#feedback').css({ opacity: 0 }); // Fade out feedback message
            }, 1500); // Delay before showing the next question and fading out feedback
        } else {
            console.error('formattedQuestion is undefined or null');
        }
    }

    // Event listener for submit button click
    $('#submit').on('click', function() {
        submitAnswer();
    });

    // Function to start the quiz
    function startQuiz() {
        try {
            const randomQuestion = fetchQuizQuestions();
            if (randomQuestion) {
                displayQuestion(randomQuestion);
            } else {
                console.error('Failed to get a random question');
            }
        } catch (error) {
            console.error('Error starting quiz:', error);
        }
    }

    // Start the quiz when the document is ready
    startQuiz();
});