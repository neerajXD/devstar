import { json } from '@sveltejs/kit';
import UAParser from 'ua-parser-js';

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
  const body = await request.json();
  const userAgent = body.userAgent;
  if (!userAgent) {
    return new Response(JSON.stringify({ error: 'No user agent provided' }), { status: 400 });
  }

  const userAgentInfo = new (UAParser)(userAgent).getResult();
  // return new Response(JSON.stringify({userAgent:userAgentInfo}),{status: 200});
  return json({userAgent:userAgentInfo},{status:200});
}
