export const dynamic = 'force-dynamic';
import { APP_NAME } from '@gitroom/helpers/utils/app.name';
import { Login } from '@gitroom/frontend/components/auth/login';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: `${APP_NAME} Login`,
  description: '',
};
export default async function Auth() {
  return <Login />;
}
