player_data = [];


function player(name) {
    let moves = [];
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

    const get_name = () => {
        return name;
    }

    const reset = () => {
        moves = [];
    }

    return { make_move, get_mark, get_moves, get_name, reset }


}


function gameboard() {

    const game_array = [];
    let winner = "";
    const player_1 = player(prompt("Enter Player 1 Name"));
    const player_2 = player(prompt("Enter Player 2 Name"));



    const initialize_board = () => {
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            block.textContent = "";
        })
        winner = "";
        player_1.reset();
        player_2.reset();
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
            if (new Set(win_combo[combo]).isSubsetOf(new Set(player.get_moves()))) {
                winner = player;
                alert(player.get_name() + " won");

            }
        }
    }

    const logic = (usr_input, player) => {
        player_input = usr_input.slice(-2);
        player.make_move(player_input);
        check_winner(player);


    }


    const play = () => {
        initialize_board();

        let player_turn = true;
        let i = 0;

        const blocks = document.querySelectorAll('.block')
        blocks.forEach(block => {
            block.addEventListener('click', (event) => {
                if (winner == "") {
                    if (event.target.textContent == "") {
                        classArray = Array.from(event.target.classList);
                        if (player_turn) {
                            player_turn = !player_turn;
                            choice = document.querySelector('.' + classArray[0]);
                            choice.textContent = player_1.get_mark();
                            logic(classArray[0], player_1);
                            i = i + 1;

                        } else {
                            player_turn = !player_turn;
                            choice = document.querySelector('.' + classArray[0]);
                            choice.textContent = player_2.get_mark();
                            logic(classArray[0], player_2);
                            i = i + 1;
                        }
                    }
                }

                if (winner == "" && i == 9) {
                    alert("Draw");
                }



            });
        });

        const clear = document.querySelector('.clear');
        clear.addEventListener('click', (e) => {
            e.preventDefault();
            initialize_board();
            player_turn = true;
            i = 0;
            

        });
    }

    return (play);
}

const Game_1 = gameboard();
Game_1();

