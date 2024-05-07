import { prisma } from "./prismaClient.js";

// Notes
const latestNote = await prisma.notes.findMany({
  orderBy: { id: 'desc' },
  take: 1,
});
const latestNoteID = latestNote[0]?.hs_id;

// Tasks
const latestTask = await prisma.tasks.findMany({
  orderBy: { id: 'desc' },
  take: 1,
});
const latestTaskID = latestTask[0]?.hs_id;

// Calls
const latestCall = await prisma.calls.findMany({
  orderBy: { id: 'desc' },
  take: 1,
});
const latestCallID = latestCall[0]?.hs_id;

// Emails 
const latestEmail = await prisma.emails.findMany({
  orderBy: { id: 'desc' },
  take: 1,
});
const latestEmailID = latestEmail[0]?.hs_id;

export {latestNoteID, latestTaskID, latestCallID, latestEmailID};