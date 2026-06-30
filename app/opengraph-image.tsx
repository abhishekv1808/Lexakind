import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Lexakind — Trusted Legal Services in India';

export default function OpengraphImage() {
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: '#FF9100',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div
            style={{
              color: 'white',
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            LEXAKIND
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: 'white',
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Trusted legal services, with precision and clarity.
          </div>
          <div
            style={{
              color: '#adadb4',
              fontSize: 30,
              marginTop: 24,
            }}
          >
            4,000+ verified advocates · 190+ services · Bengaluru, India
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 40, height: 4, background: '#FF9100' }} />
          <div style={{ color: '#FF9100', fontSize: 24, fontWeight: 600 }}>
            www.lexakind.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
