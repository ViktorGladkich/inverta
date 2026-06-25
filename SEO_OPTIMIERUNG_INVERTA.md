# SEO-Optimierung invertadigital.de — Claude Code Brief

Аудит: Rising-Linkjuice · Оценка **B+** · 13 рекомендаций
Стек: Next.js 15 (App Router), Vercel, GSAP + SplitType + Lenis, Fontshare (Clash Display + Switzer)

| Раздел | Оценка | Комментарий |
|---|---|---|
| On-Page SEO | A+ | Только meta-description слишком длинная |
| GEO | C | Нет llms.txt |
| Links | F | 0 беклинков — **не код-задача** |
| Usability | C | PageSpeed (LCP), plaintext email |
| Leistung | A+ | Сырой тест ОК; реальный Lighthouse — нет |

**Что чинит Claude Code:** Приоритет 1 и 2.
**Что НЕ чинит Claude Code:** Раздел «Не код» (DNS, соцпрофили, беклинки, отзывы).

---

## ПРИОРИТЕT 1 — Быстрые код-фиксы (1–2 часа)

### 1.1 Meta-Description (сейчас 185 → цель 120–160)

Текущая (185):
> INVERTA ist Ihre digitale Growth-Agentur. Wir verbinden High-End Webdesign, skalierbare Webentwicklung, Performance Marketing und intelligente KI-Automatisierung für messbares Wachstum.

Новая (~137 символов, с гео-сигналом «Dresden»):
> INVERTA DIGITAL: Growth-Agentur aus Dresden für Webdesign, Webentwicklung, Performance Marketing & KI-Automatisierung. Messbares Wachstum.

В App Router — через `metadata` в `app/page.tsx`:
```ts
export const metadata: Metadata = {
  title: "Premium Agentur für Webdesign, Webentwicklung & KI | INVERTA",
  description:
    "INVERTA DIGITAL: Growth-Agentur aus Dresden für Webdesign, Webentwicklung, Performance Marketing & KI-Automatisierung. Messbares Wachstum.",
};
```
Заодно проверить, что OG-description и Twitter-description не дублируют старый длинный текст.

### 1.2 llms.txt (отсутствует → +GEO)

Создать `public/llms.txt`. Доступен будет по `https://invertadigital.de/llms.txt`.

```markdown
# INVERTA DIGITAL

> INVERTA DIGITAL ist eine Digitalagentur aus Dresden für High-End Webdesign,
> Webentwicklung, Performance Marketing und KI-Automatisierung.

INVERTA DIGITAL entwickelt maßgeschneiderte Next.js-Websites, datengetriebenes
Marketing und intelligente KI-/Automatisierungslösungen für messbares Wachstum.

## Leistungen
- [Webentwicklung](https://invertadigital.de/webentwicklung): Individuelle Next.js-Websites und Web-Apps
- [KI-Automatisierung](https://invertadigital.de/ki-automatisierung): Workflow-Automatisierung, RAG, Voice-AI
- [Performance Marketing](https://invertadigital.de/marketing): SEO, Paid Ads, Neukundengewinnung
- [Agentur](https://invertadigital.de/agentur): Über INVERTA DIGITAL

## Kontakt
- [Kontakt](https://invertadigital.de/kontakt)
- E-Mail: info@invertadigital.de
- Standort: Dresden, Deutschland
```

### 1.3 LocalBusiness / ProfessionalService JSON-LD (отсутствует → +Local SEO)

NAP взять **точно** как в Google Business Profile (иначе ломается citation-консистентность):
Rubensweg 1, 01217 Dresden · +49 176 70428834 · https://invertadigital.de/

Добавить server-side в `app/page.tsx` (или общий layout) как `<script type="application/ld+json">`.
**Заполнить плейсхолдеры:** `logo`, точные `geo`, часы работы (или убрать `openingHoursSpecification`).

