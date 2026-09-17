const services = [
  'Admin and organization support',
  'Email, calendar and follow-up organization',
  'Documents, templates and paperwork',
  'Budget and expense organization',
  'Small-business systems and business growth support',
  'Marketing, content and lead follow-through',
  'Website, app and software design support',
  'Community and project support',
  'Accountability and task follow-through',
];

function App() {
  return (
    <main className="site">
      <header>
        <div>
          <b>Digital Organizer Refresh</b>
          <span>AUSKO LLC • Missouri LLC • Southwest Missouri + remote</span>
        </div>
        <a href="tel:+14173607303">417-360-7303</a>
      </header>
      <section className="hero">
        <span className="kicker">
          GET ORGANIZED • GET CAUGHT UP • KEEP MOVING
        </span>
        <h1>Practical digital help for busy people and small businesses.</h1>
        <p>
          Admin organization, documents, follow-ups, business systems, marketing
          planning, websites and task follow-through without making things more
          complicated.
        </p>
        <div className="actions">
          <a className="primary" href="tel:+14173607303">
            Call now
          </a>
          <a
            className="secondary"
            href="mailto:digitalorganizerrefresh@gmail.com"
          >
            Email a request
          </a>

        </div>
      </section>
      <section className="registration"><b>Operated by AUSKO LLC</b><span>Missouri limited liability company • Certificate of Organization filed September 17, 2025 • Entity ID LC014665326</span></section>\n      <section className="section">
        <span className="kicker">SERVICES</span>
        <h2>Help where the work is actually piling up.</h2>
        <div className="grid">
          {services.map(item => (
            <article key={item}>
              <b>{item}</b>
              <p>
                Clear setup, practical next steps and follow-through tailored to
                the job.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="section split">
        <article className="card">
          <span className="kicker">REAL-WORLD EXAMPLE</span>
          <h2>Loehr Remodel + Contractor Hub</h2>
          <p>Digital Organizer systems are used to organize construction leads, job follow-up, estimates, project photos, field calculators, customer communication and private owner workflows for Loehr Remodel and Construction.</p>
        </article>
        <article className="card">
          <span className="kicker">BUILD + GROW</span>
          <h2>From organization to working digital systems.</h2>
          <p>Support can include business organization, marketing workflows, websites, app concepts, software workflow design and practical follow-through. Scope is confirmed before paid work begins.</p>
        </article>
      </section>
      <section className="section">
        <span className="kicker">PRIVACY + SERVICE BASICS</span>
        <h2>Simple boundaries before work starts.</h2>
        <div className="grid">
          <article><b>Privacy first</b><p>Do not send passwords, Social Security numbers, full bank or card numbers, or unnecessary sensitive records. Information is used only to provide the requested service and required business recordkeeping.</p></article>
          <article><b>Scope before payment</b><p>The task, deliverable, timing and price are confirmed before paid work starts. No subscription or recurring charge is created without an explicit agreement.</p></article>
          <article><b>Changes and cancellations</b><p>Any change in scope is confirmed before extra work. Refund or cancellation handling depends on the agreed scope and work already completed.</p></article>
          <article><b>Owner tools stay private</b><p>DORA, client records, internal templates, money tools and owner dashboards are not available from this public site.</p></article>
        </div>
      </section>
      <section className="cta">
        <h2>Need help today?</h2>
        <p>
          Call or email with the task, deadline or business problem you need
          organized. Scope and pricing are confirmed before paid work starts.
        </p>
        <div className="actions">
          <a className="primary" href="tel:+14173607303">
            Call 417-360-7303
          </a>
          <a
            className="secondary"
            href="mailto:digitalorganizerrefresh@gmail.com"
          >
            Email Digital Organizer
          </a>
        </div>
      </section>
      <footer>
        Digital Organizer Refresh • Ausko LLC • Southwest Missouri + remote
        support
      </footer>
    </main>
  );
}

export default App;
