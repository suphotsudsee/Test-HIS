from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_liveness() -> None:
    response = client.get("/health/live")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_api_status_preserves_thai_utf8() -> None:
    response = client.get("/api/v1/status")
    assert response.status_code == 200
    payload = response.json()
    assert payload["system"] == "Test-HIS"
    assert payload["message"] == "ระบบพร้อมสำหรับการพัฒนา Phase 0"
