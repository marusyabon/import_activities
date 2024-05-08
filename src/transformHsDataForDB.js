export function transformNotes(notes) {
  return notes.map(el => ({
    hs_id: el.id,
    hs_timestamp: el.properties.hs_timestamp,
    hubspot_owner_id: el.properties.hubspot_owner_id,
    hs_note_body: el.properties.hs_note_body,
    hs_attachment_ids: el.properties.hs_attachment_ids 
  }));
}

export function transformCalls(calls) {
  return calls.map(el => ({
    hs_id: el.id,
    hs_timestamp: el.properties.hs_timestamp,
    hubspot_owner_id: el.properties.hubspot_owner_id,
    hs_call_body: el.properties.hs_call_body,
    hs_call_callee_object_id: el.properties.hs_call_callee_object_id,
    hs_call_callee_object_type_id: el.properties.hs_call_callee_object_type_id,
    hs_call_direction: el.properties.hs_call_direction,
    hs_call_disposition: el.properties.hs_call_disposition,
    hs_call_duration: el.properties.hs_call_duration,
    hs_call_from_number: el.properties.hs_call_from_number,
    hs_call_recording_url: el.properties.hs_call_recording_url,
    hs_call_status: el.properties.hs_call_status,
    hs_call_title: el.properties.hs_call_title,
    hs_call_source: el.properties.hs_call_source,
    hs_call_to_number: el.properties.hs_call_to_number,
    hs_activity_type: el.properties.hs_activity_type,
    hs_attachment_ids: el.properties.hs_attachment_ids,
  }))
}

export function transformTasks(tasks) {
  return tasks.map(el => ({
    hs_id: el.id,
    hs_timestamp: el.properties.hs_timestamp,
    hubspot_owner_id: el.properties.hubspot_owner_id,
    hs_task_body: el.properties.hs_task_body,
    hs_task_subject: el.properties.hs_task_subject,
    hs_task_status: el.properties.hs_task_status,
    hs_task_priority: el.properties.hs_task_priority,
    hs_task_type: el.properties.hs_task_type,
    hs_task_reminders: el.properties.hs_task_reminders
  }))
}

export function transformEmails(emails) {
  return emails.map(el => ({
    hs_id: el.id,
    hs_timestamp: el.properties.hs_timestamp,
    hubspot_owner_id: el.properties.hubspot_owner_id,
    hs_email_direction: el.properties.hs_email_direction,
    hs_email_html: el.properties.hs_email_html,
    hs_email_status: el.properties.hs_email_status,
    hs_email_subject: el.properties.hs_email_subject,
    hs_email_text: el.properties.hs_email_text,
    hs_attachment_ids: el.properties.hs_attachment_ids,
    hs_email_headers: el.properties.hs_email_headers
  }))
}

export function transformMeetings(meetings) {
  return meetings.map(el => ({
    hs_id: el.id,
    hs_timestamp: el.properties.hs_timestamp,
    hubspot_owner_id: el.properties.hubspot_owner_id,
    hs_meeting_title: el.properties.hs_meeting_title,
    hs_meeting_body: el.properties.hs_meeting_body,
    hs_internal_meeting_notes: el.properties.hs_internal_meeting_notes,
    hs_meeting_external_URL: el.properties.hs_meeting_external_URL,
    hs_meeting_location: el.properties.hs_meeting_location,
    hs_meeting_start_time: el.properties.hs_meeting_start_time,
    hs_meeting_end_time: el.properties.hs_meeting_end_time,
    hs_meeting_outcome: el.properties.hs_meeting_outcome,
    hs_activity_type: el.properties.hs_activity_type,
    hs_attachment_ids: el.properties.hs_attachment_ids,
  }))
}