import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Recloud",
  description: "Privacy Policy for Recloud (Pty) Ltd",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <Link href="/#top" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary-foreground overflow-hidden">
              <Image
                src="/images/recloud-logo.png"
                alt="Recloud Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl font-semibold text-primary-foreground">
              Recloud
            </span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p className="mt-3">
              Recloud (Pty) Ltd ("Recloud", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our managed IT services. By accessing our services, you agree to the terms outlined in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p className="mt-3">We may collect the following types of information:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, company name, and physical address when you contact us or request our services.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser type, operating system, and other technical data collected automatically when you visit our website.
              </li>
              <li>
                <strong>Service Data:</strong> Information related to your IT infrastructure that is necessary for us to provide our managed IT services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our IT services</li>
              <li>Respond to your enquiries and support requests</li>
              <li>Communicate with you about service updates, maintenance, and security matters</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Information Sharing</h2>
            <p className="mt-3">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>With trusted service providers who assist us in delivering our services, subject to confidentiality agreements</li>
              <li>When required by law or to comply with legal proceedings</li>
              <li>To protect the rights, property, or safety of Recloud, our clients, or others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
            <p className="mt-3">
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Data Retention</h2>
            <p className="mt-3">
              We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. When your data is no longer needed, we will securely delete or anonymise it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Your Rights</h2>
            <p className="mt-3">
              In accordance with the Protection of Personal Information Act (POPIA), you have the right to:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to the processing of your personal information</li>
              <li>Lodge a complaint with the Information Regulator</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Cookies</h2>
            <p className="mt-3">
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">9. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">10. Contact Us</h2>
            <p className="mt-3">
              If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@recloud.co.za" className="text-primary hover:underline">
                  info@recloud.co.za
                </a>
              </li>
              <li>
                <strong>Address:</strong> 2 Sonop Street, Arauna, Cape Town, 7560
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link href="/#top" className="text-sm text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
