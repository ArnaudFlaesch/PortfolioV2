import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function PathnamesPage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('cv');

  return (
    <PageLayout title={t('CV-PAGE-TITLE')}>
     projects
    </PageLayout>
  );
}
