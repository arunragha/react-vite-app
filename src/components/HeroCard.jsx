
const HeroCard = ({ triggerRef, showS3Details, setShowS3Details }) => {
  return (
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
          href="#"
          ref={triggerRef}
          onClick={() => setShowS3Details(!showS3Details)}
        >
          Learn about S3
        </a>
      </div>
    </section>
  )
}

export default HeroCard