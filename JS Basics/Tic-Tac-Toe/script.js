function section() {
    mark = ""

    const set_mark = (sign) => {
        if (mark == "") {
            mark = sign;
        }
    }

    const get_mark = () => {
        return mark;
    }

    const reset_mark = () => {
        mark = "";
    }

    return { set_mark, get_mark, reset_mark }
}

player_data = []


function player() {
    moves = [];
    if (length(player_data) < 1) {
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
        return mark;
    }

    return {make_move, get_mark}
    

}


function gameboard() {

    const game_array = [[],[],[]];
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            game_array[i].push(section());
        }
        
    }

    const check_winner = () => {
         
    }


    const play = (player_1, player_2) => {
        i = 0;
        winner = '';
        while (winner == "" && i < 9) {
            player_1_input = prompt("Enter Position: ")
            game_array[player_1_input[0]][player_1_input[1]].push(player_1.get_mark)
            player_1.make_move([player_1_input[0]],[player_1_input[1]])
            winner = check_winner(player_1)
        }
    }
}


