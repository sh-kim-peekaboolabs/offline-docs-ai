import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsEn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>

        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">
            <strong>Effective Date:</strong> November 1, 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 1 (Purpose)</h2>
            <p className="text-muted-foreground">
              The purpose of these Terms of Service (hereinafter referred to as the "Terms") is to prescribe the
              conditions and procedures for the use of the "LocalDocs" service and other related services (collectively
              referred to as the "Service") operated by Peekaboo Labs, Inc. (hereinafter referred to as the "Company"),
              and other necessary matters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 2 (Definitions)</h2>
            <p className="text-muted-foreground mb-4">The terms used in these Terms are defined as follows:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>"Service"</strong> means the services provided by the Company through the website, desktop
                applications, etc., operated by the Company.
              </li>
              <li>
                <strong>"Member"</strong> means a person who has agreed to these Terms, concluded a usage contract with
                the Company, and uses the Service provided by the Company.
              </li>
              <li>
                <strong>"Non-Member"</strong> means a person who uses the information and services provided by the
                Company without registering as a Member.
              </li>
              <li>
                <strong>"Paid Service"</strong> means the Company's services that a Member uses upon payment of a fee.
              </li>
              <li>
                <strong>"Content"</strong> means codes, text, voice, sound, images, video, figures, colors, graphics,
                etc. (including composites thereof) provided by the Company to the Member, and includes results created
                on the Service by the Member using the functions provided by the Service.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 3 (Posting, Effect, and Amendment of Terms)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                The Company shall post the contents of these Terms on the front page of the website or within the
                LocalDocs Service so that Members can easily understand them. However, the contents of the Terms may be
                made available to Members through a connected screen.
              </li>
              <li>
                The Company may amend these Terms to the extent that it does not violate relevant laws, such as the
                「Act on the Consumer Protection in Electronic Commerce」, 「Act on the Regulation of Terms and
                Conditions」, 「Framework Act on Electronic Documents and Transactions」, 「Electronic Financial
                Transactions Act」, 「Digital Signature Act」, 「Act on Promotion of Information and Communications
                Network Utilization and Information Protection」, 「Act on Door-to-Door Sales」, and the 「Framework Act
                on Consumers」.
              </li>
              <li>
                If the Company amends these Terms, it shall specify the effective date and the reason for the amendment
                and announce them on the initial screen of the Company along with the current Terms from 7 days prior to
                the effective date until the day before the effective date. However, if the contents of the Terms are
                changed unfavorably to the Member, notice shall be given with a grace period of at least 30 days in
                advance.
              </li>
              <li>
                If a Member does not explicitly express their intention to terminate the contract by the announced
                effective date, they shall be deemed to have agreed to the amended Terms.
              </li>
              <li>
                Matters not specified in these Terms and the interpretation of these Terms shall be governed by the Act
                on the Consumer Protection in Electronic Commerce, the Act on the Regulation of Terms and Conditions,
                other relevant laws and regulations, commercial practices, or separate policies determined by the
                Company.
              </li>
              <li>
                The Company may post an ethics guide within the Service that contains content regarding crime prevention
                and respect for social ethics related to the use of the Service, which the Company and Members must
                comply with. Such ethics guide constitutes part of these Terms. By agreeing to these Terms, the Member
                is deemed to have agreed to comply with the ethics guide.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 4 (Execution of Usage Contract)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                A Service usage contract is established when a Non-Member agrees to the contents of these Terms upon
                signing up for membership, completes the application for use according to the procedures provided by the
                Company, and the Company approves it.
              </li>
              <li>
                Applicants must use an account they actually own. Members who do not enter their real name or actual
                information cannot receive legal protection and may not use the Service.
              </li>
              <li>
                The Company shall not be liable for any disadvantages caused by failure to notify the Company of changes
                under Paragraph 3.
              </li>
              <li>
                In the case of persons under the age of 14, an account can be created only with the consent of a legal
                representative, such as a parent.
              </li>
              <li>
                The Company may refuse an application for use or defer approval until the reason for restriction is
                resolved in the following cases:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>If there is no room in the Service-related facilities;</li>
                  <li>If there are technical or business impediments;</li>
                  <li>If it is otherwise deemed necessary due to the Company's circumstances.</li>
                </ul>
              </li>
              <li>
                The Company may refuse an application for use or terminate the usage contract afterwards in the
                following cases:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>If the application is made using another person's name;</li>
                  <li>If false member information is entered in the application;</li>
                  <li>If the application is made for the purpose of disturbing social order or good morals;</li>
                  <li>If the authority to use the Service is lent or resold;</li>
                  <li>
                    If a person whose membership was revoked due to violation of the Terms reapplies within 1 year;
                  </li>
                  <li>If other application requirements set by the Company are not met.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 5 (Modification of Member Information)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                If the information entered at the time of membership registration changes, the Member must ensure that
                accurate information is maintained. Members must voluntarily correct it online or notify the Company of
                the changes via email or other methods.
              </li>
              <li>The Member is responsible for any disadvantages caused by failure to perform Paragraph 1.</li>
              <li>
                The Company is not responsible for any damages caused by the Member providing false information or
                failing to modify information.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 6 (Obligations of the Company)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                The Company shall do its best to provide the Service stably and continuously in accordance with the
                contents set forth in these Terms.
              </li>
              <li>
                The Company shall establish a security system to protect personal information so that Members can use
                the Service safely, and shall disclose and comply with the Privacy Policy.
              </li>
              <li>
                If the Company acknowledges that an opinion or complaint raised by a Member is justified, it must
                process it immediately. However, if immediate processing is difficult, the Member must be notified of
                the reason and the processing schedule.
              </li>
              <li>
                The Company shall not engage in acts prohibited by laws and these Terms or acts contrary to public
                order, and shall do its best to provide stable Services.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 7 (Obligations of Members)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                Members must understand and comply with these Terms, the Company's notices, and Service usage
                guidelines, and must not engage in any of the following acts:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Entering false information when applying for or changing the Service;</li>
                  <li>Stealing another person's information or payment method;</li>
                  <li>Changing information posted by the Company or interfering with the Service;</li>
                  <li>
                    Collecting, storing, posting, or distributing personal information and account information of other
                    Members without authorization;
                  </li>
                  <li>
                    Copying, disassembling, imitating, or otherwise modifying the Service through reverse engineering,
                    decompiling, disassembling, and any other processing acts;
                  </li>
                  <li>Using the Service in an abnormal way, such as hacking or using automatic access programs;</li>
                  <li>
                    Granting access rights, such as lending or transferring an account to a third party other than
                    oneself;
                  </li>
                  <li>Transmitting or posting information (computer programs, etc.) prohibited by the Company;</li>
                  <li>
                    Using the Service for any acts contrary to social order, such as gambling, speculation, or
                    obscenity;
                  </li>
                  <li>Using the Service by exploiting known or unknown bugs;</li>
                  <li>Other illegal or unfair acts.</li>
                </ul>
              </li>
              <li>
                Members must comply with relevant laws, the provisions of these Terms, usage guidelines, precautions
                announced in relation to the Service, and matters notified by the Company, and must not engage in acts
                that interfere with other businesses of the Company.
              </li>
              <li>
                Members are responsible for managing their ID, password, payment method information, etc., and the
                Company is not responsible for problems caused by the Member's negligence in management.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 8 (Use of Service)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Members shall use the Service in compliance with the provisions of these Terms.</li>
              <li>
                Members can use the Service from the time the Company approves the Member's application for use.
                However, for some services, the Service may be used from a designated date or when certain requirements
                are met.
              </li>
              <li>
                In principle, the Service is available 24 hours a day, 7 days a week. However, the Service may be
                temporarily suspended due to the Company's business or technical reasons. In such cases, the Company
                will notify in advance, and if there is an unavoidable reason that prevents prior notice, it will notify
                afterwards.
              </li>
              <li>
                Members shall follow the FUP (Fair Use Policy) below regarding the Company's Service.
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>
                    <strong>FUP (Fair Use Policy)</strong> is a policy that promises to use the Service in a reasonable
                    and responsible manner in services that allow unlimited use.
                  </li>
                  <li>
                    Members must select a plan suitable for their profession and business scale, and malicious use is
                    prohibited.
                  </li>
                </ul>
              </li>
              <li>
                Matters regarding Service use not specified in the Terms shall follow the contents posted by the Company
                on the website or announced separately.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 9 (Paid Service)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                The Company may provide all or part of the Company's Service to Members for a fee, and specific matters
                regarding Paid Services shall be governed by the Paid Service Policy.
              </li>
              <li>
                The Company shall display the following matters in the Paid Service Policy or information window so that
                Members can easily understand them:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Name or title of the Paid Service;</li>
                  <li>Contents, usage method, usage fee, and payment method of the Paid Service;</li>
                  <li>Conditions and procedures for refund of Paid Service fees;</li>
                  <li>Matters regarding suspension and change of Paid Service.</li>
                </ul>
              </li>
              <li>
                Members using Paid Services must comply with the Paid Service Policy, and the Paid Service Policy takes
                precedence over these Terms. However, if not specified in the Paid Service Policy, these Terms or
                relevant laws shall apply.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 10 (Suspension of Service Provision)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                The Company may suspend the provision of all or part of the Service in the following cases:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>
                    When a key telecommunications business operator/internet network operator stipulated in the
                    Telecommunications Business Act suspends services;
                  </li>
                  <li>When service provision is impossible due to power outage;</li>
                  <li>When unavoidable due to relocation, repair, or construction of facilities;</li>
                  <li>
                    When normal service provision is difficult due to failure of service facilities or congestion of
                    service use;
                  </li>
                  <li>
                    When a national emergency, such as war, incident, natural disaster, or equivalent, occurs or is
                    likely to occur;
                  </li>
                  <li>
                    When normal service provision is difficult due to reasons on the part of external affiliates used by
                    the Company for service provision.
                  </li>
                </ul>
              </li>
              <li>
                The Company may conduct regular inspections if necessary for the provision of the Service, and the
                regular inspection time shall be as announced on the service provision screen.
              </li>
              <li>
                The Company may conduct urgent inspections if the Service is unstable or urgent improvement is needed,
                in which case the inspection time will be announced within the Service.
              </li>
              <li>
                The Company shall compensate for damages suffered by Members due to the temporary suspension of Service
                provision without justifiable reason. However, this does not apply if the Service is suspended due to
                reasons under Paragraph 1 or if there is no intent or negligence on the part of the Company regarding
                the Service suspension.
              </li>
              <li>
                The Company may discontinue the Service if it is difficult to continue the Service due to serious
                business reasons, such as the abolition of business due to business transfer, division, merger, etc., or
                significant deterioration of Service profits. In this case, the discontinuation date and reason shall be
                announced on the initial screen of the App or its connected screen, the Company website, or other
                service provision screens at least 30 days prior to the discontinuation date, and Members shall be
                notified.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 11 (Termination by Member)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Members may stop using the Service and terminate the usage contract at any time.</li>
              <li>
                If a Member wishes to withdraw from membership, they can do so through the procedure within the Service
                or the Customer Center.
              </li>
              <li>
                When a Member withdraws, all usage rights, data, and other property values belonging to the account will
                immediately expire and will not be recovered. This also applies to membership withdrawal due to account
                sharing or account theft.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 12 (Loss of Membership Eligibility and Objections)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                If a Member falls under any of the following reasons in using the Service, the Company may restrict or
                suspend membership or terminate the usage contract without prior notice:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Entering false information when applying for or changing the Service;</li>
                  <li>
                    Failing to pay the usage fee for the Company's Paid Service or other debts borne by the Member in
                    relation to the use of the Company's Service by the due date;
                  </li>
                  <li>
                    Using the Service to engage in acts prohibited by laws or these Terms or contrary to public order
                    and morals.
                  </li>
                </ul>
              </li>
              <li>
                If the Company takes usage restriction measures stipulated in Paragraph 1, it shall notify the Member of
                the following matters:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Reason for the usage restriction measure;</li>
                  <li>Type and duration of the usage restriction measure;</li>
                  <li>Method of objection to the usage restriction measure.</li>
                </ul>
              </li>
              <li>
                The Company may suspend the use of the Service for the relevant account until the investigation into the
                following reasons is completed:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>
                    If a legitimate report is received that the account has been hacked, stolen, or used for a crime;
                  </li>
                  <li>
                    If provisional measures for Service use are otherwise necessary for reasons equivalent thereto.
                  </li>
                </ul>
              </li>
              <li>
                If the same act is repeated twice or more or the reason is not corrected within 30 days after the
                Company restricts or suspends membership, the Company may invalidate the membership.
              </li>
              <li>
                If the Company invalidates membership, the membership registration will be cancelled. In this case, the
                Member will be notified, and an opportunity to explain will be given for a period of at least 30 days
                before the membership registration is cancelled.
              </li>
              <li>
                If the Company imposes sanctions under this Article due to a Member's violation of these Terms, the
                Company shall not compensate for any damages caused by the Member's inability to use the Service, and
                shall not provide any refund or compensation related to the Member's use of Paid Services.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 13 (Provision of Advertisements and Information)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                The Company may provide advertisements for Service operation through Service screens, emails, push
                notifications, etc.
              </li>
              <li>
                Members may be connected to services provided by others through advertisements within the Service
                provided by the Company. Since the service provided in such area is not the Company's service area, the
                Company does not guarantee reliability, stability, etc., and the Company is not responsible for any
                damages to the Member caused thereby.
              </li>
              <li>
                Members may withdraw their consent to receive advertising information at any time through the rejection
                settings.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 14 (Attribution of Copyrights, etc.)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>
                  Rights to content uploaded or created by the Member on the Service belong to the Member.
                </strong>{" "}
                That is, the content possessed by the Member remains with the Member.
              </li>
              <li>
                <strong>
                  The Company does not acquire Member-owned content and data, except as explained in the Terms of
                  Service and Privacy Policy.
                </strong>
              </li>
              <li>
                <strong>
                  The Company does not delete or backup content, and content deleted by the Member cannot be recovered.
                </strong>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 15 (Order and Payment)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                Usage fees are paid according to the posted purchase conditions when the Member clicks the purchase
                button for the Paid Service. The imposition and payment of charges follow the policies or methods
                determined by the payment method selected by the Member in principle.
              </li>
              <li>
                Unless otherwise announced by the Company within the Service, the Paid Service starts from the time the
                Member pays the charge.
              </li>
              <li>
                In the case of using Paid Services, the usage fee is automatically paid every month through the payment
                method registered by the Member, and the usage period is automatically renewed with payment on the same
                date of the following month. However, if the payment date falls on a date that does not exist in a
                specific month, payment will be made on the last day of that month.
              </li>
              <li>
                If a Member changes to another Paid Service while using a Paid Service, the previously paid usage fee
                for the Paid Service will be refunded according to the ratio of the remaining usage period. Specific
                matters related to this shall follow the Paid Service Policy.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 16 (Cancellation and Refund)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>
                  If a Member requests cancellation within 7 days from the payment date, a full refund is available
                  regardless of usage.
                </strong>
              </li>
              <li>
                For services where withdrawal of subscription is impossible as prescribed by relevant laws such as the
                Act on the Consumer Protection in Electronic Commerce, the right to withdraw subscription is restricted.
                However, if relevant laws require the Company to take measures to restrict the right to withdraw
                subscription, the Company shall take such measures.
              </li>
              <li>
                Refunds are not possible in principle if the above conditions are exceeded, and refunds may be provided
                limitedly as prescribed by relevant laws.
              </li>
              <li>
                Matters regarding refund of Paid Service usage fees due to reasons such as withdrawal of subscription or
                mid-term termination not specified in this Article shall follow the Company's Paid Service Policy.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 17 (Indemnification and Compensation for Damages)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                If the Company or Member causes damage to the other party by violating these Terms, they are responsible
                for compensating for such damage. However, this does not apply if there is no intent or negligence.
              </li>
              <li>
                The Company is not responsible for damages caused to the Member due to the following reasons. However,
                this does not apply in cases of the Company's intent or negligence.
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>
                    If Service use is impossible due to maintenance, replacement, regular inspection, construction,
                    etc., of Service facilities (excluding cases caused by the Company's intent or negligence);
                  </li>
                  <li>If impediments to Service use occur due to the Member's intent or negligence;</li>
                  <li>If the benefits expected by the Member through the use of the Service are not realized;</li>
                  <li>
                    If leakage of Member information such as account password occurs (excluding cases caused by the
                    Company's intent or gross negligence);
                  </li>
                  <li>
                    If the Member deletes content or account information provided by the Company (excluding cases caused
                    by the Company's intent or gross negligence);
                  </li>
                  <li>
                    Abnormal access interference using illegal use and programs (excluding cases caused by the Company's
                    intent or gross negligence);
                  </li>
                  <li>
                    Other reasons equivalent to the above where the Company's attribution of responsibility is not
                    recognized.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  The Company does not guarantee the legality, originality, exclusivity, reliability, accuracy,
                  truthfulness, utility, or fitness for a particular purpose of AI results.
                </strong>{" "}
                The Company is not responsible for the Member's failure to obtain expected profits using the Service,
                and is not responsible for damages caused by results obtained through other Services.
              </li>
              <li>
                <strong>
                  The responsibility for all problems arising in connection with the use of AI results lies with the
                  Member, and the Company bears no responsibility whatsoever.
                </strong>
              </li>
              <li>
                The Company bears no responsibility for the accuracy, reliability, etc., of facts regarding information,
                data, contents, etc., posted by the Member on the bulletin board, and the Member must use the Service
                under their own responsibility.
              </li>
              <li>
                The Company is not responsible for the reliability, accuracy, etc., of information, data, or facts
                posted by the Member in connection with the Service or searched or recommended within the Service.
              </li>
              <li>
                The Company is not responsible for compensating for mental damages suffered by the Member due to other
                Members or damages caused by the Member's intent or negligence among damages occurring to the Member in
                connection with Service use.
              </li>
              <li>
                The Member bears all responsibility for any damages occurring regarding materials posted or transmitted
                by the Member or any disadvantages occurring regarding the selection of materials.
              </li>
              <li>
                If damages occur to the Company due to the Member's violation of the provisions of these Terms, the
                Member who violated these Terms must compensate the Company for all damages and indemnify the Company
                from such damages.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 18 (Notice to Members)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                When the Company gives notice to a Member, it may be done via the Member's email address, mobile phone
                number, text message (SMS/MMS), etc.
              </li>
              <li>
                In the case of notice to unspecified Members, the Company may substitute individual notice by posting it
                on the Company website for 7 days or more. However, individual notice will be given for matters that
                have a significant impact on the Member's own transactions.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Article 19 (Jurisdiction and Governing Law)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                Disputes between the Company and Members shall be faithfully consulted for amicable resolution. If no
                agreement is reached, the <strong>Seoul Central District Court</strong> shall be the competent court in
                accordance with the Civil Procedure Act.
              </li>
              <li>
                These Terms shall be interpreted and applied in accordance with the{" "}
                <strong>laws of the Republic of Korea</strong>.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Addendum</h2>
            <p className="text-muted-foreground">These Terms shall be effective from November 1, 2025.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsEn;
