import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Financial = () => {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* SECTION 1: HERO + DEMO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1A1F2E] to-[#0F1419]">
          <div className="absolute w-full h-full opacity-100 animate-pulse-slow">
            <div className="absolute top-1/2 left-1/5 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.03] rounded-full blur-3xl" />
            <div className="absolute top-4/5 right-1/5 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.05] rounded-full blur-3xl" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Column: Copy */}
            <div className="w-full lg:w-[40%] space-y-6 animate-fade-in">
              {/* Eyebrow */}
              <span className="inline-block px-4 py-2 text-xs font-semibold tracking-[2px] uppercase text-[#D4AF37] bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.3)] rounded-full">
                DART 공시 분석의 새로운 기준
              </span>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E2E8F0] tracking-tight">
                300페이지 공시보고서,
                <br />
                10초면 충분합니다.
              </h1>

              {/* Sub Headline */}
              <p className="text-xl md:text-2xl text-[#A0AEC0] leading-relaxed">
                "삼성전자 상반기 매출 얼마야?"
                <br />
                물어보면 답변 + 출처까지 자동 표시.
              </p>

              {/* Pain Point */}
              <p className="text-lg font-medium italic text-white/60">
                더 이상 Ctrl+F로 30분씩
                <br />
                문서 뒤지지 마세요.
              </p>

              {/* Value Props */}
              <div className="space-y-4 py-6">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00C896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white text-base">문장 단위 출처 제공</p>
                    <p className="text-sm text-[#718096]">Page 22 자동 이동 + 원문 하이라이트</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00C896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white text-base">표·수식 완벽 인식</p>
                    <p className="text-sm text-[#718096]">재무제표 수백 개 셀, 정확하게 추출</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00C896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white text-base">100% 로컬 처리</p>
                    <p className="text-sm text-[#718096]">인터넷 없이, 데이터 외부 전송 0%</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0F1419] font-bold shadow-[0_8px_24px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_36px_rgba(212,175,55,0.6)] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  📊 지금 바로 체험하기
                </Button>
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-[#718096]">
                    샘플 공시보고서 제공 | 5분 안에 시작
                  </p>
                  <a
                    href="#"
                    className="text-base font-semibold text-[#D4AF37] underline underline-offset-4 hover:text-[#FFD700] hover:underline-offset-6 transition-all"
                  >
                    팀 도입 상담하기 →
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Demo Video */}
            <div className="w-full lg:w-[60%] animate-fade-in-right">
              <div className="relative max-w-[700px] mx-auto bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_24px_64px_rgba(0,0,0,0.4)] hover:shadow-[0_32px_80px_rgba(0,0,0,0.5)] transition-all duration-500 group">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgba(212,175,55,0.3)] via-transparent to-[rgba(212,175,55,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                {/* Video Player */}
                <div className="relative rounded-2xl overflow-hidden bg-black shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                  <video
                    className="w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    poster="/videos/demo-poster.png"
                  >
                    <source src="/videos/localdocs-demo.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Demo Caption */}
                <div className="mt-5 flex items-center gap-3 p-4 bg-[rgba(0,200,150,0.1)] border-l-4 border-[#00C896] rounded-lg">
                  <span className="text-2xl">🎥</span>
                  <p className="text-sm text-[#A0AEC0]">
                    실제 데모: 삼성전자 반기보고서 분석 | 처리 시간: 10초
                  </p>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 flex items-center gap-3 p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                  <span className="text-2xl">🔒</span>
                  <p className="text-sm text-[#E2E8F0]">
                    데이터 외부 전송 0% | 로컬 디바이스에서만 처리
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PAIN - 3 Column Problem Empathy */}
      <section className="bg-white py-20 lg:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1F2E] mb-4 tracking-tight">
              이런 업무, 매주 반복하고 계신가요?
            </h2>
            <p className="text-xl text-[#718096]">
              실제 증권사·자산운용사 애널리스트들의 가장 큰 고민
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1: 정보 찾기의 고통 */}
            <div className="bg-[#F7FAFC] rounded-2xl p-8 lg:p-10 border-l-6 border-[#D4AF37] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 animate-fade-in">
              <div className="text-6xl mb-6 opacity-90">📄</div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#1A1F2E] mb-6 leading-tight">
                정보 찾기의 고통
              </h3>
              <p className="text-lg text-[#4A5568] leading-relaxed mb-8">
                "상반기 매출이 어디 있더라..."
                <br />
                <br />
                300페이지 반기보고서 열고,
                <br />
                목차 보고, 재무제표 찾고,
                <br />
                페이지 넘기며 숫자 찾기.
                <br />
                <br />
                30분이 훌쩍.
              </p>

              {/* Quote Box */}
              <div className="relative bg-[rgba(212,175,55,0.08)] border-l-4 border-[#D4AF37] rounded-lg p-6 mb-6">
                <div className="absolute -left-3 top-4 text-3xl bg-white rounded-full p-1">💬</div>
                <p className="text-sm font-bold text-[#D4AF37] tracking-wider uppercase mb-3">
                  💬 실제 목소리:
                </p>
                <p className="text-base italic text-[#2D3748] leading-relaxed">
                  "Ctrl+F로 '매출'을 검색하면
                  <br />
                  200개 결과가 나와요.
                  <br />
                  <br />
                  하나하나 클릭해서 확인하다 보면
                  <br />
                  어느새 30분..."
                </p>
              </div>

              {/* Time Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#FF4444] to-[#FF6B6B] text-white font-bold text-sm rounded-full shadow-[0_4px_12px_rgba(255,68,68,0.3)]">
                ⏱️ 소요 시간: 30분 / 숫자 하나
              </div>
            </div>

            {/* Card 2: 5개년 계정과목 통일 지옥 */}
            <div className="bg-[#F7FAFC] rounded-2xl p-8 lg:p-10 border-l-6 border-[#D4AF37] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 animate-fade-in [animation-delay:0.1s]">
              <div className="text-6xl mb-6 opacity-90">📊</div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#1A1F2E] mb-6 leading-tight">
                5개년 계정과목 통일 지옥
              </h3>
              <p className="text-lg text-[#4A5568] leading-relaxed mb-8">
                연도별로 계정과목이 바뀌면
                <br />
                일일이 대조하며 엑셀에 수작업.
                <br />
                <br />
                "매출원가"가 어느 해는
                <br />
                "제품매출원가"로, 또 어느 해는
                <br />
                "상품매출원가"로 표기돼 있어서
                <br />
                <br />
                5개 파일을 오가며
                <br />
                하나하나 확인해야 합니다.
              </p>

              {/* Quote Box */}
              <div className="relative bg-[rgba(212,175,55,0.08)] border-l-4 border-[#D4AF37] rounded-lg p-6 mb-6">
                <div className="absolute -left-3 top-4 text-3xl bg-white rounded-full p-1">💬</div>
                <p className="text-sm font-bold text-[#D4AF37] tracking-wider uppercase mb-3">
                  💬 실제 목소리:
                </p>
                <p className="text-base italic text-[#2D3748] leading-relaxed">
                  "21년 자료에 '판관비'가 있는데
                  <br />
                  22년엔 '판매비와관리비'로
                  <br />
                  표기돼 있어요.
                  <br />
                  <br />
                  이걸 5개년치 통일하려면
                  <br />
                  반나절은 걸립니다..."
                </p>
              </div>

              {/* Time Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#FF4444] to-[#FF6B6B] text-white font-bold text-sm rounded-full shadow-[0_4px_12px_rgba(255,68,68,0.3)]">
                ⏱️ 소요 시간: 4-6시간 / 기업
              </div>
            </div>

            {/* Card 3: 주석사항 표 정리의 악몽 */}
            <div className="bg-[#F7FAFC] rounded-2xl p-8 lg:p-10 border-l-6 border-[#D4AF37] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 animate-fade-in [animation-delay:0.2s]">
              <div className="text-6xl mb-6 opacity-90">📑</div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#1A1F2E] mb-6 leading-tight">
                주석사항 표 정리의 악몽
              </h3>
              <p className="text-lg text-[#4A5568] leading-relaxed mb-8">
                사업보고서 주석에 있는
                <br />
                "비용의 성격별 분류",
                <br />
                "유형자산 변동표" 같은
                <br />
                복잡한 표들.
                <br />
                <br />
                Ctrl+C, Ctrl+V로
                <br />
                엑셀에 옮기는 순간
                <br />
                서식이 깨지고, 숫자가 엉망이 됩니다.
                <br />
                <br />
                결국 손으로 하나씩 옮기다가...
              </p>

              {/* Quote Box */}
              <div className="relative bg-[rgba(212,175,55,0.08)] border-l-4 border-[#D4AF37] rounded-lg p-6 mb-6">
                <div className="absolute -left-3 top-4 text-3xl bg-white rounded-full p-1">💬</div>
                <p className="text-sm font-bold text-[#D4AF37] tracking-wider uppercase mb-3">
                  💬 실제 목소리:
                </p>
                <p className="text-base italic text-[#2D3748] leading-relaxed">
                  "유형자산 표만 5개년 정리하는데
                  <br />
                  한 시간 반이 걸렸어요.
                  <br />
                  <br />
                  기초장부가액, 취득, 처분,
                  <br />
                  감가상각비, 기말장부가액...
                  <br />
                  <br />
                  셀 하나라도 틀리면
                  <br />
                  전체 분석이 틀어집니다."
                </p>
              </div>

              {/* Time Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#FF4444] to-[#FF6B6B] text-white font-bold text-sm rounded-full shadow-[0_4px_12px_rgba(255,68,68,0.3)]">
                ⏱️ 소요 시간: 1.5시간 / 표
              </div>
            </div>
          </div>

          {/* Bottom Transition */}
          <div className="relative mt-20 lg:mt-24 p-12 lg:p-16 bg-gradient-to-br from-[#0F1419] to-[#1A1F2E] rounded-3xl text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-100">
              <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#D4AF37] opacity-10 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            <h3 className="relative z-10 text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-white bg-[length:200%_auto] animate-gradient leading-tight">
              이제 이 모든 작업을
              <br />
              10분으로 줄입니다.
            </h3>
            <div className="relative z-10 mt-6 text-5xl text-[#D4AF37] animate-bounce">↓</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUTION - 3 Step Process */}
      <section className="bg-gradient-to-b from-[#F7FAFC] to-white py-20 lg:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1F2E] mb-4">
              3단계면 끝납니다.
            </h2>
            <p className="text-xl text-[#718096]">
              복잡한 설정도, 학습 시간도 필요 없습니다.
            </p>
          </div>

          {/* 3-Step Flow */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10">
            {/* Step 1: 문서 업로드 */}
            <div className="flex-1 bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[#E2E8F0] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 animate-fade-in">
              <div className="flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#FFD700] text-[#1A1F2E] text-4xl font-bold rounded-full shadow-[0_4px_12px_rgba(212,175,55,0.3)] mb-8">
                  1
                </div>

                <h3 className="text-2xl font-bold text-[#1A1F2E] mb-5">문서 업로드</h3>
                <p className="text-lg text-[#4A5568] leading-relaxed mb-6">
                  공시보고서, 재무제표,
                  <br />
                  감사보고서를 드래그 앤 드롭.
                </p>

                {/* Key Feature */}
                <div className="w-full bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.2)] rounded-lg p-4 mb-6">
                  <p className="text-sm text-[#2D3748] leading-relaxed">
                    🔒 인터넷 연결 불필요
                    <br />
                    로컬에서만 처리
                  </p>
                </div>

                {/* Visual Element */}
                <div className="w-full h-48 bg-[#F7FAFC] rounded-xl flex items-center justify-center">
                  <div className="text-5xl text-[#CBD5E0]">📄</div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center justify-center text-[#CBD5E0] text-5xl animate-pulse">
              →
            </div>

            {/* Step 2: 질문하기 */}
            <div className="flex-1 bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[#E2E8F0] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 animate-fade-in [animation-delay:0.2s]">
              <div className="flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#FFD700] text-[#1A1F2E] text-4xl font-bold rounded-full shadow-[0_4px_12px_rgba(212,175,55,0.3)] mb-8">
                  2
                </div>

                <h3 className="text-2xl font-bold text-[#1A1F2E] mb-5">질문하기</h3>
                <p className="text-lg text-[#4A5568] leading-relaxed mb-6">
                  평소 하던 방식 그대로
                  <br />
                  자연어로 질문하세요.
                </p>

                {/* Example Questions */}
                <div className="w-full bg-[rgba(0,200,150,0.05)] border-l-4 border-[#00C896] rounded-lg p-5 mb-6 text-left">
                  <p className="text-sm text-[#2D3748] leading-relaxed">
                    💬 예시:
                    <br />
                    "삼성전자와 SK하이닉스의
                    <br />
                    2023년 부채비율을 비교해줘"
                    <br />
                    <br />
                    "지난 3년간 영업이익률 추이는?"
                  </p>
                </div>

                {/* Visual Element */}
                <div className="w-full h-48 bg-[#F7FAFC] rounded-xl flex items-center justify-center">
                  <div className="text-base text-[#CBD5E0]">질문을 입력하세요...</div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center justify-center text-[#CBD5E0] text-5xl animate-pulse">
              →
            </div>

            {/* Step 3: 정확한 답변 + 출처 */}
            <div className="flex-1 bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[#E2E8F0] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 animate-fade-in [animation-delay:0.4s]">
              <div className="flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#FFD700] text-[#1A1F2E] text-4xl font-bold rounded-full shadow-[0_4px_12px_rgba(212,175,55,0.3)] mb-8">
                  3
                </div>

                <h3 className="text-2xl font-bold text-[#1A1F2E] mb-5">정확한 답변 + 출처</h3>
                <p className="text-lg text-[#4A5568] leading-relaxed mb-6">
                  문장 단위로 출처를 확인하며
                  <br />
                  신뢰할 수 있는 인사이트 확보.
                </p>

                {/* Key Features */}
                <div className="w-full bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.2)] rounded-lg p-4 mb-6">
                  <p className="text-sm text-[#2D3748] leading-relaxed text-left">
                    ✓ 표, 수식까지 정확 인식
                    <br />
                    ✓ 페이지 넘어가도 완벽 추적
                    <br />
                    ✓ 한 문장씩 출처 확인 가능
                  </p>
                </div>

                {/* Visual Element */}
                <div className="w-full h-48 bg-[#F7FAFC] rounded-xl flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#1A1F2E] font-semibold text-sm rounded-lg">
                    📄 Page 22
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 lg:mt-20 animate-fade-in">
            <Button
              size="xl"
              className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0F1419] font-bold shadow-[0_8px_24px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_36px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
            >
              지금 무료로 시작하기 →
            </Button>
            <p className="mt-4 text-sm text-[#718096]">
              신용카드 등록 없음 | 5분 안에 설정 완료
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financial;
