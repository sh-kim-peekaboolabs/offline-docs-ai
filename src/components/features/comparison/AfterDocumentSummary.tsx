import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { FileText, Check } from "lucide-react";

export const AfterDocumentSummary = () => {
    const summaryPoints = [
        "BMW Mini향 13.4\" 원형(Round) OLED 업계 최초 개발 및 적용 (2024.06)",
        "MS Surface Pro 10용 13\" 가변주사율(30~120Hz) 패널 공급 개시",
        "Galaxy Z Fold6 탑재 7.61\" 저전력/고내구성 폴더블 OLED 개발 성공",
        "AI 기반 구동 알고리즘 및 초정밀 잉크젯 기술로 360Hz 고주사율 확보",
        "Google Pixel 9 Pro XL향 고효율 패널 등 글로벌 IT 파트너십 강화"
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
                        {/* === PAGE 1-50: 보고서 표지 및 회사 개요 === */}
                        <div className="mb-6 border-b-2 border-black pb-2">
                            <h1 className="text-[12px] font-bold text-center mb-2">반기보고서</h1>
                            <div className="text-center mb-2">
                                <p className="text-[9px] font-bold">제 57 기</p>
                                <p className="text-[7px] text-gray-600">2025년 01월 01일 ~ 2025년 06월 30일</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-bold">삼성전자 주식회사</p>
                                <p className="text-[6px] text-gray-500">대표이사 전영현</p>
                                <p className="text-[6px] text-gray-400 mt-1">2025.08.14 금융감독원 전자공시</p>
                            </div>
                        </div>

                        {/* I. 회사의 개요 (상세) */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">I. 회사의 개요</h2>
                            <div className="space-y-2">
                                <div>
                                    <p className="font-bold text-[6px] mb-1">1. 회사의 법적·상업적 명칭</p>
                                    <p className="ml-2">한글명: 삼성전자 주식회사 / 영문명: SAMSUNG ELECTRONICS CO., LTD.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[6px] mb-1">2. 설립일자 및 존속기간</p>
                                    <p className="ml-2">설립일: 1969년 01월 13일 / 상장일: 1975년 06월 11일 (유가증권시장)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[6px] mb-1">3. 본점 소재지 및 연락처</p>
                                    <p className="ml-2">주소: 경기도 수원시 영통구 삼성로 129(매탄동)</p>
                                    <p className="ml-2">전화: 031-200-1114 / 홈페이지: www.samsung.com/sec</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[6px] mb-1">4. 주요 사업의 내용</p>
                                    <p className="ml-2">• DX(Device eXperience): TV, 모니터, 냉장고, 세탁기, 에어컨, 스마트폰, 태블릿, 웨어러블</p>
                                    <p className="ml-2">• DS(Device Solutions): DRAM, NAND Flash, 모바일AP, 이미지센서, 파운드리</p>
                                    <p className="ml-2">• SDC(삼성디스플레이): 스마트폰/IT/Auto용 OLED, QD-OLED</p>
                                    <p className="ml-2">• Harman: 디지털 콕핏, 텔레매틱스, 프리미엄 오디오</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[6px] mb-1">5. 신용평가 등급</p>
                                    <p className="ml-2">Moody's: Aa2 (전망: Negative) / S&P: AA- (전망: Stable)</p>
                                    <p className="ml-2">Fitch: AA- (전망: Stable)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[6px] mb-1">6. 경영진 변동사항</p>
                                    <p className="ml-2">2025년 3월 19일: 전영현 사내이사 대표이사 선임</p>
                                    <p className="ml-2">2025년 3월 19일: 한종희 대표이사 퇴임</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 51-100: 사업의 내용 === */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">II. 사업의 내용</h2>

                            {/* 부문별 매출 */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">1. 부문별 매출 실적 (2025년 반기)</p>
                                <div className="border border-gray-400 mb-2">
                                    <div className="grid grid-cols-5 bg-gray-100 border-b border-gray-400 p-0.5 font-bold text-center text-[5px]">
                                        <div>부문</div><div>주요제품</div><div>매출액(억)</div><div>비중(%)</div><div>전년비</div>
                                    </div>
                                    <div className="grid grid-cols-5 border-b border-gray-300 p-0.5 text-[5px]">
                                        <div className="font-bold">DX</div><div>TV, 스마트폰</div>
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
                                        <div className="font-bold">Harman</div><div>전장/오디오</div>
                                        <div className="text-right">72,494</div>
                                        <div className="text-right">4.7</div><div className="text-right">+1.2</div>
                                    </div>
                                    <div className="grid grid-cols-5 bg-gray-50 p-0.5 font-bold text-[5px]">
                                        <div>합계</div><div>-</div>
                                        <div className="text-right text-red-600">1,537,068</div>
                                        <div className="text-right">100.0</div><div className="text-right text-green-600">+5.3</div>
                                    </div>
                                </div>
                            </div>

                            {/* 시장 점유율 */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">2. 주요 제품 시장 점유율</p>
                                <div className="ml-2 space-y-1">
                                    <p>• TV: 글로벌 28.9% (19년 연속 1위) / 프리미엄(2,500불 이상) 52.3%</p>
                                    <p>• 스마트폰: 글로벌 19.9% (14년 연속 1위) / 폴더블 85.2%</p>
                                    <p>• DRAM: 글로벌 32.7% / HBM 50% 이상</p>
                                    <p>• NAND Flash: 글로벌 28.4%</p>
                                    <p>• 스마트폰 OLED: 글로벌 39.9%</p>
                                    <p>• 디지털 콕핏: 글로벌 12.1%</p>
                                </div>
                            </div>

                            {/* 생산 능력 및 가동률 */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">3. 생산능력 및 가동률 (2025년 반기)</p>
                                <div className="border border-gray-300 mb-2">
                                    <div className="grid grid-cols-4 bg-gray-100 border-b p-0.5 font-bold text-center text-[5px]">
                                        <div>부문</div><div>생산능력</div><div>실제생산</div><div>가동률</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>TV/모니터</div><div className="text-right">2,633만대</div>
                                        <div className="text-right">2,047만대</div><div className="text-right font-bold text-blue-600">77.8%</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>스마트폰</div><div className="text-right">13,375만대</div>
                                        <div className="text-right">10,508만대</div><div className="text-right font-bold text-blue-600">78.6%</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>메모리</div><div className="text-right">-</div>
                                        <div className="text-right">1,019,233백만개</div><div className="text-right font-bold text-red-600 underline">100%</div>
                                    </div>
                                    <div className="grid grid-cols-4 p-0.5 text-[5px]">
                                        <div>디스플레이</div><div className="text-right">-</div>
                                        <div className="text-right">88.7만개</div><div className="text-right font-bold text-red-600 underline">100%</div>
                                    </div>
                                </div>
                            </div>

                            {/* 원재료 가격 변동 */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">4. 주요 원재료 가격 변동 추이</p>
                                <div className="ml-2 space-y-1">
                                    <p>• 모바일 AP 솔루션: 전년 대비 <span className="text-red-600 font-bold">+12%</span> (고성능 칩 수요 증가)</p>
                                    <p>• Camera Module: 전년 대비 +8%</p>
                                    <p>• 반도체 Wafer: 전년 대비 <span className="text-green-600 font-bold">-8%</span></p>
                                    <p>• FPCA(디스플레이): 전년 대비 -13%</p>
                                    <p>• Cover Glass: 전년 대비 -9%</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 101-200: 재무 및 R&D === */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">III. 재무에 관한 사항</h2>

                            {/* 재무상태표 */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">1. 요약 연결 재무상태표 (2025.06.30 기준, 단위: 억원)</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="border border-gray-200 p-1.5 rounded bg-blue-50/20">
                                        <p className="font-bold border-b mb-1 pb-0.5 text-[6px]">자산</p>
                                        <div className="space-y-0.5 text-[5px]">
                                            <p className="flex justify-between"><span>유동자산</span><span className="font-bold">2,121,606</span></p>
                                            <p className="flex justify-between ml-2 text-gray-600"><span>- 현금및현금성자산</span><span>421,847</span></p>
                                            <p className="flex justify-between ml-2 text-gray-600"><span>- 단기금융상품</span><span>687,293</span></p>
                                            <p className="flex justify-between ml-2 text-gray-600"><span>- 매출채권</span><span>389,542</span></p>
                                            <p className="flex justify-between"><span>비유동자산</span><span className="font-bold">2,927,145</span></p>
                                            <p className="flex justify-between ml-2 text-gray-600"><span>- 유형자산</span><span>2,183,471</span></p>
                                            <p className="flex justify-between ml-2 text-gray-600"><span>- 무형자산</span><span>178,652</span></p>
                                            <p className="flex justify-between border-t border-gray-200 pt-0.5 mt-0.5 font-bold text-blue-700">
                                                <span>자산총계</span><span>5,048,752</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 p-1.5 rounded bg-blue-50/20">
                                        <p className="font-bold border-b mb-1 pb-0.5 text-[6px]">부채 및 자본</p>
                                        <div className="space-y-0.5 text-[5px]">
                                            <p className="flex justify-between"><span>유동부채</span><span>621,847</span></p>
                                            <p className="flex justify-between"><span>비유동부채</span><span>431,285</span></p>
                                            <p className="flex justify-between font-bold"><span>부채총계</span><span>1,053,132</span></p>
                                            <p className="flex justify-between border-t border-gray-200 pt-0.5 mt-0.5"><span>자본금</span><span>8,978</span></p>
                                            <p className="flex justify-between"><span>자본잉여금</span><span>48,432</span></p>
                                            <p className="flex justify-between"><span>이익잉여금</span><span className="font-bold">3,756,052</span></p>
                                            <p className="flex justify-between font-bold text-blue-700 border-t border-gray-200 pt-0.5 mt-0.5">
                                                <span>자본총계</span><span>3,995,620</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 손익계산서 */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">2. 요약 연결 손익계산서 (2025년 반기, 단위: 억원)</p>
                                <div className="border border-gray-200 p-2 rounded bg-gray-50/30">
                                    <div className="space-y-1 text-[5px]">
                                        <p className="flex justify-between font-bold text-[6px]"><span>매출액</span><span className="text-blue-600">1,537,068</span></p>
                                        <p className="flex justify-between ml-2"><span>매출원가</span><span>(1,035,847)</span></p>
                                        <p className="flex justify-between font-bold border-t border-gray-200 pt-0.5"><span>매출총이익</span><span>501,221</span></p>
                                        <p className="flex justify-between ml-2"><span>판매비와관리비</span><span>(387,608)</span></p>
                                        <p className="flex justify-between font-bold border-t border-gray-200 pt-0.5"><span>영업이익</span><span className="text-red-600">113,613</span></p>
                                        <p className="flex justify-between ml-2"><span>금융수익</span><span>38,472</span></p>
                                        <p className="flex justify-between ml-2"><span>금융비용</span><span>(12,384)</span></p>
                                        <p className="flex justify-between font-bold border-t border-gray-200 pt-0.5"><span>법인세비용차감전순이익</span><span>165,284</span></p>
                                        <p className="flex justify-between ml-2"><span>법인세비용</span><span>(31,891)</span></p>
                                        <p className="flex justify-between font-bold border-t-2 border-gray-400 pt-1 text-[6px]">
                                            <span>당기순이익</span><span className="text-red-600">133,393</span>
                                        </p>
                                        <p className="flex justify-between text-gray-600 mt-2"><span>주당순이익(원)</span><span className="font-bold">1,929</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* 현금흐름 */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">3. 현금흐름표 요약 (2025년 반기)</p>
                                <div className="ml-2 space-y-0.5 text-[5px]">
                                    <p>• 영업활동 현금흐름: 248,573억원</p>
                                    <p>• 투자활동 현금흐름: -231,847억원 (설비투자 23.1조)</p>
                                    <p>• 재무활동 현금흐름: -49,284억원 (배당 4.9조)</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 201-300: 연구개발 실적 === */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">연구개발 활동</h2>

                            <div className="mb-3 p-2 bg-yellow-50/30 border border-yellow-200 rounded">
                                <p className="font-bold text-[6px] mb-1">R&D 투자 현황</p>
                                <p className="text-[5px]">2025년 반기 연구개발비: <span className="font-bold text-red-600">18조 641억원</span> (매출액 대비 11.8%)</p>
                                <p className="text-[5px]">연구개발 인력: 약 11만 2천명 (전체 임직원의 약 42%)</p>
                            </div>

                            {/* DX 부문 R&D */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1 text-blue-800">1. DX 부문 연구개발 실적</p>
                                <div className="ml-2 space-y-2">
                                    <div>
                                        <p className="font-bold text-[5.5px]">가. Mobile Experience (MX)</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>• <span className="font-bold">Galaxy S25 시리즈</span>: Snapdragon 8 Elite 탑재, One UI 7.0, AI ProVisual Engine</p>
                                            <p className="ml-2">- S25: 162g 경량화, 6.2" FHD+ AMOLED</p>
                                            <p className="ml-2">- S25+: 6.7" QHD+, 4,900mAh 배터리</p>
                                            <p className="ml-2">- S25 Ultra: 218g, 티타늄 프레임, S펜 내장, 200MP 카메라</p>
                                            <p className="ml-2">- S25 Edge: 슬림 디자인 특화 모델</p>
                                            <p>• <span className="font-bold">Galaxy Z Fold6 Special Edition</span>: 8.0" 대화면, 10.6mm 두께, 2억 화소</p>
                                            <p>• <span className="font-bold">Galaxy Ring</span>: 티타늄 소재, 24시간 착용, 수면/심박 분석, 제스처 컨트롤</p>
                                            <p>• <span className="font-bold">Galaxy Book5 Pro</span>: Intel Core Ultra 프로세서, AI 기능 강화</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[5.5px]">나. Visual Display (VD)</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>• <span className="font-bold">Neo QLED 8K</span>: QN900F/QN800F, AI Motion Enhancer Pro, 8K AI Upscaling Pro</p>
                                            <p>• <span className="font-bold">Micro LED</span>: 76~114인치 라인업, AI scaling 기술</p>
                                            <p>• <span className="font-bold">The Frame Pro</span>: 무선 One Connect, 매트 디스플레이</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[5.5px]">다. Digital Appliances (DA)</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>• <span className="font-bold">BESPOKE AI 콤보</span>: 세탁 25kg + 건조 15kg 일체형, 7인치 AI Home</p>
                                            <p>• <span className="font-bold">냉장고</span>: AI Vision Inside 2.0, 9인치 LCD, Auto Open Door</p>
                                            <p>• <span className="font-bold">에어컨</span>: WindFree 기술, AI 자동 모드</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DS 부문 R&D */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1 text-blue-800">2. DS 부문 연구개발 실적</p>
                                <div className="ml-2 space-y-2">
                                    <div>
                                        <p className="font-bold text-[5.5px]">가. Memory</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>• <span className="font-bold">DRAM</span>:</p>
                                            <p className="ml-2">- 업계 최초 24Gb GDDR7 D램 양산 (속도 42.5Gbps, 전작 대비 30% 향상)</p>
                                            <p className="ml-2">- 10나노급 6세대 D램 양산 (생산성 30% 향상, 전력 효율 20% 개선)</p>
                                            <p className="ml-2">- HBM3E 12단 양산 (대역폭 1.15TB/s)</p>
                                            <p>• <span className="font-bold">NAND Flash</span>:</p>
                                            <p className="ml-2">- 업계 최초 9세대 V낸드 양산 (TLC/QLC, 더블 스택 구조)</p>
                                            <p className="ml-2">- PCIe 5.0 SSD '9100 PRO' 출시 (전력 효율 49% 향상)</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[5.5px]">나. System LSI</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>• <span className="font-bold">Exynos 2500</span>: 3나노 GAA 공정, FOWLP 패키지, AI 성능 39% 향상</p>
                                            <p>• <span className="font-bold">이미지센서</span>:</p>
                                            <p className="ml-2">- 아이소셀 JNP: 나노 프리즘 기술, 저조도 성능 향상</p>
                                            <p className="ml-2">- HP9: 2억 화소 망원용 센서</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[5.5px]">다. Foundry</p>
                                        <div className="ml-2 space-y-1 text-[5px]">
                                            <p>• 3나노 2세대 GAA 공정: 5나노 대비 면적 35% 감소, 소비전력 40% 감소</p>
                                            <p>• HPC 전용 4나노 4세대 공정 양산</p>
                                            <p>• 2나노 공정 개발 진행 중</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SDC 부문 R&D */}
                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1 text-blue-800">3. SDC 부문 연구개발 실적</p>
                                <div className="ml-2 space-y-1 text-[5px]">
                                    <p>• Galaxy S25 Ultra용 AMOLED: Peak 휘도 2,600nit, 120Hz 가변 주사율</p>
                                    <p>• Galaxy Z Fold6용 폴더블 OLED: 7.61인치, 저전력/고내구성</p>
                                    <p>• 세계 최초 27인치 QHD 500Hz QD-OLED 모니터 패널</p>
                                    <p>• BMW Mini향 13.4인치 원형(Round) OLED 개발 (2024.06 적용)</p>
                                    <p>• MS Surface Pro 10용 13인치 가변주사율(30~120Hz) 패널</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 301-350: 이사회 및 주주 === */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">VI. 이사회 및 VII. 주주 정보</h2>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">1. 이사회 구성</p>
                                <div className="border border-gray-300 mb-2">
                                    <div className="grid grid-cols-4 bg-gray-100 border-b p-0.5 font-bold text-center text-[5px]">
                                        <div>구분</div><div>성명</div><div>직위</div><div>임기</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>사내이사</div><div className="font-bold">전영현</div><div>대표이사</div><div>2025.03~2028.03</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>사내이사</div><div>노태문</div><div>사장</div><div>2023.03~2026.03</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>사내이사</div><div>송재혁</div><div>사장</div><div>2024.03~2027.03</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>사외이사</div><div className="font-bold">신제윤</div><div>이사회 의장</div><div>2022.03~2025.03</div>
                                    </div>
                                    <div className="grid grid-cols-4 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>사외이사</div><div>김준성</div><div>-</div><div>2023.03~2026.03</div>
                                    </div>
                                    <div className="grid grid-cols-4 p-0.5 text-[5px]">
                                        <div>사외이사</div><div>허은녕 외 3인</div><div>-</div><div>각 3년</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">2. 주주 현황 (2025.06.30 기준)</p>
                                <div className="border border-gray-300">
                                    <div className="grid grid-cols-3 bg-gray-100 border-b p-0.5 font-bold text-center text-[5px]">
                                        <div>주주명</div><div>소유주식수</div><div>지분율</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div className="font-bold">삼성생명보험(주)</div><div className="text-right">621,812,426주</div><div className="text-right font-bold">8.51%</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div className="font-bold">국민연금공단</div><div className="text-right">552,847,193주</div><div className="text-right font-bold">7.57%</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>BlackRock Fund Advisors</div><div className="text-right">370,284,571주</div><div className="text-right">5.07%</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-gray-200 p-0.5 text-[5px]">
                                        <div>삼성물산(주)</div><div className="text-right">368,492,837주</div><div className="text-right">5.05%</div>
                                    </div>
                                    <div className="grid grid-cols-3 p-0.5 text-[5px]">
                                        <div>기타 소액주주</div><div className="text-right">4,937,284,193주</div><div className="text-right">67.58%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">3. 배당 정책</p>
                                <div className="ml-2 space-y-1 text-[5px]">
                                    <p>• 2024~2026년 주주환원 정책: FCF의 50%를 재원으로 연간 9.8조원 정규배당</p>
                                    <p>• 2025년 1분기 배당: 보통주 주당 361원 (총 2.45조원)</p>
                                    <p>• 2025년 2분기 배당: 보통주 주당 367원 (총 2.49조원)</p>
                                    <p>• 자사주 소각: 2025년 2월 약 3조원 규모 소각 완료</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 351-380: 리스크 관리 === */}
                        <div className="mb-6">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">VIII. 리스크 관리 및 기타 사항</h2>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">1. 재무 리스크 관리</p>
                                <div className="ml-2 space-y-2 text-[5px]">
                                    <div>
                                        <p className="font-bold">가. 환율 리스크</p>
                                        <p className="ml-2">통화선도 3,931건 보유 (자산 949억, 부채 1,781억)</p>
                                        <p className="ml-2">주요 노출 통화: USD, EUR, CNY</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">나. 이자율 리스크</p>
                                        <p className="ml-2">내부자금 공유(Cash Pooling)로 외부 차입 최소화</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">다. 신용 리스크</p>
                                        <p className="ml-2">국제 신용등급 A 이상 은행과 거래</p>
                                        <p className="ml-2">거래처 재무상태 주기적 평가 및 신용한도 설정</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">2. 주요 투자 및 계열사 거래</p>
                                <div className="ml-2 space-y-1 text-[5px]">
                                    <p>• 레인보우로보틱스: 2025년 3월 콜옵션 행사로 지분 35.0% 취득 (종속기업 편입)</p>
                                    <p className="ml-2">- 취득원가: 1조 2,417억원 / 평가차익: 6,006억원</p>
                                    <p>• 특수관계자 매출: 9,154억원 (삼성물산 7,034억원 등)</p>
                                    <p>• 특수관계자 매입: 8조 8,385억원</p>
                                    <p className="ml-2">- 삼성물산 6조 3,948억원 (건설 용역)</p>
                                    <p className="ml-2">- 삼성SDS 1조 797억원 (IT 서비스)</p>
                                    <p className="ml-2">- 삼성전기 5,731억원 (부품)</p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">3. 제재 및 법적 이슈</p>
                                <div className="ml-2 space-y-2 text-[5px]">
                                    <div>
                                        <p className="font-bold">가. 기흥사업장 방사선 피폭 사고 (2024.05)</p>
                                        <p className="ml-2">• 원자력안전위원회: 과태료 1,650만원 (방사선장해방해조치 위반)</p>
                                        <p className="ml-2">• 고용노동부: 과태료 3,000만원 (중대재해 보고 의무 위반, 이의제기 중)</p>
                                        <p className="ml-2">• 후속조치: 안전관리 시스템 전면 재점검 및 보강</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">나. 산업안전보건법 위반</p>
                                        <p className="ml-2">• 2024년 11월 기흥/화성 사업장 일반감독 결과</p>
                                        <p className="ml-2">• 과태료 6,800만원 (관리감독자 업무 미이행 등)</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">다. 공정거래 관련</p>
                                        <p className="ml-2">• 2024년 4월 대리점 경영활동 간섭 금지 위반 시정조치</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold text-[6px] mb-1">4. ESG 및 지속가능경영</p>
                                <div className="ml-2 space-y-1 text-[5px]">
                                    <p>• 2050 탄소중립 목표 설정 및 RE100 가입</p>
                                    <p>• 2024년 온실가스 배출량: 1,396만 톤 (tCO2-eq)</p>
                                    <p>• 에너지 사용량: 264,060 TJ</p>
                                    <p>• 녹색기술 인증: 반도체/가전 제조 공정 오염물질 감소 기술</p>
                                    <p>• 사회공헌: SSAFY 청소년 교육, 상생협력기금 출연</p>
                                </div>
                            </div>
                        </div>

                        {/* === PAGE 381-400: 최종 요약 및 마무리 === */}
                        <div className="mb-10">
                            <h2 className="text-blue-700 font-bold mb-2 text-[8px] border-b border-blue-200 pb-1">미래 전략 및 전망</h2>
                            <div className="space-y-3 text-[5px] leading-relaxed text-justify">
                                <p>
                                    삼성전자는 AI 시대를 선도하는 글로벌 기술 리더로서, 온디바이스 AI 경험을 모든 제품군에 확대하고 있습니다.
                                    Galaxy AI를 중심으로 스마트폰, 가전, TV 등 전 제품에 AI 기능을 통합하여 사용자 경험을 혁신하고 있습니다.
                                </p>
                                <p>
                                    메모리 사업에서는 AI 서버 수요 급증에 대응하여 HBM3E 및 차세대 GDDR7 제품의 공급을 확대하고 있으며,
                                    고대역폭 메모리 시장에서의 리더십을 더욱 공고히 할 계획입니다. 파운드리 사업은 2나노 공정 개발을 가속화하여
                                    AI 및 HPC 시장의 성장에 적극 대응하겠습니다.
                                </p>
                                <p>
                                    디스플레이 사업은 폴더블 및 IT 디스플레이 시장에서의 기술 우위를 바탕으로 프리미엄 시장을 지속 확대하고,
                                    Auto 디스플레이 등 신규 응용처 개척에도 주력하겠습니다.
                                </p>
                                <p>
                                    당사는 협력사와의 상생 경영, 환경 보호, 사회적 책임 이행을 통해 지속가능한 성장을 추구하며,
                                    글로벌 시민으로서의 역할을 다하겠습니다. 2050 탄소중립 달성을 위한 구체적인 로드맵을 실행하고,
                                    재생에너지 사용 비중을 지속적으로 확대해 나가겠습니다.
                                </p>
                            </div>
                        </div>

                        {/* FINAL DOCUMENT FOOTER */}
                        <div className="pt-12 pb-[280px] border-t-2 border-black flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center mb-4">
                                <FileText size={24} className="text-gray-300" />
                            </div>
                            <p className="text-[11px] font-bold text-gray-600 mb-1">삼성전자 주식회사</p>
                            <p className="text-[8px] text-gray-400 tracking-wider mb-2">SAMSUNG ELECTRONICS CO., LTD.</p>
                            <p className="text-[6px] text-gray-400 mb-6">본점: 경기도 수원시 영통구 삼성로 129</p>
                            <div className="w-full h-px bg-gray-200 mb-6" />
                            <div className="text-[9px] text-gray-500 font-bold tracking-[8px] uppercase border-y border-gray-200 py-2 mb-8">
                                [ End of Half-Year Report ]
                            </div>
                            <p className="text-[11px] font-bold text-blue-600 italic">
                                PAGE 400 OF 400
                            </p>
                            <p className="text-[6px] text-gray-400 mt-4">2025.08.14 금융감독원 전자공시시스템(DART)</p>
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
                        [삼성전자]반기보고서(2025.08.14).pdf
                    </span>
                    <span className="text-[9px] text-gray-400 ml-auto">14.5 MB</span>
                </div>
            </div>

            <div className="flex-1 mt-2">
                <div className="flex items-center gap-2 mb-2 px-1 border-b border-gray-100 pb-1.5">
                    <Check size={14} className="text-blue-600" strokeWidth={3} />
                    <h3 className="text-[13px] font-bold text-gray-900 tracking-tight">로컬독스 요약</h3>
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