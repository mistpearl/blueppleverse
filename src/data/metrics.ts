'use server';

import {createClient} from '@/utils/supabase/server';

export async function fetchMetrics() {
    const supabase = await createClient();

    const metrics = [];

    const { count, error } = await supabase.from('boardgames').select('*', { count: 'exact', head: true });
    metrics.push({title: 'Jeux de société', value: count,  change: 0});

    
    
    console.log(metrics);
    return metrics;
}
