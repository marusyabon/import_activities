export const properties = {
  notes: ["hs_timestamp", "hubspot_owner_id", "hs_note_body", "hs_attachment_ids"],
  calls: [
    "hs_timestamp", 
    "hubspot_owner_id", 
    "hs_call_body", 
    "hs_call_callee_object_id", 
    "hs_call_callee_object_type_id", 
    "hs_call_direction", 
    "hs_call_disposition", 
    "hs_call_duration", 
    "hs_call_from_number", 
    "hs_call_recording_url",
    "hs_call_status", 
    "hs_call_title", 
    "hs_call_source", 
    "hs_call_to_number", 
    "hs_activity_type", 
  ],
  tasks: [
    "hs_timestamp", 
    "hubspot_owner_id", 
    "hs_task_body",
    "hs_task_subject",
    "hs_task_status",
    "hs_task_priority",
    "hs_task_type",
    "hs_task_reminders"
  ],
  emails: [
    "hs_timestamp", 
    "hubspot_owner_id", 
    "hs_email_direction",
    "hs_email_html",
    "hs_email_status",
    "hs_email_subject",
    "hs_email_text",
    "hs_attachment_ids",
    "hs_email_headers"
  ]
}