```tsx
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://invertadigital.de/#organization",
  name: "INVERTA DIGITAL",
  url: "https://invertadigital.de/",
  logo: "https://invertadigital.de/logo.png",        // ← заполнить
  image: "https://invertadigital.de/og-image.png",    // ← заполнить
  telephone: "+49 176 70428834",
  email: "info@invertadigital.de",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rubensweg 1",
    postalCode: "01217",
    addressLocality: "Dresden",
    addressRegion: "Sachsen",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.0204,   // ← уточнить под Rubensweg 1
    longitude: 13.7676,  // ← уточнить
  },
  areaServed: { "@type": "Country", name: "Deutschland" },
  sameAs: [
    "https://www.facebook.com/invertadigitall",
    "https://www.instagram.com/invertadigital/",
    // "https://www.linkedin.com/company/...",  ← добавить после создания
    // "https://x.com/...",
  ],
  // openingHoursSpecification: [...]   ← заполнить или удалить
};

// в JSX:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
/>
```
Проверить, что новый блок не конфликтует с уже существующим Organization-schema —
лучше связать их через один `@id` (`#organization`).

### 1.4 sameAs + соцссылки в футере
Добавить ссылки на LinkedIn / X в футер и в массив `sameAs` (после создания профилей).
Для B2B-агентства LinkedIn — приоритет.

### 1.5 Plaintext-Email (низкий приоритет, косметика)
`info@invertadigital.de` найден в открытом виде 3×. Скрейперам это на руку.
Вариант: оставить `mailto:` (хорошо для UX), но в видимом тексте отдавать адрес через
JS/HTML-entity-обфускацию, либо вести только через контакт-форму. На балл влияет слабо.

---

## ПРИОРИТЕТ 2 — Performance (по реальному Lighthouse 13.4, 25.06.2026)

**Реальные баллы (Google Lighthouse, не аудит Rising-Linkjuice):**

| | Performance | A11y | Best Practices | SEO |
|---|---|---|---|---|
| Mobile | **76** | 96 | 100 | 100 |
| Desktop | **ошибка — NO_LCP** | 96 | 100 | 100 |

На десктопе балл Performance **не считается вообще**: LCP падает с ошибкой `NO_LCP`,
Lighthouse не может вычислить score (отсюда красный «!»). Это симптом той же
cookie-модалки. Mobile 76 тянет вниз почти только LCP.

**КОРЕНЬ ПРОБЛЕМЫ — Cookie-баннер, а НЕ hero.**
LCP-элемент на мобайле = `<p>` с текстом cookie-модалки
(«Wir nutzen Cookies, um unsere Website zu verbessern…»), контейнер
`<div class="fixed inset-0 z-[9999] …">`.
- Mobile LCP **5.3s**, при этом **Element render delay = 2590 ms** (TTFB 0 ms).
- Desktop **NO_LCP** — оверлей анимируется и никогда не «устаканивается» как LCP-кандидат.
- Та же модалка помечена как «некомбинированная анимация» (анимируется `filter: blur`,
  который двигает пиксели).

Полноэкранный cookie-оверлей (`fixed inset-0 z-9999`) появляется поздно с blur-入,
перекрывает hero и становится LCP-элементом → LCP 5.3s.

Задачи (по убыванию эффекта):

1. **Cookie-баннер — главный фикс (LCP 5.3s → ~1.5–2s, mobile 76 → 90+).**
   - Убрать entrance-анимацию (blur/opacity/transform) или сделать её мгновенной;
     **не анимировать `filter: blur`** (это и есть non-composited animation).
   - Показывать баннер сразу, без client-side задержки. Если показ зависит от
     проверки `localStorage`/`setTimeout` на клиенте — это и добавляет render delay.
     Рендерить дефолтное состояние при SSR.
   - Лучший вариант: не full-screen overlay, а **компактная нижняя плашка**. Тогда
     LCP-элементом станет hero, который красится уже на FCP (1.2s).

   **Конкретный патч CookieConsent.tsx** (подтверждено по коду — виноваты `setTimeout 1500ms`
   и анимация `filter: blur`):
   ```jsx
   // useEffect: убрать задержку 1500ms
   useEffect(() => {
     const consent = localStorage.getItem("cookie-consent");
     if (!consent) setIsVisible(true);   // было: setTimeout(() => setIsVisible(true), 1500)
   }, []);

   // motion.div карточки: убрать filter: blur из initial/animate/exit
   <motion.div
     initial={{ y: 40, opacity: 0, scale: 0.97 }}   // убрали filter: "blur(10px)"
     animate={{ y: 0, opacity: 1, scale: 1 }}
     exit={{ y: 40, opacity: 0, scale: 0.97 }}
     transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
     className="fixed inset-0 z-[9999] flex items-center justify-center px-4 pointer-events-none"
   >
   ```
   y/scale/opacity композитятся на GPU — их оставляем. Проблема была только в `filter: blur`.
   Если после этого LCP всё ещё > 2.5s — вынести consent в нижнюю плашку (тогда hero = LCP
   гарантированно). Также убрать неиспользуемый `preconnect` к googletagmanager из `<head>`.

