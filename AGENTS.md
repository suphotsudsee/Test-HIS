# Test-HIS AI Coding Constitution

## Source of Truth
Before implementing or modifying Test-HIS, read the project memory in `suphotsudsee/AI-Project-Brain` → `01 Projects/Test-HIS/`, especially CURRENT-STATE, PRD, ARCHITECTURE, DATABASE, SECURITY-RBAC, WORKFLOW-OPD, CORE-SCHEMA-v0.1, API, UI-UX and IMPLEMENTATION-BACKLOG.

Do not redesign an approved decision silently. If code and memory conflict, report the conflict and resolve it intentionally.

## Product Goal
Build a production-capable hospital-wide HIS for hospital personnel. Do not optimize only for a demo.

## Required Stack
- React + TypeScript frontend
- FastAPI backend
- SQLAlchemy + Alembic
- MariaDB / InnoDB
- utf8mb4 end-to-end
- Modular Monolith architecture

## Thai Data Rule — Critical
Thai text must never be corrupted.
- Source files: UTF-8
- API: UTF-8 JSON
- Database: utf8mb4
- Add tests using real Thai strings
- Never replace broken Thai text with transliteration as a workaround
- Before/after edits involving Thai text, verify round-trip content

## Patient Safety Rules
- Patient and Encounter are different entities
- HN and VN are business identifiers, not database PKs
- Clinical writes must be bound to the intended patient + encounter
- Patient identity/context must remain explicit in clinical UI
- Never silently hard-delete clinical history
- Finalized clinical documentation uses correction/amendment workflows

## Security Rules
- Backend authorization is authoritative
- Default deny
- Least privilege
- User → Role(s) → Permission(s) → Scope/Context
- System administrator does not automatically receive clinical-read permission
- Do not trust actor IDs supplied by the client; derive actor from authentication context
- Never log passwords, tokens, secrets, or unnecessary sensitive clinical data
- Sensitive operations must be auditable

## Database Rules
- Use reviewed/version-controlled Alembic migrations
- Never change production schema manually as a normal workflow
- Do not cascade-delete a patient into encounter/clinical/financial history
- Use DECIMAL for monetary values
- Preserve history/state-transition records where specified
- Add indexes/constraints intentionally and validate with MariaDB

## API Rules
- Base `/api/v1`
- snake_case JSON
- Pydantic API schemas separate from ORM models
- Do not expose ORM objects directly as public contracts
- Use explicit business actions for state transitions instead of arbitrary status PATCH
- Stable machine-readable error codes
- Validate permissions and resource scope server-side
- Consider idempotency/concurrency for retryable or critical operations

## Architecture Rules
- Keep one deployable Modular Monolith initially
- Organize business logic by domain/module
- Routers/controllers stay thin
- Business rules live in application/domain services
- Database access is not business logic
- External systems must be behind adapters/interfaces
- Avoid premature microservices

## Implementation Discipline
For each task:
1. Inspect existing code and relevant memory.
2. State/understand acceptance criteria.
3. Implement the smallest complete vertical change.
4. Add/update tests.
5. Run relevant checks.
6. Verify Thai UTF-8 when applicable.
7. Verify authorization/audit for protected writes.
8. Update documentation/current state when behavior or decisions change.

## Never Claim Done Without Verification
Do not state that a feature, migration, API, integration, or deployment works unless it was actually implemented and checked. Clearly distinguish design, placeholder, mocked behavior, implemented behavior, and verified production behavior.

## Prohibited Guessing
Do not invent hospital-specific rules for:
- clinical scoring
- diagnosis/coding policy
- billing/claims
- external government APIs
- HN/VN/AN numbering format
- electronic signatures
- medication safety policy
- retention policy

When a missing rule blocks safe implementation, isolate it behind a clear interface/configuration or ask for the requirement.
