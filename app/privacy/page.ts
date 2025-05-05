import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - RunAsh AI",
  description: "RunAsh AI Privacy Policy and Data Protection Information",
}

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">Last updated: April 30, 2023</p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            At RunAsh AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our platform.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect several types of information from and about users of our platform, including:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, postal address, phone number, and other
              identifiers that you provide when registering or using our services.
            </li>
            <li>
              <strong>Account Information:</strong> Username, password, account preferences, and user type (creator,
              seller, buyer, or business).
            </li>
            <li>
              <strong>Content:</strong> Information and content that you create, upload, or share on our platform,
              including streams, videos, comments, and messages.
            </li>
            <li>
              <strong>Transaction Information:</strong> Details about purchases or transactions made on our platform,
              including payment information.
            </li>
            <li>
              <strong>Usage Information:</strong> Information about how you use our platform, including your browsing
              history, search queries, and interactions with content.
            </li>
            <li>
              <strong>Device Information:</strong> Information about the device you use to access our platform,
              including IP address, browser type, operating system, and device identifiers.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our platform</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative messages, updates, and security alerts</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Personalize your experience on our platform</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, prevent, and address technical issues, fraud, and illegal activities</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. AI Features and Data Processing</h2>
          <p>
            Our platform uses artificial intelligence technologies to provide features such as real-time translation,
            content moderation, and personalized recommendations. When you use these features:
          </p>
          <ul>
            <li>We process your content through our AI systems to provide the requested functionality</li>
            <li>We may use anonymized and aggregated data to improve our AI models</li>
            <li>You maintain ownership of your content, but grant us the necessary licenses to process it</li>
          </ul>

          <h2>4. Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who perform services on our behalf</li>
            <li>Business partners with your consent</li>
            <li>Other users, according to your privacy settings</li>
            <li>Law enforcement or other authorities when required by law</li>
            <li>In connection with a business transaction, such as a merger or acquisition</li>
          </ul>

          <h2>5. Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to processing</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information from
            unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h2>7. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. We
            ensure appropriate safeguards are in place to protect your information when transferred internationally.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our platform is not intended for children under the age of 13. We do not knowingly collect personal
            information from children under 13.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <Link href="mailto:privacy@runash.ai" className="text-orange-600 hover:underline dark:text-orange-400">
              privacy@runash.ai
            </Link>
          </p>
        </div>

        <div className="rounded-lg border bg-muted/20 p-4">
          <p className="text-sm text-muted-foreground">
            By using RunAsh AI, you consent to our Privacy Policy and our collection, use, and sharing of your
            information as described above.
          </p>
        </div>
      </div>
    </div>
  )
}
