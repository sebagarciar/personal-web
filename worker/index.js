/**
 * La web entera se sirve como assets estaticos. Este Worker existe para una
 * sola cosa: recibir los clics que el beacon de Base.astro manda a /e y
 * guardarlos en D1. Todo lo demas cae en los assets, igual que antes.
 *
 * No se guarda IP, ni user agent, ni nada que identifique a un visitante.
 * El pais lo pone Cloudflare en el borde; no sale del visitante.
 */

// Topes de longitud. Un cuerpo manipulado no puede inflar la tabla.
const MAX = { event: 80, href: 300, page: 120, locale: 5, referrer: 300 };

/**
 * Nombres de clic que la web genera de verdad. /e es publico, asi que sin esta
 * lista cualquiera podria escribir texto arbitrario en la tabla. Con ella, lo
 * peor que puede hacer es inflar una etiqueta que ya existe, que es justo lo
 * que frena el limite de peticiones si algun dia hace falta ponerlo.
 */
const ALLOWED = /^(email|linkedin|github|project|skill|nav|locale|anchor|page|out|link|src)(:|$)/;

function clean(value, limit) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, limit) : null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/e') {
      if (request.method !== 'POST') {
        return new Response('Method not allowed', {
          status: 405,
          headers: { Allow: 'POST' },
        });
      }

      // Un Origin distinto solo puede venir de una pagina que no es esta web.
      // Si no viene ninguno no se descarta el clic: perder clics reales es peor
      // que aceptar un POST suelto, para eso estan la lista y los topes.
      const origin = request.headers.get('Origin');
      if (origin && origin !== url.origin) {
        return new Response(null, { status: 204 });
      }

      // Al beacon nunca se le responde con error: sendBeacon ignora la
      // respuesta, y un fallo al registrar no es problema del visitante.
      try {
        const body = JSON.parse(await request.text());
        const event = clean(body.e, MAX.event);

        if (event && ALLOWED.test(event)) {
          await env.DB.prepare(
            `INSERT INTO clicks (ts, event, href, page, locale, country, referrer)
             VALUES (?, ?, ?, ?, ?, ?, ?)`
          )
            .bind(
              new Date().toISOString(),
              event,
              clean(body.h, MAX.href),
              clean(body.p, MAX.page),
              clean(body.l, MAX.locale),
              request.cf?.country ?? null,
              clean(body.r, MAX.referrer)
            )
            .run();
        }
      } catch (err) {
        console.warn(`[clicks] evento descartado: ${err}`);
      }

      return new Response(null, { status: 204 });
    }

    return env.ASSETS.fetch(request);
  },
};
