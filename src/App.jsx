
import { useRef, useState, forwardRef } from "react";
import { createPortal } from "react-dom";
import HTMLFlipBook from "react-pageflip";

import {
  X,
  Mail,
  Phone,
  Download,
  Award,
  BookOpen,
  ExternalLink,
  BarChart3,
  Truck,
  Package,
  ClipboardList,
} from "lucide-react";

import "./App.css";
import "./CertificateBook.css";

/* SOCIAL ICONS */

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.72.78.76 1.03.76 2.08v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.68 1.14-1.68 2.32V18h-3V9h2.88v1.23h.04c.4-.71 1.38-1.46 2.84-1.46 3.04 0 3.6 2 3.6 4.6V18Z" />
    </svg>
  );
}

/* MAIN PORTFOLIO PAGE */

const Page = forwardRef(({ children, number, cover = false }, ref) => (
  <div ref={ref} className={`book-page ${cover ? "cover-page" : ""}`}>
    <div className="page-content">{children}</div>
    {!cover && <div className="page-number">{number}</div>}
  </div>
));

Page.displayName = "Page";

/* CERTIFICATE PAGE */

const CertificatePage = forwardRef(({ children, cover = false }, ref) => (
  <div
    ref={ref}
    className={`certificate-page ${cover ? "certificate-cover" : ""}`}
  >
    {children}
  </div>
));

CertificatePage.displayName = "CertificatePage";

/* CERTIFICATE DATA */

const certificates = [
  {
    title: "First Aid Day Award",
    issuer: "R.K. College of Pharmacy",
    date: "Date not clearly visible",
    type: "image",
    file: "/certificates/images/first-aid-day-award.jpeg",
  },
  {
    title: "Chess Competition: 1st Position",
    issuer: "Technosavvys Education Technology",
    date: "Teacher's Day 2025",
    type: "image",
    file: "/certificates/images/chess-first-position.jpeg",
  },
  {
    title: "Data Analytics Certificate",
    issuer: "Technosavvys Education Technology",
    date: "25 April 2025",
    type: "image",
    file: "/certificates/images/data-analytics-certificate.jpeg",
  },
  {
    title: "Diploma in Computer Application (DCA)",
    issuer: "NCMC Education Centre",
    date: "August 2019 to January 2020",
    type: "image",
    file: "/certificates/images/dca-certificate.jpeg",
  },
  {
    title: "Event Coordinator: Certificate of Recognition",
    issuer: "Grihani",
    date: "Date not visible",
    type: "image",
    file: "/certificates/images/event-coordinator-recognition.jpeg",
  },
  {
    title: "TechnoNxt Hackathon 2025: Certificate of Achievement",
    issuer: "Technosavvys Education Technology",
    date: "2025",
    type: "image",
    file: "/certificates/images/technonxt-hackathon-2025.jpeg",
  },
  {
    title: "Guest Lecture: Recent Advancements in Pharmacy Education",
    issuer: "United Institute of Pharmacy",
    date: "16 December 2023",
    type: "image",
    file: "/certificates/images/guest-lecture-participation.jpeg",
  },
  {
    title: "International Conference: Certificate of Appreciation",
    issuer: "United Institute of Pharmacy",
    date: "19-20 October 2024",
    type: "image",
    file: "/certificates/images/international-conference-appreciation.jpeg",
  },
  {
    title: "30 Days Power BI Micro Course",
    issuer: "SkillCourse",
    date: "3 October 2026",
    type: "image",
    file: "/certificates/images/power-bi-30-day-micro-course.png",
  },
  {
    title: "AI in Spreadsheets",
    issuer: "Ernst & Young Associates LLP",
    date: "4 November 2026",
    type: "pdf",
    file: "/certificates/pdfs/ey-ai-in-spreadsheets.pdf",
  },
  {
    title: "Design Thinking & UX/UI Fundamentals",
    issuer: "Ernst & Young Associates LLP",
    date: "5 November 2026",
    type: "pdf",
    file: "/certificates/pdfs/ey-design-thinking-ux-ui-fundamentals.pdf",
  },
  {
    title: "AI for Productivity",
    issuer: "Ernst & Young Associates LLP",
    date: "16 September 2026",
    type: "pdf",
    file: "/certificates/pdfs/ey-ai-for-productivity.pdf",
  },
  {
    title: "AI in Creativity",
    issuer: "Ernst & Young Associates LLP",
    date: "4 November 2026",
    type: "pdf",
    file: "/certificates/pdfs/ey-ai-in-creativity.pdf",
  },
  {
    title: "AI Literacy Essentials",
    issuer: "Ernst & Young Associates LLP",
    date: "16 September 2026",
    type: "pdf",
    file: "/certificates/pdfs/ey-ai-literacy-essentials.pdf",
  },
  {
    title: "Prompt Engineering for Study and Work",
    issuer: "Ernst & Young Associates LLP",
    date: "10 October 2026",
    type: "pdf",
    file: "/certificates/pdfs/ey-prompt-engineering-study-work.pdf",
  },
  {
    title: "Information & Media Literacy",
    issuer: "Ernst & Young Associates LLP",
    date: "6 November 2026",
    type: "pdf",
    file: "/certificates/pdfs/ey-information-media-literacy.pdf",
  },
  {
    title: "Microsoft Excel Fundamentals with Distinction",
    issuer: "Science of Apps",
    date: "2 November 2026",
    type: "pdf",
    file: "/certificates/pdfs/microsoft-excel-fundamentals-with-distinction.pdf",
  },
  {
    title: "Supply Chain Management Fundamentals with Distinction",
    issuer: "Science of Apps",
    date: "2 November 2026",
    type: "pdf",
    file: "/certificates/pdfs/supply-chain-management-fundamentals-with-distinction.pdf",
  },
  {
    title: "Supply Chain Basics for Everyone",
    issuer: "LinkedIn Learning",
    date: "4 November 2026",
    type: "pdf",
    file: "/certificates/pdfs/linkedin-learning-supply-chain-basics.pdf",
  },
];

