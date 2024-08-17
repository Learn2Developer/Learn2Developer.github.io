var available_btns = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var o_array = ["O"];
var x_array = ["X"];

// Function runs when any button element is clicked
function btn_press(clicked_id) {
    var button = document.getElementById(clicked_id);

    // Checks if the button's text is already taken up by X or O
    if (button.textContent == "O" || button.textContent == "X") {
        alert("That square is taken.");


        // If not, then it runs code to change button to an O
    } else {
        var intro_para = document.getElementById("intro");
        intro_para.innerHTML = intro_para.innerText = "Tic-Tac-Toe"
        button.innerText = "O";

        // It checks the index of the button you pressed, and removes it from the available_btns array
        var index = available_btns.indexOf(clicked_id);

        // Push the btn_id to the o_array.
        o_array.push(available_btns[index]);
        console.log(o_array);

        // Remove that btn_id from the available_btns array.
        available_btns.splice(index, 1);

        if (check_win(o_array) == true) {
            intro_para.innerText = "Game Over \n '" + o_array[0] + "' Wins!!!"
            var btn_array = document.getElementsByClassName("btn");
            disable_btns();
        } else {
            if (available_btns.length == 0) {
                intro_para.innerText = "Game Over \n Tie Game"
                disable_btns();
            }
        }

        // Selecting a random number between 0 and the length of the available_btns array.
        var index_rand = Math.floor(Math.random() * (available_btns.length));
        var x_button = document.getElementById(available_btns[index_rand]);

        // Changes button to an X.
        x_button.innerText = "X";

        // Push the btn_id to the x_array.
        x_array.push(available_btns[index_rand]);

        // Remove the btn_id from available_btns array.
        available_btns.splice(index_rand, 1);
        if (check_win(x_array) == true) {
            intro_para.innerText = "Game Over \n '" + x_array[0] + "' Wins!!!"
            disable_btns();
        } else {
            return false;
        }
    }
}

// Function will check all possible winning states for the game.
function check_win(array) {
    if (array.length <= 3) {
        return false;
    }

    if (array.includes("1") && array.includes("2") && array.includes("3")) {
        return true;
    } else if (array.includes("4") && array.includes("5") && array.includes("6")) {
        return true;
    } else if (array.includes("7") && array.includes("8") && array.includes("9")) {
        return true;
    } else if (array.includes("1") && array.includes("4") && array.includes("7")) {
        return true;
    } else if (array.includes("2") && array.includes("5") && array.includes("8")) {
        return true;
    } else if (array.includes("3") && array.includes("6") && array.includes("9")) {
        return true;
    } else if (array.includes("1") && array.includes("5") && array.includes("9")) {
        return true;
    } else if (array.includes("3") && array.includes("5") && array.includes("7")) {
        return true;
    }
}

function disable_btns() {
    var btn_array = document.getElementsByClassName("btn");

    // Loop through the btn_array and add the disabled attribute to each button.
    for (let btns in btn_array) {
        btn_array[btns].setAttribute('disabled', '');
    }
}

function refresh() {
    const refresh_btn = document.getElementById("refresh_btn");
    window.location.reload();
}