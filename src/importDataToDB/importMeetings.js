import { prisma } from '../prismaClient.js';
import { fetchMeetings } from '../fetchDataFromHS.js';
import { transformMeetings } from '../transformHsDataForDB.js';

export default async function importMeetings(after) {
    const apiResponse = await fetchMeetings(after);

    if(!apiResponse) return;

    const meetings = transformMeetings(apiResponse.results);
    const result = await prisma.meetings.createMany({
      data: meetings,
      skipDuplicates: true,
    });

    console.info(`${result.count} meetings were added to DB`)

    after = apiResponse.paging.next.after;
    if (after) importMeetings(after);
}

