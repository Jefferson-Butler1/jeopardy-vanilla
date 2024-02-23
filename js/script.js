
const categories=["Sports", "Animals", "Science & Nature", "History", "Art"]

/* add event listeners for start & reset buttons here */
document.getElementById("startButton").addEventListener("click", startGame);
questions = document.getElementsByClassName("question");
for(question of questions){
    question.addEventListener("click", viewQuestion);
}


/* complete functions below */



function startGame(){
    //get token from open trivia db and initialize session
    window.localStorage.token = getToken();

    $(document).ready(function() {
      $(".category").text("this is a category");
    });

}

function populateBoard(){


}


const  getQuestion = (difficulty, category) =>
{
    const url = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    return xmlHttp.responseText;
}
const getToken = () =>
{
    let url = window.localStorage.token
        ? `https://opentdb.com/api_token.php?command=reset&token=${window.localStorage.token}`
        : `https://opentdb.com/api_token.php?command=request`

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    console.log(xmlHttp, url, "token")
    return xmlHttp.responseText;
}




function viewQuestion(){

    console.log(this.id)
    // If id is set earlier, saving it to local storage
    window.localStorage.setItem("currentIndex", this.id);

    console.log()
    // Get the modal
    // Not using var makes it global
    modal = document.getElementById("qaModal");

    // Get the <span> element that closes the modal
    var closeX = document.getElementsByClassName("close")[0];

    // Display modal
    modal.style.display = "block";



    // When the user clicks on <span> (x), close the modal
    closeX.onclick = function() {
        modal.style.display = "none";
    }




}


function checkResponse(){
    




    /* for closing modal */
    //modal.style.display = "none";
}

function resetGame(){
    //clear local storage and reset game
    window.localStorage.clear();
    location.reload();

}