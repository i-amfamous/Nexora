# Nexora Technologies

Nexora is a responsive five-page technology company website built with semantic HTML, CSS, and vanilla JavaScript. It presents the company, its services, software products, and contact details in one consistent experience.

## Pages

- `index.html` - Home page with the hero, company benefits, services, products, and call to action.
- `about.html` - Company story, mission, vision, and values.
- `services.html` - Service capabilities and the delivery process.
- `products.html` - Nexora POS, CRM, Cloud, and Learn product showcase.
- `contact.html` - Contact information and validated enquiry form.

## Project Structure

```text
Nexora/
├── index.html
├── about.html
├── services.html
├── products.html
├── contact.html
├── css/
│   ├── variables.css     Design tokens (colors, spacing, type scale)
│   ├── base.css          Reset, base typography
│   ├── layout.css        Nav, mobile menu, page heroes, footer, containers
│   ├── components.css    Buttons, cards, grids, modal, table, form
│   ├── utilities.css     Helpers, scroll-reveal
│   ├── home.css          Home page
│   ├── about.css         About page
│   ├── services.css      Services page
│   ├── products.css      Products page
│   └── contact.css       Contact page
├── js/
│   ├── main.js           Shared: mobile nav, scroll reveal, copyright year
│   ├── products.js       Product filtering and product modal
│   └── contact.js        Contact form validation
├── img/
└── README.md
```

Pages load the shared layers in order (`variables` → `base` → `layout` → `components` → `utilities`) followed by a single page-specific stylesheet: `home.css` for Home, `about.css` for About, `services.css` for Services, `products.css` for Products, and `contact.css` for Contact. Images live in `img/` and are referenced with relative paths so the site works without a build step.

## Features

- Responsive layouts for desktop, tablet, and mobile screens.
- Sticky navigation with an accessible, full-width mobile menu panel.
- Semantic landmarks including `nav`, `header`, `main`, `section`, `article`, `form`, and `footer`.
- Keyboard-friendly links, buttons, labels, and current-page navigation states.
- Product cards, service cards, contact details, and reusable calls to action.
- Deep links to individual services and products via stable section anchors.
- Product filtering and accessible product detail modal.
- Contact form validation and success feedback.
- Dynamic copyright year handled by `js/main.js`.

## Run Locally

From the project directory, start a small local web server:

```bash
cd /Users/macpro/Desktop/Nexora
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

Because this is a static site, no package installation or build process is required.
