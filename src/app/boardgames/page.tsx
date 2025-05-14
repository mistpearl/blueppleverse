
import Table from '@/components/ui/table';
import {fetchBoardGamesWithAllData} from "@/data/boardgames";

export default async function Page() {
    const boardgames = await fetchBoardGamesWithAllData();

    return (
        <section>
            <Table headers={['Nom', 'Description', 'Mécaniques', 'Date de sortie', 'Action']} data={boardgames}></Table>
        </section>
    );
}
