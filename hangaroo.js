// Questions 

        // easy questions 
        const easyQuestions = [
            { question: "What is the capital of France?", answer: "Paris" },
            { question: "Who is the author of 'Harry Potter' series?", answer: " J.K. Rowling" },
            { question: "What is the largest mammal on Earth?", answer: "Blue Whale" },
            { question: "Which country is known as the Land of the Rising Sun?", answer: "Japan" },
            { question: "What is the currency of the United States?", answer: "United States Dollar (USD)" },
            { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
            { question: "What is the capital of France?", answer: "Leonardo da Vinci" },
            { question: "What is the square root of 64?", answer: "8" },
            { question: "What is 2 + 2?", answer: "4" },
            { question: "Which planet is known as the Red Planet?", answer: "mars" }
        ];

        // medium questions 
        const mediumQuestions = [
            { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
            { question: "What is the chemical symbol for gold?", answer: "Au" },
            { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
            { question: "What is the capital of Brazil?", answer: "Brasilia" },
            { question: "In which year did the Titanic sink?", answer: "1912" },
            { question: "What is the main component of Earth's atmosphere?", answer: "Nitrogen" },
            { question: "Who is the current Prime Minister of Canada?", answer: "Justin Trudeau" },
            { question: "What is the world's largest desert by area?", answer: "Antarctica" },
            { question: "What is the powerhouse of the cell?", answer: "mitochondria" },
            { question: "In which year did the Titanic sink?", answer: "1912" }
        ];
        
        // hard questions 
        const hardQuestions = [
            { question: "What is the smallest prime number greater than 10?", answer: "11" },
            { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
            { question: "Who was the ancient Greek philosopher known for his teachings on ethics and virtue, and was the tutor of Alexander the Great?", answer: "Aristotlen" },
            { question: "What is the capital of Bhutan?", answer: "Thimphu" },
            { question: "Which river is the longest in the world?", answer: "The Nile" },
            { question: "What is the process by which plants convert light energy into chemical energy?", answer: "Photosynthesis" },
            { question: "Who was the famous Chinese military strategist and philosopher known for 'The Art of War'?", answer: "Sun Tzu" },
            { question: "What is the only planet in our solar system that rotates clockwise?", answer: "Venus" },
            { question: "Which element has the highest melting point??", answer: "Tungsten" },
            { question: "Who was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different scientific fields?", answer: "Marie Curie" }
        ];
        
        // Combined array of all questions
        const allQuestions = { easy: [...easyQuestions], medium: [...mediumQuestions], hard: [...hardQuestions] };

        // Shuffled array of questions
        let shuffledQuestions = [];

        function Answer(){
            allQuestions(answer)
        }

        function shuffleQuestions(difficulty) {
            shuffledQuestions = [...allQuestions[difficulty]];
            for (let i = shuffledQuestions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
            }
        }
        
        function nextQuestion() {
            if (shuffledQuestions.length === 0) {
                alert("No more questions. Click 'Next Question' to shuffle and start again.");
                shuffleQuestions(currentDifficulty);
            }

            const questionsList = document.getElementById("questionsList");
            const nextQuestionObj = shuffledQuestions.pop();

            // Display the next question
            questionsList.innerHTML = `<li>${nextQuestionObj.question}</li>`;

            // Clear the user's previous answer
            document.getElementById("user-answer").value = '';
        }

        //checking the answer of user
        function checkEnter(event) {
            if (event.key === "Enter") {
                checkAnswer();
            }
        }

        function checkAnswer() {
            const userAnswer = document.getElementById("user-answer").value.toLowerCase();
            const currentQuestionObj = shuffledQuestions[shuffledQuestions.length - 1];

            if (userAnswer === currentQuestionObj.answer) {
                alert("Correct!");
            } else {
                alert(`Incorrect. The correct answer is: ${currentQuestionObj.answer}. Try again.`);
            }
        }

        //setting the difficulty
        let currentDifficulty = 'easy'; // Default difficulty
        function selectDifficulty(difficulty) {
            currentDifficulty = difficulty;
            shuffleQuestions(currentDifficulty);
            nextQuestion();
        }

        document.addEventListener("DOMContentLoaded", function () {
            // Initial shuffle when the page loads
            shuffleQuestions(currentDifficulty);
            nextQuestion(); // Display the first question
        });

        //hints in vowels, if vowels are present it will print the vowels that are present inside of the word 
        function isVowel(char) {
            const vowels = ['a', 'e', 'i', 'o', 'u'];
      
            // Convert the character to lowercase for case-insensitive comparison
            const lowercaseChar = char.toLowerCase();
      
            return vowels.includes(lowercaseChar);
          }
      
          function getVowels(id = "answer") {
            return answer.filter(isVowel);
          }
      
          // Example usage
          const vowelsInWord = getVowels(answer);
      
          console.log(`${vowelsInWord}`);
