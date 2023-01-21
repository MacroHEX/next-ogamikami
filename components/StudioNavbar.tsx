import NextLink from "next/link";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <NextLink href="/" className="text-[#cd4939] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#cd4939] mr-2" />
          Volver a la página
        </NextLink>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#cd4939]">
          <h1 className="font-bold text-white">
            Si estás aquí es porque tienes poder
          </h1>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;