/* CERTIFICATE PREVIEW */

function CertificatePreview({ certificate }) {
  const [error, setError] = useState(false);

  return (
    <div
      className="certificate-preview"
      onPointerDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
      onTouchStart={(event) => event.stopPropagation()}
    >
      {!error && certificate.type === "image" && (
        <img
          src={certificate.file}
          alt={certificate.title}
          className="certificate-preview-image"
          loading="eager"
          draggable="false"
          onError={() => setError(true)}
        />
      )}

      {!error && certificate.type === "pdf" && (
        <iframe
          src={`${certificate.file}#toolbar=0&navpanes=0&view=FitH`}
          title={certificate.title}
          className="certificate-preview-pdf"
          loading="eager"
        />
      )}

      {error && (
        <div className="certificate-load-error">
          <strong>Certificate unavailable</strong>
          <p>Check the file path:</p>
          <small>{certificate.file}</small>
        </div>
      )}
    </div>
  );
}

/* CERTIFICATE BOOK */

function CertificateBook({ onClose }) {
  const certificateBookRef = useRef(null);

  return (
    <div className="certificate-book-overlay" onClick={onClose}>
      <div
        className="certificate-book-window"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="certificate-book-header">
          <div>
            <p className="certificate-eyebrow">PROFESSIONAL LIBRARY</p>
            <h2>My Achievements</h2>
            <p className="certificate-subtitle">
              Learning, development and milestones
            </p>
          </div>

          <button
            className="certificate-close"
            onClick={onClose}
            aria-label="Close certificate book"
          >
            <X size={22} />
          </button>
        </div>

        <div className="certificate-book-stage">
          <HTMLFlipBook
            ref={certificateBookRef}
            width={320}
            height={440}
            size="fixed"
            minWidth={320}
            maxWidth={320}
            minHeight={440}
            maxHeight={440}
            showCover={true}
            usePortrait={true}
            mobileScrollSupport={true}
            drawShadow={true}
            maxShadowOpacity={0.35}
            flippingTime={850}
            className="certificate-flipbook"
            startPage={0}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            <CertificatePage cover>
              <div className="certificate-cover-inner">
                <div className="certificate-cover-line">
                  PROFESSIONAL COLLECTION
                </div>

                <div className="certificate-cover-emblem">✦</div>

                <h1>Certificates</h1>

                <div className="certificate-cover-divider" />

                <p>ACHIEVEMENTS &amp; RECOGNITION</p>

                <h2>Priyanshu Kesharwani</h2>

                <div className="certificate-cover-footer">
                  PERSONAL ACHIEVEMENT BOOK
                </div>
              </div>
            </CertificatePage>

            {certificates.map((certificate, index) => (
              <CertificatePage key={certificate.file}>
                <div className="certificate-paper">
                  <div className="certificate-page-heading">
                    <span>PROFESSIONAL ACHIEVEMENTS</span>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="certificate-gold-rule" />

                  <div className="certificate-details">
                    <h3>{certificate.title}</h3>
                    <p className="certificate-issuer">
                      {certificate.issuer}
                    </p>
                    <p className="certificate-date">
                      {certificate.date}
                    </p>
                  </div>

                  <CertificatePreview certificate={certificate} />

                  <a
                    href={certificate.file}
                    className="certificate-open-original"
                    download={certificate.file.split("/").pop()}
                    onClick={(event) => event.stopPropagation()}
                    onPointerDown={(event) => event.stopPropagation()}
                    onTouchStart={(event) => event.stopPropagation()}
                  >
                    <Download size={13} />
                    Download Certificate
                  </a>

                  <div className="certificate-page-footer">
                    <span>PRIYANSHU KESHARWANI</span>
                    <span>{index + 1}</span>
                  </div>
                </div>
              </CertificatePage>
            ))}

            <CertificatePage>
              <div className="certificate-blank-page">
                <span>END OF CERTIFICATE COLLECTION</span>
              </div>
            </CertificatePage>

            <CertificatePage cover>
              <div className="certificate-back-cover">
                <div className="certificate-cover-emblem">✦</div>

                <h2>Learning Never Stops</h2>

                <div className="certificate-cover-divider" />

                <p>
                  Every achievement represents a step forward.
                </p>

                <span>END OF COLLECTION</span>
              </div>
            </CertificatePage>
          </HTMLFlipBook>
        </div>

        <p className="certificate-hint">
          Turn the pages to explore your certificates
        </p>
      </div>
    </div>
  );
}

