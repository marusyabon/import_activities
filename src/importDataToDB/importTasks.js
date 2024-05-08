import { prisma } from '../prismaClient.js';
import { fetchTasks } from '../fetchDataFromHS.js';
import { transformTasks } from '../transformHsDataForDB.js';

export default async function importTasks(after) {
    const apiResponse = await fetchTasks(after);

    if(!apiResponse) return;

    const tasks = transformTasks(apiResponse.results);
    const result = await prisma.tasks.createMany({
      data: tasks,
      skipDuplicates: true,
    });

    console.info(`${result.count} tasks were added to DB`)

    after = apiResponse.paging?.next.after;
    if (after) importTasks(after);
}

