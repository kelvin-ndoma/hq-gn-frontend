src/
├── components/
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Sidebar.jsx         # New component for dashboard navigation
│   ├── DashboardNavbar.jsx # New navbar for the dashboard pages
├── layouts/
│   ├── MainLayout.jsx      # Main layout for non-dashboard pages
│   └── DashboardLayout.jsx # New layout for dashboard, containing Sidebar and DashboardNavbar
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx       # Main dashboard page after login
│   ├── Newsfeed.jsx        # New page for Newsfeed
│   ├── Events.jsx          # New page for Events
│   ├── Groups.jsx          # New page for Groups
│   ├── AdminPanel.jsx      # Only visible for admin users
│   └── Profile.jsx         # User's profile page
├── router/
│   └── AppRouter.jsx       # Updated with private routes for logged-in users
└── App.jsx
