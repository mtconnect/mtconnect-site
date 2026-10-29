import { useEffect, useRef } from "react";

const HUBSPOT_SCRIPT_URL = "https://js.hsforms.net/forms/embed/v2.js";

const HubSpotForm = ({
  title = "Stay Connected",
  description = "Subscribe for MTConnect updates, news, and resources.",
  className = "",
}) => {
  const containerRef = useRef(null);
  const formIdRef = useRef(
    `hubspot-form-${Math.random().toString(36).slice(2, 11)}`
  );

  useEffect(() => {
    let cancelled = false;
    let animationFrameId;

    const createForm = () => {
      if (cancelled || !containerRef.current || !window.hbspt?.forms) {
        return;
      }

      const container = containerRef.current;

      // Prevent duplicate initialization.
      if (container.dataset.formInitialized === "true") {
        return;
      }

      container.dataset.formInitialized = "true";

      animationFrameId = requestAnimationFrame(() => {
        if (cancelled || !containerRef.current) return;

        window.hbspt.forms.create({
          portalId: "5056747",
          formId: "4fae9292-65b1-4700-8fae-c47b4600a279",
          region: "na1",
          target: `#${formIdRef.current}`,
        });
      });
    };

    let script = document.querySelector(
      `script[src="${HUBSPOT_SCRIPT_URL}"]`
    );

    if (window.hbspt?.forms) {
      createForm();
    } else if (!script) {
      script = document.createElement("script");
      script.src = HUBSPOT_SCRIPT_URL;
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.async = true;
      script.onload = createForm;
      script.onerror = () => {
        if (containerRef.current) {
          containerRef.current.dataset.formInitialized = "false";
        }
      };

      document.body.appendChild(script);
    } else {
      script.addEventListener("load", createForm);
    }

    return () => {
      cancelled = true;

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      script?.removeEventListener("load", createForm);
    };
  }, []);

  return (
    <section className={`hubspot-form-section ${className}`}>
      <div className="hubspot-form-content">
        {title && <h2 className="hubspot-form-title">{title}</h2>}

        {description && (
          <p className="hubspot-form-description">{description}</p>
        )}

        <div
          id={formIdRef.current}
          ref={containerRef}
          className="hubspot-form-container"
        />
      </div>

      <style>{`
        .hubspot-form-section {
          width: 100%;
          box-sizing: border-box;
          padding: 32px 24px;
          background: #ffffff;
          color: #111827;
          font-family: inherit;
        }

        .hubspot-form-content {
          width: 100%;
          max-width: 640px;
          margin: 0 auto;
        }

        .hubspot-form-title {
          margin: 0 0 10px;
          color: #111827;
          font-size: 28px;
          font-weight: 700;
          line-height: 1.3;
        }

        .hubspot-form-description {
          margin: 0 0 24px;
          color: #4b5563;
          font-size: 15px;
          line-height: 1.6;
        }

        .hubspot-form-container {
          width: 100%;
          color: #111827;
        }

        .hubspot-form-container form {
          width: 100%;
        }

        .hubspot-form-container fieldset {
          max-width: 100% !important;
        }

        .hubspot-form-container .hs-form-field {
          margin-bottom: 18px;
        }

        .hubspot-form-container .hs-form-field > label {
          display: block;
          margin-bottom: 7px;
          color: #374151;
          font-size: 13px;
          font-weight: 600;
        }

        .hubspot-form-container .hs-form-field label .hs-form-required {
          color: #dc2626;
          margin-left: 3px;
        }

        .hubspot-form-container input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),
        .hubspot-form-container select,
        .hubspot-form-container textarea {
          display: block;
          width: 100% !important;
          max-width: 100% !important;
          min-height: 44px;
          box-sizing: border-box;
          padding: 11px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          background: #ffffff;
          color: #111827;
          font-family: inherit;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .hubspot-form-container textarea {
          min-height: 110px;
          resize: vertical;
        }

        .hubspot-form-container input:focus,
        .hubspot-form-container select:focus,
        .hubspot-form-container textarea:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .hubspot-form-container select option {
          color: #111827;
          background: #ffffff;
        }

        .hubspot-form-container .hs-input {
          max-width: 100%;
        }

        .hubspot-form-container .hs-error-msg,
        .hubspot-form-container .hs-error-msgs label {
          display: block;
          margin-top: 5px;
          color: #dc2626;
          font-size: 12px;
        }

        .hubspot-form-container ul.hs-error-msgs {
          margin: 5px 0 0;
          padding: 0;
          list-style: none;
        }

        .hubspot-form-container .hs-button {
          display: inline-block;
          min-height: 44px;
          padding: 11px 24px;
          border: none;
          border-radius: 6px;
          background: #2563eb;
          color: #ffffff;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .hubspot-form-container .hs-button:hover {
          background: #1d4ed8;
        }

        .hubspot-form-container .hs-button:focus-visible {
          outline: 3px solid rgba(37, 99, 235, 0.3);
          outline-offset: 3px;
        }

        .hubspot-form-container .hs-richtext,
        .hubspot-form-container .legal-consent-container,
        .hubspot-form-container .hs-form-booleancheckbox-display {
          color: #4b5563;
          font-size: 12px;
          line-height: 1.6;
        }

        .hubspot-form-container .hs-main-font-element {
          color: #374151;
          font-size: 14px;
          line-height: 1.6;
        }

        .hubspot-form-container .submitted-message {
          padding: 16px;
          border: 1px solid #bbf7d0;
          border-radius: 6px;
          background: #f0fdf4;
          color: #166534;
          font-size: 14px;
          line-height: 1.6;
        }

        .hubspot-form-container .hs-form-checkbox label,
        .hubspot-form-container .hs-form-radio label {
          color: #374151;
          font-size: 13px;
        }

        .hubspot-form-container .hs-form-checkbox input,
        .hubspot-form-container .hs-form-radio input {
          margin-right: 8px;
        }

        @media (max-width: 640px) {
          .hubspot-form-section {
            padding: 24px 16px;
          }

          .hubspot-form-title {
            font-size: 24px;
          }

          .hubspot-form-description {
            font-size: 14px;
          }

          .hubspot-form-container .hs-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default HubSpotForm;