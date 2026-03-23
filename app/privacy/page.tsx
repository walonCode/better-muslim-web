import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how Better Muslim currently handles data in the mobile app and on this website."
    >
      <section>
        <h2>Effective date</h2>
        <p>March 23, 2026</p>
      </section>

      <section>
        <h2>What Better Muslim collects</h2>
        <p>
          Better Muslim is designed to work without requiring account creation
          or broad submission of personal profile information.
        </p>
        <p>
          The app currently stores reading-related data locally on your device,
          such as:
        </p>
        <ul>
          <li>Quran bookmarks and favorites</li>
          <li>Hadith bookmarks and search history</li>
          <li>Reading progress and last-read positions</li>
          <li>Display preferences like theme and font sizes</li>
        </ul>
        <p>
          If you choose to join the website waitlist, Better Muslim also
          collects the email address you submit and your selected platform
          preference.
        </p>
      </section>

      <section>
        <h2>How waitlist data is used</h2>
        <p>
          Waitlist information is used to notify you when Better Muslim becomes
          available on the App Store, Google Play, or both, depending on the
          option you selected.
        </p>
        <p>
          Better Muslim does not use waitlist submissions for unrelated
          marketing campaigns based on the current site behavior.
        </p>
      </section>

      <section>
        <h2>Third-party storage for waitlist submissions</h2>
        <p>
          Waitlist submissions are stored using Airtable, a third-party hosted
          data platform, so they can be reviewed and managed before launch.
        </p>
        <p>
          That means the email address and platform choice you submit through
          the waitlist form are processed through Airtable infrastructure.
        </p>
      </section>

      <section>
        <h2>How content is delivered</h2>
        <p>
          Better Muslim uses third-party Quran and Hadith content sources to
          deliver reading content inside the app.
        </p>
        <ul>
          <li>Quran data: Al Quran Cloud API</li>
          <li>Hadith data: fawazahmed0 Hadith API</li>
          <li>
            Learn content: bundled app content with local fallback and refresh
            support
          </li>
        </ul>
      </section>

      <section>
        <h2>Offline-first behavior</h2>
        <p>
          To improve usability, the app caches parts of Quran, Hadith, and
          learning content on device. This helps the app remain useful with weak
          or inconsistent internet access.
        </p>
      </section>

      <section>
        <h2>Permissions and device access</h2>
        <p>
          Better Muslim may use internet access to retrieve Quran and Hadith
          content and to refresh cached material. Local storage is used to save
          app preferences and reading state on your device.
        </p>
      </section>

      <section>
        <h2>Personal data and accounts</h2>
        <p>
          Based on the current app structure, Better Muslim does not require a
          user account to use its core features. If accounts, analytics, or
          additional data collection are added later, this policy should be
          updated before those changes are released.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          Data stored locally remains on your device unless you remove it by
          clearing app data, reinstalling the app, or changing your saved items
          and settings inside the app.
        </p>
        <p>
          Waitlist submissions may be retained until launch notifications are
          sent or until you request deletion by contacting support.
        </p>
      </section>

      <section>
        <h2>Children and family use</h2>
        <p>
          Better Muslim is intended as an educational and religious reading app.
          Parents or guardians should supervise app use where appropriate.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For privacy questions, contact{" "}
          <a href="mailto:support@bettermuslim.app">support@bettermuslim.app</a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
