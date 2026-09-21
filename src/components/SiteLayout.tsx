import { NavLink, Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [{ to: '#services', label: 'Услуги' }, { to: '#prices', label: 'Прайс' }, { to: '#works', label: 'Работы' }, { to: '#contacts', label: 'Контакты' }]

export function SiteLayout() {
  return <div className="site-shell"><header className="site-header"><NavLink className="brand" to="/" aria-label="Студия красоты Анна"><img src="/media/logo.svg" alt="АННА" /></NavLink><nav aria-label="Основная навигация">{navigation.map((item) => <a key={item.to} href={item.to}>{item.label}</a>)}</nav><a className="header-booking" href={site.booking} target="_blank" rel="noreferrer">Записаться <span>↗</span></a></header><main><Outlet /></main><footer className="site-footer"><span>© {new Date().getFullYear()} Студия красоты «Анна»</span><a href="#top">Наверх ↑</a></footer></div>
}
