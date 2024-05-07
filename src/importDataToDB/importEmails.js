import { prisma } from '../prismaClient.js';
import { fetchEmails } from '../fetchDataFromHS.js';
import { transformEmails } from '../transformHsDataForDB.js';

export default async function importEmails(after) {
    const apiResponse = await fetchEmails(after);

    if(!apiResponse) return;

    const emails = transformEmails(apiResponse.results);
    const result = await prisma.emails.createMany({
      data: emails,
      skipDuplicates: true,
    });

    console.info(`${result.count} emails were added to DB`)

    after = apiResponse.paging.next.after;
    if (after) importEmails(after);
  }

