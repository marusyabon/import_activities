-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "hs_id" VARCHAR(255) NOT NULL,
    "hs_timestamp" VARCHAR(255),
    "hubspot_owner_id" VARCHAR(255),
    "hs_note_body" TEXT,
    "hs_attachment_ids" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emails" (
    "id" SERIAL NOT NULL,
    "hs_id" VARCHAR(255) NOT NULL,
    "hs_timestamp" VARCHAR(255),
    "hubspot_owner_id" VARCHAR(255),
    "hs_email_direction" VARCHAR(255),
    "hs_email_html" TEXT,
    "hs_email_status" VARCHAR(255),
    "hs_email_subject" TEXT,
    "hs_email_text" TEXT,
    "hs_attachment_ids" TEXT,
    "hs_email_headers" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Emails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calls" (
    "id" SERIAL NOT NULL,
    "hs_id" VARCHAR(255) NOT NULL,
    "hs_timestamp" VARCHAR(255),
    "hubspot_owner_id" VARCHAR(255),
    "hs_call_body" TEXT,
    "hs_call_callee_object_id" VARCHAR(255),
    "hs_call_callee_object_type_id" VARCHAR(255),
    "hs_call_direction" VARCHAR(255),
    "hs_call_disposition" VARCHAR(255),
    "hs_call_duration" VARCHAR(255),
    "hs_call_from_number" VARCHAR(255),
    "hs_call_recording_url" TEXT,
    "hs_call_status" VARCHAR(255),
    "hs_call_title" VARCHAR(255),
    "hs_call_source" VARCHAR(255),
    "hs_call_to_number" VARCHAR(255),
    "hs_activity_type" VARCHAR(255),
    "hs_attachment_ids" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Calls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "hs_id" VARCHAR(255) NOT NULL,
    "hs_timestamp" VARCHAR(255),
    "hubspot_owner_id" VARCHAR(255),
    "hs_task_body" TEXT,
    "hs_task_subject" TEXT,
    "hs_task_status" VARCHAR(255),
    "hs_task_priority" VARCHAR(255),
    "hs_task_type" VARCHAR(255),
    "hs_task_reminders" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Notes_hs_id_key" ON "Notes"("hs_id");

-- CreateIndex
CREATE UNIQUE INDEX "Emails_hs_id_key" ON "Emails"("hs_id");

-- CreateIndex
CREATE UNIQUE INDEX "Calls_hs_id_key" ON "Calls"("hs_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_hs_id_key" ON "Tasks"("hs_id");
