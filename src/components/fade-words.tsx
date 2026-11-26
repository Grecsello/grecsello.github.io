export function FadeWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span aria-label={text}>
      {text.split(/\s+/).map((word, index) => (
        <span key={`${index}-${word}`} aria-hidden="true">
          <span className="fade-word" style={{ animationDelay: `${delay + index * 28}ms` }}>
            {word}
          </span>
          {" "}
        </span>
      ))}
    </span>
  );
}