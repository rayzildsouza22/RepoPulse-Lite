from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.analyze import router as analyze_router

app = FastAPI(
    title="RepoPulse Lite API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://repo-pulse-lite-mauve.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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