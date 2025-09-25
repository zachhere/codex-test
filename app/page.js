const highlights = [
  {
    title: 'Tailored Icons',
    description: 'Sharp, architectural silhouettes crafted in premium wool blends that move with you.',
    tag: 'Signature Suits',
  },
  {
    title: 'Effortless Layers',
    description: 'Featherweight knitwear and sculptural outerwear designed for year-round styling.',
    tag: 'New Capsule',
  },
  {
    title: 'Statement Details',
    description: 'Unexpected textures, hand-finished closures, and custom hardware elevate every look.',
    tag: 'Limited Release',
  },
];

const lookbook = ['Monochrome Nights', 'Sculpted Movement', 'Soft Horizon'];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-pill">Introducing</span>
          <h1>ZACH</h1>
          <p className="hero-description">
            Where bold tailoring meets modern minimalism. Discover collections engineered for
            statement makers and night runners—pieces that feel as exceptional as they look.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#collection">
              Shop the collection
            </a>
            <a className="button secondary" href="#lookbook">
              View lookbook
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-content">
            <span className="hero-visual-subtitle">AW24</span>
            <span className="hero-visual-title">REBORN</span>
            <span className="hero-visual-subtitle">After Dark Edition</span>
          </div>
        </div>
      </section>

      <section id="collection" className="collection-section">
        <div className="section-heading">
          <h2>Curated for the night ahead</h2>
          <p>
            Every ZACH piece is meticulously crafted in limited runs. Explore silhouettes inspired by
            metropolitan architecture and midnight energy.
          </p>
        </div>
        <div className="collection-grid">
          {highlights.map((item) => (
            <article key={item.title} className="collection-card">
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#" className="button secondary" aria-label={`Discover ${item.title}`}>
                Discover now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="lookbook" className="lookbook-section">
        <div className="section-heading">
          <h2>The ZACH lookbook</h2>
          <p>
            Slip into the mood of the season with curated stories from across the globe—shot in
            Berlin, Seoul, and São Paulo.
          </p>
        </div>
        <div className="lookbook-gallery">
          {lookbook.map((story) => (
            <div key={story} className="lookbook-tile">
              <span>{story}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Become a ZACH insider</h2>
          <p>
            Gain early access to drops, private fittings, and invitations to our nocturnal runway
            showcases.
          </p>
          <a className="button primary" href="mailto:concierge@wearzach.com">
            Join the list
          </a>
        </div>
      </section>

        <footer>
          <span>© {new Date().getFullYear()} ZACH Atelier. Crafted worldwide.</span>
          <span>
            Follow us on <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </span>
        </footer>
    </main>
  );
}
