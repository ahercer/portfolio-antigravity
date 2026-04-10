import { useState } from 'react'
import './index.css'

const translations = {
  en: {
    role: "Lead BI Engineer / Analytics Engineer",
    contact: {
      location: "Mansfield, UK",
      email: "anna.hercer@hotmail.com",
      linkedin: "linkedin.com/in/anna-hercer-28a22974/",
      linkedinLabel: "LinkedIn Profile"
    },
    heroDesc1: "A DP-600 Certified Microsoft Fabric Analytics Engineer Associate with 20+ years of experience in architecting high-performance BI solutions. I specialise in the art of Kimball Dimensional Modelling and Star Schema design to transform complex data into intuitive, performant reporting platforms.",
    heroDesc2: "My expertise lies in building robust Enterprise Data Warehouses and Semantic Models. I bridge the gap between engineering and insight, ensuring that modern Lakehouse environments maintain the structural integrity and DAX optimisation required to drive executive decision-making.",
    downloadBtn: "Download Full CV",
    competenciesTitle: "Technical Core Competencies",
    competencies: [
      { category: "BI Solution Design", skills: "End-to-end Architecture, Kimball Modelling, Star Schema, Tabular Design" },
      { category: "Microsoft Fabric", skills: "DP-600 Certified, OneLake, Lakehouse/Warehouse, Delta Parquet, DirectLake" },
      { category: "Data Platforms", skills: "Azure Synapse, Databricks, Medallion Architecture, Lakehouse" },
      { category: "ETL & Engineering", skills: "Azure Data Factory, Data Flows, Spark SQL, ELT Automation" },
      { category: "DAX & Modelling", skills: "Complex DAX, Semantic Model Optimisation, Power BI (DirectLake/Query/Import)" },
      { category: "SQL & DevOps", skills: "Advanced T-SQL, CI/CD, Azure DevOps, Power BI Pipelines, Tabular Editor" }
    ],
    experienceTitle: "Professional Experience",
    experience: [
      {
        company: "Acora – IT, Cyber & AI",
        role: "Lead BI Engineer",
        date: "January 2026 – Present",
        bullets: [
          "Migrated legacy on-premises SQL workloads into Microsoft Fabric Lakehouse, improving accessibility and speeds.",
          "Engineered high-performance data transformation layers using Spark SQL for massive datasets.",
          "Led the design of complex Kimball-based dimensional models for modern Lakehouse structures.",
          "Standardised Git-based version control and CI/CD pipelines using Power BI Deployment Pipelines.",
          "Provided hands-on training and mentorship to junior engineers as a Microsoft technology SME."
        ]
      },
      {
        company: "Elastacloud (acquired by Acora Group)",
        role: "Lead BI Engineer",
        date: "June 2023 – January 2026",
        bullets: [
          "Technical authority for enterprise BI projects in a consultancy environment.",
          "Designed and implemented enterprise-grade Data Warehouses using Kimball dimensional modelling.",
          "Engineered automated ETL/ELT pipelines for data ingestion, cleansing, and transformation.",
          "Developed high-performance Power BI semantic models with complex DAX optimization.",
          "Mentored junior engineers and established coding standards across the team."
        ]
      },
      {
        company: "Elastacloud",
        role: "BI Engineer",
        date: "February 2019 – June 2023",
        bullets: [
          "Partnered with stakeholders to translate complex business needs into scalable BI solutions.",
          "Optimised enterprise-grade Data Warehouses and Lakehouses using Azure Synapse and SQL Database.",
          "Architected robust semantic models in Power BI using complex DAX and Power Query (M).",
          "Implemented Azure DevOps for version control and agile project management."
        ]
      },
      {
        company: "Buzz Bingo",
        role: "Data Warehouse Developer",
        date: "May 2018 – February 2019",
        bullets: [
          "Delivered Agile DW solutions using Kimball modelling and Microsoft ETL technologies.",
          "Optimised SQL stored procedures and SSIS packages for performance."
        ]
      },
      {
        company: "SportsDirect.com",
        role: "SQL / BI Developer",
        date: "January 2013 – March 2018",
        bullets: [
          "Full lifecycle SSAS Tabular model development and Power BI reporting solutions.",
          "Built complex DAX measures and implemented SSIS data integration pipelines.",
          "Delivered internal training on Power BI, Power Pivot, and Power Query."
        ]
      },
      {
        company: "SportsDirect.com",
        role: "IT Support / Reporting Specialist",
        date: "March 2006 – January 2013",
        bullets: [
          "Developed complex BI reports using SQL Server and Oracle data sources.",
          "Delivered Management Information to senior leadership and provided 3rd line support."
        ]
      }
    ],
    certificationsTitle: "Certifications",
    certifications: ["Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)"],
    educationTitle: "Education",
    education: "Bachelor's Degree, Information Technology | Academy of International Economics, Gdynia, Poland",
    footer: "© 2026 | Anna Hercer - Strategic Lead BI Engineer"
  },
  pl: {
    role: "Główny Inżynier BI / Analytics Engineer",
    contact: {
      location: "Mansfield, UK",
      email: "anna.hercer@hotmail.com",
      linkedin: "linkedin.com/in/anna-hercer-28a22974/",
      linkedinLabel: "Profil LinkedIn"
    },
    heroDesc1: "Certyfikowana specjalistka Microsoft Fabric (DP-600) z ponad 20-letnim doświadczeniem w projektowaniu wysokowydajnych rozwiązań BI. Specjalizuję się w modelowaniu wymiarowym Kimballa i projektowaniu schematów gwiazdy, przekształcając złożone dane w intuicyjne i wydajne platformy raportowe.",
    heroDesc2: "Moja wiedza koncentruje się na budowaniu solidnych korporacyjnych hurtowni danych i modeli semantycznych. Łączę inżynierię z analityką, dbając o to, by nowoczesne środowiska Lakehouse zachowywały integralność strukturalną i optymalizację DAX niezbędną do podejmowania decyzji zarządczych.",
    downloadBtn: "Pobierz pełne CV",
    competenciesTitle: "Kluczowe Kompetencje Techniczne",
    competencies: [
      { category: "Projektowanie BI", skills: "Architektura End-to-end, Modelowanie Kimballa, Schemat Gwiazdy" },
      { category: "Microsoft Fabric", skills: "Certyfikat DP-600, OneLake, Lakehouse/Warehouse, Delta Parquet" },
      { category: "Platformy Danych", skills: "Azure Synapse, Databricks, Architektura Medallion, Lakehouse" },
      { category: "ETL i Inżynieria", skills: "Azure Data Factory, Data Flows, Spark SQL, Automatyzacja ELT" },
      { category: "DAX i Modelowanie", skills: "Zaawansowany DAX, Optymalizacja Modeli, Power BI (DirectLake/Query)" },
      { category: "SQL i DevOps", skills: "Zaawansowany T-SQL, CI/CD, Azure DevOps, Tabular Editor" }
    ],
    experienceTitle: "Doświadczenie Zawodowe",
    experience: [
      {
        company: "Acora – IT, Cyber & AI",
        role: "Główny Inżynier BI",
        date: "Styczeń 2026 – obecnie",
        bullets: [
          "Migracja starszych lokalnych obciążeń SQL do Microsoft Fabric Lakehouse.",
          "Projektowanie wysokowydajnych warstw transformacji danych przy użyciu Spark SQL.",
          "Kierowanie projektowaniem złożonych modeli wymiarowych opartych na metodologii Kimballa."
        ]
      },
      {
        company: "Elastacloud (przejęte przez Grupę Acora)",
        role: "Główny Inżynier BI",
        date: "Czerwiec 2023 – Styczeń 2026",
        bullets: [
          "Autorytet techniczny w projektach BI dla przedsiębiorstw w środowisku doradczym.",
          "Projektowanie i wdrażanie korporacyjnych hurtowni danych przy użyciu modelowania wymiarowego Kimballa.",
          "Kierowanie kompleksowym projektowaniem platform Microsoft Cloud BI z wykorzystaniem Azure Fabric."
        ]
      },
      {
        company: "Elastacloud",
        role: "Inżynier BI",
        date: "Luty 2019 – Czerwiec 2023",
        bullets: [
          "Współpraca z interesariuszami w celu przekładania potrzeb biznesowych na rozwiązania BI.",
          "Optymalizacja korporacyjnych hurtowni i Lakehouse przy użyciu Azure Synapse i SQL Database.",
          "Architektura modeli semantycznych v Power BI przy użyciu DAX i Power Query (M).",
          "Wdrożenie Azure DevOps do kontroli wersji i zwinnego zarządzania projektami."
        ]
      },
      {
        company: "Buzz Bingo",
        role: "Deweloper Hurtowni Danych",
        date: "Maj 2018 – Luty 2019",
        bullets: [
          "Dostarczanie rozwiązań DW w metodyce Agile przy użyciu technologii Microsoft ETL.",
          "Optymalizacja procedur składowanych SQL i pakietów SSIS pod kątem wydajności."
        ]
      },
      {
        company: "SportsDirect.com",
        role: "Deweloper SQL / BI",
        date: "Styczeń 2013 – Marzec 2018",
        bullets: [
          "Pełny cykl rozwoju modeli SSAS Tabular i rozwiązań raportowych Power BI.",
          "Budowa złożonych miar DAX i potoków integracji danych SSIS.",
          "Prowadzenie wewnętrznych szkoleń z Power BI, Power Pivot i Power Query."
        ]
      },
      {
        company: "SportsDirect.com",
        role: "Specjalista wsparcia IT i raportowania",
        date: "Marzec 2006 – Styczeń 2013",
        bullets: [
          "Tworzenie złożonych raportów BI z wykorzystaniem źródeł danych SQL Server i Oracle.",
          "Dostarczanie informacji zarządczych dla kierownictwa wyższego szczebla."
        ]
      }
    ],
    certificationsTitle: "Certyfikaty",
    certifications: ["Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)"],
    educationTitle: "Edukacja",
    education: "Licencjat, Informatyka | Akademia Studiów Międzynarodowych, Gdynia",
    footer: "© 2026 | Anna Hercer - Strategic Lead BI Engineer"
  }
}

