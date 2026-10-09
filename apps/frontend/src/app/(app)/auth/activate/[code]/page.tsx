export const dynamic = 'force-dynamic';
import { APP_NAME } from '@gitroom/helpers/utils/app.name';
import { Metadata } from 'next';
import { AfterActivate } from '@gitroom/frontend/components/auth/after.activate';
export const metadata: Metadata = {
  title: `${
    APP_NAME
  } - Activate your account`,
  description: '',
};
export default async function Auth() {
  return <AfterActivate />;
}
