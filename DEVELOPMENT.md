# DEVELOPMENT.md

# RepoPulse Lite – Development Documentation

## Project Overview

RepoPulse Lite is a full-stack web application developed to analyze public GitHub repositories. The application retrieves repository information and recent commit history, applies deterministic heuristics to evaluate repository health, and uses a Large Language Model (LLM) to generate an executive summary of repository activity.

---

# Development Methodology

The project was developed using an incremental software engineering approach. Each module was designed, implemented, tested, and integrated individually before moving to the next phase. AI tools were used as development assistants for brainstorming, implementation guidance, debugging, and code refinement where appropriate. The final implementation, testing, deployment, and verification were carried out by the developer.

---

## Phase 1 – Requirement Analysis

- Reviewed the internship assignment specification.
- Identified mandatory functional and non-functional requirements.
- Planned the overall system architecture.
- Selected the technology stack.

---

## Phase 2 – System Design

Designed a modular full-stack architecture consisting of:

- React + TypeScript frontend
- FastAPI backend
- GitHub REST API integration
- Groq LLM integration
- Modular backend services
- Responsive dashboard interface

---

## Phase 3 – Backend Development

Implemented the backend using FastAPI.

Features implemented include:

- API routing
- Request validation
- Repository URL validation
- Exception handling
- GitHub API integration
- Commit analysis engine
- Repository health score calculation
- AI summary endpoint

---

## Phase 4 – GitHub API Integration

Integrated the GitHub REST API to retrieve:

- Repository metadata
- Latest 20 commits
- Commit statistics
- Files modified
- Repository information

Implemented graceful handling for:

- Invalid repositories
- Private repositories
- API failures
- Rate limits
- Network exceptions

---

## Phase 5 – Commit Analysis Engine

Developed a deterministic heuristic engine to classify commit complexity.

### Tier 1 (Low Complexity)

- Documentation updates
- Less than 50 lines changed

### Tier 2 (Medium Complexity)

- 50–250 lines changed
- Fewer than 5 modified files

### Tier 3 (High Complexity)

- More than 250 lines changed
- More than 5 modified files

---

## Phase 6 – AI Integration

Integrated the Groq API to generate:

- Executive repository summary
- Development momentum analysis
- Commit hygiene observations
- Repository insights

---

## Phase 7 – Frontend Development

Developed the frontend using React and TypeScript.

Implemented:

- Repository URL input
- Loading indicators
- Error handling
- Repository statistics
- Health score visualization
- Commit tier distribution chart
- AI Executive Summary
- Commit analysis table
- Responsive layout

---

## Phase 8 – Testing

The application was tested throughout development to verify:

- Repository URL validation
- API communication
- Error handling
- AI response generation
- Backend/frontend integration
- Responsive user interface

Issues identified during testing were resolved before proceeding to the next development phase.

---

## Phase 9 – Deployment

Frontend deployed using:

- Vercel

Backend deployed using:

- Render

Environment variables were securely configured using platform-provided secret management.

---

# AI Tooling Audit

The project was developed by the author with assistance from AI development tools where appropriate. AI was used to support development by providing implementation suggestions, debugging assistance, and documentation improvements. All generated suggestions were reviewed, modified where necessary, integrated into the project, tested, and verified by the developer.

## ChatGPT (OpenAI)

Used for:

- Understanding assignment requirements
- Discussing software architecture
- FastAPI implementation guidance
- API design discussions
- Debugging backend issues
- Explaining implementation approaches
- Documentation review
- Deployment guidance

## IBM Bob

Used for:

- Frontend refinement
- React component improvements
- Resolving frontend implementation issues
- UI enhancement suggestions

The final implementation, project integration, testing, debugging, deployment, and submission preparation were completed by the developer.

---

# Development Environment

**Operating System**

- Windows

**IDE**

- Visual Studio Code

**Programming Languages**

- Python
- TypeScript

**Frameworks**

- React
- FastAPI

**Libraries**

- Tailwind CSS
- Axios
- Recharts
- Framer Motion
- Pydantic
- HTTPX

**Version Control**

- Git
- GitHub

**Deployment Platforms**

- Vercel
- Render

**LLM Provider**

- Groq API

---

# MCP & Custom Skills Log

No external Model Context Protocol (MCP) servers or custom MCP skills were integrated into this project.

The application was developed using standard development tools together with AI-assisted development workflows.

---

# Heuristic Logic Specification

The repository analysis follows deterministic rules before generating the AI summary.

## Commit Classification

### Tier 1

- Documentation-only commits
- Less than 50 lines changed

### Tier 2

- Between 50 and 250 lines changed
- Fewer than 5 modified files

### Tier 3

- More than 250 lines changed
- More than 5 modified files

## Repository Health Score

The Repository Health Score is calculated using repository activity and commit characteristics, including:

- Commit complexity distribution
- Commit message quality
- Repository activity
- Code change patterns

The final score is normalized to a value between **0 and 100**.

---

# Environment Setup

## Clone Repository

```bash
git clone https://github.com/<your-username>/RepoPulse-Lite.git

cd RepoPulse-Lite
```

## Backend Setup

```bash
cd backend

python -m venv venv

# Windows

venv\Scripts\activate

# Linux/macOS

source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

## Environment Variables

Create a `.env` file inside the backend directory.

```env
GITHUB_TOKEN=your_github_token
GROQ_API_KEY=your_groq_api_key
```

---

# Challenges Encountered

Some challenges encountered during development included:

- Validating GitHub repository URLs
- Handling GitHub API failures and rate limits
- Backend and frontend integration
- Rendering AI-generated summaries consistently
- Frontend responsiveness across different screen sizes
- Deployment configuration on Render and Vercel
- Refining the user interface

Each challenge was addressed through iterative testing, debugging, and refinement before finalizing the implementation.

---

# Future Enhancements

Potential improvements include:

- Repository comparison
- Historical analytics
- PDF report export
- Dark/Light mode
- Contributor analytics
- Persistent repository history
- Advanced repository metrics

---

# Author

**Rayzil Vionna D'Souza**