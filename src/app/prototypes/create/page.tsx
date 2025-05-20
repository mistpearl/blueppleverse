import Form from '@/components/ui/prototypes/create-form';
import {fetchCategories} from '@/data/categories';

export default async function Page() {
    const categories = await fetchCategories();

    return (
        <main>
            <Form categories={categories}/>
        </main>
    );
}