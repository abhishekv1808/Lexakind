import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/blog';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Lexakind — Legal Insights';

export default async function BlogOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? 'Legal Insights';
  const category = post?.category ?? 'Lexakind';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(120% 100% at 80% 0%, #232327 0%, #161618 60%)',
          padding: 72,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              padding: '8px 16px',
              background: '#FF9100',
              borderRadius: 6,
              color: 'white',
              fontSize: 22,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.12,
            maxWidth: 1000,
            display: 'flex',
          }}
        >
          {title}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: '#FF9100',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div style={{ color: 'white', fontSize: 26, fontWeight: 700, letterSpacing: 2 }}>
            LEXAKIND
          </div>
          <div style={{ color: '#adadb4', fontSize: 22, marginLeft: 8 }}>
            · Legal Insights
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
