type FAQ = {
  question: string;
  answer: string;
};

export default function FAQBlock({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="container py-12">
      <div className="mb-8 max-w-3xl">
        <p className="kicker">FAQ</p>
        <h2 className="mt-3 text-3xl font-black md:text-5xl">Straight answers. No banker fog machine.</h2>
      </div>
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <details className="card p-5" key={faq.question}>
            <summary className="cursor-pointer font-black">{faq.question}</summary>
            <p className="mt-3 text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
