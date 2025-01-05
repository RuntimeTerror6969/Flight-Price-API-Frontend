# Flight Price API Frontend

React frontend for searching flight prices between cities.

## Tech Stack
- React
- Tailwind CSS
- Axios

## Features
- Flight search with source/destination
- Date and passenger selection
- User authentication
- Responsive design

## Setup
```bash
# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Start development server
npm start
```

## Environment Variables
```
REACT_APP_API_URL=https://your-backend-url.vercel.app/api
```

## Project Structure
```
frontend/
├── public/
├── src/
│   ├── App.js
│   ├── components/
│   │   ├── FlightSearch.js
│   │   └── FlightResults.js
│   └── services/
│       └── api.js
└── package.json
```

## Deployment (Vercel)
1. Connect GitHub repository
2. Configure environment variables in Vercel dashboard:
   - `REACT_APP_API_URL`: Backend API URL
3. Deploy using Vercel CLI or GitHub integration

## Available Scripts
- `npm start`: Run development server
- `npm build`: Build for production
- `npm test`: Run tests
