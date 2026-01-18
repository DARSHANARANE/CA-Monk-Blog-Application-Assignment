📘 CA Monk – Blog Application

      A modern, scalable blog application built using React and TypeScript, designed to demonstrate clean UI development, efficient server-state management, and best practices in frontend architecture.
      This project was developed as part of the CA Monk Frontend Assignment.

🔍 Project Overview

      The goal of this application is to showcase:
      Clean and reusable React components
      Efficient data fetching and caching
      Modern UI styling using utility-first CSS
      A structured and scalable frontend codebase
      The app consumes a mock REST API and displays blog-related data with proper loading and error handling.

🛠 Tech Stack

      Category	Technology
      Framework	React (Vite)
      Language	TypeScript
      Styling	Tailwind CSS
      UI Components	shadcn/ui
      Server State	TanStack Query (React Query)
      Mock Backend	JSON Server
      Tooling	npm, Git

      
✨ Key Features

      📄 Blog listing with responsive layout
      
      ⚡ Fast data fetching with caching & revalidation
      
      🔄 Loading and error state handling
      
      🎨 Modern UI using Tailwind CSS & shadcn/ui
      
      🧩 Reusable and maintainable component structure
      
      🚀 Optimized development experience with Vite

📂 Folder Structure (High Level)

      src/
      │── components/     # Reusable UI components
      │── pages/          # Page-level components
      │── services/       # API & data-fetching logic
      │── hooks/          # Custom React hooks
      │── styles/         # Global styles (if any)
      │── App.tsx
      │── main.tsx

⚙️ Getting Started

        Prerequisites
        Node.js v18 or above
        npm

🔧 Installation & Setup

      1️⃣ Clone the repository
      
      git clone https://github.com/DARSHANARANE/CA-Monk-Blog-Application-Assignment.git
      cd CA-Monk-Blog-Application-Assignment
      
      
      2️⃣ Install dependencies
      
      npm install
      
      
      3️⃣ Start the mock backend
      
      npx json-server --watch db.json --port 5000
      
      
      4️⃣ Run the frontend
      
      npm run dev
      
      
      The app will be available at:
      
      http://localhost:5173

🔄 Data Flow

      Blog data is fetched from the mock API using TanStack Query
      
      API responses are cached to avoid unnecessary refetching
      
      UI updates automatically based on query state (loading, error, success)

🧠 Architectural Decisions

      TanStack Query was chosen for clean separation of server state from UI state
      
      Tailwind CSS enables fast styling with consistent design
      
      shadcn/ui provides accessible, customizable UI components
      
      TypeScript improves maintainability and reduces runtime errors

🚀 Possible Enhancements

      Authentication & authorization
      
      Blog creation and editing
      
      Pagination or infinite scrolling
      
      Unit and integration tests
      
      Real backend integration

👨‍💻 Author

    Darshana Rane
    Frontend Developer (React.js)
    Experience in building scalable, user-centric web applications.
