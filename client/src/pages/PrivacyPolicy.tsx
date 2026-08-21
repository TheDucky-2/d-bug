import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const PrivacySections = [
  {
    number: "01",
    title: "Introduction",
    content: (
      <>
        <p>
          This Privacy Policy explains how <strong>d_bug</strong> collects,
          uses, stores, and protects information when you use our bug triage
          and software issue management platform.
        </p>

        <p>
          In this policy, “d_bug,” “we,” “us,” and “our” refer to the operator
          of the d_bug Service. “You” refers to the person or organization
          using the Service.
        </p>

        <p>
          By using d_bug, you acknowledge that you have read and understood
          this Privacy Policy.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We collect information that is necessary to provide, secure, and
          improve d_bug.
        </p>

        <p>This may include:</p>

        <ul>
          <li>Your name and email address.</li>
          <li>Account and authentication information.</li>
          <li>Organization and workspace information.</li>
          <li>Project and team information.</li>
          <li>Bug reports and issue descriptions.</li>
          <li>Comments, labels, priorities, and statuses.</li>
          <li>Screenshots, attachments, and logs.</li>
          <li>Information received through integrations.</li>
          <li>Billing information where applicable.</li>
          <li>Device, browser, and diagnostic information.</li>
        </ul>
      </>
    ),
  },

  {
    number: "03",
    title: "Account Information",
    content: (
      <>
        <p>
          When you create a d_bug account, we may collect information such as
          your name, email address, username, organization, and authentication
          information.
        </p>

        <p>
          We use this information to create and maintain your account,
          authenticate you, communicate with you, and provide access to the
          Service.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Bug Reports and Project Data",
    content: (
      <>
        <p>
          d_bug is designed to process software development and bug triage
          information submitted by users.
        </p>

        <p>
          This may include bug descriptions, reproduction steps, stack traces,
          screenshots, source-code snippets, logs, comments, labels,
          priorities, assignments, and other project information.
        </p>

        <p>
          We process this information primarily to provide the d_bug features
          requested by you or your organization.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Information From Integrations",
    content: (
      <>
        <p>
          You may connect d_bug with third-party services such as source
          control platforms, communication tools, project management systems,
          or other development services.
        </p>

        <p>
          When you connect an integration, d_bug may receive information from
          that service according to the permissions you grant.
        </p>

        <p>
          You should review the privacy policies of services you connect to
          d_bug.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Automatically Collected Information",
    content: (
      <>
        <p>
          When you access d_bug, certain technical information may be
          automatically collected.
        </p>

        <ul>
          <li>IP address.</li>
          <li>Browser type and version.</li>
          <li>Operating system.</li>
          <li>Device information.</li>
          <li>Approximate network-based location.</li>
          <li>Pages and features accessed.</li>
          <li>Session information.</li>
          <li>Error and diagnostic information.</li>
          <li>Date and time of access.</li>
        </ul>

        <p>
          We use this information to operate the Service, diagnose problems,
          improve performance, and protect d_bug from abuse.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "How We Use Information",
    content: (
      <>
        <p>We may use collected information to:</p>

        <ul>
          <li>Provide and operate d_bug.</li>
          <li>Create and manage accounts.</li>
          <li>Process bug reports and project information.</li>
          <li>Provide collaboration features.</li>
          <li>Authenticate users.</li>
          <li>Process subscriptions and payments.</li>
          <li>Provide customer support.</li>
          <li>Send service-related communications.</li>
          <li>Monitor and improve Service performance.</li>
          <li>Detect and prevent abuse or security incidents.</li>
          <li>Develop and improve features.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </>
    ),
  },

  {
    number: "08",
    title: "Legal Bases for Processing",
    content: (
      <>
        <p>
          Where applicable privacy laws require a legal basis for processing
          personal information, we may rely on:
        </p>

        <ul>
          <li>Performance of a contract with you.</li>
          <li>Your consent.</li>
          <li>Our legitimate business interests.</li>
          <li>Compliance with legal obligations.</li>
          <li>Protection of our rights and systems.</li>
        </ul>
      </>
    ),
  },

  {
    number: "09",
    title: "AI-Assisted Features",
    content: (
      <>
        <p>
          d_bug may offer AI-assisted functionality for tasks such as bug
          summarization, categorization, prioritization, duplicate detection,
          or issue analysis.
        </p>

        <p>
          When you use an AI-assisted feature, relevant information may be
          processed to generate the requested result.
        </p>

        <p>
          AI-generated results may be inaccurate or incomplete. Users should
          review generated results before relying on them for technical,
          security, operational, or business decisions.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>
          d_bug may use cookies, local storage, session technologies, and
          similar technologies to operate the Service.
        </p>

        <p>These technologies may be used to:</p>

        <ul>
          <li>Maintain authentication sessions.</li>
          <li>Remember preferences.</li>
          <li>Maintain security.</li>
          <li>Understand Service usage.</li>
          <li>Improve performance.</li>
        </ul>
      </>
    ),
  },

  {
    number: "11",
    title: "How We Share Information",
    content: (
      <>
        <p>
          We do not sell your personal information.
        </p>

        <p>
          We may share information with trusted service providers when
          reasonably necessary to operate d_bug.
        </p>

        <ul>
          <li>Cloud hosting providers.</li>
          <li>Database and infrastructure providers.</li>
          <li>Authentication providers.</li>
          <li>Payment processors.</li>
          <li>Email providers.</li>
          <li>Analytics and monitoring providers.</li>
          <li>AI service providers.</li>
          <li>Customer support providers.</li>
          <li>Security providers.</li>
        </ul>
      </>
    ),
  },

  {
    number: "12",
    title: "Workspace and Organization Administrators",
    content: (
      <>
        <p>
          If you use d_bug through an organization, company, or team workspace,
          administrators may have access to information associated with that
          workspace.
        </p>

        <p>
          Depending on your organization's configuration, administrators may
          be able to view, modify, export, or delete project information and
          manage user access.
        </p>
      </>
    ),
  },

  {
    number: "13",
    title: "Data Security",
    content: (
      <>
        <p>
          We take reasonable technical and organizational measures designed to
          protect information against unauthorized access, alteration,
          disclosure, destruction, or loss.
        </p>

        <p>
          Security measures may include authentication controls, access
          restrictions, encryption, monitoring, logging, and infrastructure
          security controls.
        </p>

        <p>
          However, no internet-based service can guarantee absolute security.
        </p>
      </>
    ),
  },

  {
    number: "14",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain information for as long as reasonably necessary to provide
          the Service and for legitimate business purposes.
        </p>

        <p>
          Retention periods may depend on the type of information, the purpose
          for which it was collected, account status, contractual obligations,
          and applicable legal requirements.
        </p>
      </>
    ),
  },

  {
    number: "15",
    title: "Data Deletion",
    content: (
      <>
        <p>
          You may request deletion of your personal information or account,
          subject to applicable legal and contractual requirements.
        </p>

        <p>
          Some information may remain in backups or security logs for a
          limited period after deletion.
        </p>
      </>
    ),
  },

  {
    number: "16",
    title: "International Data Transfers",
    content: (
      <>
        <p>
          Depending on where d_bug and its service providers operate,
          information may be processed or stored in countries other than the
          country where you live.
        </p>

        <p>
          Where required by applicable law, we will use appropriate safeguards
          for international transfers of personal information.
        </p>
      </>
    ),
  },

  {
    number: "17",
    title: "Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on your location and applicable law, you may have rights
          relating to your personal information.
        </p>

        <p>These may include:</p>

        <ul>
          <li>Requesting access to your information.</li>
          <li>Requesting correction of inaccurate information.</li>
          <li>Requesting deletion of personal information.</li>
          <li>Requesting restriction of certain processing.</li>
          <li>Objecting to certain processing.</li>
          <li>Requesting portability of certain information.</li>
          <li>Withdrawing consent where applicable.</li>
        </ul>
      </>
    ),
  },

  {
    number: "18",
    title: "Children's Privacy",
    content: (
      <p>
        d_bug is intended for professional and software development use. The
        Service is not directed toward children who are below the minimum age
        required to use the Service under applicable law.
      </p>
    ),
  },

  {
    number: "19",
    title: "Third-Party Links and Services",
    content: (
      <p>
        d_bug may contain links to or integrations with third-party websites,
        applications, repositories, and services. We are not responsible for
        the privacy practices, security, or content of third-party services.
      </p>
    ),
  },

  {
    number: "20",
    title: "Business Transfers",
    content: (
      <p>
        If d_bug is involved in a merger, acquisition, financing,
        restructuring, sale of assets, or similar transaction, information
        associated with the Service may be transferred as part of that
        transaction, subject to applicable law.
      </p>
    ),
  },

  {
    number: "21",
    title: "Legal Disclosures",
    content: (
      <p>
        We may disclose information when we reasonably believe disclosure is
        necessary to comply with applicable law, legal process, court orders,
        governmental requests, or to protect the rights, safety, security,
        and property of d_bug, our users, or others.
      </p>
    ),
  },

  {
    number: "22",
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. When we make
        material changes, we may provide notice through d_bug, email, or other
        appropriate methods. The updated policy will include a revised “Last
        Updated” date.
      </p>
    ),
  },

  {
    number: "23",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or want to exercise
          an applicable privacy right, contact us at:
        </p>

        <div className="mt-5 rounded-sm border border-zinc-800/10 bg-white/50 p-5 dark:border-zinc-100/10 dark:bg-zinc-900/40">
          <p className="font-semibold text-foreground">d_bug</p>

          <p>
            Email:{" "}
            <a
              href="mailto:privacy@example.com"
              className="text-button-primary hover:underline"
            >
              privacy@example.com
            </a>
          </p>

          <p>Website: [your website URL]</p>

          <p>Address: [your business address]</p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-40 dark:opacity-30" />

      <div className="fixed inset-0 -z-10 bg-grid-enhanced opacity-30" />

      <div className="fixed inset-0 -z-10 shimmer-overlay" />

      {/* Navbar */}
     <Navbar/>
      
      {/* Main */}
      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-32 md:px-8 lg:px-10">

        {/* Header */}
        <section className="mb-14 border-b border-zinc-800/10 pb-10 dark:border-zinc-100/10">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-button-primary" />

            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
              Legal / Privacy
            </span>
          </div>

          <h1 className="page-title max-w-none">
            Privacy Policy
          </h1>

          <p className="page-paragraph mt-6 max-w-2xl text-lg leading-8">
            How d_bug collects, uses, protects, and manages information when
            you use our bug triage and software issue management platform.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-sm border border-zinc-800/10 bg-white/60 px-3 py-1.5 font-mono text-xs text-zinc-500 dark:border-zinc-100/10 dark:bg-zinc-900/50 dark:text-zinc-400">
              Last updated: August 21, 2026
            </span>

            <span className="rounded-sm border border-zinc-800/10 bg-white/60 px-3 py-1.5 font-mono text-xs text-zinc-500 dark:border-zinc-100/10 dark:bg-zinc-900/50 dark:text-zinc-400">
              d_bug
            </span>
          </div>
        </section>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">

          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">

              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                On this page
              </p>

              <nav className="bug-scroll max-h-[calc(100vh-10rem)] overflow-y-auto pr-4">
                <div className="flex flex-col gap-1">
                  {PrivacySections.map((section) => (
                    <a
                      key={section.number}
                      href={`#section-${section.number}`}
                      className="border-l border-zinc-800/10 px-3 py-1.5 text-xs text-zinc-500 transition-colors hover:border-button-primary hover:text-button-primary dark:border-zinc-100/10 dark:text-zinc-400"
                    >
                      {section.number}. {section.title}
                    </a>
                  ))}
                </div>
              </nav>

            </div>
          </aside>

          {/* Policy */}
          <article className="min-w-0">
            <div className="space-y-12">

              {PrivacySections.map((section) => (
                <section
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-28"
                >
                  <div className="mb-5 flex items-start gap-4">

                    <span className="mt-1 shrink-0 font-mono text-xs text-button-primary">
                      {section.number}
                    </span>

                    <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {section.title}
                    </h2>

                  </div>

                  <div
                    className="
                      pl-0
                      text-sm
                      leading-7
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

            {/* Bottom card */}
            <section className="mt-16 border-t border-zinc-800/10 pt-12 dark:border-zinc-100/10">
              <div className="rounded-sm border border-button-primary/30 bg-button-primary/5 p-6 md:p-8">

                <div className="mb-3 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-button-primary" />

                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-button-primary">
                    Privacy
                  </span>
                </div>

                <h2 className="text-2xl font-semibold">
                  Your data. Your projects. Your control.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  If you have questions about how your information is handled
                  by d_bug, we're here to help.
                </p>

                <a
                  href="mailto:privacy@example.com"
                  className="mt-6 inline-flex items-center rounded-sm bg-button-primary px-5 py-3 text-sm font-semibold
                    transition-opacity hover:opacity-90 text-secondary" 
                >
                  Contact us
                </a>

              </div>
            </section>

          </article>
        </div>
      </div>

      {/* Footer */}
        <Footer/>
    </main>
  );
}