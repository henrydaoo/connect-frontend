-- The original V2 seed hash did not correspond to the documented demo passwords.
-- Keep this as a separate migration so existing Flyway histories remain valid.
UPDATE users
SET password_hash = CASE email
    WHEN 'admin@example.com' THEN '$2a$10$hS5/9LD2D2VQjRzYpQPuaOW/fHNw5tf4EoyG2DABj4hkVOHN4YwI2'
    WHEN 'user@example.com' THEN '$2a$10$sGfo.fD/4tOcJ4YoJztIMuqtEEnsx3U9OPfQMdGxi1a12UNKB271K'
    ELSE password_hash
END
WHERE email IN ('admin@example.com', 'user@example.com');
