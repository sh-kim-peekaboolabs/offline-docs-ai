import { Shield, Lock, Database, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const SecurityHybridEn = () => {
    return (
        <section id="security" className="w-full bg-white py-24 md:py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4">Security</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111] mb-6 px-2 sm:px-0">
                        Bank-grade security,<br />documents never leave your PC.
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-6 px-4">
                        LocalDocs separates document storage (Local) from answer generation (Cloud)<br className="hidden sm:block" />
                        to deliver security and performance.
                    </p>
                    <Link to="/new/en/security-spec" className="inline-block text-sm font-medium text-[#666] hover:text-[#111] transition-colors border-b border-[#666] hover:border-[#111]">
                        View Security Spec
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Feature 1 */}
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-6">
                            <Database className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#111] mb-3">100% local storage for originals</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep">
                            Your files live only on your hard drive.<br className="sm:hidden" /> Nothing is uploaded to the cloud.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-6">
                            <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#111] mb-3">Minimal transfer & immediate deletion</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep">
                            Only the minimum information is encrypted and sent through the proxy server,<br className="sm:hidden" /> and chat history is never stored.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#111] mb-3">No training (Zero Retention)</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep">
                            Data is never used to train AI models. <br className="sm:hidden" /> Use with confidence.
                        </p>
                    </div>
                </div>

                {/* Hybrid Security Diagram Placeholder (Optional/Future enhancement) */}
                <div className="relative rounded-3xl bg-[#111] p-8 md:p-12 overflow-hidden text-center text-white">
                    <div className="relative z-10">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 break-keep">Need the Enterprise edition?</h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            If you need a fully offline (air-gapped) environment or on-premise LLM integration,<br />
                            check out the Enterprise plan. It runs perfectly without an internet connection.
                        </p>
                        <a href="https://calendar.app.google/LD81XjYtbptocMKw8" target="_blank" className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                            Contact Sales
                        </a>
                    </div>
                    {/* Decorators */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 opacity-20 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 opacity-20 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>
                </div>
            </div>
        </section>
    );
};
