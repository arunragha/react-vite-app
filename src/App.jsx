import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">CI/CD • React • Amazon S3</p>
        <h1>Deploy your React app with confidence.</h1>
        <p className="lead">
          This project demonstrates how a simple React application can be built,
          packaged, and published automatically with GitHub Actions to an Amazon
          S3 bucket.
        </p>
        <div className="cta-row">
          <a
            className="primary-link"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Workflow
          </a>
          <a
            className="secondary-link"
            href="https://aws.amazon.com/s3/"
            target="_blank"
            rel="noreferrer"
          >
            Learn about S3
          </a>
        </div>
      </section>

      <section className="info-grid">
        <article>
          <h2>Build</h2>
          <p>Vite compiles the app into a production-ready bundle for fast delivery.</p>
        </article>
        <article>
          <h2>Automate</h2>
          <p>Every push to the main branch triggers GitHub Actions to rebuild and deploy.</p>
        </article>
        <article>
          <h2>Host</h2>
          <p>Amazon S3 serves the static website so it is live and easy to scale.</p>
        </article>
      </section>
    </main>
  )
}

export default App
