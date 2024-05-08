-- CreateTable
CREATE TABLE "Meetings" (
    "id" SERIAL NOT NULL,
    "hs_id" VARCHAR(255) NOT NULL,
    "hs_timestamp" VARCHAR(255),
    "hubspot_owner_id" VARCHAR(255),
    "hs_meeting_title" TEXT,
    "hs_meeting_body" TEXT,
    "hs_internal_meeting_notes" TEXT,
    "hs_meeting_external_URL" TEXT,
    "hs_meeting_location" TEXT,
    "hs_meeting_start_time" VARCHAR(255),
    "hs_meeting_end_time" VARCHAR(255),
    "hs_meeting_outcome" TEXT,
    "hs_activity_type" VARCHAR(255),
    "hs_attachment_ids" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meetings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Meetings_hs_id_key" ON "Meetings"("hs_id");
