import { prisma } from '../prismaClient.js';
import { fetchNotes } from '../fetchDataFromHS.js';
import { transformNotes } from '../transformHsDataForDB.js';

export default async function importNotes(after) {
    const apiResponse = await fetchNotes(after);

    if(!apiResponse) return;

    const notes = transformNotes(apiResponse.results);
    const result = await prisma.notes.createMany({
      data: notes,
      skipDuplicates: true,
    });

    console.info(`${result.count} notes were added to DB`)

    after = apiResponse.paging.next.after;
    if (after) importNotes(after);
}

