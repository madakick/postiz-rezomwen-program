'use client';

import { useCallback, useEffect } from 'react';
import SafeImage from '@gitroom/react/helpers/safe.image';
import { useFetch } from '@gitroom/helpers/utils/custom.fetch';
import { useVariables } from '@gitroom/react/helpers/variable.context';
import { useT } from '@gitroom/react/translation/get.transation.service.client';
export const OauthProvider = ({
  autoStart = false,
}: {
  // Rezomwen program : le lien du menu « Planification » de RezoMwen porte
  // ?sso=1, la connexion part alors sans clic.
  autoStart?: boolean;
}) => {
  const fetch = useFetch();
  const { oauthLogoUrl, oauthDisplayName } = useVariables();
  const t = useT();
  const gotoLogin = useCallback(async () => {
    try {
      const response = await fetch('/auth/oauth/GENERIC');
      if (!response.ok) {
        throw new Error(
          `Login link request failed with status ${response.status}`
        );
      }
      const link = await response.text();
      window.location.href = link;
    } catch (error) {
      console.error('Failed to get generic oauth login link:', error);
    }
  }, []);
  useEffect(() => {
    if (autoStart) {
      gotoLogin();
    }
  }, [autoStart, gotoLogin]);
  return (
    <div
      onClick={gotoLogin}
      className={`cursor-pointer flex-1 bg-white h-[44px] rounded-[4px] flex justify-center items-center text-customColor16 gap-[4px]`}
    >
      <div>
        <SafeImage
          src={oauthLogoUrl || '/icons/generic-oauth.svg'}
          alt="genericOauth"
          width={40}
          height={40}
          className="-mt-[7px]"
        />
      </div>
      <div>
        {t('sign_in_with', 'Sign in with')}&nbsp;
        {oauthDisplayName || 'OAuth'}
      </div>
    </div>
  );
};
