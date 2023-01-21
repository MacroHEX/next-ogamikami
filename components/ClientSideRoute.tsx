"use client";

import NextLink from "next/link";

function ClientSideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return <NextLink href={route}> {children} </NextLink>;
}

export default ClientSideRoute;