2. **Render-blocking CSS (экономия ~500 ms на mobile).**
   `…chunks/0x7ohkvolopgc.css` — 17.2 KiB, блокирует ~600 ms.
   → Проверить, можно ли инлайнить критический CSS / уменьшить unused CSS
   (Tailwind purge, проверить что не тянется лишнее в critical path).

3. **Legacy JS / полифилы (экономия 14 KiB).**
   В `…chunks/15qnne~wmkos7.js` транспилируются `Array.prototype.at/flat/flatMap`,
   `Object.fromEntries/hasOwn`, `String.prototype.trimStart/trimEnd` — полифилы для
   старых браузеров, которые не нужны.
   → Поставить современный `browserslist` (drop легаси-таргетов) → полифилы уходят.
   В `package.json`:
   ```json
   "browserslist": ["chrome >= 109", "edge >= 109", "firefox >= 115", "safari >= 16"]
   ```
   (подобрать под свою аудиторию; главное — выкинуть IE/совсем старые).

4. **Unused JS (экономия ~47 KiB на mobile).**
   `15qnne~wmkos7.js` (71.9 KiB) и `0l_jsrtyakznx.js` (39.9 KiB) содержат неиспользуемый код.
   → `@next/bundle-analyzer`, below-fold и GSAP-плагины в `next/dynamic` / ленивые импорты.

5. **Logo-image (экономия 18 KiB, desktop).**
   `logo-footer.png` отдаётся 2000×2000 в контейнер 1320×1320.
   → В `next/image` задать корректные `sizes` / реальную ширину, чтобы грузился вариант
   под контейнер, а не `w=2048`.

6. **Мелочи (низкий приоритет):**
   - `preconnect` к `googletagmanager.com` помечен как неиспользуемый — убрать или оставить.
   - DOM 951 элементов, самый «тяжёлый» контейнер — marquee
     («Schnellere Innovation / Virtuelle Assistenz…», `will-change-transform`). Не критично.
   - Forced reflow ~112 ms — не приоритет.

> Примечание: про «цепочку редиректов 0.63s» из аудита Rising-Linkjuice — в реальном
> Lighthouse её **нет** (critical path: один хоп `https://invertadigital.de`, 108 ms).
> Это, скорее всего, был http→https, который Lighthouse не считает. Можно не трогать.

После фиксов — прогнать Lighthouse заново (mobile, 4G throttling) и убедиться, что
LCP-элементом стал hero, а не cookie-модалка.

---

## ПРИОРИТЕТ 3 — Контент / GEO (опционально)

- **Thin content 830 слов** (флаг низкого приоритета; порог у них 500, ты выше — но для
  homepage можно усилить). FAQ-блок у тебя уже есть в разметке (H3) — расширить ответы,
  добавить описания услуг прямо на главной. Это плюс и к контенту, и к GEO.
- **hreflang — НЕ добавлять.** Сайт моноязычный (de). Для одного языка hreflang бессмыслен.

---

## НЕ КОД (но напрямую влияет на оценку)

1. **Беклинки (F — главный рычаг).** Кода нет, только внешняя работа:
   - Кредит-ссылки в футерах клиентских сайтов: «Realisiert von INVERTA DIGITAL» (dofollow,
     релевантно, уникально доступно тебе).
   - Агентурные каталоги: Sortlist, Clutch, ProvenExpert, OMR Reviews, Awwwards-профиль,
     design-made-in-germany.
   - Локально: IHK Dresden, дрезденские/саксонские бизнес-каталоги, консистентный NAP.
   - Контент/кейсы, которые естественно собирают ссылки.
   Это недели–месяцы, не быстрый фикс. Ожидания соответствующие.

2. **DMARC.** Сейчас `v=DMARC1; p=none;` — фактически только мониторинг.
   → После 2–3 недель с `rua`-отчётами усилить до `p=quarantine; pct=100;` на IONOS (ui-dns).
   SPF (`v=spf1 include:_spf-eu.ionos.com ~all`) — ОК.

