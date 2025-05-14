
import Table from '@/components/ui/table';
import {fetchPrototypes} from "@/data/prototypes";

export default async function Page() {
    const prototypes = await fetchPrototypes();
    console.log(prototypes);

    return (
        <section>
            <Table headers={['Nom', 'Description', 'Mécaniques', 'Date de sortie', 'Action']} data={prototypes}></Table>
        </section>
    );
}