/* MAIN PORTFOLIO */

function App() {
  const bookRef = useRef(null);
  const [showCertificateBook, setShowCertificateBook] = useState(false);

  const playFlipSound = () => {
    const sound = new Audio("/page-flip.mp3");
    sound.volume = 0.25;
    sound.play().catch(() => {});
  };

  const goToPage = (page) => {
    bookRef.current?.pageFlip()?.flip(page);
  };

  const contents = [
    ["01", "About Me", 2],
    ["02", "Professional Summary", 3],
    ["03", "Education", 4],
    ["04", "Professional Experience", 5],
    ["05", "Core Competencies", 6],
    ["06", "Technical Skills", 7],
    ["07", "Projects", 8],
    ["08", "Certifications", 9],
    ["09", "Business Learning", 10],
    ["10", "Career Objectives", 11],
    ["11", "Contact", 12],
  ];

  return (
    <>
      <main className="portfolio-container">
        <div className="portfolio-heading">
          <span className="portfolio-kicker">
            PERSONAL PORTFOLIO • 2026
          </span>

          <h1>My Professional Journey</h1>

          <p className="book-instruction">
            Please <span className="highlight-word">OPEN THE BOOK</span> and
            explore my professional journey. 📖
          </p>
        </div>

        <div className="book-wrapper">
          <HTMLFlipBook
            ref={bookRef}
            width={430}
            height={570}
            size="fixed"
            minWidth={280}
            maxWidth={430}
            minHeight={380}
            maxHeight={570}
            showCover={true}
            usePortrait={false}
            mobileScrollSupport={true}
            drawShadow={true}
            maxShadowOpacity={0.4}
            flippingTime={950}
            onFlip={playFlipSound}
            className="portfolio-book"
          >
            <Page cover>
              <div className="business-cover">
                <div className="business-cover-photo">
                  <img src="/profile.jpg" alt="Priyanshu Kesharwani" />
                </div>

                <div className="business-cover-header">
                  <span>THE PROFESSIONAL EDITION</span>
                  <span>2026</span>
                </div>

                <div className="business-cover-masthead">
                  <span>MBA</span>
                  <span className="gold-text">STUDENT</span>
                </div>

                <div className="business-cover-subtitle">
                  PROFESSIONAL PORTFOLIO
                </div>

                <div className="business-cover-name">
                  <h1>PRIYANSHU</h1>
                  <h1>KESHARWANI</h1>
                </div>

                <div className="business-cover-divider" />

                <div className="business-cover-specialization">
                  MBA | OPERATIONS &amp; SUPPLY CHAIN
                </div>

                <div className="business-cover-footer">
                  STRATEGY • LEADERSHIP • GROWTH
                </div>
              </div>
            </Page>

            <Page number="01">
              <div className="section-label">PORTFOLIO OVERVIEW</div>
              <h2 className="page-title">Contents</h2>

              <p className="page-intro">
                Explore my academic background, professional experience,
                projects and career direction.
              </p>

              <div className="contents-list">
                {contents.map(([number, title, page]) => (
                  <button
                    key={number}
                    className="contents-item"
                    onClick={() => goToPage(page)}
                  >
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <span>→</span>
                  </button>
                ))}
              </div>
            </Page>

            <Page number="02">
              <div className="section-label">01 / PERSONAL PROFILE</div>
              <h2 className="page-title">About Me</h2>

              <p className="page-intro">
                A continuous learner interested in business operations,
                management and organisational growth.
              </p>

              <div className="profile-section">
                <h3>PRIYANSHU KESHARWANI</h3>
                <p>MBA | OPERATIONS &amp; SUPPLY CHAIN</p>
              </div>

              <p>
                I am an MBA student at Lovely Professional University,
                specialising in Operations and Supply Chain Management.
                My Pharmacy background has developed my discipline,
                accuracy and attention to detail.
              </p>

              <p>
                My experience in US IT recruitment has strengthened my
                communication, coordination and understanding of business
                requirements.
              </p>

              <div className="highlight-box">
                <span>AREAS OF INTEREST</span>
                <p>
                  Supply chain operations, process improvement,
                  procurement, logistics and business analytics.
                </p>
              </div>
            </Page>

            <Page number="03">
              <div className="section-label">02 / CAREER PROFILE</div>
              <h2 className="page-title">Professional Summary</h2>

              <p className="page-intro">
                Combining analytical thinking with practical business
                understanding.
              </p>

              <div className="business-enthusiast">
                <h3>Professional Overview</h3>
                <p>
                  MBA student with a multidisciplinary background in
                  Pharmacy and recruitment. Interested in supply chain
                  planning, procurement, inventory management, logistics
                  and operations.
                </p>
              </div>

              <h3 className="subheading">Career Interests</h3>

              <div className="skill-tags">
                <span>Supply Chain</span>
                <span>Procurement</span>
                <span>Logistics</span>
                <span>Inventory</span>
                <span>Operations</span>
                <span>Analytics</span>
              </div>

              <div className="highlight-box">
                <span>MY APPROACH</span>
                <p>
                  Learn continuously, analyse carefully, collaborate
                  effectively and contribute to measurable results.
                </p>
              </div>
            </Page>

            {/* EDUCATION PAGE: FOUR CARDS IN ONE ROW */}

            

<Page number="04">
  <div className="section-label">03 / ACADEMIC BACKGROUND</div>
  <h2 className="page-title">Education</h2>

  <p className="page-intro">
    A multidisciplinary foundation in healthcare and business.
  </p>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "18px",
      width: "100%",
    }}
  >
    {[
      {
        level: "CURRENT PROGRAMME",
        degree: "MBA",
        college: "Lovely Professional University",
        detail: "Operations & Supply Chain Management",
      },
      {
        level: "GRADUATION",
        degree: "Bachelor of Pharmacy",
        college: "United College of Pharmacy",
        detail: "",
      },
      {
        level: "DIPLOMA",
        degree: "Diploma in Pharmacy",
        college: "R.K. College",
        detail: "",
      },
      {
        level: "SCHOOL EDUCATION",
        degree: "Secondary & Higher Secondary",
        college: "SMPPS, Prayagraj",
        detail: "",
      },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "12px 16px",
          border: "1px solid rgba(190, 155, 85, 0.45)",
          borderLeft: "4px solid #b99a5b",
          borderRadius: "10px",
          background: "rgba(185, 154, 91, 0.08)",
          boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            letterSpacing: "1.5px",
            color: "#b99a5b",
            fontWeight: "700",
          }}
        >
          {item.level}
        </span>

        <h3 style={{ margin: "5px 0", fontSize: "16px" }}>
          {item.degree}
        </h3>

        <p style={{ margin: "0", fontSize: "12px" }}>
          {item.college}
        </p>

        {item.detail && (
          <small style={{ display: "block", marginTop: "4px" }}>
            {item.detail}
          </small>
        )}
      </div>
    ))}
  </div>
