/**
 * Submit all sitemap URLs to IndexNow (Bing, Yandex, Naver, Seznam).
 * Run after a deploy that adds or changes content:
 *
 *   npm run indexnow            → submits every URL in the live sitemap
 *   npm run indexnow -- <url>…  → submits only the given URLs
 *
 * The key file is served at /{KEY}.txt from /public — do not rename one
 * without the other. Only meaningful once the production domain is live.
 */

const HOST = 'www.lexakind.com';
const KEY = 'b64dc14d2be8cb265767f07b05fac0e8';
const SITEMAP = `https://${HOST}/sitemap.xml`;

async function getSitemapUrls() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`Sitemap fetch failed: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function run() {
  const args = process.argv.slice(2);
  const urlList = args.length > 0 ? args : await getSitemapUrls();

  if (urlList.length === 0) {
    console.error('No URLs to submit.');
    process.exit(1);
  }

  console.log(`Submitting ${urlList.length} URLs to IndexNow for ${HOST}…`);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList,
    }),
  });

  // 200 = submitted, 202 = key validation pending — both are success.
  if (res.status === 200 || res.status === 202) {
    console.log(`Done (HTTP ${res.status}).`);
  } else {
    console.error(`IndexNow rejected the submission: HTTP ${res.status}`);
    console.error(await res.text());
    process.exit(1);
  }
}

run().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
