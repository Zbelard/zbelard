CREATE TYPE oauth_provider_enum AS ENUM ('google', 'github');

CREATE TABLE users (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" TEXT,
    "email" TEXT NOT NULL UNIQUE,
    "avatar_url" TEXT,
    "provider" oauth_provider_enum NOT NULL,
    "provider_id" TEXT NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_users_provider_provider_id ON users (provider, provider_id);

CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at();