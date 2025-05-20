
import Table from '@/components/ui/table';
import {fetchUserBoardGames} from "@/data/users_boardgames";

export default async function Page() {
    const boardgames = await fetchUserBoardGames(1);

    return (
        <section>
            <Table headers={['Nom', 'Description', 'Mécaniques', 'Date de sortie', 'Note', 'Action']} data={boardgames}></Table>
        </section>
    );
}