function App() {
  const [lang, setLang] = useState<'en' | 'pl'>('en');
  const t = translations[lang];

  return (
    <div className="portfolio">
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <select 
          value={lang} 
          onChange={(e) => setLang(e.target.value as 'en' | 'pl')}
          className="antigravity-hover"
          style={{ padding: '8px 16px', background: 'var(--card-bg)', color: 'white', border: '1px solid var(--fabric-blue)', borderRadius: '4px', cursor: 'pointer', outline: 'none' }}
        >
          <option value="en" style={{ background: '#0A0E17' }}>English</option>
          <option value="pl" style={{ background: '#0A0E17' }}>Polski</option>
        </select>
      </div>

      <header className="hero container" style={{ padding: '120px 0 60px 0' }}>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '10px' }}>Anna <span style={{ color: 'var(--fabric-blue)' }}>Hercer</span></h1>
        <h2 style={{ fontSize: '2rem', border: 'none', color: 'var(--text-secondary)', marginBottom: '10px' }}>{t.role}</h2>
        <div style={{ color: 'var(--text-secondary)', marginBottom: '30px', display: 'flex', gap: '20px', fontSize: '0.9rem' }}>
          <a href="https://www.google.com/maps/place/Mansfield,+UK" target="_blank" rel="noopener noreferrer" className="location-link" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.3s ease' }}>📍 {t.contact.location}</a>
          <a 
            href={`mailto:${t.contact.email}`}
            className="location-link"
            style={{ 
              color: 'inherit', 
              textDecoration: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              transition: 'color 0.3s ease'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            {t.contact.email}
          </a>
        </div>
        <div style={{ maxWidth: '850px', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '20px' }}>{t.heroDesc1}</p>
          <p>{t.heroDesc2}</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <a href="https://drive.google.com/file/d/1Nbe_x5PSTW1lOTRCvKtAd-Syw7jWTLsL/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="antigravity-hover" style={{ padding: '12px 32px', background: 'var(--fabric-blue)', color: 'white', borderRadius: '4px', fontWeight: 'bold', display: 'inline-block' }}>{t.downloadBtn}</a>
        </div>
      </header>

      <section className="container">
        <h2>{t.competenciesTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {t.competencies.map((comp, i) => (
            <div key={i} className="antigravity-hover" style={{ background: 'var(--card-bg)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--powerbi-yellow)' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--fabric-blue)', marginBottom: '10px' }}>{comp.category}</h3>
              <p style={{ fontSize: '0.9rem' }}>{comp.skills}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <h2>{t.experienceTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {t.experience.map((exp, index) => (
            <div key={index} className="antigravity-hover" style={{ background: 'var(--card-bg)', padding: '30px', borderRadius: '12px', borderBottom: '4px solid var(--azure-purple)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '15px' }}>
                <div>
                  <h3 style={{ color: 'var(--fabric-blue)', margin: 0 }}>{exp.role}</h3>
                  <h4 style={{ color: 'var(--text-primary)', margin: '5px 0' }}>{exp.company}</h4>
                </div>
                <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>{exp.date}</span>
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '0.95rem' }}>
                {exp.bullets.map((bullet, i) => <li key={i} style={{ marginBottom: '8px' }}>{bullet}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h2>{t.certificationsTitle}</h2>
          <div className="antigravity-hover" style={{ background: 'var(--card-bg)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--powerbi-yellow)' }}>
            {t.certifications[0]}
          </div>
        </div>
        <div>
          <h2>{t.educationTitle.split('|')[0]}</h2>
          <div className="antigravity-hover" style={{ background: 'var(--card-bg)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--azure-purple)' }}>
            {t.education}
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px' }}>
        <p>{t.footer}</p>
        <div style={{ marginTop: '10px' }}>
          <a 
            href={`https://${t.contact.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="location-link"
            style={{ 
              color: 'inherit', 
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            {t.contact.linkedinLabel}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
