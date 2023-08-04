//your code here
const evaluatedText = document.getElementById("evaluatedText");
        const letterCount = document.getElementById("letterCount");

        evaluatedText.addEventListener("input", updateLetterCount);

        function updateLetterCount() {
            const text = evaluatedText.value;
            const count = text.length;
            letterCount.textContent = count;
        }