import { Link } from 'react-router-dom'
import { services, site } from '../content/site'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Redesign starter</p>
        <h1>{site.tagline}</h1>
        <p className="lede">{site.description}</p>
        <Link className="button" to="/contact">Contact</Link>
      </section>
      <section className="section">
        <p className="eyebrow">Core offering</p>
        <h2>Build this section from verified source content.</h2>
        {services.length > 0 ? <ul className="service-list">{services.map((service) => <li key={service.slug}><strong>{service.title}</strong><span>{service.summary}</span></li>)}</ul> : <p className="muted">Add verified services to <code>src/content/site.ts</code>.</p>}
      </section>
    </>
  )
}
