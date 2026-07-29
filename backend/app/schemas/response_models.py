from pydantic import BaseModel


class AnalyzeResponse(BaseModel):
    message: str
    repository_url: str