export const dynamic = 'force-dynamic';
import { APP_NAME } from '@gitroom/helpers/utils/app.name';
import { Metadata } from 'next';
import { PlatformAnalytics } from '@gitroom/frontend/components/platform-analytics/platform.analytics';
export const metadata: Metadata = {
  title: `${APP_NAME} Analytics`,
  description: '',
};
export default async function Index() {
  return <PlatformAnalytics />;
}
