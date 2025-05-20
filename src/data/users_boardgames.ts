'use server';

import {createClient} from '@/utils/supabase/server';

export async function fetchUserBoardGames(userId) {
    const supabase = await createClient();

    console.log(userId);
    const {data: userBoardGames} = await supabase
        .from("users_boardgames")
        .select(`user_id(name), note, wishlist, boardgame_id(id, name, description, category_id(name), release, logo, player_count, game_time, author_id(name), illustrator_id(name))`)
        .eq('user_id', userId);

    console.log(userBoardGames);

    const {data: mecanics} = await supabase
        .from("boardgames_mecanics")
        .select(`boardgame_id(id), mecanic_id(id, name, background_color, font_color)`);

    console.log(mecanics);
    const result = userBoardGames.map((userBoardGame) => {
        const arrayOfMecanics = [];
        mecanics.forEach((mecanic) => {
            if (mecanic.boardgame_id.id == userBoardGame.boardgame_id.id) {
                arrayOfMecanics.push(mecanic);
            }
        })

        return {
            id: userBoardGame.boardgame_id.id,
            name: userBoardGame.boardgame_id.name,
            description: userBoardGame.boardgame_id.description,
            category_id: userBoardGame.boardgame_id.category_id,
            release: userBoardGame.boardgame_id.release,
            logo: userBoardGame.boardgame_id.logo,
            game_time: userBoardGame.boardgame_id.game_time,
            player_count: userBoardGame.boardgame_id.player_count,
            author_id: userBoardGame.boardgame_id.author_id,
            illustrator_id: userBoardGame.boardgame_id.illustrator_id,
            mecanics: arrayOfMecanics,
            note: userBoardGame.note,
            wishlist: userBoardGame.wishlist
        };
    })
    console.log(result);
    return result;
}