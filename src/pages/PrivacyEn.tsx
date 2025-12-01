import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyEn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>

        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <section className="bg-muted/30 p-6 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">TL;DR</h3>
            <p className="text-muted-foreground mb-4">
              PeekabooLabs, Inc. aims to provide a privacy-centric <strong>Offline-first</strong> service.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>All Data Stays on the Device:</strong> User-registered <strong>files</strong>,{" "}
                <strong>chat history with AI</strong>, and <strong>search indices</strong> are stored 100% encrypted
                within the user's device (PC) and are not transmitted to the Company's servers.
              </li>
              <li>
                <strong>Minimal External Connections:</strong> Communication with external servers is performed strictly
                for <strong>login (account authentication)</strong>, <strong>subscription status checks</strong>, and{" "}
                <strong>downloading the latest AI models</strong>.
              </li>
            </ul>
          </section>

          <hr className="border-border" />

          <p className="text-muted-foreground">
            peekabooLabs, Inc. (hereinafter referred to as the "Company") complies with the "Personal Information
            Protection Act" and relevant laws to protect the freedom and rights of data subjects, and processes personal
            information transparently and safely. The Company establishes and discloses this Privacy Policy in
            accordance with Article 30 of the "Personal Information Protection Act" to guide data subjects on matters
            regarding the processing of personal information and to handle grievances promptly and smoothly.
          </p>

          <p className="text-muted-foreground">Effective Date: November 1, 2025</p>
          <p className="text-muted-foreground">Last Revised Date: November 1, 2025</p>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              1. Purpose, Items, and Retention/Usage Period of Personal Information Processing
            </h2>
            <p className="text-muted-foreground mb-4">
              The Company collects and uses the minimum amount of personal information necessary for service provision
              and does not use it for purposes other than those intended. If the purpose of processing changes, separate
              consent will be obtained in accordance with Article 18 of the "Personal Information Protection Act."
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">
              1. Personal information processed with the consent of the data subject
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">Purpose of Collection</th>
                    <th className="border border-border px-4 py-2 text-left">Items Collected</th>
                    <th className="border border-border px-4 py-2 text-left">Retention and Usage Period</th>
                    <th className="border border-border px-4 py-2 text-left">Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Membership registration and service usage</td>
                    <td className="border border-border px-4 py-2">
                      [Required] Email
                      <br />
                      [Optional] Name, Contact Information, ID, Password, Date of Birth, Gender, Profile Picture
                    </td>
                    <td className="border border-border px-4 py-2">
                      Until membership withdrawal or retention period according to relevant laws
                    </td>
                    <td className="border border-border px-4 py-2">
                      Personal Information Protection Act Article 15, Paragraph 1, Item 1
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4 font-bold">
              ※ The information collected is used solely for 'account identification' and 'subscription management', and
              user 'data (files, conversations)' is not collected.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">2. Retention according to relevant laws</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">Items Stored</th>
                    <th className="border border-border px-4 py-2 text-left">Retention Period</th>
                    <th className="border border-border px-4 py-2 text-left">Relevant Laws</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Records on contract, withdrawal of subscription, payment, and supply of goods
                    </td>
                    <td className="border border-border px-4 py-2">5 years</td>
                    <td className="border border-border px-4 py-2">
                      Act on the Consumer Protection in Electronic Commerce, Etc.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Records on consumer complaints and dispute resolution
                    </td>
                    <td className="border border-border px-4 py-2">3 years</td>
                    <td className="border border-border px-4 py-2">Same as above</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Records on labeling and advertising</td>
                    <td className="border border-border px-4 py-2">6 months</td>
                    <td className="border border-border px-4 py-2">Same as above</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Access records (IP, activity history, etc.)</td>
                    <td className="border border-border px-4 py-2">3 months</td>
                    <td className="border border-border px-4 py-2">
                      Protection of Communications Secrets Act Article 15-2
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              2. Matters Concerning the Provision of Personal Information to Third Parties
            </h2>
            <p className="text-muted-foreground mb-4">
              In principle, the Company does not provide personal information to third parties. However, exceptions are
              made in the following cases:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>When separate consent is obtained from the data subject.</li>
              <li>When provision is required by law.</li>
              <li>
                When there is an imminent danger to the life, body, or property of the data subject or a third party.
              </li>
            </ol>
            <p className="text-muted-foreground mt-4">
              The Company does not currently provide personal information to third parties, and if such provision
              becomes necessary in the future, the Company plans to notify the data subject in advance and obtain
              consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. Matters Concerning the Outsourcing of Personal Information Processing
            </h2>
            <p className="text-muted-foreground mb-4">
              The Company outsources personal information processing tasks externally to provide services.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">Trustee (Subcontractor)</th>
                    <th className="border border-border px-4 py-2 text-left">Content of Outsourced Work</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Google LLC</td>
                    <td className="border border-border px-4 py-2">
                      Statistical Analysis (Google Analytics, Firebase)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Lemon Squeezy, LLC</td>
                    <td className="border border-border px-4 py-2">Provision of Payment Services</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Amazon Web Services, Inc.</td>
                    <td className="border border-border px-4 py-2">
                      Server Operation and Storage, Encryption Key Management (KMS)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              When concluding a contract with a trustee, the Company clearly states matters regarding the management and
              supervision of the trustee, restrictions on re-outsourcing, and technical protection measure obligations
              in accordance with Article 26 of the "Personal Information Protection Act," and periodically checks
              whether the trustee processes personal information safely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              4. Matters Concerning the Overseas Transfer of Personal Information
            </h2>
            <p className="text-muted-foreground mb-4">
              The Company transfers personal information overseas for service operation as follows.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">Trustee Company</th>
                    <th className="border border-border px-4 py-2 text-left">Country</th>
                    <th className="border border-border px-4 py-2 text-left">Transfer Time and Method</th>
                    <th className="border border-border px-4 py-2 text-left">Contact</th>
                    <th className="border border-border px-4 py-2 text-left">Items</th>
                    <th className="border border-border px-4 py-2 text-left">Purpose</th>
                    <th className="border border-border px-4 py-2 text-left">Retention and Usage Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Amazon Web Services, Inc.</td>
                    <td className="border border-border px-4 py-2">USA</td>
                    <td className="border border-border px-4 py-2">Upon login</td>
                    <td className="border border-border px-4 py-2">
                      <a href="mailto:aws-korea-privacy@amazon.com" className="text-primary hover:underline">
                        aws-korea-privacy@amazon.com
                      </a>
                    </td>
                    <td className="border border-border px-4 py-2">Email, Device Information</td>
                    <td className="border border-border px-4 py-2">Server Operation and Storage</td>
                    <td className="border border-border px-4 py-2">Until the end of the outsourcing contract</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Google LLC</td>
                    <td className="border border-border px-4 py-2">USA</td>
                    <td className="border border-border px-4 py-2">Upon login</td>
                    <td className="border border-border px-4 py-2">
                      <a href="mailto:googlekrsupport@google.com" className="text-primary hover:underline">
                        googlekrsupport@google.com
                      </a>
                    </td>
                    <td className="border border-border px-4 py-2">Email, Device Information</td>
                    <td className="border border-border px-4 py-2">Server Operation and Storage</td>
                    <td className="border border-border px-4 py-2">Until the end of the outsourcing contract</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              ※ If you do not wish for your information to be transferred overseas, you may handle this by disconnecting
              external services or withdrawing your membership.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              5. Procedures and Methods for Destruction of Personal Information
            </h2>
            <p className="text-muted-foreground mb-4">
              The Company destroys personal information without delay when the retention period has elapsed or the
              purpose of processing has been achieved.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Electronic files</strong>: Deleted using technical methods that make recovery impossible (e.g.,
                permanent deletion from database and overwriting).
              </li>
              <li>
                <strong>Paper documents</strong>: Shredded or incinerated.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Information required to be preserved separately under relevant laws is stored separately from other
              information and kept safely. Additionally, upon user request or withdrawal, relevant data is immediately
              deleted in a non-recoverable manner, and logs are destroyed after being kept for at least 1 year.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Rights and Obligations of Data Subjects and Legal Representatives and Methods of Exercise
            </h2>
            <p className="text-muted-foreground mb-4">Data subjects may exercise the following rights at any time:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Request for access to personal information</li>
              <li>Request for correction if there are errors</li>
              <li>Request for deletion</li>
              <li>Request for suspension of processing</li>
            </ol>
            <p className="text-muted-foreground mt-4">
              These rights can be exercised through the [My Info] menu within the website, or via written letter or
              email.
            </p>
            <p className="text-muted-foreground mt-4">
              ※ The Company does not collect personal information of children under the age of 14, and as it does not
              operate procedures for verifying birth dates or obtaining legal representative consent, service usage is
              restricted for those under 14. If it is confirmed that a child under 14 has signed up, the account will be
              immediately deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Matters Concerning the Installation, Operation, and Refusal of Automatic Personal Information
              Collection Devices
            </h2>
            <p className="text-muted-foreground mb-4">
              The Company may operate automatic collection devices, including cookies, to provide services.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Items Collected</strong>: Service usage records, access logs, device information, etc.
              </li>
              <li>
                <strong>Purpose of Collection</strong>: Provision of customized services, security maintenance,
                statistical analysis, etc.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Data subjects can refuse or delete cookie storage through web browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              8. Matters Concerning the Collection, Use, and Refusal of Behavioral Information
            </h2>
            <p className="text-muted-foreground mb-4">
              In the process of using the service, the following information is automatically generated/collected from
              users and may be used for the following purposes.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Purpose of Use for Automatically Collected Personal Information</strong>
                <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                  <li>
                    <strong>Compliance with Relevant Laws</strong>: The Company is obligated to store user access
                    records (logins) for compliance with relevant laws.
                  </li>
                  <li>
                    <strong>Web Usability Analysis and Improvement</strong>: Visit dates, service usage records, and
                    Cookie ID items are collected, retained, and used for 5 years from the collection date, and
                    immediately deleted after the period expires.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Guidance on Automatic Collection of Personal Information and Refusal Methods</strong>
                <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                  <li>
                    <strong>
                      Installation, Operation, and Refusal Methods for Automatic Personal Information Collection Devices
                      (Cookies, etc.)
                    </strong>
                    :
                    <p className="mt-2 ml-6">
                      You can refuse or delete the storage of cookies, etc., through the methods below.
                    </p>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>
                        <strong>[Web]</strong>
                        <p className="ml-6 mt-1">
                          For Internet Explorer: Tools &gt; Internet Options &gt; Privacy tab &gt; Settings
                        </p>
                        <p className="ml-6">
                          For Microsoft Edge: Menu &gt; Settings &gt; View advanced settings &gt; Cookies menu settings
                        </p>
                        <p className="ml-6">
                          For Chrome: Menu &gt; Settings &gt; Advanced &gt; Content settings &gt; Cookies menu settings
                        </p>
                      </li>
                      <li>
                        <strong>[Mobile]</strong>
                        <p className="ml-6 mt-1">
                          For Chrome Mobile: Chrome App &gt; More (top right) &gt; History &gt; Clear browsing data &gt;
                          Select time range &gt; Check 'Cookies and site data' and 'Cached images and files' &gt; Clear
                          data
                        </p>
                        <p className="ml-6">
                          For Safari Mobile: Safari App &gt; Clear History and Website Data &gt; Confirm
                        </p>
                        <p className="ml-6">
                          For Naver Mobile: Naver App &gt; Settings &gt; Clear Cache + Internet Usage History &gt;
                          Delete Cookies
                        </p>
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Privacy Officer and Grievance Handling Department</h2>
            <p className="text-muted-foreground mb-4">
              The Company has designated a Chief Privacy Officer to oversee personal information-related tasks.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Name: Jeonghwan Seo</li>
              <li>Email: contact@peekaboolabs.ai</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Please contact the above information for inquiries regarding personal information, requests for exercising
              rights, or grievance handling, and we will process them without delay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Security Measures</h2>
            <p className="text-muted-foreground mb-4">
              The Company takes the following technical, managerial, and physical measures to protect personal
              information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Local Encrypted Storage of Data</strong>: User's all file indexing data and chat history with AI
                are stored <strong>only within the user's personal device (PC, etc.)</strong>.
              </li>
              <li>
                <strong>Minimization of Server Transmission</strong>: Except for 'login authentication information' and
                'subscription status information' required for service use, no user content (file content, questions,
                etc.) is transmitted to or stored on the Company's servers.
              </li>
              <li>
                <strong>Encryption in Transit</strong>: When communicating with the server for authentication processes,
                secure protocols such as SSL/TLS are used to ensure safe transmission.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Obligation of Notification and Policy Changes</h2>
            <p className="text-muted-foreground mb-4">
              This Privacy Policy may be revised according to changes in laws or service content. In the event of
              changes, notification will be given at least 7 days prior to the revision.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Notification Method: Notice via website or email</li>
              <li>In case of significant changes: Notification at least 30 days in advance</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyEn;
