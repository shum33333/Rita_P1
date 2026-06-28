import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <div>
          <h1>李芳珊（Rita）</h1>
          <p>醫療經營分析 × AI × 資料分析</p>
        </div>

        <nav>
          <a href="#hero">首頁</a>
          <a href="#about">關於我</a>
          <a href="#services">服務</a>
          <a href="#articles">文章</a>
          <a href="#results">成果</a>
          <a href="#contact">聯絡我</a>
        </nav>
      </header>

      <main>
      <section id="hero" className="hero">
        <h2>
          協助醫務管理人員運用
          <br />
          資料分析、AI 與流程改善
        </h2>

        <p>
          提升醫院經營效率與管理決策品質
        </p>

        <div className="hero-buttons">
          <button>閱讀文章</button>
          <button>聯絡合作</button>
        </div>
      </section>
    <section id="about" className="about">
      <h2>關於我</h2>

      <p>
        我是李芳珊（Rita），長期投入醫療管理、資料分析與流程改善，
        致力於運用 AI 與數據，協助醫療團隊提升管理效率與決策品質。
      </p>

      <ul>
        <li>醫療經營分析</li>
        <li>AI 應用</li>
        <li>資料分析</li>
        <li>流程改善</li>
      </ul>
    </section>

      <section id="services" className="services">
        <h2>我能協助您</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>醫療經營分析</h3>
            <p>協助建立 KPI 指標與管理決策分析。</p>
          </div>

          <div className="service-card">
            <h3>流程改善</h3>
            <p>優化 SOP，提升醫療行政工作效率。</p>
          </div>

          <div className="service-card">
            <h3>AI 導入</h3>
            <p>導入 AI 工具，降低重複性工作負擔。</p>
          </div>

          <div className="service-card">
            <h3>資料分析</h3>
            <p>運用 Tableau、Power BI、Excel 與 Python 建立 Dashboard。</p>
          </div>
        </div>
      </section>

      <section id="articles" className="articles">
        <h2>精選文章</h2>

        <div className="article-list">
          <article className="article-card">
            <h3>Power BI 儀表板設計實務</h3>
            <p>從資料整理、分析到管理決策，建立實用 Dashboard。</p>
          </article>

          <article className="article-card">
            <h3>AI 在醫療管理的應用</h3>
            <p>分享 AI 工具如何協助提升醫療行政與管理效率。</p>
          </article>

          <article className="article-card">
            <h3>流程改善與 SOP 建立</h3>
            <p>運用流程改善方法，打造更有效率的醫療工作流程。</p>
          </article>
        </div>
      </section>

      <section id="results" className="results">
        <h2>成果案例</h2>

        <div className="results-grid">
          <div className="result-card">
            <h3>中苗合作網絡轉診品質提升專案</h3>
            <p>整合 HIS 與 EEC 平台，提升轉診流程效率。</p>
          </div>

          <div className="result-card">
            <h3>急診經營分析 Dashboard</h3>
            <p>運用 Tableau、Power BI 建立管理決策分析儀表板。</p>
          </div>

          <div className="result-card">
            <h3>AI 導入醫療行政流程改善</h3>
            <p>結合 AI 工具與 SOP，提升行政作業效率。</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>聯絡我</h2>

        <p>
          歡迎交流醫療管理、資料分析、AI 應用與流程改善，
          若有合作、專案需求，歡迎與我聯繫。
        </p>

        <ul className="contact-list">
          <li>📧 Email：shum33333@gmail.com</li>
          <li>💼 LineID：0912306056</li>
        </ul>

        <button className="contact-button">
          聯絡合作
        </button>
      </section>

<footer className="footer">
  <p>© 2026 Rita. All Rights Reserved.</p>
  <p>讓資料成為決策，讓流程創造價值。</p>
</footer>
      </main>


    </>
  );
}

export default App;