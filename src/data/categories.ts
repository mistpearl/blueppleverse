'use server';

import {createClient} from '@/utils/supabase/server';

export async function fetchCategories() {
    const supabase = await createClient();

    const {data: categories} = await supabase
        .from("category")
        .select(`id, name, description`);
    return categories;
}
