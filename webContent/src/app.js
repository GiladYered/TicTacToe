/**
 * Created by Gilad on 9/13/2017.
 */
var draw_data = ["X", "O"];

var gameInProgress = true;

$(document).ready(function () {

    if (!gameInProgress) {
        return;
    }

    // Main click event handler
    $("td").click(function () {
        var currentTdClick = this;
        updateContent($(currentTdClick));
        var resulttextstate = checkState($(currentTdClick));
        console.log(resulttextstate);

        /*reset all td contents*/
        $("#resetButton").on("click", function () {
            gameInProgress = true;
            $("td").html("").css("background-color", "#ffffff");
        });
    });


//Updates an individual cell content with an approporiate value
    var lastused = null;

    function updateContent(cell) {

        if (!gameInProgress) {
            return;
        }

        var value = cell.text();
        if (value === "X" || value === "O") {
            window.alert("This cell not empty")

        } else {
            var index = draw_data.indexOf(lastused); //X will be 0, O will be 1, SPACE will be 2, everything else will be -1
            var newIndex = (index + 1) % draw_data.length;
            cell.text(draw_data[newIndex]);
        }

        lastused = cell.text();

    }

//Checks if victory has been achieved;
    function checkState(ValueNowEntered) {

        if (!gameInProgress) {
            return;
        }

        //1.Get all textContent and insert to array variable
        var TableStateStausArray = $('#TicTacToeTable').find('td').toArray().map(function (el) {
            return el.textContent;
        });

        //2.Check if the player won
        var ValueOfNowEntered = ValueNowEntered.text();

        if ((ValueOfNowEntered == TableStateStausArray[0] && ValueOfNowEntered == TableStateStausArray[1] && ValueOfNowEntered == TableStateStausArray[2])
            ||
            (ValueOfNowEntered == TableStateStausArray[3] && ValueOfNowEntered == TableStateStausArray[4] && ValueOfNowEntered == TableStateStausArray[5])
            ||
            (ValueOfNowEntered == TableStateStausArray[6] && ValueOfNowEntered == TableStateStausArray[7] && ValueOfNowEntered == TableStateStausArray[8])
            ||
            (ValueOfNowEntered == TableStateStausArray[0] && ValueOfNowEntered == TableStateStausArray[3] && ValueOfNowEntered == TableStateStausArray[6])
            ||
            (ValueOfNowEntered == TableStateStausArray[1] && ValueOfNowEntered == TableStateStausArray[4] && ValueOfNowEntered == TableStateStausArray[7])
            ||
            (ValueOfNowEntered == TableStateStausArray[2] && ValueOfNowEntered == TableStateStausArray[5] && ValueOfNowEntered == TableStateStausArray[8])
            ||
            (ValueOfNowEntered == TableStateStausArray[0] && ValueOfNowEntered == TableStateStausArray[4] && ValueOfNowEntered == TableStateStausArray[8])
            ||
            (ValueOfNowEntered == TableStateStausArray[2] && ValueOfNowEntered == TableStateStausArray[4] && ValueOfNowEntered == TableStateStausArray[6])
        ) {

            gameInProgress = false;

            $("td").css("background-color", "#dddddd");

            setTimeout(function () {

                window.alert('You Win');

            }, 150);
        }


        //3.Check if the game finished
        if (TableStateStausArray.indexOf("") === -1) {
            setTimeout(function () {
                window.alert('Game Over')
            }, 150);
        }
        return TableStateStausArray

    }
})


/*function map(callback){
 for(var i=0; i<this.length; i++){
 callback(this[i], i, this);
 }
 }

 var array = [1,5,3,7,8];
 array.map = map;

 public static int double(int x){
 return 2*x;
 }

 var double = function(x){
 return 2*x;
 };

 double(4);
 double(7);
 double(-3);

 var array = [1,5,3,7,8];
 for(var i=0; i<array.length; i++){
 array[i] = double(array[i]);
 //entered 5;
 //returned 10;
 //array[i] now equals 10;
 }*/