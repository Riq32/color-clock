# 🕐 Dynamic Clock

A live digital clock widget built with React, Vite, and `date-fns`. Displays the current date and time in a cyberpunk-inspired terminal aesthetic, updating every second in real time.

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white&style=flat-square)
![date-fns](https://img.shields.io/badge/date--fns-4-770c56?style=flat-square)

---

## Features

- **Live updates** — refreshes every second via `setInterval`
- **Readable formatting** — uses `date-fns` to display both time (`HH:mm:ss`) and full date (`EEEE, MMMM do yyyy`)
- **Cyberpunk aesthetic** — dark theme with glowing cyan accents, monospaced fonts, and a pulsing LIVE indicator
- **Clean React patterns** — `useState` + `useEffect` with proper cleanup to prevent memory leaks

---

## Project Structure

```
dynamic-clock/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx        # Clock component (state, effect, JSX)
│   ├── App.css        # Clock styles and theme
│   ├── main.jsx       # React entry point
│   └── index.css      # Global reset
├── index.html
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone or download the project, then navigate into it
cd color-clock

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The clock will display and update live.

### Building for Production

```bash
npm run build
```

Output is placed in the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```

---

## How It Works

### State & Effect (`App.jsx`)

```jsx
const [now, setNow] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => setNow(new Date()), 1000);
  return () => clearInterval(timer); // cleanup on unmount
}, []);
```

- `useState(new Date())` initialises the clock to the current time.
- `setInterval` fires every 1000ms, replacing `now` with a fresh `Date` object and triggering a re-render.
- The cleanup function returned from `useEffect` clears the interval when the component unmounts, preventing memory leaks.

### Date Formatting (`date-fns`)

```jsx
import { format } from "date-fns";

<p className="time">{format(now, "HH:mm:ss")}</p>
<p className="date">{format(now, "EEEE, MMMM do yyyy")}</p>
```

| Token | Meaning | Example |
|-------|---------|---------|
| `HH` | 24-hour hours | `14` |
| `mm` | Minutes | `35` |
| `ss` | Seconds | `07` |
| `EEEE` | Full weekday | `Thursday` |
| `MMMM` | Full month | `May` |
| `do` | Day with ordinal | `7th` |
| `yyyy` | 4-digit year | `2026` |

---

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19 | UI component library |
| `react-dom` | ^19 | DOM rendering |
| `date-fns` | ^4 | Date formatting utilities |
| `vite` | ^8 | Dev server and bundler |

---

## npm Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start local dev server with hot reload |
| `build` | `npm run build` | Bundle for production into `dist/` |
| `preview` | `npm run preview` | Preview the production build locally |
| `lint` | `npm run lint` | Run ESLint on the source files |

---

## Customisation

**Change the time format** — Edit the `format()` calls in `App.jsx`. See the [date-fns format docs](https://date-fns.org/docs/format) for all available tokens.

**Change the theme** — All colours are defined as CSS variables at the top of `App.css`:

```css
.clock-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  color: white;
}
```

**Change the update interval** — Replace `1000` in `setInterval` with any millisecond value (e.g. `500` for twice-per-second updates).

---

## Learning Objectives

This project demonstrates:

- Setting up a React project using **Vite**
- Writing **JSX** to define UI components
- Managing component state with **`useState`**
- Running side effects and cleanup with **`useEffect`**
- Installing and using a third-party **npm package** (`date-fns`)
- Styling a React app with a **CSS file**

---

## License

