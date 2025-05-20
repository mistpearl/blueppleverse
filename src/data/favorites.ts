'use server';

import {createClient} from '@/utils/supabase/server';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export default async function addToFavorites(boardgame_id, user_id) {
    const supabase = await createClient();

    const {data, error} = await supabase
        .from("users_boardgames")
        .update({ wishlist: true})
        .eq('boardgame_id', boardgame_id)
        .eq('user_id', user_id);

    revalidatePath('/dashboard');
    //redirect('/dashboard');
}

export async function removeFromFavorites(boardgame_id, user_id) {
    const supabase = await createClient();

    const {data, error} = await supabase
        .from("users_boardgames")
        .update({ wishlist: false})
        .eq('boardgame_id', boardgame_id)
        .eq('user_id', user_id);

    revalidatePath('/dashboard');
    //redirect('/dashboard');
}