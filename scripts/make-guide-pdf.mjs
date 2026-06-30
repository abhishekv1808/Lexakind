import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Minimal, dependency-free single-page A4 PDF generator.
const ORANGE = '0.91 0.57 0';
const esc = (s) =>
  s
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');

const title = 'Property Buying Legal Checklist';
const subtitle = 'A practical pre-purchase checklist from Lexakind';
const lines = [
  { h: 'BEFORE YOU PAY ANY ADVANCE' },
  '[  ]  Verify the seller title and the 30-year ownership chain',
  '[  ]  Obtain the Encumbrance Certificate (EC) for 13-30 years',
  '[  ]  Confirm the Khata certificate and latest property tax receipts',
  '[  ]  Check the approved building plan and occupancy certificate',
  '[  ]  For under-construction units, confirm RERA registration',
  '[  ]  Verify land-use / zoning and any DC conversion',
  '[  ]  Check for existing loans, liens or court attachments',
  '[  ]  Match seller identity and PAN against the title deeds',
  { h: 'BEFORE YOU REGISTER' },
  '[  ]  Have a property lawyer review the draft sale deed',
  '[  ]  Confirm who bears stamp duty and registration charges',
  '[  ]  Ensure all dues (water, electricity, society) are cleared',
  '[  ]  Insist on original documents at the time of registration',
  '[  ]  Collect the registered deed, EC update and possession letter',
];

let body = `BT\n0 0 0 rg\n/F2 22 Tf\n56 770 Td\n(${esc(title)}) Tj\n`;
body += `/F1 12 Tf\n${ORANGE} rg\n0 -22 Td\n(${esc(subtitle)}) Tj\n`;
body += `0 0 0 rg\n/F1 11.5 Tf\n0 -30 Td\n`;
for (const line of lines) {
  if (typeof line === 'object') {
    body += `${ORANGE} rg\n/F2 11 Tf\n0 -26 Td\n(${esc(line.h)}) Tj\n0 0 0 rg\n/F1 11.5 Tf\n`;
  } else {
    body += `0 -19 Td\n(${esc(line)}) Tj\n`;
  }
}
body += `0.4 0.4 0.4 rg\n/F1 9 Tf\n0 -40 Td\n(This guide is general information, not legal advice. Book a consultation at) Tj\n`;
body += `0 -13 Td\n(www.lexakind.com  -  +91 86188 88526) Tj\nET\n`;

const objects = [];
objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
objects[2] = '<< /Type /Pages /Kids [3 0 R] /Count 1 >>';
objects[3] =
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>';
objects[4] = `<< /Length ${Buffer.byteLength(body)} >>\nstream\n${body}\nendstream`;
objects[5] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
objects[6] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';

let pdf = '%PDF-1.4\n';
const offsets = [];
for (let i = 1; i <= 6; i++) {
  offsets[i] = Buffer.byteLength(pdf, 'latin1');
  pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
}
const xrefOffset = Buffer.byteLength(pdf, 'latin1');
pdf += `xref\n0 7\n0000000000 65535 f \n`;
for (let i = 1; i <= 6; i++)
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
pdf += `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

const out = path.join(
  __dirname,
  '../public/guides/property-buying-legal-checklist.pdf',
);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, pdf, 'latin1');
console.log('PDF written:', out, fs.statSync(out).size, 'bytes');
