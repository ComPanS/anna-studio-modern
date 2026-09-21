import { readFile } from 'node:fs/promises'

const source = [
  await readFile('src/pages/HomePage.tsx', 'utf8'),
  await readFile('src/components/SiteLayout.tsx', 'utf8'),
  await readFile('src/content/site.ts', 'utf8'),
].join('\n')
const required = ['#services', '#prices', '#works', '#contacts', 'widget.sonline.su', 'yandex.ru/maps']
const missing = required.filter((value) => !source.includes(value))

if (missing.length) {
  console.error(`Missing expected links: ${missing.join(', ')}`)
  process.exit(1)
}

if (source.includes('href="#"') || source.includes("href='#'")) {
  console.error('Inert # links are not allowed')
  process.exit(1)
}

console.log(`Validated ${required.length} required landing links.`)
