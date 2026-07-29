# RepoPulse Lite
### Technical Specification (Spec-Driven Development)

Version: 1.0

Author: Rayzil Vionna D'Souza

---

# 1. Project Overview

RepoPulse Lite is an AI-powered GitHub repository analytics platform that evaluates repository activity using deterministic commit complexity heuristics and Large Language Models (LLMs).

The application enables engineering managers and developers to obtain a quick understanding of repository health, development momentum, and commit hygiene without manually reviewing Git history.

---

# 2. Objectives

The application shall:

- Accept a public GitHub repository URL
- Fetch the latest 20 commits using the GitHub REST API
- Determine commit complexity tiers
- Calculate an overall Repository Health Score
- Generate an AI Executive Summary
- Display analytics using an interactive dashboard

---

# 3. Functional Requirements

## Repository Input

The user shall be able to:

- Enter a public GitHub repository URL
- Validate the URL before submission
- Analyze the repository with one click

---

## GitHub Integration

The backend shall:

- Extract owner and repository name
- Fetch the latest 20 commits
- Retrieve commit statistics
- Handle GitHub API failures
- Handle rate limits
- Handle private repositories

---

## Commit Classification

Each commit shall be classified as:

Tier 1

- Less than 50 lines changed
- OR documentation-only commit

Tier 2

- 50–250 lines changed
- Fewer than five modified files

Tier 3

- More than 250 lines changed
- OR more than five modified files

---

## Repository Health Score

The application shall calculate a score between 0 and 100.

The score is determined using:

- Tier distribution
- Commit message quality
- Repository activity
- Complexity balance

---

## AI Analysis

The LLM shall generate:

- Executive Summary
- Development Momentum
- Operational Risks
- Commit Hygiene Analysis

---

# 4. Non Functional Requirements

- Responsive
- Secure
- Fast
- Modular
- Maintainable
- Accessible

---

# 5. Technology Stack

Frontend

- React
- TypeScript
- TailwindCSS
- Recharts
- Axios

Backend

- FastAPI
- Python 3.11
- HTTPX
- Pydantic

AI

- Groq API

Deployment

- Vercel
- Render

---

# 6. High Level Architecture

Frontend

↓

FastAPI Backend

↓

GitHub REST API

↓

Commit Analyzer

↓

Health Score Engine

↓

Groq AI

↓

Frontend Dashboard

---

# 7. Backend Modules

API Layer

- Repository endpoint
- Analysis endpoint
- Health endpoint

Service Layer

- GitHub Service
- Analysis Service
- AI Service

Utility Layer

- URL validation
- Helpers

Configuration Layer

- Environment variables
- API configuration

---

# 8. Frontend Modules

Home Page

Dashboard

Repository Input

Health Score Card

Tier Distribution Chart

Commit Analysis Table

AI Summary

Repository Statistics

Loading Skeleton

Error Handling

---

# 9. API Endpoints

GET /

GET /health

POST /api/v1/analyze

POST /api/v1/github

---

# 10. Security

- Environment variables
- Input validation
- URL sanitization
- Secure API communication
- No secrets committed to Git

---

# 11. Future Improvements

- Authentication
- Analysis History
- PostgreSQL
- Repository Comparison
- Organization Analytics

---

# 12. Success Criteria

The project is considered complete when:

✓ Repository analysis succeeds

✓ Commit classification succeeds

✓ Health score generated

✓ AI summary generated

✓ Dashboard renders successfully

✓ Application deployed

✓ Documentation completed
