import React from 'react';

// Rezomwen program : pastille RezoMwen et nom du service a la place du
// logo texte de Postiz.
export const LogoTextComponent = () => {
  return (
    <div className="flex items-center gap-[10px] h-[36px]">
      <div className="w-[36px] h-[36px] rounded-[9px] bg-[#013847] flex items-center justify-center">
        <img
          src="/rezomwen-symbole-blanc.png"
          alt=""
          width={23}
          height={23}
        />
      </div>
      <div className="text-[20px] font-[700] text-white whitespace-nowrap">
        Rézomwen <span className="text-[#d8ef2c]">program</span>
      </div>
    </div>
  );
};
