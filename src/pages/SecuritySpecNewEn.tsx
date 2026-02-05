import { Card } from "@/components/ui/card";
import { usePageTracking } from "@/hooks/useAnalytics";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const SecuritySpecNewEn = () => {
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
        navigate("/new/en");

        // Wait for navigation to complete, then scroll instantly to entry point
        setTimeout(() => {
            if (from === 'security') {
                const securitySection = document.getElementById("security");
                if (securitySection) {
                    securitySection.scrollIntoView();
                }
            } else if (from === 'footer') {
                window.scrollTo({
                    top: document.body.scrollHeight
                });
            } else {
                window.scrollTo({
                    top: 0
                });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <button onClick={handleBackClick} className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors cursor-pointer">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </button>

                {/* Main Content Card */}
                <Card className="p-8 md:p-12 bg-white shadow-lg">
                    {/* Header */}
                    <div className="text-center mb-12 border-b pb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            LocalDocs Security Architecture and<br />Data Privacy Specification
                        </h1>
                        <p className="text-sm text-gray-500">
                            Version 2.0 | Applies to: LocalDocs API Edition & Enterprise
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-gray max-w-none prose-p:leading-relaxed prose-p:mb-6 prose-li:mb-3 prose-headings:mb-6">
                        {/* 1. Summary */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Summary</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                LocalDocs is a <strong>Hybrid Security AI solution</strong> that prioritizes users' data sovereignty.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Document storage and indexing are performed entirely on the user's local device, and only the minimum context needed for answer generation is encrypted and communicated to the cloud AI. (Enterprise supports fully closed networks with on-premise models and blocked external communication.)
                            </p>
                        </section>

                        {/* 2. Core Security Architecture (Hybrid Security Engine) */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">2. Core Security Architecture (Hybrid Security Engine)</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.1. Local-first data processing (Local-First Processing)</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                All editions of LocalDocs operate on a "local storage" basis by default.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>Original integrity:</strong> PDFs, documents, and the analyzed vector index are stored 100% on the user's PC.</li>
                                <li><strong>No server upload:</strong> Entire document files are never uploaded to cloud storage or external servers.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.2. Context minimization and encrypted transfer (Free/Pro)</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Free/Pro editions that use the latest cloud LLM (Gemini) protect data through the following <strong>4-step security tunnel</strong>.
                            </p>
                            <ol className="list-decimal pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>Local Retrieval:</strong> Relevant text chunks are first retrieved locally on the PC.</li>
                                <li><strong>Minimal Context Extraction:</strong> Only the few sentences required for the answer are extracted, not the entire document.</li>
                                <li><strong>AES-256 Encryption:</strong> Extracted text is encrypted with AES-256 and TLS 1.3 and sent to the API.</li>
                                <li><strong>Zero-Retention (immediate deletion):</strong> As soon as the AI generates an answer, the transmitted text is permanently deleted from server memory. No logs are kept and it is not used for AI training.</li>
                            </ol>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">2.3. Zero data egress (Enterprise)</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The Enterprise edition <strong>completely blocks cloud inference</strong> for air-gapped environments. Inference runs on on-premise LLMs without external API calls, so data never leaves the device.
                            </p>
                        </section>

                        {/* 3. Data and network policy by edition */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">3. Data and network policy by edition</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-300">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Category</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Free / Pro (API Edition)</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Enterprise (On-Premise)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Original document storage</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>100% local (your PC)</strong></td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>100% local (internal server/PC)</strong></td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Vector index generation</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Local CPU/GPU processing</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Local CPU/GPU processing</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Answer generation (inference)</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>Cloud LLM (encrypted communication)</strong></td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>On-premise LLM (offline)</strong></td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Data used for training</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>No training (Zero-Retention)</strong></td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Training not possible (physical isolation)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">External network</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Connected for API calls, login, and payments</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Blockable (fully offline)</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Authentication</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Social login (Google OAuth)</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">License key / SSO</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-6 mt-8">Network communication policy details</h3>

                            <h4 className="text-lg font-semibold text-gray-900 mb-4">A. Free / Pro Edition (Hybrid)</h4>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Limited network communication is performed to maximize usability and AI performance.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>LLM API communication:</strong> Encrypted text snippets (context) are sent via a proxy server to generate answers. No one can see or store the data.</li>
                                <li><strong>Authentication and payment:</strong> Only minimal HTTPS is used for identification (Google OAuth) and subscription status. Google or payment processors cannot access your document contents.</li>
                            </ul>

                            <h4 className="text-lg font-semibold text-gray-900 mb-4">B. Enterprise Edition (Air-gapped)</h4>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Designed for environments requiring the highest level of security.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>100% offline:</strong> Works perfectly even if you unplug LAN after installation and initial authentication.</li>
                                <li><strong>No API Calls:</strong> Traffic to external AI servers such as OpenAI, Google, and Anthropic is completely blocked.</li>
                            </ul>
                        </section>

                        {/* 4. Data control and compliance */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">4. Data control and compliance</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">4.1. User control</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>Data ownership:</strong> LocalDocs does not claim ownership of user data.</li>
                                <li><strong>Physical deletion:</strong> When users delete the LocalDocs app or data folder, all indexing data and chat history are permanently destroyed. (No server backups, so recovery is impossible.)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">4.2. Corporate compliance (GDPR & ISO)</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>Enterprise:</strong> Operates only within the customer's infrastructure, inheriting existing SOC 2 / ISO 27001 controls. With no data movement, GDPR data residency requirements are automatically met.</li>
                                <li><strong>Free/Pro:</strong> Transmitted data is encrypted and exchanged via a proxy server, so it is stored nowhere, providing a privacy-friendly structure for compliance.</li>
                            </ul>
                        </section>

                        {/* 5. Software integrity */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">5. Software integrity</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">5.1. Code signing and notarization</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700">
                                <li><strong>macOS:</strong> All releases are signed with a valid Apple Developer ID and pass Apple notarization to ensure binaries are not tampered with.</li>
                                <li><strong>Windows:</strong> EV (Extended Validation) code-signing certificates ensure executable trust.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-5">5.2. Supply chain security</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Open-source libraries (LangChain, LanceDB, etc.) include only specific versions that pass strict security review (CVE scans), preventing arbitrary external code execution.
                            </p>
                        </section>

                        {/* 6. Security contact */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Security contact</h2>
                            <p className="text-gray-700 leading-relaxed">
                                For specific architecture diagram requests or enterprise security audit inquiries, please contact the security team below.<br />
                                <strong>Email: </strong> <a href="mailto:contact@peekaboolabs.ai" className="text-blue-600 hover:underline">contact@peekaboolabs.ai</a>
                            </p>
                        </section>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SecuritySpecNewEn;
