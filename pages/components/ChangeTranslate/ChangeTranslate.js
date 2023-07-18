import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLanguageQuery, LanguageSwitcher } from "next-export-i18n";

const ChangeTranslate = () => {
  const router = useRouter();
  const { locale } = router;
  const [query] = useLanguageQuery();

  const handleLanguageChange = (newLanguage) => {
    // 构建目标URL，并将语言参数添加或更新
    const urlParams = new URLSearchParams(router.query);
    urlParams.set("lang", newLanguage);
    const targetURL = `${router.pathname}?${urlParams.toString()}${window.location.hash}`;
    router.push(targetURL);
  };

  useEffect(() => {
    const langParam = router.query.lang;
    if (langParam) {
      console.log(langParam);
    }
  }, [router.query.lang]);

  return (
    <div className="flex items-center justify-center py-[25px] text-white">
      {query?.lang === "zh" ? (
        <LanguageSwitcher lang="en" onClick={() => handleLanguageChange("en")}>
          切換至英文
        </LanguageSwitcher>
      ) : (
        <LanguageSwitcher lang="zh" onClick={() => handleLanguageChange("zh")}>
          Switch to Chinese
        </LanguageSwitcher>
      )}
    </div>
  );
};

export default ChangeTranslate;