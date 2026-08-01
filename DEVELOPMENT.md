# DEVELOPMENT.md

# RepoPulse Lite – Development Documentation

**Version:** 1.0

**Author:** Rayzil Vionna D'Souza

---

# Project Overview

RepoPulse Lite is a full-stack web application that analyzes public GitHub repositories and presents repository health insights through an interactive dashboard.

The application combines GitHub repository metadata, commit analysis, repository statistics, deterministic health scoring, and AI-generated summaries to provide an overall assessment of repository quality.

The project consists of a React frontend, a FastAPI backend, GitHub REST API integration, and the Groq API for executive repository summaries.

---

# Development Methodology

The project was developed in multiple phases, beginning with the backend architecture and GitHub API integration, followed by repository analysis, repository statistics, health score computation, AI summary generation, frontend dashboard development, testing, deployment, and documentation.

Development was carried out incrementally. Individual modules were implemented and tested before being integrated into the complete application, making it easier to identify and resolve issues during development.

AI tools were used where they helped improve productivity, particularly for debugging, implementation discussions, UI refinement, and documentation. All major implementation decisions, integration, testing, deployment, and verification were carried out by the developer.

---

# Phase 1 – Requirement Analysis

The project began by reviewing the assessment requirements and identifying the expected deliverables.

Activities included:

- Understanding functional requirements
- Reviewing evaluation criteria
- Planning project architecture
- Selecting the technology stack
- Identifying required external APIs

---

# Phase 2 – System Design

A modular client-server architecture was designed.

Frontend

- React
- TypeScript
- Vite

Backend

- FastAPI
- Service-based architecture

External Services

- GitHub REST API
- Groq API

The application separates presentation, business logic, external API communication, and repository analysis into independent modules.

---

# Phase 3 – Backend Development

Backend development started with FastAPI routing and request validation.

Major modules implemented include:

- Repository URL extraction
- Repository validation
- GitHub API communication
- Commit Analyzer
- Repository Statistics Engine
- Repository Health Score Engine
- AI Summary Service
- Error handling
- API response generation

Each service was developed independently before being integrated into the analysis pipeline.

---

# Phase 4 – GitHub API Integration

The GitHub REST API was integrated to retrieve:

- Repository metadata
- Latest commits
- Commit statistics
- Commit details
- Repository activity

The backend also handles:

- Invalid repository URLs
- Private repositories
- API failures
- Network failures
- Rate limiting

---

# Phase 5 – Repository Analysis

Repository analysis is performed in multiple stages.

### Commit Classification

Each commit is classified into one of three heuristic tiers using the Commit Analyzer.

- Tier 1 – High-quality engineering commits
- Tier 2 – Regular development commits
- Tier 3 – Maintenance or low-information commits

The classification uses commit message analysis together with Conventional Commit prefixes and predefined keyword heuristics.

---

### Repository Statistics

Repository statistics are calculated using commit metadata.

The statistics include:

- Average files changed
- Average additions
- Average deletions
- Largest commit
- Smallest commit

---

### Repository Health Score

The Repository Health Score is calculated using five weighted components.

| Component | Weight |
|-----------|-------:|
| Commit Quality | 25 |
| Repository History | 20 |
| Commit Size | 20 |
| Commit Diversity | 20 |
| Repository Activity | 15 |

Maximum Score = **100**

The health engine also generates:

- Repository Grade
- Repository Rating
- Repository Maturity
- Assessment Explanation
- Score Breakdown
- Tier Distribution

---

# Phase 6 – AI Integration

After repository analysis is completed, the processed repository information is supplied to the Groq API.

The AI generates:

- Executive Summary
- Repository Overview
- Development Momentum
- Repository Health Insights
- Commit Hygiene Observations

The AI operates on the computed repository metrics rather than directly processing raw GitHub data.

---

# Phase 7 – Frontend Development

The frontend was developed after the backend APIs were functional.

The dashboard was built incrementally by implementing:

- Home Page
- Repository URL Input
- Navigation Bar
- Repository Header
- Health Score Card
- Repository Statistics
- Score Breakdown
- Tier Distribution Chart
- Commit Analysis Table
- AI Executive Summary
- Loading States
- Error Handling

Each component was connected to the backend once the corresponding API functionality had been verified.

---

# Phase 8 – Testing

Testing was performed continuously throughout development.

Areas tested include:

- Repository URL validation
- GitHub API communication
- Commit classification
- Statistics calculation
- Health score calculation
- AI summary generation
- Frontend/backend integration
- Dashboard rendering
- Error handling
- Deployment

Issues identified during testing were corrected before moving to the next phase.

---

# Phase 9 – Deployment

The application was deployed as two independent services.

Frontend

- Vercel

Backend

- Render

Environment variables were securely configured through the deployment platforms.

---

# Development Environment

Operating System

- Windows

IDE

- Visual Studio Code

Programming Languages

- Python
- TypeScript

Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- Recharts

Backend

- FastAPI
- Pydantic
- HTTPX

External Services

- GitHub REST API
- Groq API

Version Control

- Git
- GitHub

---

# AI Tooling Audit

AI tools were used selectively during development as coding assistants to improve productivity and help resolve implementation issues.

## ChatGPT

Used for:

- Discussing backend architecture
- FastAPI implementation guidance
- API integration discussions
- Debugging backend issues
- Deployment guidance
- Documentation review
- General implementation suggestions

## IBM Bob

Used for:

- Frontend refinement
- UI improvements
- React component adjustments
- Resolving frontend implementation issues

AI-generated suggestions were reviewed before being incorporated into the project. Final implementation, integration, debugging, deployment, testing, and verification were completed by the developer.

---

# Git Workflow

Git and GitHub were used throughout development.

The project followed an incremental commit workflow with feature additions, bug fixes, deployment updates, and documentation improvements committed separately.

---

# MCP & Custom Skills Log

No external Model Context Protocol (MCP) servers or custom MCP skills were integrated into this project.

---

# Challenges Encountered

Some challenges encountered during development included:

- GitHub API integration
- Repository URL validation
- Commit classification heuristics
- Repository health score calculation
- Backend and frontend integration
- Cross-Origin Resource Sharing (CORS) configuration
- Deployment on Render and Vercel
- Frontend responsiveness
- AI response formatting

Each issue was addressed through testing, debugging, and iterative refinement.

---

# Future Enhancements

Potential improvements include:

- Repository comparison
- Historical repository analytics
- Contributor analytics
- Authentication
- Persistent repository history
- PDF export
- CSV export
- Dark/Light mode
- Advanced repository metrics

---

# Submission Deliverables

The project submission includes:

- Public GitHub Repository
- Live Frontend Deployment
- Live Backend Deployment
- README.md
- DEVELOPMENT.md
- spec.md
- Complete Source Code

---

# Author

**Rayzil Vionna DSouza**