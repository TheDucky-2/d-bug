import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";


const TermsAndConditionsSections = [
  {
    title: "1. About d_bug",
    content: (
      <>
        <p>
          d_bug provides tools for software teams and individuals to collect,
          organize, prioritize, analyze, and manage software bugs, issues, and
          related development information.
        </p>

        <p>Features may include:</p>

        <ul>
          <li>Bug and issue reporting</li>
          <li>Issue prioritization and triage</li>
          <li>Project and workspace management</li>
          <li>Assignment and status tracking</li>
          <li>Comments and collaboration</li>
          <li>Attachments and screenshots</li>
          <li>Notifications</li>
          <li>Integrations and APIs</li>
          <li>Analytics and reporting</li>
          <li>AI-assisted or automated issue analysis, where available</li>
        </ul>

        <p>
          We may add, modify, or remove features from the Service over time.
        </p>
      </>
    ),
  },
  {
    title: "2. Acceptance of These Terms",
    content: (
      <>
        <p>
          By using d_bug, you confirm that you have the legal capacity to enter
          into these Terms and that the information you provide is accurate and
          current.
        </p>

        <p>You agree to:</p>

        <ul>
          <li>Use the Service in accordance with applicable laws.</li>
          <li>Comply with these Terms and applicable policies.</li>
          <li>
            Have authority to use d_bug on behalf of an organization when
            acting for that organization.
          </li>
        </ul>

        <p>
          If you use d_bug on behalf of a company, team, or other organization,
          “you” includes both you and that organization.
        </p>
      </>
    ),
  },
  {
    title: "3. Your d_bug Account",
    content: (
      <>
        <p>Certain features require you to create an account.</p>

        <p>You are responsible for:</p>

        <ul>
          <li>Providing accurate registration information.</li>
          <li>Keeping your login credentials confidential.</li>
          <li>Maintaining the security of your account.</li>
          <li>All activity performed through your account.</li>
          <li>
            Immediately notifying us of unauthorized access or suspected
            security issues.
          </li>
        </ul>

        <p>
          d_bug may suspend or restrict an account where we reasonably believe
          it has been compromised, is being misused, or is being used in
          violation of these Terms.
        </p>
      </>
    ),
  },
  {
    title: "4. Workspaces and Organizations",
    content: (
      <>
        <p>
          d_bug may allow users to create or join workspaces, projects, teams,
          or organizations.
        </p>

        <p>Workspace administrators may have authority to:</p>

        <ul>
          <li>Invite or remove members.</li>
          <li>Assign roles and permissions.</li>
          <li>Create and manage projects.</li>
          <li>Access or manage workspace content.</li>
          <li>Configure workspace settings.</li>
          <li>Control access to workspace resources.</li>
        </ul>

        <p>
          If you join an organization or workspace, your access and permissions
          may be controlled by that organization's administrators.
        </p>
      </>
    ),
  },
  {
    title: "5. Your Content",
    content: (
      <>
        <p>
          “Your Content” means information, files, text, screenshots, logs, bug
          reports, source-code snippets, comments, attachments, or other
          material that you submit to d_bug.
        </p>

        <p>
          You retain ownership of Your Content. You grant d_bug a limited,
          worldwide, non-exclusive license to host, store, reproduce, process,
          transmit, and display Your Content solely as reasonably necessary to
          provide, maintain, secure, and improve the Service.
        </p>

        <p>
          You represent that you have the necessary rights and permissions to
          submit Your Content to d_bug.
        </p>
      </>
    ),
  },
  {
    title: "6. Sensitive Information",
    content: (
      <>
        <p>
          d_bug is designed for software development and bug triage
          information. You should avoid submitting highly sensitive
          information unless the relevant d_bug feature expressly supports it.
        </p>

        <p>Do not intentionally upload:</p>

        <ul>
          <li>Passwords or authentication secrets.</li>
          <li>Private API keys or access tokens.</li>
          <li>Payment card information.</li>
          <li>Highly sensitive personal information.</li>
          <li>Private encryption keys.</li>
          <li>Credentials belonging to another person.</li>
          <li>Confidential information you are not authorized to disclose.</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Acceptable Use",
    content: (
      <>
        <p>You agree not to use d_bug to:</p>

        <ul>
          <li>Break or violate applicable laws or regulations.</li>
          <li>Gain unauthorized access to systems, networks, accounts, or data.</li>
          <li>Upload malware, ransomware, viruses, or malicious code.</li>
          <li>Conduct security attacks against d_bug or third-party systems.</li>
          <li>Attempt to bypass authentication or authorization controls.</li>
          <li>Interfere with the operation or availability of the Service.</li>
          <li>Abuse APIs, automation, rate limits, or infrastructure.</li>
          <li>Scrape or systematically extract data without authorization.</li>
          <li>Impersonate another person or organization.</li>
          <li>Upload infringing content.</li>
          <li>Distribute spam, scams, or malicious content.</li>
          <li>Use the Service to facilitate unlawful activity.</li>
          <li>Circumvent subscription or access restrictions.</li>
        </ul>

        <p>
          We reserve the right to investigate suspected violations and take
          appropriate action.
        </p>
      </>
    ),
  },
  {
    title: "8. Bug Reports and Security Research",
    content: (
      <>
        <p>
          d_bug may contain bug reports, vulnerability reports, logs, stack
          traces, screenshots, and other technical information.
        </p>

        <p>
          You are responsible for ensuring that you have permission to submit
          such information.
        </p>

        <p>
          You must not use d_bug to test, attack, or exploit systems that you
          do not own or have explicit authorization to test.
        </p>

        <p>
          Nothing in these Terms grants you permission to perform security
          testing against d_bug infrastructure or any third-party system.
        </p>
      </>
    ),
  },
  {
    title: "9. Intellectual Property",
    content: (
      <>
        <p>
          The d_bug Service, including its software, interface, design,
          branding, logos, documentation, and original content, is owned by or
          licensed to d_bug and is protected by applicable intellectual-property
          laws.
        </p>

        <p>Except as expressly permitted, you may not:</p>

        <ul>
          <li>Copy or reproduce the Service.</li>
          <li>Modify or create derivative works.</li>
          <li>Reverse engineer the Service except where legally permitted.</li>
          <li>Sell, sublicense, or redistribute the Service.</li>
          <li>Remove proprietary notices.</li>
          <li>Use d_bug branding without permission.</li>
        </ul>
      </>
    ),
  },
  {
    title: "10. Third-Party Services and Integrations",
    content: (
      <>
        <p>
          d_bug may integrate with third-party services, repositories,
          communication platforms, hosting providers, authentication systems,
          or development tools.
        </p>

        <p>
          Your use of third-party services is governed by the applicable third
          party's terms and policies.
        </p>

        <p>
          d_bug is not responsible for the availability, security, accuracy,
          or performance of third-party services.
        </p>
      </>
    ),
  },
  {
    title: "11. APIs and Automated Access",
    content: (
      <>
        <p>
          Where d_bug provides APIs or programmatic access, you agree to use
          them responsibly and within applicable limits.
        </p>

        <p>You must not:</p>

        <ul>
          <li>Attempt to circumvent rate limits.</li>
          <li>Generate excessive or abusive traffic.</li>
          <li>Use automation to disrupt the Service.</li>
          <li>Obtain data your account is not authorized to access.</li>
          <li>Share API credentials publicly.</li>
          <li>
            Use API access to reproduce or compete with the core Service
            without authorization.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "12. AI-Assisted Features",
    content: (
      <>
        <p>
          d_bug may provide AI-powered features for categorizing bugs,
          summarizing reports, suggesting priorities, identifying duplicates,
          or generating other development-related assistance.
        </p>

        <p>
          AI-generated results may be inaccurate, incomplete, or inappropriate.
          You are responsible for reviewing AI-generated information before
          relying on it for technical, security, operational, or business
          decisions.
        </p>

        <p>
          AI-assisted features should not be treated as a substitute for
          professional human judgment.
        </p>
      </>
    ),
  },
  {
    title: "13. Availability and Service Changes",
    content: (
      <>
        <p>
          We aim to keep d_bug reliable and available, but we do not guarantee
          uninterrupted or error-free operation.
        </p>

        <p>The Service may occasionally be unavailable because of:</p>

        <ul>
          <li>Maintenance.</li>
          <li>Updates.</li>
          <li>Security incidents.</li>
          <li>Infrastructure failures.</li>
          <li>Third-party service failures.</li>
          <li>Internet or network problems.</li>
          <li>Events outside our reasonable control.</li>
        </ul>
      </>
    ),
  },
  {
    title: "14. Fees and Subscriptions",
    content: (
      <>
        <p>
          If d_bug offers paid plans, applicable pricing, billing cycles, usage
          limits, and included features will be presented at the time of
          purchase or subscription.
        </p>

        <ul>
          <li>Fees are charged according to the selected billing period.</li>
          <li>You are responsible for applicable taxes and charges.</li>
          <li>
            Subscription fees are generally non-refundable except where
            required by law or expressly stated otherwise.
          </li>
          <li>
            We may change pricing prospectively with reasonable notice.
          </li>
          <li>
            Failure to make required payments may result in suspension of paid
            features.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "15. Cancellation",
    content: (
      <p>
        You may cancel your account or subscription according to the
        cancellation options provided by d_bug. Cancellation may result in the
        loss of access to certain features or paid functionality. Unless
        otherwise stated, cancellation does not automatically entitle you to a
        refund for previously paid fees.
      </p>
    ),
  },
  {
    title: "16. Data Retention and Deletion",
    content: (
      <p>
        We may retain account and project information for as long as reasonably
        necessary to provide the Service, comply with legal obligations,
        resolve disputes, enforce agreements, and maintain legitimate business
        records. When an account or workspace is deleted, associated
        information may be deleted or anonymized subject to applicable
        retention requirements, backups, and technical limitations.
      </p>
    ),
  },
  {
    title: "17. Privacy",
    content: (
      <p>
        Information collected through d_bug may be handled according to our
        Privacy Policy and applicable privacy laws. The Privacy Policy should
        be read together with these Terms.
      </p>
    ),
  },
  {
    title: "18. Disclaimers",
    content: (
      <p>
        To the maximum extent permitted by applicable law, d_bug is provided on
        an <strong>“as is”</strong> and <strong>“as available”</strong> basis.
        We do not guarantee that the Service will always be available,
        completely error-free, or satisfy every particular business or
        development requirement. Bug classifications, recommendations, and
        AI-generated results may not always be accurate.
      </p>
    ),
  },
  {
    title: "19. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by applicable law, d_bug and its
        owners, employees, affiliates, contractors, and service providers will
        not be liable for indirect, incidental, special, consequential,
        exemplary, or punitive damages arising from or related to your use of
        the Service. To the maximum extent permitted by applicable law,
        d_bug's aggregate liability arising from the Service will be limited
        to the amount you paid to d_bug for the Service during the applicable
        period giving rise to the claim.
      </p>
    ),
  },
  {
    title: "20. Indemnification",
    content: (
      <p>
        To the extent permitted by applicable law, you agree to defend,
        indemnify, and hold harmless d_bug and its owners, employees,
        affiliates, contractors, and service providers from claims,
        liabilities, damages, losses, and expenses arising from your violation
        of these Terms, your unlawful or unauthorized use of the Service, Your
        Content, your violation of another person's rights, or your violation
        of applicable laws or regulations.
      </p>
    ),
  },
  {
    title: "21. Suspension and Termination",
    content: (
      <p>
        We may suspend or terminate your access to d_bug if you materially
        violate these Terms, your account presents a security risk, you engage
        in fraudulent or unlawful activity, you abuse the Service or its
        infrastructure, required payment is not received, or we are legally
        required to do so. Where reasonably appropriate, we may provide notice
        and an opportunity to resolve the violation.
      </p>
    ),
  },
  {
    title: "22. Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. When we make material
        changes, we may provide reasonable notice through the Service, email,
        or another appropriate method. Your continued use of d_bug after the
        effective date constitutes acceptance of the updated Terms, to the
        extent permitted by applicable law.
      </p>
    ),
  },
  {
    title: "23. Governing Law",
    content: (
      <p>
        These Terms will be governed by the laws of{" "}
        <strong>[Jurisdiction]</strong>, without regard to conflict-of-law
        principles. Any disputes arising from these Terms or your use of d_bug
        will be subject to the courts or dispute-resolution procedures located
        in <strong>[Jurisdiction]</strong>, unless applicable law requires
        otherwise.
      </p>
    ),
  },
  {
    title: "24. Severability",
    content: (
      <p>
        If any provision of these Terms is found to be invalid, unlawful, or
        unenforceable, that provision will be interpreted or modified to the
        minimum extent necessary to make it enforceable. The remaining
        provisions will remain in full force and effect.
      </p>
    ),
  },
  {
    title: "25. Entire Agreement",
    content: (
      <p>
        These Terms, together with the d_bug Privacy Policy and any applicable
        additional agreements, constitute the agreement between you and d_bug
        regarding your use of the Service. If a separate written agreement
        between d_bug and an organization conflicts with these Terms, the
        separate agreement will control for that organization to the extent of
        the conflict.
      </p>
    ),
  },
  {
    title: "26. Contact",
    content: (
      <>
        <p>
          If you have questions regarding these Terms, please contact d_bug
          at:
        </p>

        <div className="mt-5 border border-zinc-800/10 dark:border-zinc-100/10 rounded-sm p-5 bg-white/50 dark:bg-zinc-900/40">
          <p className="font-semibold text-foreground">d_bug</p>
          <p>Email: [your contact email]</p>
          <p>Website: [your website URL]</p>
          <p>Address: [your business address]</p>
        </div>
      </>
    ),
  },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Background grid */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-40 dark:opacity-30" />
      <div className="fixed inset-0 -z-10 bg-grid-enhanced opacity-30" />
      <div className="fixed inset-0 -z-10 shimmer-overlay" />

      <Navbar/>

      {/* Page */}
      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-32 md:px-8 lg:px-10">
        {/* Hero */}
        <section className="mb-14 border-b border-zinc-800/10 pb-10 dark:border-zinc-100/10">
          <div className="mb-5 flex items-center gap-3 ">
            <span className="h-2 w-2 rounded-full bg-button-primary" />
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
              Legal / Terms
            </span>
          </div>

          <h1 className="page-title max-w-none">
            Terms & Conditions
          </h1>

          <p className="page-paragraph mt-6 max-w-2xl text-lg leading-8">
            The rules and conditions governing your use of d_bug, our bug
            triage and software bug management platform.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-sm border border-zinc-800/10 bg-white/60 px-3 py-1.5 font-mono text-sm text-zinc-500 dark:border-zinc-100/10 dark:bg-zinc-900/50 dark:text-zinc-400">
              Last updated: August 21, 2026
            </span>

            <span className="rounded-sm border border-zinc-800/10 bg-white/60 px-3 py-1.5 font-mono text-sm text-zinc-500 dark:border-zinc-100/10 dark:bg-zinc-900/50 dark:text-zinc-400">
              d_bug
            </span>
          </div>
        </section>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          {/* Desktop TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                On this page
              </p>

              <nav className="bug-scroll max-h-[calc(100vh-10rem)] overflow-y-auto pr-4">
                <div className="flex flex-col gap-1">
                  {TermsAndConditionsSections.map((section, index) => (
                    <a
                      key={section.title}
                      href={`#section-${index + 1}`}
                      className="border-l border-zinc-800/10 px-3 py-1.5 text-sm text-zinc-500 transition-colors hover:border-button-primary hover:text-button-primary dark:border-zinc-100/10 dark:text-zinc-400"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </aside>

          {/* Terms */}
          <article className="min-w-0">
            <div className="space-y-12">
              {TermsAndConditionsSections.map((section, index) => (
                <section
                  key={section.title}
                  id={`section-${index + 1}`}
                  className="scroll-mt-28"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <span className="mt-1 shrink-0 font-mono text-sm text-button-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {section.title.replace(/^\d+\.\s*/, "")}
                    </h2>
                  </div>

                  <div
                    className="
                      pl-0 text-sm leading-7
                      text-zinc-600
                      dark:text-zinc-400
                      md:pl-9
                      [&_p]:mb-4
                      [&_p:last-child]:mb-0
                      [&_strong]:font-semibold
                      [&_strong]:text-zinc-800
                      dark:[&_strong]:text-zinc-200
                      [&_ul]:my-5
                      [&_ul]:list-disc
                      [&_ul]:space-y-2
                      [&_ul]:pl-5
                      [&_li]:pl-1
                    "
                  >
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Agreement footer */}
            <section className="mt-16 border-t border-zinc-800/10 pt-12 dark:border-zinc-100/10">
              <div className="rounded-sm border border-button-primary/30 bg-button-primary/5 p-6 md:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-button-primary" />

                  <span className="font-mono text-sm font-bold uppercase tracking-widest text-button-primary">
                    Agreement
                  </span>
                </div>

                <h2 className="text-2xl font-semibold">
                  Built for cleaner bug triage.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  By creating an account or continuing to use d_bug, you
                  acknowledge that you have read, understood, and agreed to
                  these Terms & Conditions.
                </p>

                <Link
                  to="/"
                  className="mt-6 inline-flex items-center rounded-sm bg-button-primary px-5 py-3 text-sm font-bold text-secondary 
                  transition-opacity hover:opacity-90"
                >
                  Back to Home
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>

      <Footer/>
    </main>
  );
}