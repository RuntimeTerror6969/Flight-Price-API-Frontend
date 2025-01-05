### **Frontend README.md**
```markdown
# Flight Price API Frontend

React-based frontend for searching flight prices between cities.

## Tech Stack
- **React**: For building the user interface.
- **Tailwind CSS**: For styling.
- **Axios**: For making API requests.

## Features
- Search flights by source and destination.
- Select date and number of passengers.
- User authentication (Login/Register).
- Responsive design for mobile and desktop.

## Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/RuntimeTerror6969/Flight-Price-API-Frontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Flight-Price-API-Frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure environment variables:
   - Copy the example `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit the `.env` file to set your backend API URL:
     ```
     REACT_APP_API_URL=https://your-backend-url.vercel.app/api
     ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

---

## Deployment (Vercel)

### Deploying the Frontend
1. Push your repository to GitHub.
2. Go to the [Vercel dashboard](https://vercel.com/).
3. Click **Add New Project** and import your repository.
4. Configure the environment variable in the Vercel dashboard:
   - `REACT_APP_API_URL`: Set this to your backend API URL (e.g., `https://your-backend-url.vercel.app/api`).
5. Deploy the app. Vercel will provide a live URL.

---

## Project Structure

```plaintext
frontend/
├── public/
│   └── index.html     # HTML template
├── src/
│   ├── App.js         # Main app entry point
│   ├── components/    # UI components
│   │   ├── FlightSearch.js
│   │   └── FlightResults.js
│   └── services/      # API services
│       └── api.js
└── package.json       # Project dependencies and scripts
```

---

## Environment Variables

Create a `.env` file in the root directory with the following:

```
REACT_APP_API_URL=https://your-backend-url.vercel.app/api
```

---

## Available Scripts

### Start Development Server
```bash
npm start
```

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm test
```

---

## Additional Notes

- Make sure the backend is running or deployed, and the `REACT_APP_API_URL` is correctly set.
- For backend setup, visit the [Backend Repository](https://github.com/RuntimeTerror6969/Flight-Price-API-Backend).
```

---
