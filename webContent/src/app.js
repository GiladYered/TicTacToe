/**
 * Created by Gilad on 9/13/2017.
 */
var draw_data = ["X", "O", " "];

$(document).ready(function () {
    // Main click event handler
    $("td").click(function () {
        updateContent($(this));
        var resulttextstate = checkState();
        console.log(resulttextstate);
    });

    //Updates an individual cell content with an approporiate value
    function updateContent(cell) {
        var value = cell.text();
        var index = draw_data.indexOf(value); //X will be 0, O will be 1, SPACE will be 2, everything else will be -1
        var newIndex = (index + 1) % draw_data.length;
        cell.text(draw_data[newIndex]);
    }

    //Checks if victory has been achieved;
    function checkState() {
        return $('#TicTacToeTable td').map(function (index, td) {
            return $(td).text();
        });
    }
});


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