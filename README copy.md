# Cruz Detailing Services

**Cruz Detailing Services** is a modern, mobile-responsive React website for a professional auto detailing business based in Arizona. It features a sleek design, light/dark theme support, and clear navigation for users to explore services, book appointments, and contact the business directly.

## 🚗 Features

- Responsive design for mobile, tablet, and desktop
- Light and dark mode themes
- Home page with hero banner and feature highlights
- Services page showcasing detailing offerings
- Booking page for service appointments
- Contact form for general inquiries
- Clean and consistent branding with modern color palette

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) (development and build tool)
- CSS Modules with custom design variables

## 📁 Folder Structure
```
cruz-detailing-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── [your shared components like Navbar, Footer, etc.]
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── BookNow.jsx
│   │   └── Contact.jsx
│   │
│   ├── styles/
│   │   ├── Home.css
│   │   ├── Services.css
│   │   ├── BookNow.css
│   │   └── Contact.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md`
```

## 💡 Color Palette

Based on the 60-30-10 rule with complementary shades:

- **Primary Accent:** `#ff6347` (Tomato)
- **Dark Accent:** `#e5533e`
- **Backgrounds:** `#f4f4f4` (light), `#121212` (dark)
- **Text:** `#333` (light theme), `#eee` (dark theme)

## 🧪 Local Development

```bash
# Clone the repo
git clone https://github.com/your-username/cruz-detailing-app.git
cd cruz-detailing-app

# Install dependencies
npm install

# Run the development server
npm run dev
