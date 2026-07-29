from fastapi import FastAPI
from app.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    description="AI Powered GitHub Repository Analytics",
    version=settings.VERSION,
)


@app.get("/")
def root():
    return {
        "application": settings.APP_NAME,
        "version": settings.VERSION,
        "status": "running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }