import { site } from '../content/site'

export function ContactPage() {
  const contact = site.contact
  return (
    <section className="page">
      <p className="eyebrow">Contact</p>
      <h1>Get in touch</h1>
      <p>Show only public contact details verified on the source website.</p>
      <dl className="contact-list">
        {contact.phone && <><dt>Phone</dt><dd><a href={`tel:${contact.phone}`}>{contact.phone}</a></dd></>}
        {contact.email && <><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></>}
        {contact.address && <><dt>Address</dt><dd>{contact.address}</dd></>}
      </dl>
    </section>
  )
}
