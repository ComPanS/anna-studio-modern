import { services } from '../content/site'

export function ServicesPage() {
  return <section className="page"><p className="eyebrow">Services</p><h1>Verified areas of work</h1>{services.length > 0 ? <ul className="service-list">{services.map((service) => <li key={service.slug}><strong>{service.title}</strong><span>{service.summary}</span></li>)}</ul> : <p className="muted">Populate this page from the source-site route inventory.</p>}</section>
}
