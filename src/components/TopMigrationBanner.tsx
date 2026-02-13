import { Link } from "react-router-dom";

type TopMigrationBannerProps = {
  locale: "kr" | "en";
};

const BANNER_CONTENT = {
  kr: {
    to: "/new",
    desktopMessage: "문서는 내 PC에 그대로, RAG는 로컬에서. 답변은 GPT급으로 더 똑똑하게.",
    mobileMessage: "문서는 로컬에, 답변은 GPT급으로.",
    cta: "고성능 로컬독스 사용하기",
  },
  en: {
    to: "/new/en",
    desktopMessage: "Keep docs on-device with local RAG. Get GPT-grade answers.",
    mobileMessage: "Keep docs local, get GPT-grade answers.",
    cta: "Use high-performance LocalDocs",
  },
} as const;

export const TopMigrationBanner = ({ locale }: TopMigrationBannerProps) => {
  const content = BANNER_CONTENT[locale];

  return (
    <div className="sticky top-0 z-50 border-b border-sky-400 bg-sky-500 text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-center gap-2 overflow-hidden px-3 text-center text-[11px] font-medium sm:text-sm">
        <span className="min-w-0 truncate sm:hidden">{content.mobileMessage}</span>
        <span className="hidden min-w-0 truncate sm:inline">{content.desktopMessage}</span>
        <Link
          to={content.to}
          state={{ fromMigrationBanner: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex shrink-0 whitespace-nowrap items-center font-semibold underline underline-offset-4 transition-colors hover:text-sky-100"
        >
          {content.cta}
        </Link>
      </div>
    </div>
  );
};
