import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          뒤로 가기
        </Button>

        <h1 className="text-4xl font-bold mb-4">개인정보처리방침</h1>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Owner: Hansol Nam</p>

          <p className="text-muted-foreground">
            주식회사 피카부랩스(이하 "회사")는 정보주체의 자유와 권리를 보호하기 위하여 「개인정보 보호법」 및 관계 법령을 준수하며, 투명하고 안전하게 개인정보를 처리하고 있습니다. 회사는 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 사항을 안내하고, 고충을 신속하고 원활하게 처리할 수 있도록 본 개인정보 처리방침을 수립·공개합니다.
          </p>

          <p className="text-muted-foreground">시행일자: 2025년 11월 1일</p>
          <p className="text-muted-foreground">최종개정일자: 2025년 11월 1일</p>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. 개인정보의 처리 목적, 항목 및 보유·이용기간</h2>
            <p className="text-muted-foreground mb-4">
              회사는 서비스 제공을 위해 최소한의 개인정보를 수집·이용하며, 그 목적 외로는 이용하지 않습니다. 처리 목적이 변경될 경우, 「개인정보 보호법」 제18조에 따라 별도의 동의를 받습니다.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">1. 정보주체의 동의를 받아 처리하는 개인정보</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">수집 목적</th>
                    <th className="border border-border px-4 py-2 text-left">수집 항목</th>
                    <th className="border border-border px-4 py-2 text-left">보유 및 이용기간</th>
                    <th className="border border-border px-4 py-2 text-left">법적 근거</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">회원가입 및 서비스 이용</td>
                    <td className="border border-border px-4 py-2">[필수] 이메일<br />[선택] 이름, 연락처, 아이디, 비밀번호, 생년월일, 성별, 프로필 사진</td>
                    <td className="border border-border px-4 py-2">회원 탈퇴 시까지 또는 관련 법령에 따른 보존기간</td>
                    <td className="border border-border px-4 py-2">개인정보 보호법 제15조 제1항 제1호</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">서비스 이용 기록 관리</td>
                    <td className="border border-border px-4 py-2">접속 로그, 접속 IP, 서비스 이용 및 정지 기록, 쿠키</td>
                    <td className="border border-border px-4 py-2">3개월(통신비밀보호법) 또는 회원 탈퇴 시까지</td>
                    <td className="border border-border px-4 py-2">개인정보 보호법 제15조 제1항 제1호</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">기기 정보 기반 최적화</td>
                    <td className="border border-border px-4 py-2">MacAddress, 브라우저 정보, 기기 모델명, OS, 광고 ID 등</td>
                    <td className="border border-border px-4 py-2">회원 탈퇴 시까지</td>
                    <td className="border border-border px-4 py-2">개인정보 보호법 제15조 제1항 제1호</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mb-3 mt-6">2. 법령에 따른 보유</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">보관 항목</th>
                    <th className="border border-border px-4 py-2 text-left">보유 기간</th>
                    <th className="border border-border px-4 py-2 text-left">관련 법령</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">계약, 청약철회, 대금결제, 재화공급 기록</td>
                    <td className="border border-border px-4 py-2">5년</td>
                    <td className="border border-border px-4 py-2">전자상거래 등에서의 소비자보호에 관한 법률</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">소비자 불만 및 분쟁처리 기록</td>
                    <td className="border border-border px-4 py-2">3년</td>
                    <td className="border border-border px-4 py-2">동법</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">표시·광고에 관한 기록</td>
                    <td className="border border-border px-4 py-2">6개월</td>
                    <td className="border border-border px-4 py-2">동법</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">접속기록(IP, 활동 내역 등)</td>
                    <td className="border border-border px-4 py-2">3개월</td>
                    <td className="border border-border px-4 py-2">통신비밀보호법 제15조의2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. 개인정보의 제3자 제공에 관한 사항</h2>
            <p className="text-muted-foreground mb-4">
              회사는 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래의 경우에는 예외로 제공합니다.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>정보주체의 별도 동의를 받은 경우</li>
              <li>법령에 따라 제공이 요구되는 경우</li>
              <li>정보주체 또는 제3자의 생명, 신체, 재산에 급박한 위험이 있는 경우</li>
            </ol>
            <p className="text-muted-foreground mt-4">
              회사는 개인정보를 제3자에게 제공하고 있지 않으며, 향후 제공이 필요한 경우 정보주체에게 사전 고지하고 동의를 받을 예정입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. 개인정보의 처리 위탁에 관한 사항</h2>
            <p className="text-muted-foreground mb-4">
              회사는 서비스 제공을 위하여 개인정보 처리업무를 외부에 위탁하고 있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">수탁자</th>
                    <th className="border border-border px-4 py-2 text-left">위탁 업무 내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Google LLC</td>
                    <td className="border border-border px-4 py-2">통계 분석(Google Analytics, Firebase)</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Lemon Squeezy, LLC</td>
                    <td className="border border-border px-4 py-2">결제 서비스 제공</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Amazon Web Services, Inc.</td>
                    <td className="border border-border px-4 py-2">서버 운영 및 저장, 암호화 키 관리(KMS)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              회사는 수탁자와 계약을 체결할 때 「개인정보 보호법」 제26조에 따라 수탁자의 관리·감독, 재위탁 제한, 기술적 보호조치 의무 등을 명확히 하고 있으며, 수탁자가 개인정보를 안전하게 처리하는지를 주기적으로 점검합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. 개인정보의 국외 이전에 관한 사항</h2>
            <p className="text-muted-foreground mb-4">
              회사는 서비스 운영을 위해 아래와 같이 개인정보를 국외로 이전하고 있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">수탁업체</th>
                    <th className="border border-border px-4 py-2 text-left">국가</th>
                    <th className="border border-border px-4 py-2 text-left">이전 시점 및 방법</th>
                    <th className="border border-border px-4 py-2 text-left">연락처</th>
                    <th className="border border-border px-4 py-2 text-left">항목</th>
                    <th className="border border-border px-4 py-2 text-left">목적</th>
                    <th className="border border-border px-4 py-2 text-left">보유 및 이용기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Amazon Web Services, Inc.</td>
                    <td className="border border-border px-4 py-2">미국</td>
                    <td className="border border-border px-4 py-2">서비스 이용 시 서버 전송</td>
                    <td className="border border-border px-4 py-2"><a href="mailto:aws-korea-privacy@amazon.com" className="text-primary hover:underline">aws-korea-privacy@amazon.com</a></td>
                    <td className="border border-border px-4 py-2">이메일, 기기정보</td>
                    <td className="border border-border px-4 py-2">서버 운영 및 저장</td>
                    <td className="border border-border px-4 py-2">위탁 계약 종료 시까지</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Google LLC</td>
                    <td className="border border-border px-4 py-2">미국</td>
                    <td className="border border-border px-4 py-2">서버를 통한 자동 전송</td>
                    <td className="border border-border px-4 py-2"><a href="mailto:googlekrsupport@google.com" className="text-primary hover:underline">googlekrsupport@google.com</a></td>
                    <td className="border border-border px-4 py-2">이메일, 기기정보, 행동데이터, 피드백 리포트 등</td>
                    <td className="border border-border px-4 py-2">서버 운영 및 저장</td>
                    <td className="border border-border px-4 py-2">위탁 계약 종료 시까지</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              ※ 국외 이전을 원하지 않으실 경우, 외부 서비스 연동을 해제하거나 회원 탈퇴를 통해 처리하실 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. 개인정보의 파기 절차 및 방법</h2>
            <p className="text-muted-foreground mb-4">
              회사는 개인정보 보유기간이 경과하거나 처리 목적이 달성된 경우에는 지체 없이 해당 정보를 파기합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>전자적 파일: 복구 불가능한 기술적 방법으로 삭제 (예: 데이터베이스에서 영구 삭제 및 오버라이팅)</li>
              <li>종이 문서: 분쇄 또는 소각</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              관련 법령에 따라 별도의 보존이 필요한 정보는 다른 정보와 분리하여 안전하게 보관합니다. 또한, 사용자 요청 또는 탈퇴 시 관련 데이터는 즉시 복구 불가능하게 삭제되며, 로그는 최소 1년 이상 보관 후 파기됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. 정보주체와 법정대리인의 권리·의무 및 행사방법</h2>
            <p className="text-muted-foreground mb-4">
              정보주체는 언제든지 다음의 권리를 행사할 수 있습니다:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리 정지 요구</li>
            </ol>
            <p className="text-muted-foreground mt-4">
              이러한 권리는 웹사이트 내 [내 정보] 메뉴, 또는 서면·이메일 등을 통해 행사할 수 있습니다.
            </p>
            <p className="text-muted-foreground mt-4">
              ※ 회사는 만 14세 미만 아동의 개인정보를 수집하지 않으며, 생년월일 확인 및 법정대리인 동의 절차를 운영하지 않고 있어 만 14세 미만은 서비스 이용이 제한됩니다. 만 14세 미만 아동이 가입한 사실이 확인될 경우, 즉시 해당 계정은 삭제 조치됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</h2>
            <p className="text-muted-foreground mb-4">
              회사는 서비스 제공을 위해 쿠키를 포함한 자동 수집 장치를 운영할 수 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>수집 항목: 서비스 이용 기록, 접속 로그, 기기 정보 등</li>
              <li>수집 목적: 맞춤형 서비스 제공, 보안 유지, 통계 분석 등</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              정보주체는 웹 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. 행태정보의 수집·이용 및 거부 등에 관한 사항</h2>
            <p className="text-muted-foreground mb-4">
              회사는 서비스 이용과정에서 이용자로부터 다음과 같은 정보들이 자동으로 생성/수집되고 다음의 목적으로 이용될 수 있습니다.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>개인정보 자동수집정보 사용목적
                <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                  <li>관련법규의 준수 : 회사는 관련법규의 준수를 위해 이용자의 접속기록(로그인)을 보관할 의무가 있습니다.</li>
                  <li>웹 사용성 분석 및 개선 : 방문일시, 서비스 이용기록, Cookie ID 항목을 수집하며 수집일부터 5년 까지 보유이용되며 기간 경과후 즉시 삭제됩니다.</li>
                </ol>
              </li>
              <li>개인정보 자동수집안내 및 거부방법
                <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                  <li>아래의 분석도구를 활용하여 이용자의 주요행동(행태정보)를 수집 및 분석합니다. 수집된 정보는 모두 비식별화됩니다.
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>수탁사명 : Google LLC</li>
                    </ul>
                  </li>
                  <li>개인정보 자동수집장치(쿠키 등)의 설치운영 및 거부 방법 :
                    <p className="mt-2 ml-6">아래 방법을 통해 쿠키 등의 저장을 거부하거나 삭제할 수 있습니다.</p>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>[web]
                        <p className="ml-6 mt-1">Internet Explorer 웹 브라우저의 경우 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정</p>
                        <p className="ml-6">Microsoft Edge 웹 브라우저의 경우 : 웹브라우저 상단 메뉴 &gt; 설정 &gt; 고급 설정 보기 &gt; 쿠키 메뉴의 옵션 설정</p>
                        <p className="ml-6">Chrome 웹브라우저의 경우 : 웹브라우저 상단 메뉴 &gt; 설정 &gt; 고급 &gt; 콘텐츠 설정 &gt; 쿠키 메뉴의 옵션 설정</p>
                        <p className="ml-6">Chrome 모바일의 경우 : 크롬 App &gt; 오른쪽상단 더보기 &gt; 방문 기록 인터넷 사용 기록 삭제 &gt; 기간선택 &gt; 쿠키 및 사이트 데이터'와 '캐시된 이미지 또는 파일' 옆의 체크박스를 선택 &gt; 인터넷 사용기록 삭제</p>
                        <p className="ml-6">Safari 모바일의 경우 : Safari App &gt; 방문기록 및 웹사이트 데이터 지우기 &gt; 확인</p>
                        <p className="ml-6">Naver 모바일의 경우 : Naver App &gt; 설정 &gt; 캐시삭제 + 인터넷 사용 기록 &gt; 쿠키삭제</p>
                      </li>
                      <li>[App]
                        <p className="ml-6 mt-1">Window : 내PC &gt; AppData &gt; Local &gt; LocalDocs(로컬독스) &gt; 데이터 삭제</p>
                        <p className="ml-6">Mac : Finder &gt; 응용 프로그램 &gt; LocalDocs(로컬독스) &gt; 앱 삭제</p>
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ol>
            <p className="text-muted-foreground mt-4 font-bold">
              ※ 회사는 이 외에 서비스 제공 과정에서 사용자가 직접 등록한 파일을 비롯해 AI와 대화한 내역, AI 콘텐츠는 일절 수집되지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. 개인정보 보호책임자 및 고충처리부서 안내</h2>
            <p className="text-muted-foreground mb-4">
              회사는 개인정보 관련 업무를 총괄하는 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>성명: 서정환</li>
              <li>이메일: contact@peekaboolabs.ai</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              개인정보 관련 문의사항, 권리 행사 요청, 고충 처리 등은 위 연락처로 문의하시면 지체 없이 처리해 드리겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. 보안 조치</h2>
            <p className="text-muted-foreground mb-4">
              회사는 개인정보를 보호하기 위해 다음과 같은 기술적, 관리적, 물리적 조치를 취합니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>암호화</strong>: 개인정보는 AES-256 알고리즘을 사용하여 저장 및 전송됩니다.</li>
              <li><strong>접근 통제 및 인증</strong>: 역할 기반 접근 통제(RBAC)를 적용하여 최소 권한 원칙을 준수합니다. 관리자 접근은 MFA(Multi-Factor Authentication)로 제한됩니다. 관리자의 시스템 접근 시 안전한 인증을 요구하며, 로그인 시도 횟수 제한 및 세션 타임아웃을 적용합니다.</li>
              <li><strong>데이터 보유 및 마스킹</strong>: 대화 기록과 이를 문서화한 내용 등 민감 정보는 민감도가 가장 높은 것으로 분류되어 완전 암호화된 형태로 저장되며, 표시 시 마스킹 처리되어 불필요한 노출을 최소화합니다. 보유 기간 경과 시 자동 파기되며, 데이터는 민감도(높음, 중간, 낮음)에 따라 분류되어 적절한 통제를 적용합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. 고지의 의무 및 방침 변경</h2>
            <p className="text-muted-foreground mb-4">
              본 개인정보 처리방침은 법령 또는 서비스 내용 변경에 따라 개정될 수 있으며, 변경 시 개정 최소 7일 전부터 사전 고지합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>공지 방법: 웹사이트 또는 이메일을 통한 알림</li>
              <li>중요 변경 시: 최소 30일 전 사전 고지</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
