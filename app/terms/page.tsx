import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms govern access to the Better Muslim website and mobile application."
    >
      <section>
        <h2>Use of the service</h2>
        <p>
          Better Muslim is provided for personal, educational, and religious
          reading use. You agree not to misuse the service, interfere with its
          operation, or attempt unauthorized access to related systems.
        </p>
      </section>

      <section>
        <h2>Content and educational purpose</h2>
        <p>
          Better Muslim presents Quran, Hadith, and Islamic learning materials
          to support study and reflection. The app does not replace qualified
          religious scholarship or personal guidance from trusted teachers.
        </p>
      </section>

      <section>
        <h2>Third-party content sources</h2>
        <p>
          Some content is delivered from external Quran and Hadith data sources.
          Availability, accuracy, and completeness may depend partly on those
          sources.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The Better Muslim brand, website presentation, and original app
          materials remain protected by applicable intellectual property laws.
          Third-party religious content remains subject to its own source terms
          where applicable.
        </p>
      </section>

      <section>
        <h2>No warranty</h2>
        <p>
          Better Muslim is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without warranties of any kind, to the extent
          permitted by law.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, Better Muslim and its operators are
          not liable for indirect, incidental, or consequential damages arising
          from the use of the service.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          Better Muslim may update features, content, or these terms over time.
          Continued use after changes are published constitutes acceptance of
          the revised terms.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For terms-related questions, contact{" "}
          <a href="mailto:support@bettermuslim.app">support@bettermuslim.app</a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
