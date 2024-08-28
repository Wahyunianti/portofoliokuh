export const BgText = () => {
  return (
    <>
      <div className="relative flex justify-end">
        <a href="#experiance">
          <p className="text-[4px] sm:text-[8px] uppercase text-blue-100">
            Scroll Down ↓
          </p>
        </a>
      </div>
      <div className="sm:flex hidden absolute left-[60%] top-[34rem] lg:left-[71%] lg:top-[29rem]">
        <h2 className="pointer-events-none text-[7rem] opacity-[0.05] font-extrabold text-center p-3 capitalize ">
          &quot;Scroll&quot;
        </h2>
      </div>
    </>
  );
};
