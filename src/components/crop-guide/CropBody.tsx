export function CropBody({
  intro,
  notes,
}: {
  intro?: string[];
  notes?: string[];
}) {
  const clean = (text: string) =>
    text.replace(/\nSource: Wikipedia/g, '').trim();

  return (
    <div className="prose prose-lg max-w-none text-brand-text-primary leading-relaxed">
      {intro && intro.length > 0 && (
        <div className="mb-8">
          {intro.map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {clean(paragraph)}
            </p>
          ))}
        </div>
      )}

      {notes && notes.length > 0 && (
        <div className="bg-brand-background-alt rounded-lg p-5 border border-brand-border">
          <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
            Cultivation notes
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-base">
            {notes.map((note, idx) => (
              <li key={idx}>{clean(note)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
