# RepoPulse Lite
### Technical Specification (Spec-Driven Development)

**Version:** 1.0  
**Author:** Rayzil Vionna D'Souza

---

# 1. Project Overview

RepoPulse Lite is an AI-powered GitHub repository analytics platform that evaluates public GitHub repositories using deterministic repository health heuristics and AI-generated insights.

The application retrieves repository metadata and commit history from the GitHub REST API, computes repository health metrics, classifies commits into complexity tiers, and generates an executive summary using the Groq API.

The goal is to provide developers, engineering managers, and recruiters with a concise overview of repository quality, maintenance, and development activity.

---

# 2. Objectives

The application shall:

- Accept a public GitHub repository URL
- Validate repository URLs before analysis
- Retrieve repository metadata
- Fetch the latest repository commits
- Analyze commit complexity
- Calculate repository statistics
- Compute a Repository Health Score
- Assign Repository Grade and Rating
- Determine Repository Maturity
- Generate an AI-powered Executive Summary
- Display repository analytics through an interactive dashboard

---

# 3. Functional Requirements

## 3.1 Repository Input

The system shall allow users to:

- Enter a public GitHub repository URL
- Validate the repository URL
- Trigger repository analysis using a single action

---

## 3.2 GitHub Integration

The backend shall:

- Extract repository owner and repository name
- Retrieve repository metadata
- Retrieve the latest repository commits
- Retrieve commit-level statistics
- Handle invalid repositories
- Handle private repositories
- Handle GitHub API failures
- Handle API rate limiting
- Handle unexpected network errors

---

## 3.3 Commit Classification

Each commit is classified into one of three heuristic complexity tiers using the Commit Analyzer service.

- Tier 1 – Low Complexity
- Tier 2 – Medium Complexity
- Tier 3 – High Complexity

The resulting tier distribution is used during Repository Health Score calculation and AI analysis.

---

## 3.4 Repository Statistics

The application computes repository statistics including:

- Average additions
- Average deletions
- Repository activity metrics
- Commit distribution
- Repository metadata

These statistics are used as inputs to the health scoring engine.

---

## 3.5 Repository Health Score

The Repository Health Score is calculated on a normalized scale from **0–100**.

The score consists of five weighted components.

| Component | Maximum Score |
|-----------|--------------:|
| Commit Quality | 25 |
| Repository History | 20 |
| Commit Size | 20 |
| Commit Diversity | 20 |
| Repository Activity | 15 |

Maximum Score = **100**

---

## 3.6 Repository Grade

The final health score is mapped into one of the following grades:

- A+
- A
- B
- C
- D
- F

---

## 3.7 Repository Rating

The repository is assigned one of the following qualitative ratings:

- Excellent
- Very Good
- Good
- Fair
- Needs Improvement

---

## 3.8 Repository Maturity

Repository maturity is determined using repository popularity (GitHub Stars).

Possible maturity levels include:

- Starter
- Growing
- Mature
- Enterprise

---

## 3.9 Score Breakdown

The Repository Health Score is further divided into:

- Commit Quality
- Repository History
- Commit Size
- Commit Diversity
- Repository Activity

The score breakdown is presented individually on the dashboard.

---

## 3.10 AI Analysis

The application uses the Groq API to generate:

- Executive Summary
- Repository Overview
- Development Momentum
- Repository Health Insights
- Commit Hygiene Observations

The AI summary is generated using:

- Repository statistics
- Health score
- Score breakdown
- Commit classifications
- Repository rating

---

# 4. Non-Functional Requirements

The application shall be:

- Responsive
- Modular
- Maintainable
- Secure
- Scalable
- User Friendly
- Accessible
- Fault Tolerant

---

# 5. Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Axios

---

## Backend

- FastAPI
- Python
- Pydantic
- HTTPX

---

## External APIs

- GitHub REST API
- Groq API

---

## Version Control

- Git
- GitHub

---

## Deployment

Frontend

- Vercel

Backend

- Render

---

# 6. High-Level Architecture

```text
                    User
                      │
                      ▼
          React Frontend (Vite)
                      │
                      ▼
         POST /api/v1/analyze
                      │
                      ▼
      Repository URL Extraction
                      │
                      ▼
           GitHub REST API
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
 Repository Metadata      Latest Commits
                                │
                                ▼
                     Commit Details Retrieval
                                │
                                ▼
                      Commit Analyzer
                                │
                                ▼
                  Repository Statistics
                                │
                                ▼
                    Health Score Engine
                                │
                                ▼
                          Groq API
                                │
                                ▼
                   Final Analysis Response
                                │
                                ▼
              Interactive Analytics Dashboard
```

---

# 7. Backend Modules

## API Layer

- Root Endpoint
- Health Endpoint
- Repository Analysis Endpoint

---

## Services

- GitHub Service
- Commit Analyzer
- Repository Statistics
- Health Score Engine
- AI Summary Service

---

## Utility Modules

- Repository URL Extraction
- Helper Functions

---

## Schemas

- Request Validation
- Response Models

---

## Configuration

- Environment Variables
- API Configuration
- Application Settings

---

# 8. Frontend Modules

The frontend consists of the following components.

- Home Page
- Repository Input
- Navigation Bar
- Repository Header
- Health Score Card
- Repository Grade
- Repository Rating
- Repository Maturity
- Assessment Summary
- Repository Statistics Grid
- Score Breakdown
- Tier Distribution Chart
- Commit Analysis Table
- AI Executive Summary
- Loading Indicators
- Error Handling

---

# 9. API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Root Endpoint |
| GET | `/health` | Health Check |
| POST | `/api/v1/analyze` | Analyze Repository |

---

# 10. API Response

The analysis endpoint returns:

- Repository Information
- Repository Metadata
- Repository Health Score
- Repository Grade
- Repository Rating
- Repository Maturity
- Assessment Explanation
- Score Breakdown
- Tier Distribution
- Repository Statistics
- AI Executive Summary
- Execution Time
- Total Commits
- Commit Analysis Results

---

# 11. Security

The application implements:

- Environment Variable Management
- Repository URL Validation
- Request Validation
- Secure API Communication
- Exception Handling
- Graceful Error Responses
- No Sensitive Credentials Stored in Source Code

---

# 12. Assumptions & Limitations

- Only public GitHub repositories are supported.
- Analysis is performed using the latest available commits.
- Repository Health Score is heuristic-based.
- AI summaries depend on the availability of the Groq API.
- GitHub API rate limits may affect analysis.

---

# 13. Future Enhancements

Potential future improvements include:

- Repository Comparison
- Historical Repository Analytics
- Contributor Analytics
- Organization-Level Dashboards
- PDF Report Export
- CSV Export
- Authentication
- Persistent Repository History
- Database Integration
- Dark/Light Theme
- Advanced Repository Metrics

---

# 14. Success Criteria

The project is considered complete when:

- Repository analysis completes successfully
- Repository metadata is retrieved
- Commit analysis is completed
- Repository statistics are generated
- Repository Health Score is calculated
- Repository Grade is assigned
- Repository Rating is generated
- Repository Maturity is determined
- AI Executive Summary is generated
- Dashboard renders successfully
- Error handling works correctly
- Frontend and backend communicate successfully
- Application is successfully deployed
- Documentation is completed

---

# 15. Conclusion

RepoPulse Lite combines deterministic repository analysis with AI-generated insights to provide a comprehensive overview of repository quality. By integrating GitHub repository data, heuristic scoring, and Groq-powered summaries into a responsive full-stack application, the platform enables developers and engineering teams to evaluate repository health quickly and consistently.