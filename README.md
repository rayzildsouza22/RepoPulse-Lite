# RepoPulse Lite 🚀

An AI-powered GitHub repository analysis dashboard built with **FastAPI**, **React**, and **Groq AI**.

## Features

- Analyze any public GitHub repository
- Repository health score (0–100)
- AI-generated repository summary
- Commit quality analysis
- Score breakdown
- Commit tier distribution chart
- Repository statistics
- Interactive dashboard

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Axios

### Backend
- FastAPI
- Python
- GitHub REST API
- Groq API

## Project Structure

```
frontend/
backend/
```

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API

```
POST /api/v1/analyze
```

Example:

```json
{
  "repository_url": "https://github.com/openai/openai-python"
}
```

## Screenshots

### Home Page

![Home Page](screenshots/home-page.png)

### Repository Dashboard

![Repository Dashboard](screenshots/repository-dashboard.png)

### Repository Analytics

![Repository Analytics](screenshots/repository-analytics.png)

### AI Executive Summary

![AI Executive Summary](screenshots/ai-executive-summary.png)

### Recent Commit Analysis

![Recent Commit Analysis](screenshots/commit-analysis-table.png)


## Future Improvements

- PDF report export
- Dark/Light mode
- Historical repository tracking
- Compare repositories

## Author

**Rayzil Vionna D'Souza**