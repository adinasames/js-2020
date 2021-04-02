$(document).ready(
    function () {
        displayJoke()
        function displayJoke() {

            var request = new XMLHttpRequest;

            request.open('GET', "http://api.icndb.com/jokes/random/3");

            request.onreadystatechange = function () {
                if (this.readyState == 4) {
                    var randomJoke = Math.floor((Math.random() * 3));
                    var jokes = JSON.parse(request.response)
                    $("#joke").html(jokes.value[randomJoke].joke);
                }
            }

            request.send();
        }
    }
)




document.getElementById('newJoke')
.addEventListener("click", displayJoke)


