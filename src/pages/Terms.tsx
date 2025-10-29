import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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

        <h1 className="text-4xl font-bold mb-8">서비스 이용약관</h1>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">제1조 (목적)</h2>
            <p className="text-muted-foreground">
              본 약관은 PeekabooLabs(이하 "회사")가 제공하는 LocalDocs 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">제2조 (정의)</h2>
            <p className="text-muted-foreground mb-2">본 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>"서비스"란 회사가 제공하는 LocalDocs 및 관련 제반 서비스를 의미합니다.</li>
              <li>"이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 의미합니다.</li>
              <li>"콘텐츠"란 서비스를 통해 이용자가 생성, 업로드, 저장하는 문서, 데이터 등 정보를 의미합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">제3조 (약관의 효력 및 변경)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</li>
              <li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 화면에 공지함으로써 효력이 발생합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">제4조 (서비스의 제공)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>회사는 PDF 문서 분석 및 질의응답 서비스를 제공합니다.</li>
              <li>서비스는 연중무휴 1일 24시간 제공함을 원칙으로 합니다. 다만, 시스템 점검 등 필요한 경우 서비스 제공을 일시 중단할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">제5조 (개인정보 보호)</h2>
            <p className="text-muted-foreground">
              회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 이용에 대해서는 관련 법령 및 회사의 개인정보처리방침이 적용됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">제6조 (이용자의 의무)</h2>
            <p className="text-muted-foreground mb-2">이용자는 다음 행위를 하여서는 안 됩니다:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>타인의 정보 도용</li>
              <li>회사가 게시한 정보의 변경</li>
              <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
              <li>회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li>기타 불법적이거나 부당한 행위</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">제7조 (저작권의 귀속 및 이용제한)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</li>
              <li>이용자가 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">제8조 (면책조항)</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
              <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
              <li>회사는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">제9조 (분쟁해결)</h2>
            <p className="text-muted-foreground">
              본 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다. 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.
            </p>
          </section>

          <section className="pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>부칙</strong><br />
              본 약관은 2025년 1월 1일부터 시행됩니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
