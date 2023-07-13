import Link from "next/link";
import { useRouter } from "next/router";

const ChangeTranslate = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? "zh" : "en";
  return (
    <Link
      className="flex items-center justify-center py-[25px] text-white"
      href={router.pathname}
      locale={t}
    >
      <button>{locale === "en" ? "切換 简体中文" : "Turn to English"}</button>
    </Link>
  );
};

export default ChangeTranslate;
