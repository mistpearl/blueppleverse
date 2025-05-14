'use server';

import {createClient} from '@/utils/supabase/server';

export async function fetchPrototypes() {
    const supabase = await createClient();

    const {data: prototypes} = await supabase
        .from("prototypes")
        .select(`id, name, description, category_id(name), release, logo, player_count, game_time, author_id(name), illustrator_id(name)`);
    return prototypes;
}