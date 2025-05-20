'use server';

import {createClient} from '@/utils/supabase/server';
import {z} from 'zod';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export type State = {
    errors?: {
        name?: string[];
        description?: string[];
        release?: string[];
    };
    message?: string | null;
};

const FormSchema = z.object({
    id: z.string(),
    categoryId: z.string({
        invalid_type_error: 'Il faut sélectionner une catégorie.',
    }),
    // amount: z.coerce
    //     .number()
    //     .gt(0, { message: 'Please enter an amount greater than $0.' }),
    // status: z.enum(['pending', 'paid'], {
    //     invalid_type_error: 'Please select an invoice status.',
    // }),
    name: z.string(),
    description: z.string()
});

export async function fetchPrototypes() {
    const supabase = await createClient();

    const {data: prototypes} = await supabase
        .from("prototypes")
        .select(`id, name, description, category_id(name), release, logo, player_count, game_time, author_id(name), illustrator_id(name)`);
    return prototypes;
}

const CreatePrototype = FormSchema.omit({id: true});

/**
 * @param prevState
 * @param formData
 */
export async function createPrototype(prevState: State, formData: FormData)
{
    console.log(formData);

    const validatedFields = CreatePrototype.safeParse({
        categoryId: formData.get('categoryId'),
        name: formData.get('name'),
        description: formData.get('description'),
        playerCount: formData.get('playerCount'),
    });

    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields...'
        };
    }

    const date = new Date().toISOString().split('T')[0];

    try {
        const supabase = await createClient();
        const {} = await supabase
            .from("prototypes")
            .insert({category_id: formData.get('categoryId'), name: formData.get('name'), description: formData.get('description'), player_count: formData.get('playerCount')});

    } catch (error) {
        console.log(error);
        return {
            message: 'Database Error: Failed to Create proto.',
        };
    }

    revalidatePath('/prototypes');
    redirect('/prototypes');
}