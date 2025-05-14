'use server';

import {createClient} from '@/utils/supabase/server';

export async function fetchBoardGames() {
    const supabase = await createClient();

    const {data: boardgames} = await supabase
        .from("boardgames")
        .select(`id, name, description, category_id(name), release, logo`);
    return boardgames;
}

export async function fetchBoardGamesWithAllData() {
    const supabase = await createClient();

    const {data: boardgames} = await supabase
        .from("boardgames")
        .select(`id, name, description, category_id(name), release, logo, player_count, game_time, author_id(name), illustrator_id(name)`);
    const {data: mecanics} = await supabase
        .from("boardgames_mecanics")
        .select(`boardgame_id(id), mecanic_id(id, name, background_color, font_color)`);

    const data = boardgames.map((boardgame) => {
        const arrayOfMecanics = [];
        mecanics.forEach((mecanic) => {
            if (mecanic.boardgame_id.id == boardgame.id) {
                arrayOfMecanics.push(mecanic);
            }
        })

        return {
            id: boardgame.id,
            name: boardgame.name,
            description: boardgame.description,
            category_id: boardgame.category_id,
            release: boardgame.release,
            logo: boardgame.logo,
            game_time: boardgame.game_time,
            player_count: boardgame.player_count,
            author_id: boardgame.author_id,
            illustrator_id: boardgame.illustrator_id,
            mecanics: arrayOfMecanics
        };
    })

    return data;
}