import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { FileText, Check } from "lucide-react";

export const AfterDocumentSummaryEn = () => {
    const summaryPoints = [
        "World's first 13.4\" round OLED developed and applied for BMW Mini (2024.06)",
        "Started supplying 13\" variable refresh rate (30-120Hz) panels for MS Surface Pro 10",
        "Successfully developed 7.61\" low-power, high-durability foldable OLED for Galaxy Z Fold6",
        "Achieved 360Hz high refresh rate with AI-based drive algorithms and ultra-precise inkjet technology",
        "Strengthened global IT partnerships, including high-efficiency panels for Google Pixel 9 Pro XL"
    ];

    return (
        <div className="w-full h-full bg-white flex flex-col p-4">
            <div className="mb-6">
                <div className="relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm" style={{ height: '240px' }}>
                    <motion.div
                        className="p-3 text-[5px] leading-[1.3] text-gray-800"
                        animate={{ y: [0, -2350] }}
                        transition={{ duration: 3.5, delay: 0.5, ease: "linear" }}
                    >
                        {/* === PAGE 1-50: Report cover and company overview === */}
                        <div className="mb-6 border-b-2 border-black pb-2">
                            <h1 className="text-[12px] font-bold text-center mb-2">Semiannual Report</h1>
                            <div className="text-center mb-2">
                                <p className="text-[9px] font-bold">57th Term</p>
                                <p className="text-[7px] text-gray-600">January 1, 2025 - June 30, 2025</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-bold">Samsung Electronics Co., Ltd.</p>
                                <p className="text-[6px] text-gray-500">CEO: Jeon Young-hyun</p>
                                <p className="text-[6px] text-gray-400 mt-1">Filed with the Financial Supervisory Service on 2025.08.14</p>
                            </div>
                        </div>

                        {/* I. Company Overview (Detailed) */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">I. Company Overview</h2>
                            <div className="space-y-2">
                                <div>
                                    <p className="font-bold text-[6px] mb-1">1. Legal and commercial name</p>
                                    <p className="ml-2">Korean name: Samsung Electronics Co., Ltd. / English name: SAMSUNG ELECTRONICS CO., LTD.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[6px] mb-1">2. Date of incorporation and duration</p>
                                    <p className="ml-2">Incorporation: January 13, 1969 / Listed: June 11, 1975 (KOSPI)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[6px] mb-1">3. Headquarters address and contact</p>
                                    <p className="ml-2">Address: 129 Samsung-ro, Yeongtong-gu, Suwon, Gyeonggi-do (Maetan-dong)</p>
                                    <p className="ml-2">Tel: 031-200-1114 / Website: www.samsung.com/sec</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[6px] mb-1">4. Major business areas</p>
                                    <p className="ml-2">- DX (Device eXperience): TV, monitors, refrigerators, washing machines, air conditioners, smartphones, tablets, wearables</p>
                                    <p className="ml-2">- DS (Device Solutions): DRAM, NAND Flash, mobile AP, image sensors, foundry</p>
                                    <p className="ml-2">- SDC (Samsung Display): OLED for smartphones/IT/auto, QD-OLED</p>
                                    <p className="ml-2">- Harman: digital cockpit, telematics, premium audio</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[6px] mb-1">5. Credit ratings</p>
                                    <p className="ml-2">Moody's: Aa2 (Outlook: Negative) / S&P: AA- (Outlook: Stable)</p>
                                    <p className="ml-2">Fitch: AA- (Outlook: Stable)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[6px] mb-1">6. Management changes</p>
                                    <p className="ml-2">March 19, 2025: Jeon Young-hyun appointed CEO and inside director</p>
                                    <p className="ml-2">March 19, 2025: Han Jong-hee retired as CEO</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 51-100: Business Overview === */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">II. Business Overview</h2>

                            {/* Sales by division */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">1. Sales by division (H1 2025)</p>
                                <div className="border border-gray-400 mb-2">
                                    <div className="grid grid-cols-5 bg-gray-100 border-b border-gray-400 p-0.5 font-bold text-center text-[5px]">
                                        <div>Division</div><div>Key products</div><div>Revenue (KRW 100M)</div><div>Share (%)</div><div>YoY</div>
                                    </div>
                                    <div className="grid grid-cols-5 border-b border-gray-300 p-0.5 text-[5px]">
                                        <div className="font-bold">DX</div><div>TV, smartphones</div>
                                        <div className="text-right text-blue-600 font-bold">952,874</div>
                                        <div className="text-right">62.0</div><div className="text-right text-green-600">+8.2</div>
                                    </div>
                                    <div className="grid grid-cols-5 border-b border-gray-300 p-0.5 text-[5px]">
                                        <div className="font-bold">DS</div><div>DRAM, Flash</div>
                                        <div className="text-right font-bold">530,061</div>
                                        <div className="text-right">34.5</div><div className="text-right text-red-600">-2.1</div>
                                    </div>
                                    <div className="grid grid-cols-5 border-b border-gray-300 p-0.5 text-[5px]">
                                        <div className="font-bold">SDC</div><div>OLED</div>
                                        <div className="text-right">122,469</div>
                                        <div className="text-right">8.0</div><div className="text-right text-green-600">+5.3</div>
                                    </div>
                                    <div className="grid grid-cols-5 border-b border-gray-300 p-0.5 text-[5px]">
                                        <div className="font-bold">Harman</div><div>Auto/Audio</div>
                                        <div className="text-right">72,494</div>
                                        <div className="text-right">4.7</div><div className="text-right">+1.2</div>
                                    </div>
                                    <div className="grid grid-cols-5 bg-gray-50 p-0.5 font-bold text-[5px]">
                                        <div>Total</div><div>-</div>
                                        <div className="text-right text-red-600">1,537,068</div>
                                        <div className="text-right">100.0</div><div className="text-right text-green-600">+5.3</div>
                                    </div>
                                </div>
                            </div>

                            {/* Market share */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">2. Market share of key products</p>
                                <div className="ml-2 space-y-1">
                                    <p>- TV: 28.9% global (No.1 for 19 consecutive years) / premium (over $2,500) 52.3%</p>
                                    <p>- Smartphones: 19.9% global (No.1 for 14 consecutive years) / foldables 85.2%</p>
                                    <p>- DRAM: 32.7% global / HBM over 50%</p>
                                    <p>- NAND Flash: 28.4% global</p>
                                    <p>- Smartphone OLED: 39.9% global</p>
                                    <p>- Digital cockpit: 12.1% global</p>
                                </div>
                            </div>

                            {/* Capacity and utilization */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">3. Capacity and utilization (H1 2025)</p>
                                <div className="border border-gray-300 mb-2">
                                    <div className="grid grid-cols-4 bg-gray-100 border-b p-0.5 font-bold text-center text-[5px]">
                                        <div>Segment</div><div>Capacity</div><div>Actual output</div><div>Utilization</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>TV/Monitors</div><div className="text-right">26.33M units</div>
                                        <div className="text-right">20.47M units</div><div className="text-right font-bold text-blue-600">77.8%</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>Smartphones</div><div className="text-right">133.75M units</div>
                                        <div className="text-right">105.08M units</div><div className="text-right font-bold text-blue-600">78.6%</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>Memory</div><div className="text-right">-</div>
                                        <div className="text-right">1,019,233 million units</div><div className="text-right font-bold text-red-600 underline">100%</div>
                                    </div>
                                    <div className="grid grid-cols-4 p-0.5 text-[5px]">
                                        <div>Display</div><div className="text-right">-</div>
                                        <div className="text-right">0.887M units</div><div className="text-right font-bold text-red-600 underline">100%</div>
                                    </div>
                                </div>
                            </div>

                            {/* Raw material price trends */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">4. Key raw material price trends</p>
                                <div className="ml-2 space-y-1">
                                    <p>- Mobile AP solutions: <span className="text-red-600 font-bold">+12%</span> YoY (higher demand for high-performance chips)</p>
                                    <p>- Camera module: +8% YoY</p>
                                    <p>- Semiconductor wafers: <span className="text-green-600 font-bold">-8%</span> YoY</p>
                                    <p>- FPCA (display): -13% YoY</p>
                                    <p>- Cover glass: -9% YoY</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 101-200: Financials and R&D === */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">III. Financial Information</h2>

                            {/* Statement of financial position */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">1. Summary consolidated statement of financial position (as of 2025.06.30, unit: KRW 100M)</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="border border-gray-200 p-1.5 rounded bg-blue-50/20">
                                        <p className="font-bold border-b mb-1 pb-0.5 text-[6px]">Assets</p>
                                        <div className="space-y-0.5 text-[5px]">
                                            <p className="flex justify-between"><span>Current assets</span><span className="font-bold">2,121,606</span></p>
                                            <p className="flex justify-between ml-2 text-gray-600"><span>- Cash and cash equivalents</span><span>421,847</span></p>
                                            <p className="flex justify-between ml-2 text-gray-600"><span>- Short-term financial instruments</span><span>687,293</span></p>
                                            <p className="flex justify-between ml-2 text-gray-600"><span>- Trade receivables</span><span>389,542</span></p>
                                            <p className="flex justify-between"><span>Non-current assets</span><span className="font-bold">2,927,145</span></p>
                                            <p className="flex justify-between ml-2 text-gray-600"><span>- Property, plant and equipment</span><span>2,183,471</span></p>
                                            <p className="flex justify-between ml-2 text-gray-600"><span>- Intangible assets</span><span>178,652</span></p>
                                            <p className="flex justify-between border-t border-gray-200 pt-0.5 mt-0.5 font-bold text-blue-700">
                                                <span>Total assets</span><span>5,048,752</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 p-1.5 rounded bg-blue-50/20">
                                        <p className="font-bold border-b mb-1 pb-0.5 text-[6px]">Liabilities and equity</p>
                                        <div className="space-y-0.5 text-[5px]">
                                            <p className="flex justify-between"><span>Current liabilities</span><span>621,847</span></p>
                                            <p className="flex justify-between"><span>Non-current liabilities</span><span>431,285</span></p>
                                            <p className="flex justify-between font-bold"><span>Total liabilities</span><span>1,053,132</span></p>
                                            <p className="flex justify-between border-t border-gray-200 pt-0.5 mt-0.5"><span>Capital stock</span><span>8,978</span></p>
                                            <p className="flex justify-between"><span>Capital surplus</span><span>48,432</span></p>
                                            <p className="flex justify-between"><span>Retained earnings</span><span className="font-bold">3,756,052</span></p>
                                            <p className="flex justify-between font-bold text-blue-700 border-t border-gray-200 pt-0.5 mt-0.5">
                                                <span>Total equity</span><span>3,995,620</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Income statement */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">2. Summary consolidated income statement (H1 2025, unit: KRW 100M)</p>
                                <div className="border border-gray-200 p-2 rounded bg-gray-50/30">
                                    <div className="space-y-1 text-[5px]">
                                        <p className="flex justify-between font-bold text-[6px]"><span>Revenue</span><span className="text-blue-600">1,537,068</span></p>
                                        <p className="flex justify-between ml-2"><span>Cost of sales</span><span>(1,035,847)</span></p>
                                        <p className="flex justify-between font-bold border-t border-gray-200 pt-0.5"><span>Gross profit</span><span>501,221</span></p>
                                        <p className="flex justify-between ml-2"><span>SG&A</span><span>(387,608)</span></p>
                                        <p className="flex justify-between font-bold border-t border-gray-200 pt-0.5"><span>Operating profit</span><span className="text-red-600">113,613</span></p>
                                        <p className="flex justify-between ml-2"><span>Financial income</span><span>38,472</span></p>
                                        <p className="flex justify-between ml-2"><span>Financial expenses</span><span>(12,384)</span></p>
                                        <p className="flex justify-between font-bold border-t border-gray-200 pt-0.5"><span>Profit before income tax</span><span>165,284</span></p>
                                        <p className="flex justify-between ml-2"><span>Income tax expense</span><span>(31,891)</span></p>
                                        <p className="flex justify-between font-bold border-t-2 border-gray-400 pt-1 text-[6px]">
                                            <span>Net income</span><span className="text-red-600">133,393</span>
                                        </p>
                                        <p className="flex justify-between text-gray-600 mt-2"><span>Earnings per share (KRW)</span><span className="font-bold">1,929</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Cash flow */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">3. Cash flow summary (H1 2025)</p>
                                <div className="ml-2 space-y-0.5 text-[5px]">
                                    <p>- Operating cash flow: 248,573 (KRW 100M)</p>
                                    <p>- Investing cash flow: -231,847 (capex 23.1 trillion KRW)</p>
                                    <p>- Financing cash flow: -49,284 (dividends 4.9 trillion KRW)</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 201-300: R&D performance === */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">R&D Activities</h2>

                            <div className="mb-3 p-2 bg-yellow-50/30 border border-yellow-200 rounded">
                                <p className="font-bold text-[6px] mb-1">R&D investment overview</p>
                                <p className="text-[5px]">R&D expense in H1 2025: <span className="font-bold text-red-600">KRW 18,064.1 billion</span> (11.8% of revenue)</p>
                                <p className="text-[5px]">R&D headcount: about 112,000 (about 42% of total employees)</p>
                            </div>

                            {/* DX division R&D */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1 text-blue-800">1. DX division R&D results</p>
                                <div className="ml-2 space-y-2">
                                    <div>
                                        <p className="font-bold text-[5.5px]">A. Mobile Experience (MX)</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>- <span className="font-bold">Galaxy S25 series</span>: Snapdragon 8 Elite, One UI 7.0, AI ProVisual Engine</p>
                                            <p className="ml-2">- S25: 162g lightweight, 6.2" FHD+ AMOLED</p>
                                            <p className="ml-2">- S25+: 6.7" QHD+, 4,900mAh battery</p>
                                            <p className="ml-2">- S25 Ultra: 218g, titanium frame, built-in S Pen, 200MP camera</p>
                                            <p className="ml-2">- S25 Edge: slim design-focused model</p>
                                            <p>- <span className="font-bold">Galaxy Z Fold6 Special Edition</span>: 8.0" large display, 10.6mm thickness, 200MP</p>
                                            <p>- <span className="font-bold">Galaxy Ring</span>: titanium material, 24-hour wear, sleep/heart rate analysis, gesture control</p>
                                            <p>- <span className="font-bold">Galaxy Book5 Pro</span>: Intel Core Ultra processor, enhanced AI features</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[5.5px]">B. Visual Display (VD)</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>- <span className="font-bold">Neo QLED 8K</span>: QN900F/QN800F, AI Motion Enhancer Pro, 8K AI Upscaling Pro</p>
                                            <p>- <span className="font-bold">Micro LED</span>: 76-114 inch lineup, AI scaling technology</p>
                                            <p>- <span className="font-bold">The Frame Pro</span>: wireless One Connect, matte display</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[5.5px]">C. Digital Appliances (DA)</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>- <span className="font-bold">BESPOKE AI Combo</span>: 25kg wash + 15kg dry all-in-one, 7-inch AI Home</p>
                                            <p>- <span className="font-bold">Refrigerators</span>: AI Vision Inside 2.0, 9-inch LCD, Auto Open Door</p>
                                            <p>- <span className="font-bold">Air conditioners</span>: WindFree technology, AI auto mode</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DS division R&D */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1 text-blue-800">2. DS division R&D results</p>
                                <div className="ml-2 space-y-2">
                                    <div>
                                        <p className="font-bold text-[5.5px]">A. Memory</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>- <span className="font-bold">DRAM</span>:</p>
                                            <p className="ml-2">- First in the industry mass production of 24Gb GDDR7 DRAM (42.5Gbps, 30% faster vs. previous)</p>
                                            <p className="ml-2">- 6th-gen 10nm-class DRAM mass production (30% higher productivity, 20% better power efficiency)</p>
                                            <p className="ml-2">- HBM3E 12-high mass production (bandwidth 1.15TB/s)</p>
                                            <p>- <span className="font-bold">NAND Flash</span>:</p>
                                            <p className="ml-2">- First in the industry mass production of 9th-gen V-NAND (TLC/QLC, double-stack architecture)</p>
                                            <p className="ml-2">- Launched PCIe 5.0 SSD "9100 PRO" (49% better power efficiency)</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[5.5px]">B. System LSI</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>- <span className="font-bold">Exynos 2500</span>: 3nm GAA process, FOWLP package, 39% AI performance improvement</p>
                                            <p>- <span className="font-bold">Image sensors</span>:</p>
                                            <p className="ml-2">- ISOCELL JNP: nano-prism technology, improved low-light performance</p>
                                            <p className="ml-2">- HP9: 200MP telephoto sensor</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[5.5px]">C. Foundry</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>- 3nm 2nd-gen GAA process: 35% smaller area and 40% lower power vs. 5nm</p>
                                            <p>- Mass production of 4nm 4th-gen process for HPC</p>
                                            <p>- 2nm process development in progress</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SDC division R&D */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1 text-blue-800">3. SDC division R&D results</p>
                                <div className="ml-2 space-y-1 text-[5px]">
                                    <p>- AMOLED for Galaxy S25 Ultra: peak brightness 2,600 nits, 120Hz variable refresh rate</p>
                                    <p>- Foldable OLED for Galaxy Z Fold6: 7.61 inches, low power/high durability</p>
                                    <p>- World's first 27-inch QHD 500Hz QD-OLED monitor panel</p>
                                    <p>- 13.4-inch round OLED for BMW Mini (applied in 2024.06)</p>
                                    <p>- 13-inch variable refresh rate (30-120Hz) panel for MS Surface Pro 10</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 301-350: Board and shareholders === */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">VI. Board and VII. Shareholder Information</h2>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">1. Board composition</p>
                                <div className="border border-gray-300 mb-2">
                                    <div className="grid grid-cols-4 bg-gray-100 border-b p-0.5 font-bold text-center text-[5px]">
                                        <div>Type</div><div>Name</div><div>Title</div><div>Term</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>Inside director</div><div className="font-bold">Jeon Young-hyun</div><div>CEO</div><div>2025.03-2028.03</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>Inside director</div><div>Noh Tae-moon</div><div>President</div><div>2023.03-2026.03</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>Inside director</div><div>Song Jae-hyuk</div><div>President</div><div>2024.03-2027.03</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>Outside director</div><div className="font-bold">Shin Je-yoon</div><div>Board Chair</div><div>2022.03-2025.03</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>Outside director</div><div>Kim Jun-seong</div><div>-</div><div>2023.03-2026.03</div>
                                    </div>
                                    <div className="grid grid-cols-4 p-0.5 text-[5px]">
                                        <div>Outside director</div><div>Heo Eun-nyeong + 3</div><div>-</div><div>Each 3 years</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">2. Shareholder status (as of 2025.06.30)</p>
                                <div className="border border-gray-300">
                                    <div className="grid grid-cols-3 bg-gray-100 border-b p-0.5 font-bold text-center text-[5px]">
                                        <div>Shareholder</div><div>Shares owned</div><div>Ownership</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div className="font-bold">Samsung Life Insurance Co., Ltd.</div><div className="text-right">621,812,426</div><div className="text-right font-bold">8.51%</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div className="font-bold">National Pension Service</div><div className="text-right">552,847,193</div><div className="text-right font-bold">7.57%</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>BlackRock Fund Advisors</div><div className="text-right">370,284,571</div><div className="text-right">5.07%</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>Samsung C&T Corp.</div><div className="text-right">368,492,837</div><div className="text-right">5.05%</div>
                                    </div>
                                    <div className="grid grid-cols-3 p-0.5 text-[5px]">
                                        <div>Other minority shareholders</div><div className="text-right">4,937,284,193</div><div className="text-right">67.58%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">3. Dividend policy</p>
                                <div className="ml-2 space-y-1 text-[5px]">
                                    <p>- 2024-2026 shareholder return policy: regular dividends of KRW 9.8 trillion annually, funded by 50% of FCF</p>
                                    <p>- Q1 2025 dividend: KRW 361 per common share (total KRW 2.45 trillion)</p>
                                    <p>- Q2 2025 dividend: KRW 367 per common share (total KRW 2.49 trillion)</p>
                                    <p>- Treasury share cancellation: about KRW 3 trillion canceled in February 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 351-380: Risk management === */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">VIII. Risk Management and Other Matters</h2>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">1. Financial risk management</p>
                                <div className="ml-2 space-y-2 text-[5px]">
                                    <div>
                                        <p className="font-bold">A. Foreign exchange risk</p>
                                        <p className="ml-2">Hold 3,931 currency forwards (assets KRW 94.9 billion, liabilities KRW 178.1 billion)</p>
                                        <p className="ml-2">Major exposure currencies: USD, EUR, CNY</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">B. Interest rate risk</p>
                                        <p className="ml-2">Minimize external borrowing through internal cash pooling</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">C. Credit risk</p>
                                        <p className="ml-2">Transactions with banks rated A or higher</p>
                                        <p className="ml-2">Periodic evaluation of counterparties' financial status and credit limits</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">2. Major investments and affiliate transactions</p>
                                <div className="ml-2 space-y-1 text-[5px]">
                                    <p>- Rainbow Robotics: acquired 35.0% stake via call option in March 2025 (became a subsidiary)</p>
                                    <p className="ml-2">- Acquisition cost: KRW 1.2417 trillion / valuation gain: KRW 600.6 billion</p>
                                    <p>- Related-party sales: KRW 915.4 billion (Samsung C&T KRW 703.4 billion, etc.)</p>
                                    <p>- Related-party purchases: KRW 8.8385 trillion</p>
                                    <p className="ml-2">- Samsung C&T KRW 6.3948 trillion (construction services)</p>
                                    <p className="ml-2">- Samsung SDS KRW 1.0797 trillion (IT services)</p>
                                    <p className="ml-2">- Samsung Electro-Mechanics KRW 573.1 billion (components)</p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">3. Sanctions and legal issues</p>
                                <div className="ml-2 space-y-2 text-[5px]">
                                    <div>
                                        <p className="font-bold">A. Giheung site radiation exposure incident (2024.05)</p>
                                        <p className="ml-2">- Nuclear Safety and Security Commission: fine of KRW 16.5 million (violation of radiation hazard prevention measures)</p>
                                        <p className="ml-2">- Ministry of Employment and Labor: fine of KRW 30 million (violation of major accident reporting obligation, under appeal)</p>
                                        <p className="ml-2">- Follow-up: full review and reinforcement of the safety management system</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">B. Occupational Safety and Health Act violations</p>
                                        <p className="ml-2">- Results of routine supervision at Giheung/Hwaseong sites in Nov 2024</p>
                                        <p className="ml-2">- Fine of KRW 68 million (including failure to perform supervisory duties)</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">C. Fair trade related</p>
                                        <p className="ml-2">- Corrective order in April 2024 for violating the prohibition on interference with dealer management activities</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">4. ESG and sustainable management</p>
                                <div className="ml-2 space-y-1 text-[5px]">
                                    <p>- Set 2050 carbon neutrality target and joined RE100</p>
                                    <p>- 2024 GHG emissions: 13.96 million tons (tCO2-eq)</p>
                                    <p>- Energy consumption: 264,060 TJ</p>
                                    <p>- Green technology certification: pollution reduction technology for semiconductor/home appliance manufacturing</p>
                                    <p>- Social contribution: SSAFY youth education, contributions to mutual growth fund</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 381-400: Final summary and closing === */}
                        <div className="mb-10">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">Future Strategy and Outlook</h2>
                            <div className="space-y-3 text-[5px] leading-relaxed text-justify">
                                <p>
                                    As a global technology leader in the AI era, Samsung Electronics is expanding on-device AI experiences across all product lines.
                                    Centered on Galaxy AI, it is integrating AI features into smartphones, appliances, TVs, and more to innovate user experiences.
                                </p>
                                <p>
                                    In the memory business, it is expanding supply of HBM3E and next-gen GDDR7 products to meet surging AI server demand,
                                    and plans to further strengthen leadership in the high-bandwidth memory market. The foundry business will accelerate 2nm process development
                                    to actively respond to growth in the AI and HPC markets.
                                </p>
                                <p>
                                    The display business will continue to expand the premium market based on technological leadership in foldable and IT displays,
                                    and will focus on new applications such as auto displays.
                                </p>
                                <p>
                                    The company will pursue sustainable growth through win-win management with partners, environmental protection, and social responsibility,
                                    fulfilling its role as a global citizen. It will execute a concrete roadmap to achieve 2050 carbon neutrality
                                    and continue to increase the share of renewable energy.
                                </p>
                            </div>
                        </div>

                        {/* FINAL DOCUMENT FOOTER */}
                        <div className="pt-12 pb-[280px] border-t-2 border-black flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center mb-4">
                                <FileText size={24} className="text-gray-300" />
                            </div>
                            <p className="text-[11px] font-bold text-gray-600 mb-1">Samsung Electronics Co., Ltd.</p>
                            <p className="text-[8px] text-gray-400 tracking-wider mb-2">SAMSUNG ELECTRONICS CO., LTD.</p>
                            <p className="text-[6px] text-gray-400 mb-6">Headquarters: 129 Samsung-ro, Yeongtong-gu, Suwon, Gyeonggi-do</p>
                            <div className="w-full h-px bg-gray-200 mb-6" />
                            <div className="text-[9px] text-gray-500 font-bold tracking-[8px] uppercase border-y border-gray-200 py-2 mb-8">
                                [ End of Half-Year Report ]
                            </div>
                            <p className="text-[11px] font-bold text-blue-600 italic">
                                PAGE 400 OF 400
                            </p>
                            <p className="text-[6px] text-gray-400 mt-4">2025.08.14 Financial Supervisory Service Electronic Disclosure System (DART)</p>
                        </div>
                    </motion.div>

                    {/* Scan Line */}
                    <motion.div
                        animate={{ y: [0, 240] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] z-10"
                    />

                    {/* Page Counter */}
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-md text-white text-[9px] font-mono rounded flex items-center gap-1.5 z-20 shadow-xl border border-white/10">
                        <span className="text-blue-400 font-bold">PAGE</span>
                        <CountUp
                            start={1}
                            end={400}
                            duration={3.5}
                            delay={0.5}
                            useEasing={false}
                        />
                        <span className="opacity-40">/ 400</span>
                    </div>
                </div>

                <div className="flex items-center gap-1.5 mt-2 px-1">
                    <div className="p-1 bg-red-50 rounded">
                        <FileText size={10} className="text-red-600" />
                    </div>
                    <span className="text-[10px] text-gray-700 font-semibold truncate">
                        [Samsung Electronics] Semiannual Report (2025.08.14).pdf
                    </span>
                    <span className="text-[9px] text-gray-400 ml-auto">14.5 MB</span>
                </div>
            </div>

            <div className="flex-1 mt-2">
                <div className="flex items-center gap-2 mb-2 px-1 border-b border-gray-100 pb-1.5">
                    <Check size={14} className="text-blue-600" strokeWidth={3} />
                    <h3 className="text-[13px] font-bold text-gray-900 tracking-tight">LocalDocs Summary</h3>
                </div>

                <div className="space-y-0.5">
                    {summaryPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 4.5 + i * 0.4,
                                type: 'spring',
                                stiffness: 100,
                            }}
                            className="group flex items-start gap-2.5 p-1 rounded hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex-shrink-0 w-1 h-1 bg-blue-500 rounded-full mt-2 group-hover:bg-blue-600 transition-colors" />
                            <div className="text-[12.5px] text-gray-700 leading-normal font-medium tracking-tight">
                                <TypeAnimation
                                    sequence={[point]}
                                    wrapper="span"
                                    speed={70}
                                    cursor={false}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
