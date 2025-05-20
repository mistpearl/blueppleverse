
import Table from '@/components/ui/table';
import {fetchPrototypes} from "@/data/prototypes";
import {CreatePrototypeButton} from "@/components/ui/prototypes/buttons";

export default async function Page() {
    const prototypes = await fetchPrototypes();

    return (
        <section>
            <CreatePrototypeButton />
            <Table headers={['Nom', 'Description', 'Mécaniques', 'Date de sortie', 'Action']} data={prototypes}></Table>
        </section>
    );
}
