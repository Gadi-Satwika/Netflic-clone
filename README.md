# 🎬 NXTFLIX

> **Unlimited movies, shows and more. Watch anywhere. Cancel anytime.**

A sleek, responsive movie streaming discovery app built with **React 19**, **Vite 7**, and **React Router DOM 7**. Browse 50+ titles, filter by genre, manage your Watch Later list, and enjoy a premium Netflix-inspired dark UI.

---

## ✨ Features

- 🔐 **Secure Authentication** — JWT-based login via a live API with cookie persistence
- 🎞️ **Auto-Scrolling Carousels** — Infinite-loop horizontal carousels for Trending Now & Fresh Releases
- 🎭 **Genre Filtering** — Filter the full movie catalog by genre with highlighted active chips
- 🕒 **Watch Later List** — Add/remove movies from a persistent saved list (localStorage)
- 🔒 **Protected Routes** — Dashboard pages guard unauthenticated users, redirecting to login
- 📱 **Fully Responsive** — Adapts gracefully across desktop, tablet, and mobile
- 🚫 **Custom 404 Page** — Friendly Not Found page for invalid routes

---

## 📸 Screenshots

| Page | Preview |
|------|---------|
| **Sign In** | Split layout with red-glow brand panel + form |
| **Home** | Hero banner, auto-scrolling carousels, genre filter, movie grid |
| **Movie Details** | Full backdrop, poster, meta info, Watch Later toggle |
| **Watch Later** | Saved movies grid with empty state |
| **Not Found** | Clean 404 with back-to-home link |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI framework |
| [Vite](https://vite.dev/) | 7 | Build tool & dev server |
| [React Router DOM](https://reactrouter.com/) | 7 | Client-side routing |
| [js-cookie](https://github.com/js-cookie/js-cookie) | latest | JWT cookie management |
| [lucide-react](https://lucide.dev/) | latest | Icon library |
| Plain CSS | — | Per-component styling with global tokens |

---

## 🗂️ Project Structure

```
src/
├── api/
│   └── auth.js                  # signIn() API function
├── components/
│   ├── GenreFilterBar.jsx        # Genre chip filter bar
│   ├── GenreFilterBar.css
│   ├── Header.jsx                # Sticky nav with Watch Later badge
│   ├── Header.css
│   ├── MovieCard.jsx             # Movie card with poster, badge, hover overlay
│   ├── MovieCard.css
│   ├── MovieCarousel.jsx         # Infinite auto-scrolling carousel
│   ├── MovieCarousel.css
│   └── ProtectedRoute.jsx        # Route guard using jwt_token cookie
├── context/
│   └── WatchLaterContext.jsx     # Global Watch Later state + localStorage sync
├── data/
│   └── movies.js                 # Static catalog of 50 movies + GENRES array
├── pages/
│   ├── Home.jsx / Home.css       # Hero, carousels, filter, grid
│   ├── Login.jsx / Login.css     # Split-panel sign-in page
│   ├── MovieDetails.jsx / .css   # Full detail view with Watch Later toggle
│   ├── NotFound.jsx / .css       # 404 page
│   └── WatchLater.jsx / .css     # Saved movies list
├── App.jsx                       # Router setup, layout, providers
├── main.jsx                      # React DOM entry point
└── index.css                     # Global design tokens & base styles
public/
└── hero-bg.jpg                   # Home page hero background image
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v22 (recommended)
- **npm** v10+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nxtflix.git
cd nxtflix

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

Output is written to the `/build` directory.

---

## 🔑 Authentication

The app uses a live serverless API for authentication. Use the credentials below:

| Field | Value |
|-------|-------|
| **Email** | `admin@example.com` |
| **Password** | `admin123` |

**API Endpoint:** `POST https://serverless-api-teal.vercel.app/api/auth/signin`

On successful login, a `jwt_token` cookie is set (expires in **7 days**) using `js-cookie`.

---

## 🗺️ Route Map

| Route | Access | Description |
|-------|--------|-------------|
| `/login` | Public | Sign In page |
| `/` | 🔒 Protected | Home — carousels, filters, movie grid |
| `/movies/:id` | 🔒 Protected | Movie detail view |
| `/watch-later` | 🔒 Protected | Saved Watch Later movies |
| `/not-found` | Public | Explicit 404 page (no header) |
| `*` | Public | Catch-all 404 redirect |

---

## 💾 Data & Storage

| Data | Storage | Key |
|------|---------|-----|
| Auth token | Cookie (`js-cookie`) | `jwt_token` |
| Watch Later list | `localStorage` | `nxtflix_watch_later` |

> The Watch Later list stores **full movie objects** and persists across browser sessions.

---

## 🎨 Design System

Global CSS variables are defined in `src/index.css`:

```css
--primary: #e50914;          /* Netflix Red */
--bg-main: #0f0f0f;          /* App background */
--bg-card: #181818;          /* Card background */
--text-main: #ffffff;        /* Primary text */
--text-muted: #aaaaaa;       /* Secondary text */
--star: #ffc107;             /* Rating star */
```

Typography uses [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts.

---

## 🧩 Component Highlights

### `MovieCarousel`
- Renders a horizontally scrolling track of movie posters
- Duplicates the list for a seamless infinite loop
- Supports `direction="left"` or `direction="right"` scroll animations
- Pauses animation on hover/focus

### `WatchLaterContext`
- Initialises from `localStorage` on mount (falls back to `[]` on invalid JSON)
- Syncs back to `localStorage` on every state change via `useEffect`
- Exposes: `watchLater`, `isInWatchLater(id)`, `toggleWatchLater(movie)`

### `ProtectedRoute`
- Checks for `jwt_token` cookie using `js-cookie`
- Renders children if authenticated, otherwise redirects to `/login`

---

## 📝 License

This project was built as a frontend assessment. All movie data is static and fictional.

---

<p align="center">Built with ❤️ using React + Vite</p>
