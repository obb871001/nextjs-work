import { useRouter } from "next/router";
import { useLanguageQuery, LanguageSwitcher } from "next-export-i18n";

const ChangeTranslate = () => {
  const router = useRouter();
  const { locale } = router;
  const [query] = useLanguageQuery();

  return (
    <div className="flex items-center justify-center py-[25px] text-white">
      {query?.lang === "zh" ? (
        <LanguageSwitcher lang="en">Turn to English</LanguageSwitcher>
      ) : (
        <LanguageSwitcher lang="zh">切換 简体中文</LanguageSwitcher>
      )}
    </div>
  );
};

export default ChangeTranslate;
