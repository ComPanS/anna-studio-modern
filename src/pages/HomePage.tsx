import { media, site, services, prices, works } from '../content/site'

export function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-mark"><img src={media('logo.svg')} alt="Студия красоты Анна" /></div>
          <p className="kicker">Студия красоты · Лукино-Варино</p>
          <h1>{site.tagline}</h1>
          <p className="hero-lede">{site.description}</p>
          <div className="hero-actions"><a className="button button-dark" href={site.booking} target="_blank" rel="noreferrer">Записаться онлайн <span>↗</span></a><a className="text-link" href="#services">Смотреть услуги <span>↓</span></a></div>
        </div>
        <div className="hero-image"><img src={media('hero.jpg')} alt="Интерьер студии красоты Анна" /><span className="hero-note">Ваше время<br /><b>для себя</b></span></div>
      </section>

      <section className="promo-band"><div className="promo-number">−15%</div><div><p className="kicker">Специальное предложение</p><h2>{site.promo}</h2></div><a className="button button-light" href={site.booking} target="_blank" rel="noreferrer">Выбрать время <span>↗</span></a></section>

      <section className="section services-section" id="services">
        <div className="section-heading"><p className="kicker">Всё в одной студии</p><h2>Уход, который<br /><em>подходит вам</em></h2><p>Начните с привычной услуги или соберите свой бьюти-день: от стрижки и окрашивания до маникюра и ухода за лицом.</p></div>
        <div className="service-list">{services.map((service, index) => <article className="service-item" key={service.title}><div className="service-index">0{index + 1}</div><img src={service.image} alt="" /><div className="service-info"><h3>{service.title}</h3><p>{service.text}</p></div><strong>{service.price}</strong></article>)}</div>
      </section>

      <section className="trust-section" id="about"><div className="trust-photo"><img src={media('interior-01.jpg')} alt="Интерьер студии красоты Анна" /><span>Хорошее место<br /><b>2026</b></span></div><div className="trust-copy"><p className="kicker">Нам доверяют</p><div className="rating"><b>4,9</b><span>★</span></div><p className="rating-caption">645 оценок на Яндекс Картах</p><p className="trust-quote">«Приятный человек и прекрасный мастер своего дела»</p><p className="trust-detail">В студии работают мастера по волосам, ногтям, бровям, ресницам и косметологии. Запишитесь на удобное время и обсудите задачу с мастером до начала процедуры.</p><a className="text-link" href="https://yandex.ru/maps/org/place/1754325317/reviews/" target="_blank" rel="noreferrer">Читать отзывы <span>↗</span></a></div></section>

      <section className="price-section" id="prices"><div className="price-intro"><p className="kicker">Ориентир по стоимости</p><h2>Прайс без<br /><em>лишних слов</em></h2><a className="text-link" href="https://disk.yandex.ru/i/a3vOT5mpM1RMvg" target="_blank" rel="noreferrer">Скачать полный прайс <span>↗</span></a></div><div className="price-list">{prices.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><b>{price}</b></div>)}<p className="price-note">Финальная стоимость зависит от длины, густоты волос и выбранной техники.</p></div></section>

      <section className="gallery-section" id="works"><div className="section-heading"><p className="kicker">Работы студии</p><h2>Результат,<br /><em>который видно</em></h2></div><div className="gallery-grid">{works.map((image, index) => <img key={image} className={`gallery-image gallery-${index + 1}`} src={image} alt="Работа мастера студии Анна" />)}</div></section>

      <section className="contact-section" id="contacts"><div><p className="kicker">Будем ждать вас</p><h2>До встречи<br /><em>в «Анне»</em></h2><a className="button button-dark" href={site.booking} target="_blank" rel="noreferrer">Записаться онлайн <span>↗</span></a></div><div className="contact-details"><div><span>Адрес</span><a href={site.map} target="_blank" rel="noreferrer">{site.contact.address} ↗</a></div><div><span>Телефон</span><a href="tel:+79258937706">{site.contact.phones[0]}</a><a href="tel:+79680902560">{site.contact.phones[1]}</a></div><div><span>Часы работы</span>{site.contact.hours.map((hour) => <p key={hour}>{hour}</p>)}</div><div className="socials"><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href={site.telegram} target="_blank" rel="noreferrer">Telegram ↗</a></div></div></section>
    </>
  )
}
