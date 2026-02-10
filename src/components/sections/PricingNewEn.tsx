import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";

export const PricingNewEn = () => {
    return (
        <section id="pricing" className="bg-white py-24 md:py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111] mb-4 break-keep px-4 sm:px-0">
                        Choose the plan that fits you.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Free Plan */}
                    <div className="flex flex-col border border-gray-200 rounded-2xl p-8 bg-white hover:border-gray-300 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Free</h3>
                            <div className="text-4xl font-bold mb-2">Free</div>
                            <p className="text-sm text-gray-500">For those who are good with the basics</p>
                        </div>
                        <ul className="space-y-4 flex-1 text-sm text-gray-600 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                                <span>Unlimited document connections and search</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                                <span>Support for 1GB+ large files</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                                <span>Deep analysis of tables/charts/images (AI Vision)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                                <span>Source citations and highlights</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                                <span>Fair usage (50 queries/day)</span>
                            </li>
                        </ul>
                        <a href="#cta" onClick={() => analytics.trackButtonClick('download', 'pricing_free_new')}>
                            <Button variant="outline" className="w-full h-12 text-base border-gray-300 hover:bg-gray-50 text-gray-900">
                                Get Started
                            </Button>
                        </a>
                    </div>

                    {/* Pro Plan */}
                    <div className="flex flex-col border-2 border-[#111] rounded-2xl p-8 bg-white relative shadow-2xl shadow-gray-200/50">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            Recommended
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-[#111]">Pro</h3>
                            <div className="text-4xl font-bold mb-2 flex items-baseline gap-1">
                                $9 <span className="text-lg font-normal text-gray-500">/ month</span>
                            </div>
                            <p className="text-sm text-blue-600 font-medium">Billed annually at $99 (1 month free)</p>
                        </div>
                        <ul className="space-y-4 flex-1 text-sm text-gray-600 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#111] mt-0.5 flex-shrink-0" />
                                <span className="font-semibold text-[#111]">Everything in Free</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#111] mt-0.5 flex-shrink-0" />
                                <span>Understand complex context/intent</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#111] mt-0.5 flex-shrink-0" />
                                <span>Multi-format support coming (HWP, DOCX, PPTX, XLSX)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#111] mt-0.5 flex-shrink-0" />
                                <span>Higher usage (500 queries/day)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#111] mt-0.5 flex-shrink-0" />
                                <span>Priority support</span>
                            </li>
                        </ul>
                        <a href="#cta" onClick={() => analytics.trackButtonClick('download', 'pricing_pro_new')}>
                            <Button className="w-full h-12 text-base bg-[#111] hover:bg-[#333] text-white">
                                Get Started
                            </Button>
                        </a>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="flex flex-col border border-gray-200 rounded-2xl p-8 bg-gray-50">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Enterprise</h3>
                            <div className="text-4xl font-bold mb-2">Contact us</div>
                            <p className="text-sm text-gray-500">For teams/companies where security matters</p>
                        </div>
                        <ul className="space-y-4 flex-1 text-sm text-gray-600 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>SSO / audit logs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>License key login</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>Custom AI trained on internal data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>Admin dashboard</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>Dedicated support and onboarding</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span>On-premise/dedicated model support</span>
                            </li>
                        </ul>
                        <a href="https://calendar.app.google/LRqBPq8yAeZ7Bxwu7" target="_blank" rel="noopener noreferrer" onClick={() => analytics.trackButtonClick('contact', 'pricing_enterprise_new')}>
                            <Button variant="outline" className="w-full h-12 text-base bg-white border-gray-300 hover:bg-gray-50 text-gray-900">
                                Contact sales
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
