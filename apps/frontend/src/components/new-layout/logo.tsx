'use client';

// Rezomwen program : pastille RezoMwen (symbole blanc sur bleu-vert) a la
// place du logo Postiz.
export const Logo = () => {
  return (
    <div className="mt-[8px] min-w-[60px] min-h-[60px] w-[60px] h-[60px] rounded-[14px] bg-[#013847] flex items-center justify-center">
      <img
        src="/rezomwen-symbole-blanc.png"
        alt="Rézomwen program"
        width={38}
        height={38}
      />
    </div>
  );
};
