import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <strong>Test-HIS</strong>
          <span>Hospital Information System</span>
        </div>
        <div className="status">Phase 0 · Foundation</div>
      </header>

      <section className="content">
        <p className="eyebrow">ระบบสารสนเทศโรงพยาบาล</p>
        <h1>Foundation พร้อมสำหรับการพัฒนา</h1>
        <p>
          Milestone แรก: เข้าสู่ระบบ → ค้นหา/ลงทะเบียนผู้ป่วย → เปิด VN → Queue →
          Screening/Vital Signs → Encounter Summary
        </p>

        <div className="patient-banner" aria-label="ตัวอย่าง patient context">
          <div><small>HN</small><strong>—</strong></div>
          <div><small>ผู้ป่วย</small><strong>ยังไม่ได้เลือกผู้ป่วย</strong></div>
          <div><small>VN</small><strong>—</strong></div>
          <div><small>จุดบริการ</small><strong>—</strong></div>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
