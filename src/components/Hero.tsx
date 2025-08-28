import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-subtle" aria-hidden />
    <div className="container relative py-20 md:py-28 text-center">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-primary text-sm font-medium mb-6">
        내 PC부터 Notion까지, 흩어진 모든 문서에서
      </div>
      <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl leading-normal md:text-5xl font-bold">
        한 번의 질문으로, 원하는 답을 찾으세요.
      </h1>
      <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        빠르고 안전한 AI 사내 문서 탐색기
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <a href="#cta">
          <Button variant="hero" size="xl">Waitlist 등록하기</Button>
        </a>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 animate-pulse">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
          <span className="text-sm font-medium text-green-700">🔥 벌써 100명+ 신청 완료!</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{
            animationDelay: '0.2s'
          }}></div>
        </div>
        <p className="text-xs text-muted-foreground/70 animate-fade-in">* 한정된 베타 테스터 모집 중 *</p>
      </div>
    </div>
  </section>
);

export default Hero;