</Page>


            <Page number="05">
              <div className="section-label">04 / WORK EXPERIENCE</div>
              <h2 className="page-title">Experience</h2>

              <div className="experience-card">
                <span className="experience-label">
                  PROFESSIONAL EXPERIENCE
                </span>

                <h3>US IT Recruiter</h3>
                <h4>Tek Inspirations LLC</h4>

                <p>
                  Exposure to US IT recruitment, candidate coordination
                  and communication with consultants, vendors and clients.
                </p>
              </div>

              <h3 className="subheading">Key Responsibilities</h3>

              <ul className="compact-list">
                <li>Understand job descriptions and candidate profiles.</li>
                <li>Coordinate with consultants and stakeholders.</li>
                <li>Communicate client requirements clearly.</li>
                <li>Support recruitment and follow-up activities.</li>
                <li>Develop negotiation and relationship skills.</li>
              </ul>

              <div className="highlight-box">
                <span>ADDITIONAL EXPOSURE</span>
                <p>
                  Hospital internship and industrial training during
                  pharmaceutical education.
                </p>
              </div>
            </Page>

            <Page number="06">
              <div className="section-label">05 / PROFESSIONAL STRENGTHS</div>
              <h2 className="page-title">Core Competencies</h2>

              <p className="page-intro">
                Capabilities relevant to management and operations roles.
              </p>

              <div className="strength-grid">
                <div>
                  <strong>01</strong>
                  <h3>Analytical Thinking</h3>
                  <p>Interpret information and evaluate alternatives.</p>
                </div>

                <div>
                  <strong>02</strong>
                  <h3>Problem Solving</h3>
                  <p>Approach challenges through structured thinking.</p>
                </div>

                <div>
                  <strong>03</strong>
                  <h3>Communication</h3>
                  <p>Coordinate with people and stakeholders.</p>
                </div>

                <div>
                  <strong>04</strong>
                  <h3>Adaptability</h3>
                  <p>Learn new concepts and adjust to change.</p>
                </div>

                <div>
                  <strong>05</strong>
                  <h3>Teamwork</h3>
                  <p>Work collaboratively towards shared goals.</p>
                </div>

                <div>
                  <strong>06</strong>
                  <h3>Attention to Detail</h3>
                  <p>Maintain accuracy and organised work practices.</p>
                </div>
              </div>
            </Page>

            <Page number="07">
              <div className="section-label">06 / TECHNICAL PROFICIENCY</div>
              <h2 className="page-title">Technical Skills</h2>

              <p className="page-intro">
                Tools and knowledge for data-driven business work.
              </p>

              <div className="skill-category">
                <h3>Data &amp; Technology</h3>

                <div className="skill-tags">
                  <span>Microsoft Excel</span>
                  <span>Power BI</span>
                  <span>Python</span>
                  <span>Data Visualisation</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Business Knowledge</h3>

                <div className="skill-tags">
                  <span>Financial Analysis</span>
                  <span>Marketing</span>
                  <span>Supply Chain</span>
                  <span>Operations</span>
                  <span>Business Research</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Professional Skills</h3>

                <div className="skill-tags">
                  <span>Communication</span>
                  <span>Coordination</span>
                  <span>Problem Solving</span>
                  <span>Teamwork</span>
                  <span>Time Management</span>
                </div>
              </div>

              <div className="highlight-box">
                <span>DEVELOPMENT</span>
                <p>
                  Building practical skills through academic projects,
                  exercises and independent learning.
                </p>
              </div>
            </Page>

            <Page number="08">
              <div className="section-label">07 / PRACTICAL APPLICATION</div>
              <h2 className="page-title">Projects</h2>

              <p className="page-intro">
                Applying business concepts and digital tools to practical
                challenges.
              </p>

              <div className="project-card">
                <img
                  src="/projects/financial-analysis.png"
                  alt="Financial analysis project"
                />

                <div>
                  <span>FINANCIAL MANAGEMENT</span>
                  <h3>Financial Statement Analysis</h3>
                  <p>
                    Examining profitability, liquidity, debt and financial
                    performance through financial statements.
                  </p>
                </div>
              </div>

              <div className="project-card">
                <img
                  src="/projects/resume-analyser.png"
                  alt="Resume gap analyser project"
                />

                <div>
                  <span>CAREER TECHNOLOGY</span>
                  <h3>Resume Gap Analyser</h3>
                  <p>
                    Comparing resumes with job descriptions to identify
                    matched skills, gaps and learning priorities.
                  </p>
                </div>
              </div>

              <div className="project-card">
                <img
                  src="/projects/business-dashboard.png"
                  alt="Business dashboard project"
                />

                <div>
                  <span>BUSINESS ANALYTICS</span>
                  <h3>Business Data Dashboard</h3>
                  <p>
                    Presenting business information through organised
                    dashboards and visual insights.
                  </p>
                </div>
              </div>
            </Page>

            <Page number="09">
              <div className="section-label">08 / ACHIEVEMENTS</div>
              <h2 className="page-title">Certifications</h2>

              <p className="page-intro">
                A record of learning, participation and personal development.
              </p>

              <div className="certificate-placeholder">
                <Award size={38} />

                <h3>Professional Learning</h3>

                <p>
                  Explore my academic, professional and skill-based
                  certificates in a separate collection.
                </p>
              </div>

              <div className="achievement-points">
                <div>
                  <strong>01</strong> Academic and professional learning
                </div>

                <div>
                  <strong>02</strong> State-level badminton participation
                </div>

                <div>
                  <strong>03</strong> State-level chess participation
                </div>

                <div>
                  <strong>04</strong> College-level academic achievements
                </div>
              </div>

              <button
                className="certificate-book-launch"
                onClick={() => setShowCertificateBook(true)}
              >
                <BookOpen size={18} />
                Explore My Certificates
              </button>
            </Page>

            <Page number="10">
              <div className="section-label">09 / BUSINESS PERSPECTIVE</div>
              <h2 className="page-title">Business Learning</h2>

              <p className="page-intro">
                Understanding how organisations create value and manage
                resources.
              </p>

              <div className="learning-card">
                <Truck size={25} />

                <div>
                  <h3>Supply Chain Management</h3>
                  <p>
                    Coordinating the flow of materials, information and
                    products from suppliers to customers.
                  </p>
                </div>
              </div>

              <div className="learning-card">
                <ClipboardList size={25} />

                <div>
                  <h3>Operations Management</h3>
                  <p>
                    Improving processes, productivity, quality and resource
                    utilisation.
                  </p>
                </div>
              </div>

              <div className="learning-card">
                <Package size={25} />

                <div>
                  <h3>Inventory &amp; Logistics</h3>
                  <p>
                    Understanding stock control, storage, transportation
                    and order fulfilment.
                  </p>
                </div>
              </div>

              <div className="learning-card">
                <BarChart3 size={25} />

                <div>
                  <h3>Business Analytics</h3>
                  <p>
                    Using data to identify trends and support informed
                    managerial decisions.
                  </p>
                </div>
              </div>
            </Page>

            <Page number="11">
              <div className="section-label">10 / FUTURE DIRECTION</div>
              <h2 className="page-title">Career Objectives</h2>

              <p className="page-intro">
                Developing expertise in operations and supply chain
                through continuous learning and practical experience.
              </p>

              <div className="vision-card">
                <span>SHORT-TERM OBJECTIVE</span>
                <h3>Build Practical Expertise</h3>
                <p>
                  Strengthen knowledge of procurement, demand planning,
                  logistics, inventory and operations.
                </p>
              </div>

              <div className="vision-card">
                <span>LONG-TERM OBJECTIVE</span>
                <h3>Drive Operational Excellence</h3>
                <p>
                  Contribute to process improvement, resource optimisation
                  and efficient supply chain operations.
                </p>
              </div>

              <div className="highlight-box">
                <span>PROFESSIONAL COMMITMENT</span>
                <p>
                  Stay adaptable, develop relevant skills and contribute
                  responsibly to organisational goals.
                </p>
              </div>
            </Page>

            <Page number="12">
              <div className="section-label">11 / PROFESSIONAL NETWORK</div>
              <h2 className="page-title">Let's Connect</h2>

              <p className="page-intro">
                Open to professional networking, learning opportunities
                and meaningful collaborations.
              </p>

              <div className="contact-list">
                <a href="mailto:priyanshukesharwani123098@gmail.com">
                  <Mail size={19} />
                  <span>priyanshukesharwani123098@gmail.com</span>
                </a>

                <a href="tel:8887831429">
                  <Phone size={19} />
                  <span>8887831429</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/priyanshu-kesharwani-6b0856224"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href="https://github.com/priyanshu-k-ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                  <span>GitHub Profile</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <a
                className="resume-button"
                href="/certificate/pdfs/Priyanshu_CV.pdf.pdf"
                download="Priyanshu_Kesharwani_CV.pdf"
              >
                <Download size={17} />
                Download Resume
              </a>

              <div className="highlight-box">
                <span>LOCATION</span>
                <p>Prayagraj, Uttar Pradesh, India</p>
              </div>
            </Page>

            <Page cover>
              <div className="cover-content back-cover-content">
                <div className="cover-emblem">✦</div>

                <h1>Thank You</h1>

                <div className="cover-divider" />

                <p>
                  Thank you for exploring my professional journey.
                </p>

                <h3>PRIYANSHU KESHARWANI</h3>

                <div className="cover-bottom">END OF PORTFOLIO</div>
              </div>
            </Page>
          </HTMLFlipBook>
        </div>

        <footer className="footer-note">
          Designed &amp; developed as a digital portfolio • 2026
        </footer>
      </main>

      {showCertificateBook &&
        typeof document !== "undefined" &&
        createPortal(
          <CertificateBook
            onClose={() => setShowCertificateBook(false)}
          />,
          document.body
        )}
    </>
  );
}

export default App;
