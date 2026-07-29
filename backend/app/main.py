from fastapi import FastAPI
from app.api.v1.analyze import router as analyze_router

app = FastAPI(
    title="RepoPulse Lite API",
    version="1.0.0"
)

app.include_router(
    analyze_router,
    prefix="/api/v1",
    tags=["Repository Analysis"]
)


@app.get("/")
def root():
    return {"message": "RepoPulse Lite API Running 🚀"}


@app.get("/health")
def health():
    return {"status": "healthy"}