3. **Соцпрофили.** Создать LinkedIn (приоритет для B2B), затем X; YouTube — опционально.
   После создания — добавить в футер и `sameAs` (см. 1.3/1.4).

4. **GBP-отзывы.** 5 звёзд, но всего 2 отзыва. Попросить довольных клиентов оставить отзыв.

5. **Facebook Pixel.** Ставить только если планируешь Meta-Ads. Иначе пропустить.

---

## ГОТОВЫЙ ПРОМПТ ДЛЯ CLAUDE CODE

```
Контекст: Next.js 15 (App Router), Vercel, GSAP + SplitType + Lenis. Сайт invertadigital.de.
Цель: технический SEO по аудиту. Делай аккуратно, не ломая существующие анимации и schema.

Задачи (по порядку):

1. Meta-description на главной (app/page.tsx) заменить на (≤160 символов):
   "INVERTA DIGITAL: Growth-Agentur aus Dresden für Webdesign, Webentwicklung,
   Performance Marketing & KI-Automatisierung. Messbares Wachstum."
   Проверь OG- и Twitter-description, чтобы не остался старый 185-символьный текст.

2. Создай public/llms.txt с содержимым из брифа (раздел 1.2).

3. Добавь ProfessionalService JSON-LD (раздел 1.3) server-side на главной.
   NAP строго: Rubensweg 1, 01217 Dresden, +49 176 70428834.
   Свяжи с существующим Organization-schema через общий @id "#organization",
   не создавай дубль. Плейсхолдеры (logo, geo, hours) пометь TODO.

4. Footer: подготовь места под ссылки LinkedIn/X (закомментируй, пока профилей нет)
   и синхронизируй с массивом sameAs.

5. Performance (по реальному Lighthouse — Mobile 76, Desktop: NO_LCP error, score не считается):
   ГЛАВНОЕ: LCP-элемент на мобайле — это COOKIE-БАННЕР (div.fixed.inset-0.z-[9999]
   с текстом "Wir nutzen Cookies…"), render delay 2590ms, LCP 5.3s. Не hero.
   - Cookie-баннер: убери entrance-анимацию blur/opacity (или сделай мгновенной),
     НЕ анимируй filter: blur. Показывай баннер сразу (SSR-дефолт), без client-side
     задержки/setTimeout перед показом. Рассмотри замену full-screen overlay на
     компактную нижнюю плашку, чтобы LCP стал hero.
   - browserslist в package.json обнови на современный (chrome>=109 и т.п.), чтобы
     убрать legacy-полифилы (Array.at/flat/flatMap, Object.fromEntries/hasOwn,
     String.trimStart/trimEnd) из чанка 15qnne~wmkos7.js (~14 KiB).
   - Unused JS: прогони @next/bundle-analyzer, below-fold и GSAP-плагины в next/dynamic
     (чанки 15qnne~wmkos7.js 71.9KiB и 0l_jsrtyakznx.js 39.9KiB, ~47 KiB unused).
   - logo-footer.png отдаётся 2000×2000 в контейнер 1320 — задай корректные sizes/width
     в next/image (экономия 18 KiB).
   - Render-blocking CSS chunk 0x7ohkvolopgc.css (17.2 KiB) — проверь purge/critical CSS.
   Редиректы НЕ трогай — в реальном Lighthouse цепочки нет (один хоп, 108ms).

После каждого шага — короткий diff и объяснение. В конце прогони build и Lighthouse
(mobile, 4G), убедись что LCP-элемент стал hero, а не cookie-модалка, и schema/анимации целы.
```

---

### Чек-лист после внедрения
- [ ] Meta-description 120–160 символов
- [ ] llms.txt отдаётся по /llms.txt
- [ ] ProfessionalService schema валидна (Rich Results Test)
- [ ] Cookie-баннер: без blur-анимации, LCP-элемент = hero (не модалка)
- [ ] browserslist обновлён, legacy-полифилы ушли
- [ ] Реальный Lighthouse mobile: LCP < 2.5s, Performance 90+
- [ ] LinkedIn создан и в sameAs
- [ ] DMARC → quarantine (после мониторинга, на IONOS)
- [ ] Кредит-ссылки в футерах клиентских сайтов
