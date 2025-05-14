'use server';

import {createClient} from '@/utils/supabase/server';

export async function fetchUserById(id: string) {
    const supabase = await createClient();
    const {data: user} = await supabase
        .from("users")
        .select()
        .eq('id', id);
    return user[0];
}