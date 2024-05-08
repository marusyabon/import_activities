import { prisma } from '../prismaClient.js';
import { fetchCalls } from '../fetchDataFromHS.js';
import { transformCalls } from '../transformHsDataForDB.js';

export default async function importCalls(after) {
    const apiResponse = await fetchCalls(after);

    if(!apiResponse) return;

    const calls = transformCalls(apiResponse.results);
    const result = await prisma.calls.createMany({
      data: calls,
      skipDuplicates: true,
    });

    console.info(`${result.count} calls were added to DB`)

    after = apiResponse.paging?.next.after;
    if (after) importCalls(after);
}

