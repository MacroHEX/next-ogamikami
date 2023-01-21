import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://pbs.twimg.com/profile_images/1612622867400740865/ahahiQzH_400x400.jpg"
        alt="logo"
      />
      <> {renderDefault(props)}</>
    </div>
  );
};

export default Logo;
