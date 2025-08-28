import { WifiOff, Brain, FileText, Quote, LinkIcon, Search } from "lucide-react";
import { memo } from "react";

const Features = memo(() => (
  <section id="features" className="section bg-secondary-lighter/50" aria-labelledby="features-heading">
    <div className="container">
      <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        핵심 기능
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <WifiOff className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">오프라인 요약 AI</h3>
          <p className="text-muted-foreground">인터넷 없이 대용량 문서를 빠르게 요약해요.</p>
        </div>
        
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <Brain className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">한국어 특화 AI</h3>
          <p className="text-muted-foreground">한국어 문맥·문체에 최적화된 AI를 탑재했어요.</p>
        </div>
        
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">HWP 지원</h3>
          <p className="text-muted-foreground">HWP/HWPX 문서를 바로 읽을 수 있어요.</p>
        </div>
        
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <Quote className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">모든 답변에 출처 제공</h3>
          <p className="text-muted-foreground">문서에서 찾은 출처를 바로 확인할 수 있어요.</p>
        </div>
        
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <LinkIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">문서·링크·텍스트 통합</h3>
          <p className="text-muted-foreground">하나의 지식 베이스에서 한번에 통합 분석해요.</p>
        </div>
        
        <div className="feature-card text-center group gpu-optimized">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 gpu-scale">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">오프라인 지식 검색</h3>
          <p className="text-muted-foreground">선택한 문서 내에서 키워드·질문 기반 검색할 수 있어요.</p>
        </div>
      </div>
    </div>
  </section>
));

Features.displayName = "Features";
export default Features;