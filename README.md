# TaskFlow – Smart To-Do App with AI Priority Detection

> A React.js to-do app that automatically detects task priority from natural language — no manual tagging needed.

## 🚀 Live Demo
[**Try it here →**](https://mohan-krishna-meda.github.io/taskflow)

## ✨ Features
- **Smart Priority Detection** — keywords like "urgent", "deadline", "ASAP" auto-tag tasks as 🔴 High
- **Live priority preview** as you type — see the detected priority before adding
- Progress bar showing daily completion %
- Filter tasks: All / High / Medium / Low / Pending / Done
- Real-time stats: total, high-priority, pending, done
- Clean dark-mode UI

## 🛠 Tech Stack
- **React.js 18** (Hooks: useState)
- **Vite** (build tool + dev server)
- **JavaScript ES6+**
- Component-based architecture

## 📁 Project Structure
```
taskflow/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                    # React entry point
    ├── App.jsx                     # Root component + state management
    ├── index.css                   # Global styles & CSS variables
    ├── utils/
    │   └── priorityDetector.js     # Smart priority detection logic
    └── components/
        ├── TaskInput.jsx           # Input field with live priority preview
        ├── TaskItem.jsx            # Individual task card
        ├── StatsBar.jsx            # Stats counters + progress bar
        └── FilterBar.jsx           # Filter buttons
```

## 📦 Run Locally
```bash
git clone https://github.com/YOUR_USERNAME/taskflow.git
cd taskflow
npm install
npm run dev
# Open http://localhost:5173
```

## 🏗️ Build for Production
```bash
npm run build
# Output in /dist folder
```

## 🌐 Deploy to GitHub Pages
```bash
npm run build
# Upload the /dist folder contents to GitHub Pages
# OR use the gh-pages package:
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run deploy
```

## 🧠 How Priority Detection Works
```javascript
// utils/priorityDetector.js
const HIGH_KEYWORDS   = ['urgent', 'asap', 'critical', 'deadline', 'due', 'today', ...]
const MEDIUM_KEYWORDS = ['review', 'check', 'update', 'meeting', 'send', 'reply', ...]

export function detectPriority(text) {
  const lower = text.toLowerCase()
  if (HIGH_KEYWORDS.some(kw => lower.includes(kw)))   return 'high'
  if (MEDIUM_KEYWORDS.some(kw => lower.includes(kw))) return 'medium'
  return 'low'
}
```

## React Concepts Demonstrated
- `useState` hook for tasks array and filter state
- Component composition (App → TaskInput, TaskItem, StatsBar, FilterBar)
- Props passing (onAdd, onToggle, onDelete callbacks)
- Conditional rendering and list rendering with `.map()`
- Derived state (filtered tasks computed from tasks + filter)
- Lifting state up pattern

---
Made by Mohan Krishna Meda
