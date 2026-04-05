player_data = [];


function player() {
    const moves = [];
    let mark = '';
    if (player_data.length < 1) {
        mark = "X";
        player_data.push(mark)
    } else {
        mark = "O";
        player_data.push(mark)
    }

    const make_move = (move_position) => {
        moves.push(move_position)
    }

    const get_mark = () => {
        return (mark);
    }

    const get_moves = () => {
        return (moves);
    }

    return { make_move, get_mark, get_moves }


}


function gameboard() {

    const game_array = [];


    const initialize_board = () => {
        for (i = 0; i < 3; i++) {
            game_array.push(["", "", ""]);

        }
    }

    const check_winner = (player) => {
        const win_combo = {
            r1: ["00", "01", "02"],
            r2: ["10", "11", "12"],
            r3: ["20", "21", "22"],
            c1: ["00", "10", "20"],
            c2: ["01", "11", "21"],
            c3: ["02", "12", "22"],
            d1: ["00", "11", "22"],
            d2: ["02", "11", "20"]
        };

        console.log(player.get_moves());
        for (const combo in win_combo) {
            console.log("checking");

            if (new Set(win_combo[combo]).isSubsetOf(new Set(player.get_moves()))) {
                console.log("won");
                return ("Won");
            }
        }

        return "";



    }

    const logic = (winner,player, i) => {
        player_input = prompt("Enter Position: ");
        game_array[Number(player_input[0])][[Number(player_input[1])]] = player.get_mark();
        player.make_move(player_input);
        console.log(player.get_mark());


        if (i > 4) {
            winner = check_winner(player);
        }
        return winner;
    }


    const play = (player_1, player_2) => {
        initialize_board();
        let i = 0;
        let winner = "";
        while (winner == "" && i < 9) {
            console.log("player1 move");
            i = i + 1;
            winner = logic(winner,player_1, i);

            if (winner == "" && i < 9) {
                console.log("player2 move");
                i = i + 1;
                winner = logic(winner, player_2, i);
            }
            if (winner == "" && i >= 9) {
                winner = "draw";
                console.log(game_array)
            }
        }
        console.log(winner);
        console.log(game_array);
    }

    return (play);
}

const John = player();
const son = player();



const Game_1 = gameboard();
Game_1(John, son);

