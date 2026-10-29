
const InfoGrid = () => {
  return (
    <section className="info-grid">
      <article>
        <h2>Build</h2>
        <p>Vite compiles the app into a production-ready bundle for fast delivery.</p>
      </article>
      <article>
        <h2>Automate</h2>
        <p>Every push to the main branch triggers GitHub Actions to rebuild and deploy.</p>
      </article>
      <article id="host-section">
        <h2>Host</h2>
        <p>Amazon S3 serves the static website so it is live and easy to scale.</p>
      </article>
    </section>
  )
}

export default InfoGrid