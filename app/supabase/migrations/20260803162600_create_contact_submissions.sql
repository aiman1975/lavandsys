/*
# Create contact_submissions table

1. Purpose
- Stores inquiries submitted through the LavandSys website contact form.
- Public (no sign-in) form, so anon-key frontend must be able to insert.

2. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `phone` (text, — submitter's phone number (optional)
  - `message` (text, not null) — the inquiry body
  - `lang` (text, default 'en') — language the form was submitted in
  - `created_at` (timestamptz, default now())

3. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT (public contact form).
- No SELECT/UPDATE/DELETE for anon or authenticated (only service role can read submissions).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  lang text NOT NULL DEFAULT 'en',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
