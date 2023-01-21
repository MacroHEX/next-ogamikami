import Image from "next/image";

const PageNotFound = () => {
  return (
    <>
      <div>
        <Image
          width={400}
          height={400}
          src="https://cdn.sanity.io/images/x05228zh/production/36cf85acf81937e231fe176223a730d992a2d5c6-560x560.gif?w=2000&fit=max&auto=format"
          alt="404"
        />
        <h1 className="text-red-800"> Página no Encontrada </h1>
      </div>
    </>
  );
};

export default PageNotFound;
