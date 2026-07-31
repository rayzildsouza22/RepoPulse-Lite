# RepoPulse Lite
### Technical Specification (Spec-Driven Development)

**Version:** 1.0  
**Author:** Rayzil Vionna D'Souza

---

# 1. Project Overview

RepoPulse Lite is an AI-powered GitHub repository analytics platform that evaluates repository activity using deterministic commit complexity heuristics and Large Language Models (LLMs).

The application enables developers, engineering managers, and technical recruiters to quickly understand repository health, development momentum, and commit quality without manually reviewing Git history.

---

# 2. Objectives

The application shall:

- Accept a public GitHub repository URL
- Fetch the latest 20 commits using the GitHub REST API
- Analyze commit complexity using predefined heuristics
- Calculate an overall Repository Health Score
- Generate an AI-powered Executive Summary
- Present repository insights through an interactive dashboard

---

# 3. Functional Requirements

## 3.1 Repository Input

The user shall be able to:

- Enter a public GitHub repository URL
- Validate the repository URL before submission
- Start analysis with a single click

---

## 3.2 GitHub Integration

The backend shall:

- Extract repository owner and name
- Fetch the latest 20 commits
- Retrieve commit statistics
- Handle invalid repository URLs
- Handle GitHub API failures
- Handle API rate limits
- Reject private repositories

---

## 3.3 Commit Classification

Each commit shall be classified into one of three tiers.

### Tier 1 (Low Complexity)

- Fewer than 50 lines changed
- OR documentation-only commits

### Tier 2 (Medium Complexity)

- Between 50 and 250 lines changed
- Fewer than five modified files

### Tier 3 (High Complexity)

- More than 250 lines changed
- OR more than five modified files

---

## 3.4 Repository Health Score

The application shall calculate a Repository Health Score ranging from **0 to 100**.

The score is determined using heuristic analysis of:

- Commit tier distribution
- Commit message quality
- Repository activity
- Complexity balance

---

## 3.5 AI Analysis

The Large Language Model shall generate:

- Executive Summary
- Development Momentum
- Operational Risks
- Commit Hygiene Analysis

---

# 4. Non-Functional Requirements

The system shall be:

- Responsive
- Secure
- Fast
- Modular
- Maintainable
- Accessible
- Scalable

---

# 5. Technology Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Axios

## Backend

- FastAPI
- Python 3.11
- HTTPX
- Pydantic

## AI

- Groq API

## Deployment

- Vercel (Frontend)
- Render (Backend)

---

# 6. High-Level Architecture

```text
                User
                  │
                  ▼
        React Frontend (Vite)
                  │
                  ▼
         FastAPI Backend API
          │                 │
          ▼                 ▼
 GitHub REST API      Groq AI API
          │                 │
          └────────┬────────┘
                   ▼
          Repository Analysis
                   │
                   ▼
       Interactive Analytics Dashboard
```

---

# 7. Backend Modules

## API Layer

- Repository Endpoint
- Analysis Endpoint
- Health Endpoint

## Service Layer

- GitHub Service
- Repository Analysis Service
- AI Summary Service

## Utility Layer

- URL Validation
- Commit Classification
- Health Score Calculation
- Helper Functions

## Configuration Layer

- Environment Variables
- API Configuration
- Application Settings

---

# 8. Frontend Modules

- Home Page
- Repository Input Form
- Dashboard
- Repository Header
- Health Score Card
- Repository Statistics
- Tier Distribution Chart
- Score Breakdown
- Commit Analysis Table
- AI Executive Summary
- Loading Skeleton
- Error Handling

---

# 9. API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Root endpoint |
| GET | `/health` | Health check |
| POST | `/api/v1/analyze` | Analyze repository |
| POST | `/api/v1/github` | Fetch GitHub repository information |

---

# 10. Security

The application implements:

- Environment variable management
- Input validation
- Repository URL sanitization
- Secure API communication
- No secrets committed to Git
- Graceful exception handling

---

# 11. Assumptions & Limitations

- Only public GitHub repositories are supported.
- Analysis is limited to the latest 20 commits.
- Repository insights are heuristic-based and intended for quick evaluation.
- Results depend on GitHub API availability and rate limits.

---

# 12. Future Improvements

- User Authentication
- Repository Analysis History
- PostgreSQL Database Integration
- Repository Comparison
- Organization-Level Analytics
- Export Reports (PDF/CSV)
- Historical Trend Analysis

---

# 13. Success Criteria

The project is considered complete when:

- ✅ Repository analysis completes successfully
- ✅ Commit classification is generated
- ✅ Repository Health Score is calculated
- ✅ AI Executive Summary is generated
- ✅ Interactive dashboard renders successfully
- ✅ Error handling works correctly
- ✅ Application is deployed
- ✅ Documentation is completed

---

# 14. Conclusion

RepoPulse Lite provides an efficient and intelligent way to evaluate GitHub repositories by combining deterministic commit analysis with AI-generated insights. The platform offers developers and engineering teams a concise overview of repository quality through an intuitive analytics dashboard.