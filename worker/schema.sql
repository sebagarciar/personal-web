-- Esquema de la base personal-web-clicks (D1). Ya aplicado en produccion;
-- vive aqui para poder recrearla desde cero si hiciera falta.
CREATE TABLE IF NOT EXISTS clicks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL,       -- ISO 8601 UTC
  event TEXT NOT NULL,    -- email:hero, project:kindle-news, nav:contact...
  href TEXT,
  page TEXT,              -- ruta donde ocurrio el clic
  locale TEXT,            -- en | es
  country TEXT,           -- lo pone Cloudflare en el borde
  referrer TEXT
);

CREATE INDEX IF NOT EXISTS clicks_ts ON clicks(ts);
CREATE INDEX IF NOT EXISTS clicks_event ON clicks(event);
