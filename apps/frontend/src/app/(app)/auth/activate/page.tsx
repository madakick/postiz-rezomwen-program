export const dynamic = 'force-dynamic';
import { APP_NAME } from '@gitroom/helpers/utils/app.name';
import { Metadata } from 'next';
import { Activate } from '@gitroom/frontend/components/auth/activate';
export const metadata: Metadata = {
  title: `${
    APP_NAME
  } - Activate your account`,
  description: '',
};
export default async function Auth() {
  return <Activate />;
}
