document.addEventListener('DOMContentLoaded', function(event) {
    window.onload = function() {

        // array with text to type
        var dataText = ["Hello there. I take a great pleasure in welcoming you!", "Hola a todos. ¡Es un gran placer para mí darte la bienvenida!", " வணக்கம் அங்கே.உங்களை வரவேற்பதில் நான் மிகுந்த மகிழ்ச்சி அடைகிறேன்!", "Bonjour. Je prends un grand plaisir à vous accueillir!", "ఉన్నారా. నిన్ను స్వాగతించడంలో నేను చాలా ఆనందం పొందుతున్నాను!", "નમસ્તે. હું તમને આવકારવામાં ખુબ આનંદ લઈશ!", "Szia. Nagy örömömre szolgál, hogy üdvözölhetlek!", "നീ അവിടെയുണ്ടോ. നിങ്ങളെ സ്വാഗതം ചെയ്യുന്നതിൽ ഞാൻ വളരെയധികം സന്തോഷിക്കുന്നു!"];
        //text input caret
        var caret = "\u258B";

        // type a text
        // keep calling itself until the text is finished
        function type(text, i, fnCallback) {
            // chekc if text isn't finished yet
            if (i < (text.length)) {
                // add next character to text + caret
                document.querySelector("#text").textContent = text.substring(0, i + 1) + caret;

                // delay and call this function again for next character
                setTimeout(function() {
                    type(text, i + 1, fnCallback)
                }, 70);
            }
            // text finished, call callback if there is a callback function
            else if (typeof fnCallback == 'function') {
                // call callback after timeout
                setTimeout(fnCallback, 1500);
            }
        }
        // start animation for a text in the dataText array
        function StartAnimation(i) {
            if (typeof dataText[i] == 'undefined') {
                setTimeout(function() {
                    StartAnimation(0);
                }, 1000);
            }
            // check if dataText[i] exists
            if (i < dataText[i].length) {
                // text exists! start typewriter animation
                type(dataText[i], 0, function() {
                    // after callback (and whole text has been animated), start next text
                    StartAnimation(i + 1);
                });
            }
        }
        // start the text animation
        StartAnimation(0);
    }
});