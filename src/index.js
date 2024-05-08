import { latestCallID, latestEmailID, latestNoteID, latestTaskID } from './getLatestIDs.js';
import { importNotes, importCalls, importTasks, importEmails } from './importDataToDB/index.js';

async function importHsActivitiesToDB() {
  await Promise.all([
    importNotes(latestNoteID),
    importCalls(latestCallID),
    importTasks(latestTaskID),
    importEmails(latestEmailID)
  ]);
}

try {
  await importHsActivitiesToDB();
} catch(e) {
  console.error('Main process failed');
  console.error(e);
}
