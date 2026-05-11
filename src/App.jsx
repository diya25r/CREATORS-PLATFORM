import './App.css';

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Creators Platform</p>
          <h1>Build your creator business faster.</h1>
          <p className="description">
            Manage your audience, launch products, and grow your community with a modern creator experience.
          </p>
          <div className="cta-row">
            <a className="cta primary" href="#get-started">Get started</a>
            <a className="cta secondary" href="#features">Features</a>
          </div>
        </div>
      </header>

      <main>
        <section id="features" className="features-grid">
          <article>
            <h2>Audience Hub</h2>
            <p>Track subscriber growth, messages, and engagement all in one place.</p>
          </article>
          <article>
            <h2>Monetization</h2>
            <p>Sell digital products, memberships, and paid subscriptions quickly.</p>
          </article>
          <article>
            <h2>Creator Tools</h2>
            <p>Publish updates, polls, and launch campaigns from a single dashboard.</p>
          </article>
        </section>

        <section id="get-started" className="panel">
          <h2>Ready to launch your creator platform?</h2>
          <p>Use this starter app to build a modern web experience for your audience.</p>
          <div className="panel-actions">
            <code>npm install</code>
            <code>npm run dev</code>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
