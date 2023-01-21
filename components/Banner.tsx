export function Banner() {
  return (
    <div className="felx flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl py-5">Ogamikami</h1>
        <h2 className="mt-5 md:mt-0 py-5">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#cd4939]">
            Every Developers
          </span>{" "}
          favourite blog in the Devosphere
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Nef product feautres | The lastes int technology | The weekly debugging
        nightmares & More!
      </p>
    </div>
  );
}
