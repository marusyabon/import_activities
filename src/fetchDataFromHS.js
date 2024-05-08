import * as hubspot from '@hubspot/api-client';
import {properties} from './hsObjectProperties.js';

const hubspotClient = new hubspot.Client({"accessToken":process.env.ACCESS_TOKEN});
const limit = 100;
const propertiesWithHistory = undefined;
const associations = undefined;
const archived = false;

export async function fetchNotes(after) {
  try {
    console.info(`Start fetching HS notes after id=${after}`);
    const apiResponse = await hubspotClient.crm.objects.notes.basicApi.getPage(limit, after, properties.notes, propertiesWithHistory, associations, archived);
    console.info(`Notes fetching complited`);
    return apiResponse;

  } catch (e) {
    console.error('Notes fetching completed with errors')

    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)
  }
}

export async function fetchCalls(after) {
  try {
    console.info(`Start fetching HS calls after id=${after}`);
    const apiResponse = await hubspotClient.crm.objects.calls.basicApi.getPage(limit, after, properties.calls, propertiesWithHistory, associations, archived);
    console.info(`Calls fetching complited`);
    return apiResponse;

  } catch (e) {
    console.error('Calls fetching completed with errors');

    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)
  }
}

export async function fetchTasks(after) {
  try {
    console.info(`Start fetching HS tasks after id=${after}`);
    const apiResponse = await hubspotClient.crm.objects.tasks.basicApi.getPage(limit, after, properties.tasks, propertiesWithHistory, associations, archived);
    console.info(`Tasks fetching complited`);
    
    return apiResponse;

  } catch (e) {
    console.error('Tasks fetching completed with errors');

    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)
  }
}

export async function fetchEmails(after) {
  try {
    console.info(`Start fetching HS emails after id=${after}`);
    const apiResponse = await hubspotClient.crm.objects.emails.basicApi.getPage(limit, after, properties.emails, propertiesWithHistory, associations, archived);
    console.info(`Emails fetching complited`);
    
    return apiResponse;

  } catch (e) {
    console.error('Emails fetching completed with errors');

    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)
  }
}

export async function fetchMeetings(after) {
  try {
    console.info(`Start fetching HS meetings after id=${after}`);
    const apiResponse = await hubspotClient.crm.objects.meetings.basicApi.getPage(limit, after, properties.meetings, propertiesWithHistory, associations, archived);
    console.info(`Meetings fetching complited`);
    
    return apiResponse;

  } catch (e) {
    console.error('Meetings fetching completed with errors');

    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)
  }
}