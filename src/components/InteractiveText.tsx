interface InteractiveTextProps {
  text: string;
  onLookupWord: (word: string) => void;
  className?: string;
}

const TOKEN_SPLIT_RE = /([A-Za-z][A-Za-z'-]*)/g;

/**
 * Renders English text where clicking any English word triggers
 * the live English-Korean Dictionary Drawer immediately.
 */
export function InteractiveText({ text, onLookupWord, className }: InteractiveTextProps) {
  const parts = text.split(TOKEN_SPLIT_RE);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (/^[A-Za-z][A-Za-z'-]*$/.test(part) && part.length >= 2) {
          const cleanToken = part.replace(/^'+|'+$/g, '');
          return (
            <span
              key={`${idx}-${part}`}
              role="button"
              tabIndex={0}
              className="dict-clickable-word"
              title={`"${cleanToken}" 영한사전 검색`}
              onClick={(e) => {
                e.stopPropagation();
                onLookupWord(cleanToken);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  onLookupWord(cleanToken);
                }
              }}
            >
              {part}
            </span>
          );
        }
        return <span key={idx}>{part}</span>;
      })}
    </span>
  );
}
