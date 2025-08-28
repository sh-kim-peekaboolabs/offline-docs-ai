import { ShieldCheck, WifiOff, AlertTriangle, X } from "lucide-react";
import { memo } from "react";

const Problem = memo(() => (
  <section className="section pt-8" aria-labelledby="problem-heading">
    <div className="container">
      <h2 id="problem-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        Localdocs를 써야하는 이유
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-30"></div>
          <div className="relative z-10 flex-shrink-0">
            <div className="p-3 rounded-xl bg-destructive/10 text-destructive">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[100px]">
            <h3 className="font-semibold mb-2">기밀 문서라 ChatGPT를 사용할 수 없어요</h3>
            <p className="text-sm text-muted-foreground mt-auto">보안 문서라 외부에 유출되면 안돼요</p>
          </div>
        </div>
        
        <div className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-30"></div>
          <div className="relative z-10 flex-shrink-0">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[100px]">
            <h3 className="font-semibold mb-2">수백 페이지 문서 처리 한계</h3>
            <p className="text-sm text-muted-foreground mt-auto">문서 개수가 많거나, 용량이 크면 토큰 제한이 걸려요</p>
          </div>
        </div>
        
        <div className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-30"></div>
          <div className="relative z-10 flex-shrink-0">
            <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
              <WifiOff className="w-6 h-6" />
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[100px]">
            <h3 className="font-semibold mb-2">폐쇄망이라 인터넷을 못 써요</h3>
            <p className="text-sm text-muted-foreground mt-auto">AI를 쓰고 싶어도 못 쓰는 상황이에요</p>
          </div>
        </div>
        
        <div className="feature-card flex items-start gap-4 p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-30"></div>
          <div className="relative z-10 flex-shrink-0">
            <div className="p-3 rounded-xl bg-red-100 text-red-600">
              <X className="w-6 h-6" />
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[100px]">
            <h3 className="font-semibold mb-2">HWP 파일 미지원</h3>
            <p className="text-sm text-muted-foreground mt-auto">ChatGPT도 HWP파일을 지원하지 않아 매번 PDF로 변환해야 해요.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
));

Problem.displayName = "Problem";
export default Problem;