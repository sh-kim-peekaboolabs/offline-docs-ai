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

        <h1 className="text-4xl font-bold mb-8">개인정보처리방침</h1>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <section>
            <p className="text-muted-foreground">
              PeekabooLabs(이하 "회사")는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다. 회사는 개인정보처리방침을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. 수집하는 개인정보 항목</h2>
            <p className="text-muted-foreground mb-2">회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:</p>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-1">가. Waitlist 등록 시</h3>
                <ul className="list-disc list-inside">
                  <li>필수항목: 이메일 주소</li>
                  <li>선택항목: 마케팅 캠페인 관련 정보 (UTM 파라미터, LinkedIn 캠페인 정보)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">나. 자동 수집 정보</h3>
                <ul className="list-disc list-inside">
                  <li>서비스 이용 기록, 접속 로그, 쿠키</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. 개인정보의 수집 및 이용 목적</h2>
            <p className="text-muted-foreground mb-2">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>서비스 베타 출시 및 업데이트 알림</li>
              <li>신규 서비스 개발 및 마케팅 활용</li>
              <li>이용자 문의 대응</li>
              <li>서비스 개선을 위한 통계 분석</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. 개인정보의 보유 및 이용 기간</h2>
            <p className="text-muted-foreground mb-2">
              회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다:
            </p>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-1">가. 회사 내부 방침에 의한 정보보유 사유</h3>
                <ul className="list-disc list-inside">
                  <li>Waitlist 등록 정보: 서비스 정식 출시 후 1년</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">나. 관련 법령에 의한 정보보유 사유</h3>
                <ul className="list-disc list-inside">
                  <li>전자상거래 등에서의 소비자보호에 관한 법률에 따른 표시∙광고에 관한 기록: 6개월</li>
                  <li>통신비밀보호법에 따른 웹사이트 방문기록: 3개월</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. 개인정보의 파기 절차 및 방법</h2>
            <p className="text-muted-foreground mb-2">
              이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 회사의 개인정보 파기절차 및 방법은 다음과 같습니다:
            </p>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-1">가. 파기절차</h3>
                <p>이용자가 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">나. 파기방법</h3>
                <ul className="list-disc list-inside">
                  <li>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</li>
                  <li>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. 개인정보의 제3자 제공</h2>
            <p className="text-muted-foreground">
              회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. 개인정보 처리 위탁</h2>
            <p className="text-muted-foreground mb-2">회사는 서비스 향상을 위해 아래와 같이 개인정보 처리업무를 외부 전문업체에 위탁하여 운영하고 있습니다:</p>
            <div className="text-muted-foreground">
              <h3 className="font-semibold text-foreground mb-1">가. 위탁 대상자: Supabase</h3>
              <ul className="list-disc list-inside">
                <li>위탁 업무 내용: 데이터베이스 관리 및 호스팅</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. 이용자의 권리와 의무</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 개인정보의 처리에 대한 동의 철회(회원탈퇴)를 요청할 수 있습니다.</p>
              <p>개인정보 관련 문의사항은 아래의 연락처로 문의하시면 신속하게 답변 드리겠습니다:</p>
              <ul className="list-disc list-inside">
                <li>이메일: contact@peekaboolabs.ai</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. 개인정보 보호책임자</h2>
            <p className="text-muted-foreground mb-2">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:
            </p>
            <div className="text-muted-foreground">
              <ul className="list-disc list-inside">
                <li>이메일: contact@peekaboolabs.ai</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. 개인정보 처리방침의 변경</h2>
            <p className="text-muted-foreground">
              이 개인정보 처리방침은 2025년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. 쿠키의 운영</h2>
            <p className="text-muted-foreground mb-2">
              회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
            </p>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-1">가. 쿠키의 사용 목적</h3>
                <ul className="list-disc list-inside">
                  <li>방문 및 이용형태 파악을 통한 서비스 개선</li>
                  <li>마케팅 캠페인 효과 측정</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">나. 쿠키 설정 거부 방법</h3>
                <p>이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</p>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>공고일자: 2025년 1월 1일</strong><br />
              <strong>시행일자: 2025년 1월 1일</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
