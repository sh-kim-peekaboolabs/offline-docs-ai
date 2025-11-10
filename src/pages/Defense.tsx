import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Lock, FileText, Target, Zap, Shield, CheckCircle, Database, Users } from "lucide-react";

const Defense = () => {
  return (
    <div className="min-h-screen bg-navy-dark text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            400페이지 군사 교범,<br />
            핵심만 10초에 찾으세요
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            폐쇄망에서도 안전하게 작동하는 AI 문서 분석<br />
            인터넷 연결 없이, 민감한 자료도 외부 유출 걱정 없이
          </p>
          
          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden border-2 border-teal/30 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="aspect-video flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-full bg-teal/20 flex items-center justify-center mb-4 animate-pulse">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-teal border-b-[12px] border-b-transparent ml-1"></div>
              </div>
              <p className="text-lg font-semibold text-gray-300">데모 영상</p>
              <p className="text-sm text-gray-500 mt-2">(추후 삽입 예정)</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-12 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-teal/50 transition-all hover:scale-105">
            무료 체험하기 <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-navy-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            이런 경험, 있으시죠?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12 text-orange-500" />,
                title: "400페이지 교범에서 Ctrl+F로 8시간",
                content: "작전 준비 시간은 촉박한데, 필요한 절차를 찾으려면 교범 여러 권을 뒤적이며 몇 시간씩 허비합니다.",
                delay: "0ms"
              },
              {
                icon: <Lock className="w-12 h-12 text-red-500" />,
                title: "ChatGPT에 올릴 수 없는 민감 자료",
                content: "일반 AI 서비스는 인터넷이 필요하고, 보안 규정상 민감한 군사문서를 외부에 업로드할 수 없습니다.",
                delay: "100ms"
              },
              {
                icon: <FileText className="w-12 h-12 text-blue-500" />,
                title: "표와 수식이 뒤섞인 기술문서",
                content: "복잡한 표, 수식, 도표가 섞인 문서는 단순 검색으로는 정확한 정보를 찾기 어렵습니다.",
                delay: "200ms"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-gray-800 p-10 rounded-2xl border border-gray-700 hover:border-gray-600 hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ animationDelay: item.delay }}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-navy-dark to-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            LocalDocs가 해결합니다
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-teal" />,
                title: "8시간 → 10초",
                content: "400페이지 교범에서 필요한 절차를 10초 만에 찾아 정확한 출처와 함께 제공합니다."
              },
              {
                icon: <Shield className="w-12 h-12 text-teal" />,
                title: "폐쇄망에서도 동작",
                content: "인터넷 연결 없이 로컬에서만 작동. 민감한 군사문서도 외부 유출 걱정 없이 안전하게 분석할 수 있습니다."
              },
              {
                icon: <Target className="w-12 h-12 text-teal" />,
                title: "표, 수식도 완벽 인식",
                content: "복잡한 표, 기술 수식, 다이어그램도 정확하게 인식하고 분석합니다. 페이지가 넘어가는 내용도 놓치지 않습니다."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl border-2 border-teal/50 hover:border-teal hover:shadow-2xl hover:shadow-teal/30 hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-200 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 px-4 bg-navy">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            실제로 어떻게 작동하나요?
          </h2>
          
          <div className="rounded-2xl overflow-hidden border-2 border-teal shadow-2xl shadow-teal/20 mb-8">
            <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="w-20 h-20 rounded-full bg-teal/20 flex items-center justify-center mb-4 hover:bg-teal/30 transition-all cursor-pointer animate-pulse">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-teal border-b-[12px] border-b-transparent ml-1"></div>
              </div>
              <p className="text-xl font-semibold">데모 영상</p>
              <p className="text-sm text-gray-400 mt-2">(추후 삽입 예정)</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-teal/20">
            <h3 className="text-xl font-bold text-teal mb-6">영상 내용 (30-60초):</h3>
            <ul className="space-y-3 text-gray-200">
              {[
                "FM 3-90 (전술교범) 400페이지 업로드",
                "질문: '방어 작전의 핵심 원칙은?'",
                "AI 답변 + 출처 표시",
                "출처 클릭 → 해당 페이지 이동",
                "자막: '400페이지 → 10초에 정확한 답변'"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal mr-3 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-gray-400 text-sm mt-8 italic">
              폐쇄망 환경에서 촬영된 실제 데모입니다
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-navy to-navy-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            왜 LocalDocs인가요?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: <FileText className="w-16 h-16 text-teal" />,
                title: "문장 단위로 출처 제공",
                description: "답변의 모든 문장마다 정확한 출처를 표시합니다. '교범 p.47, 3번째 문단'처럼 구체적으로 제공되어 신뢰도 높은 의사결정이 가능합니다.",
                visual: (
                  <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-teal/20 font-mono text-sm">
                    <p className="text-gray-200">방어 작전의 핵심 원칙은 집중과 경제성입니다<sup className="text-teal">[1]</sup></p>
                    <p className="text-gray-400 text-xs mt-2">[출처: FM 3-90, p.47]</p>
                  </div>
                )
              },
              {
                icon: <Database className="w-16 h-16 text-teal" />,
                title: "표와 수식도 완벽 인식",
                description: "복잡한 기술 표, 수학 수식, 다이어그램을 정확하게 인식하고 분석합니다. 페이지가 넘어가는 표도 끊김 없이 처리합니다.",
                visual: (
                  <div className="mt-6 flex items-center justify-center">
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-teal/20">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-gray-800 p-2 rounded">장비</div>
                        <div className="bg-gray-800 p-2 rounded">수량</div>
                        <div className="text-gray-400">M4A1</div>
                        <div className="text-gray-400">240</div>
                      </div>
                      <CheckCircle className="w-6 h-6 text-teal mt-2 mx-auto" />
                    </div>
                  </div>
                )
              },
              {
                icon: <Shield className="w-16 h-16 text-teal" />,
                title: "인터넷 연결 불필요",
                description: "완전히 로컬에서만 작동합니다. 폐쇄망 환경에서도 문제없이 사용 가능하며, 민감한 자료가 외부로 유출될 위험이 없습니다.",
                visual: (
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">💻</div>
                    <div className="text-red-500 text-2xl font-bold">✕</div>
                    <div className="text-teal text-2xl">🔒</div>
                  </div>
                )
              },
              {
                icon: <Users className="w-16 h-16 text-teal" />,
                title: "여러 문서 동시 분석",
                description: "교범, 매뉴얼, 보고서 등 여러 문서를 한 번에 업로드하고 통합 검색 및 비교 분석이 가능합니다.",
                visual: (
                  <div className="mt-6 flex items-center justify-center gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-16 h-20 bg-gray-800 rounded border border-teal/30 flex items-center justify-center text-2xl" style={{ transform: `translateX(${-i * 8}px)`, zIndex: 3 - i }}>
                        📄
                      </div>
                    ))}
                  </div>
                )
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="bg-gray-800 p-10 rounded-2xl border border-teal/20 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/10 hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed mb-4">{feature.description}</p>
                <div className="border-t border-teal/20 pt-4">
                  {feature.visual}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4 bg-navy">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            실제로 어떻게 활용하나요?
          </h2>
          
          <div className="space-y-12">
            {[
              {
                situation: "긴급 작전 명령이 떨어졌는데, 관련 교범 내용을 빠르게 확인해야 할 때",
                label: "작전 계획 수립",
                before: [
                  "교범 5권을 뒤적이며 8시간 소요",
                  "중요한 절차를 놓칠 위험"
                ],
                after: [
                  "'방어 작전 체크리스트는?' 질문으로 10초 해결",
                  "출처와 함께 정확한 절차 확인",
                  "작전 계획 수립 시간 8시간 단축"
                ]
              },
              {
                situation: "장비 고장 시 기술교범에서 정비 절차를 찾아야 할 때",
                label: "장비 정비",
                before: [
                  "300페이지 기술교범을 Ctrl+F로 검색",
                  "표로 되어있는 부품 번호 찾기 어려움"
                ],
                after: [
                  "'XX 부품 교체 절차는?' 질문으로 즉시 해결",
                  "표 안의 부품 번호도 정확히 인식",
                  "정비 시간 2시간 단축"
                ]
              },
              {
                situation: "신병 교육을 위해 교범 내용을 정리해야 할 때",
                label: "교육 자료 준비",
                before: [
                  "여러 교범에서 관련 내용 수작업 복사",
                  "출처 정리에 시간 소요"
                ],
                after: [
                  "'기본 전술 개념 요약해줘' 질문으로 요약 생성",
                  "출처가 자동으로 포함되어 교육자료 완성",
                  "자료 준비 시간 5시간 단축"
                ]
              }
            ].map((useCase, idx) => (
              <div key={idx} className="bg-gray-800 p-10 rounded-3xl border-2 border-teal/30 hover:border-teal/50 transition-all">
                <div className="inline-block bg-teal px-6 py-2 rounded-full text-sm font-bold mb-6">
                  {useCase.label}
                </div>
                <p className="text-xl font-bold mb-8 text-gray-100">"{useCase.situation}"</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-red-400 mb-4 flex items-center">
                      <span className="mr-2">Before</span>
                    </h4>
                    <ul className="space-y-3">
                      {useCase.before.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="text-red-400 mr-3">❌</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center">
                      <span className="mr-2">After</span>
                    </h4>
                    <ul className="space-y-3">
                      {useCase.after.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-200">
                          <span className="text-green-400 mr-3">✅</span>
                          <span className={item.includes('단축') ? 'font-bold text-teal' : ''}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-4 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            보안이 최우선입니다
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "💻",
                title: "모든 데이터는 로컬에만",
                points: [
                  "인터넷 연결 불필요",
                  "문서와 AI 모델 모두 로컬 저장",
                  "외부 서버 전송 없음",
                  "폐쇄망 환경 완벽 지원"
                ]
              },
              {
                icon: "🔒",
                title: "민감 정보 완벽 보호",
                points: [
                  "업로드한 문서는 로컬에만 저장",
                  "클라우드 동기화 없음",
                  "삭제 시 완전히 제거",
                  "보안 규정 준수"
                ]
              },
              {
                icon: "✅",
                title: "국방/금융권 적용 사례",
                points: [
                  "보안에 민감한 기관에서 검증",
                  "폐쇄망 환경 실전 테스트 완료",
                  "안전한 AI 문서 분석 솔루션"
                ]
              }
            ].map((security, idx) => (
              <div 
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-3xl border-2 border-teal/30 hover:border-teal hover:shadow-2xl hover:shadow-teal/20 transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-center animate-pulse">{security.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-6">{security.title}</h3>
                <ul className="space-y-3">
                  {security.points.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-200">
                      <span className="text-teal mr-3 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-teal bg-teal/10 animate-pulse">
              <div className="text-center">
                <Shield className="w-12 h-12 text-teal mx-auto mb-2" />
                <p className="text-xs font-bold text-teal">보안 검증</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-navy to-teal-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/10 to-transparent animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            지금 바로 체험해보세요
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            설치부터 사용까지 5분이면 충분합니다.<br />
            폐쇄망에서도 안전하게 작동합니다.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-navy hover:bg-gray-100 px-16 py-8 text-xl font-black rounded-2xl shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all mb-6"
          >
            무료로 시작하기 <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          
          <p className="text-white/70 text-sm mb-8">
            신용카드 등록 불필요 • 언제든 취소 가능
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: <Lock className="w-4 h-4" />, text: "완전 보안" },
              { icon: <Clock className="w-4 h-4" />, text: "5분 설치" },
              { icon: <CheckCircle className="w-4 h-4" />, text: "무료 체험" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/80">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Defense;
