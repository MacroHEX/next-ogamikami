import Image from "next/image";
import NextLink from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <NextLink href="/">
          <Image
            className="rounded-full object-cover h-16 w-16"
            width={400}
            height={400}
            src="https://pbs.twimg.com/profile_images/1612622867400740865/ahahiQzH_400x400.jpg"
            alt="logo"
          />
        </NextLink>
        <h1>Ogamikami</h1>
      </div>
    </header>
  );
};

export default Header;
