import { latestCallID, latestEmailID, latestNoteID, latestTaskID } from './getLatestIDs.js';
import { importNotes, importCalls, importTasks, importEmails } from './importDataToDB/index.js';


importNotes(latestNoteID);
importCalls(latestCallID);
importTasks(latestTaskID);
importEmails(latestEmailID);
