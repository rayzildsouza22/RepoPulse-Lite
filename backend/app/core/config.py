from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    APP_NAME = "RepoPulse Lite"
    VERSION = "1.0.0"

    GITHUB_API_BASE_URL = "https://api.github.com"

    GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    GROQ_MODEL = os.getenv(
        "GROQ_MODEL",
        "llama-3.3-70b-versatile"
    )


settings = Settings()