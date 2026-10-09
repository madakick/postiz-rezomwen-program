export const dynamic = 'force-dynamic';
import { APP_NAME } from '@gitroom/helpers/utils/app.name';
import { BillingComponent } from '@gitroom/frontend/components/billing/billing.component';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: `${APP_NAME} Billing`,
  description: '',
};
export default async function Page() {
  return (
    <div className="bg-newBgColorInner flex-1 flex-col flex p-[20px] gap-[12px]">
      <BillingComponent />
    </div>
  );
}
