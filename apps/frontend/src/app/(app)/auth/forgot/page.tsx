export const dynamic = 'force-dynamic';
import { APP_NAME } from '@gitroom/helpers/utils/app.name';
import { Forgot } from '@gitroom/frontend/components/auth/forgot';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: `${APP_NAME} Forgot Password`,
  description: '',
};
export default async function Auth() {
  return <Forgot />;
}
