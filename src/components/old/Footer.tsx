import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
      <span className="flex flex-col items-center justify-center gap-2 p-4 text-sm text-gray-500 dark:text-gray-400">
        <div>© 2025, {t("DEVELOPED-WITH")} <a href="https://nuxt.com/">Next.js</a>. {t("ICONS-BY")}{' '}
        <a href="https://icons8.com/">Icons8</a>.</div>
      </span>
  )
}