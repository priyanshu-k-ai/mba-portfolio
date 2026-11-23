
import { useRef, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { ArrowLeft, ArrowRight, X, FileText, ExternalLink } from "lucide-react";
import "./CertificateBook.css";

// A page component required by react-pageflip
const CertificatePage = forwardRef(({ children, cover = false }, ref) => {
  return (
    <div
      ref={ref}
      className={`certificate-page ${cover ? "certificate-cover" : ""}`}
    >
      {children}
    </div>
  );
});

CertificatePage.displayName = "CertificatePage";

// ADD YOUR CERTIFICATES HERE
// type must be "image" or "pdf"
const certificates = [
  {
    title: "Certificate 01",
    issuer: "Add issuing organisation",
    date: "Add completion date",
    type: "image",
    file: "/certificates/images/certificate-01.jpg",
  },
  {
    title: "Certificate 02",
    issuer: "Add issuing organisation",
    date: "Add completion date",
    type: "pdf",
    file: "/certificates/pdfs/certificate-02.pdf",
  },
  {
    title: "Certificate 03",
    issuer: "Add issuing organisation",
    date: "Add completion date",
    type: "image",
    file: "/certificates/images/certificate-03.png",
  },
];

export default function CertificateBook({ onClose }) {
  const bookRef = useRef(null);

  const previousPage = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const nextPage = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  return (
    <div className="certificate-book-overlay">
      <div className="certificate-book-window">

        <div className="certificate-book-header">
          <div>
            <p className="certificate-eyebrow">PROFESSIONAL LIBRARY</p>
            <h2>My Achievements</h2>
            <p className="certificate-subtitle">
              A collection of learning, growth and milestones
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
            ref={bookRef}
            width={430}
            height={590}
            size="fixed"
            minWidth={315}
            maxWidth={430}
            minHeight={430}
            maxHeight={590}
            showCover={true}
            usePortrait={true}
            mobileScrollSupport={true}
            drawShadow={true}
            maxShadowOpacity={0.35}
            flippingTime={900}
            startPage={0}
            className="certificate-flipbook"
          >
            {/* Front cover */}
            <CertificatePage cover>
              <div className="certificate-cover-inner">
                <div className="certificate-cover-line">
                  PROFESSIONAL COLLECTION
                </div>

                <div className="certificate-cover-emblem">
                  <span>✦</span>
                </div>

                <h1>Certificates</h1>
                <div className="certificate-cover-divider" />

                <p>ACHIEVEMENTS & RECOGNITION</p>

                <h2>Priyanshu Kesharwani</h2>

                <div className="certificate-cover-footer">
                  PERSONAL ACHIEVEMENT BOOK
                </div>
              </div>
            </CertificatePage>

            {/* One certificate per page */}
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

                  <div className="certificate-preview">
                    {certificate.type === "image" ? (
                      <img
                        src={certificate.file}
                        alt={certificate.title}
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                          event.currentTarget.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : (
                      <iframe
                        src={`${certificate.file}#toolbar=0&navpanes=0`}
                        title={certificate.title}
                      />
                    )}

                    <div className="certificate-missing">
                      <FileText size={42} />
                      <p>Certificate preview</p>
                      <small>
                        Add your certificate file to the public folder.
                      </small>
                    </div>
                  </div>

                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-open-original"
                  >
                    View original certificate
                    <ExternalLink size={14} />
                  </a>

                  <div className="certificate-page-footer">
                    <span>PRIYANSHU KESHARWANI</span>
                    <span>{index + 1}</span>
                  </div>

                </div>
              </CertificatePage>
            ))}

            {/* Back cover */}
            <CertificatePage cover>
              <div className="certificate-back-cover">
                <div className="certificate-cover-emblem">
                  ✦
                </div>
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

        <div className="certificate-book-controls">
          <button onClick={previousPage} aria-label="Previous page">
            <ArrowLeft size={18} />
            Previous
          </button>

          <span>Turn the pages to explore</span>

          <button onClick={nextPage} aria-label="Next page">
            Next
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
