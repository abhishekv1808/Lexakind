import type { BlogBlock } from '@/types/blog';

export function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="pt-3 font-display text-[24px] font-semibold leading-snug tracking-tight text-blk"
              >
                {block.text}
              </h2>
            );
          case 'p':
            return (
              <p
                key={i}
                className="font-body text-[16px] font-light leading-[1.8] text-[#3f4148]"
              >
                {block.text}
              </p>
            );
          case 'ul':
            return (
              <ul key={i} className="space-y-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ora" />
                    <span className="font-body text-[16px] font-light leading-[1.7] text-[#3f4148]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-2 border-ora bg-wht-2 py-4 pl-5 pr-4 font-display text-[18px] font-medium italic leading-relaxed text-blk"
              >
                {block.text}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
