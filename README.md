# Test-HIS

Hospital Information System (HIS) สำหรับใช้งานจริงระดับโรงพยาบาล

## Status
Phase 0 — Foundation scaffold

## Architecture
- Frontend: React + TypeScript
- Backend: FastAPI + Python
- Database: MariaDB / InnoDB / utf8mb4
- Database migrations: Alembic
- Architecture style: Modular Monolith
- API base: `/api/v1`

## Source of Truth
Project requirements, architecture, schema design, security rules, workflows, API contracts, UI/UX architecture, and implementation backlog are maintained in the separate `AI-Project-Brain` repository under:

`01 Projects/Test-HIS/`

Implementation in this repository must follow those approved project-memory documents. When implementation and documentation disagree, stop and review the mismatch instead of silently inventing a new rule.

## First Milestone
Login → Patient Search/Register → Open Encounter/VN → Queue → Screening/Vital Signs → Encounter Summary

All protected writes must be authenticated, authorized through RBAC, auditable, and preserve Thai UTF-8 data correctly.

## Repository Layout
```text
Test-HIS/
├─ frontend/                 # React application
├─ backend/                  # FastAPI application
│  ├─ app/
│  │  ├─ api/
│  │  ├─ core/
│  │  └─ domains/
│  ├─ migrations/            # Alembic migrations
│  └─ tests/
├─ .env.example
├─ .gitignore
├─ AGENTS.md
└─ README.md
```

## Important
This repository has been initialized for source-code development. A feature is not considered implemented merely because its directory or placeholder exists. Database schema is not considered deployed until migrations have been executed and verified against MariaDB.
