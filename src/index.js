import { latestCallID, latestEmailID, latestMeetinglID, latestNoteID, latestTaskID } from './getLatestIDs.js';
import { importNotes, importCalls, importTasks, importEmails, importMeetings } from './importDataToDB/index.js';

async function importHsActivitiesToDB() {
  await Promise.all([
    importNotes(latestNoteID),
    importCalls(latestCallID),
    importTasks(latestTaskID),
    importEmails(latestEmailID),
    importMeetings(latestMeetinglID)
  ]);
}

try {
  await importHsActivitiesToDB();
} catch(e) {
  console.error('Main process failed');
  console.error(e);
}
