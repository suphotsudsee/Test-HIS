from fastapi import APIRouter

api_router = APIRouter()


@api_router.get("/status", tags=["system"])
async def api_status() -> dict[str, str]:
    return {
        "system": "Test-HIS",
        "api_version": "v1",
        "status": "foundation",
        "message": "ระบบพร้อมสำหรับการพัฒนา Phase 0",
    }
