import { Card } from "@/components/ui/card";
import { usePageTracking } from "@/hooks/useAnalytics";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const SecuritySpecEn = () => {
    usePageTracking();
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const from = location.state?.from;
        navigate("/en");

        // Wait for navigation to complete, then scroll instantly to entry point
        setTimeout(() => {
            if (from === 'security') {
                const securitySection = document.getElementById("security");
                if (securitySection) {
                    securitySection.scrollIntoView();
                }
            } else if (from === 'footer') {
                window.scrollTo({ top: document.body.scrollHeight });
            } else {
                window.scrollTo({ top: 0 });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={handleBackClick}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </button>

                {/* Main Content Card */}
                <Card className="p-8 md:p-12 bg-white shadow-lg">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Security Specification
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            LocalDocs Enterprise Edition Security Architecture and Compliance
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-gray max-w-none prose-p:leading-relaxed prose-p:mb-6 prose-li:mb-3 prose-headings:mb-6">
                        {/* 1. Summary */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Summary</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                LocalDocs is an air-gapped, on-device AI search solution designed for environments requiring high compliance standards.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This document outlines technical measures to ensure zero data egress based on the Enterprise Edition and specifies differences from the B2C Edition.
                            </p>
                        </section>

                        {/* 2. Core Security Architecture */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">2. Core Security Architecture</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.1. Zero Data Egress (Physical Isolation)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                LocalDocs Enterprise Edition is designed for complete offline environments.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>No Cloud Inference:</strong> All AI processing (embedding and generation) runs on local CPU/GPU using quantized LLMs.</li>
                                <li><strong>No External API Calls for Core Data:</strong> The application does not make API calls to any third-party AI providers such as OpenAI, Anthropic, or Google for document data processing, embedding, or query responses.</li>
                                <li><strong>Network Activity (Enterprise):</strong> Uses license key method for offline authentication or requires network only for initial one-time authentication. No document data, embeddings, or queries are transmitted over the network.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.2. Local Vector Storage</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                All vector indices generated from documents are stored only on the device's local storage.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>Storage Location:</strong> SQLite database or file-based vector store (macOS: ~/Library/Application Support, Windows: %APPDATA%)</li>
                                <li><strong>Cross-Device Sync:</strong> Not supported (to prevent unintended external transmission)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.3. Volatile Memory Handling</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                All processing occurs within the application's volatile memory at runtime and is deleted when the process terminates.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>Temporary Session Data:</strong> Query context deleted when the window is closed</li>
                                <li><strong>No Logging:</strong> AI model input/output is not saved to external logs</li>
                            </ul>
                        </section>

                        {/* 3. Network Policy by Edition */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">3. Network Policy by Edition</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Comparison Table</h3>
                            <div className="overflow-x-auto mb-10">
                                <table className="w-full border-collapse border border-gray-300 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Enterprise</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Personal (Free / Pro)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Document Data Processing</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">100% Local</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">100% Local</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Authentication</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">License Key</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Social Login (Google OAuth)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Payment</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Separate Contract</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">External Payment Module</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">External Communication</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">None</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Only for Login/Payment/Model & App Updates</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-6 mt-8">Detailed Network Policy (by Edition)</h3>

                            <h4 className="text-lg font-semibold text-gray-900 mb-4">A. Enterprise Edition</h4>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                LocalDocs Enterprise Edition is designed to work perfectly in air-gapped environments.
                            </p>
                            <div className="mb-6">
                                <p className="font-semibold text-gray-900 mb-3">Document Data</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>All data processing (embedding, vector storage, inference) is performed only within local equipment.</li>
                                    <li>There is no path for data transmission to external AI services or cloud storage.</li>
                                </ul>
                            </div>
                            <div className="mb-8">
                                <p className="font-semibold text-gray-900 mb-3">Network Communication</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Authentication: Uses License Key method and supports offline activation.</li>
                                    <li>Payment: No electronic payment module embedded in the app; processed through contracts, so no payment-related traffic occurs.</li>
                                    <li>Updates: Provides manual update packages (.msi/.dmg) for closed networks and can block external communication for automatic updates.</li>
                                </ul>
                            </div>

                            <h4 className="text-lg font-semibold text-gray-900 mb-4">B. Free / Pro Edition</h4>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Free / Pro Edition separates data privacy and user convenience (account management).
                            </p>
                            <div className="mb-6">
                                <p className="font-semibold text-gray-900 mb-3">Document Data</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>PDF content uploaded by users, generated vector indices, and search queries are never transmitted to external servers under any circumstances.</li>
                                    <li>Google OAuth is used only for 'user identity verification (email address),' and Google servers cannot access user document content.</li>
                                </ul>
                            </div>
                            <div className="mb-8">
                                <p className="font-semibold text-gray-900 mb-3">Account/License</p>
                                <p className="text-gray-700 mb-3">Performs minimal encrypted communication (HTTPS) for the following purposes only.</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Authentication: accounts.google.com (one-time on login)</li>
                                    <li>Payment: lemonsqueezy.com (subscription status check)</li>
                                    <li>Updates: api.peekaboolabs.ai (latest version check)</li>
                                </ul>
                            </div>
                        </section>

                        {/* 4. Compliance and Certifications */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">4. Compliance and Certifications</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">4.1. SOC 2 and ISO 27001 (Scope)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                As a strict on-premise/local software provider, PeekabooLabs does not process, store, or transmit customer data on its own servers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Therefore, LocalDocs is <strong>Out of Scope</strong> for SOC 2 Type II or ISO 27001 certification related to data processing.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We operate under a <strong>Shared Responsibility Model</strong> where customers maintain full ownership and responsibility for infrastructure security.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5 mt-10">4.2. GDPR and HIPAA Readiness</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                LocalDocs Enterprise Edition is <strong>"Privacy by Design"</strong> architecture as user data is not subject to external processing.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>GDPR:</strong> No data transmission to third parties → Not applicable to Article 28 "Data Processing Agreement"</li>
                                <li><strong>HIPAA:</strong> Operates 100% locally, can handle PHI (Protected Health Information) without HIPAA Business Associate Agreement (BAA)</li>
                            </ul>
                        </section>

                        {/* 5. Software Integrity */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">5. Software Integrity</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">5.1. Code Signing</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                All distributed binaries (.dmg, .exe) are digitally signed to verify authenticity.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>macOS:</strong> Apple Developer ID Certificate signing</li>
                                <li><strong>Windows:</strong> Microsoft Authenticode signing (Extended Validation recommended)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">5.2. Supply Chain Security</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                All open-source dependencies are managed through package managers (npm, Cargo, etc.), and SCA (Software Composition Analysis) is performed during the build process.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>Vulnerability Scanning:</strong> Snyk / Dependabot</li>
                                <li><strong>Lock File Management:</strong> package-lock.json / Cargo.lock fixed for reproducible builds</li>
                            </ul>
                        </section>

                        {/* 6. Contact */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Contact</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For security-related inquiries, please contact us at:
                            </p>
                            <ul className="list-none pl-0 space-y-2 text-gray-700">
                                <li><strong>Email:</strong> security@peekaboolabs.ai</li>
                                <li><strong>Enterprise Inquiries:</strong> contact@peekaboolabs.ai</li>
                            </ul>
                        </section>
                    </div>
                </Card>

                {/* Founders Message Card */}
                <Card className="mt-12 p-12 md:p-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 border border-gray-200 shadow-sm relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
                    </div>

                    {/* Subtle Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    ></div>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Founders' Message: Our Promise
                            </h2>
                            <p className="text-xl text-gray-700 font-medium mb-2">
                                "PeekabooLabs is committed to On-Device AI."
                            </p>
                        </div>

                        {/* Message Body */}
                        <div className="mb-12 space-y-6 text-gray-700 leading-relaxed text-base">
                            <p>
                                My dream is to one day venture far into space and end my life there. What I need for that long journey is an intelligent companion that can converse with me, maintain systems, and instantly find the knowledge I need.
                            </p>
                            <p>
                                AI that works in deep space where the internet doesn't reach, in that absolute isolation. That's why I'm dedicating my life to on-device AI technology.
                            </p>
                            <p>
                                We will pour all our technical capabilities into becoming a 'Local-First' company. Customer data will be perfectly controlled only at the customer's fingertips, without any external intervention.
                            </p>
                            <p>
                                Our mission is <strong>"Empowering AI Everywhere"</strong>. From remote areas without internet, closed networks where security is vital, to the stars humanity will one day reach. We won't stop until we deliver the most powerful and secure AI to people in every environment.
                            </p>
                        </div>

                        {/* Founders Photos */}
                        <div className="flex items-center gap-2 mb-8">
                            <a
                                href="https://www.linkedin.com/in/junghwanseo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative animate-float-subtle"
                            >
                                <img
                                    src="/team/junghwan.jpg"
                                    alt="Junghwan Seo"
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 transition-all duration-300 group-hover:border-gray-400 group-hover:scale-110 group-hover:shadow-xl group-hover:brightness-110 cursor-pointer"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hansol-nam/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative animate-float-subtle"
                                style={{ animationDelay: '0.5s' } as React.CSSProperties}
                            >
                                <img
                                    src="/team/hansol.jpg"
                                    alt="Hansol Nam"
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 transition-all duration-300 group-hover:border-gray-400 group-hover:scale-110 group-hover:shadow-xl group-hover:brightness-110 cursor-pointer"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kim-seunghwan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative animate-float-subtle"
                                style={{ animationDelay: '1s' } as React.CSSProperties}
                            >
                                <img
                                    src="/team/seunghwan.jpg"
                                    alt="Seunghwan Kim"
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 transition-all duration-300 group-hover:border-gray-400 group-hover:scale-110 group-hover:shadow-xl group-hover:brightness-110 cursor-pointer"
                                />
                            </a>
                        </div>

                        {/* Company Info */}
                        <div>
                            <p className="text-sm text-gray-600 italic mb-1">
                                PeekabooLabs Co., Ltd.
                            </p>
                            <p className="text-sm text-gray-500">
                                Junghwan Seo, Hansol Nam, Seunghwan Kim
                                <br />
                                Founders
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SecuritySpecEn;
