"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useAccount } from "wagmi";
import { Buttons } from "./Buttons";
import { FC, ReactNode } from "react";

const Item: FC<{ label: string; children: ReactNode }> = ({
  label,
  children,
}) => (
  <li>
    <strong>{label}:</strong>
    {children}
  </li>
);

export const Content = () => {
  const data = useAccount();
  const { user, authenticated, ready } = usePrivy();

  if (!ready) {
    return null
  }

  return (
    <>
      <div>
        <h3 className="text-lg underline">Privy user data:</h3>
        <ul>
          <Item label="authenticated">{String(authenticated)}</Item>
          <Item label="address">{user?.wallet?.address}</Item>
          <Item label="id">{user?.id}</Item>
        </ul>
      </div>
      <div>
        <h3 className="text-lg underline">Wagmi data:</h3>
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <Item key={key} label={key}>
              {String(value)}
            </Item>
          ))}
        </ul>
      </div>
      <Buttons />
    </>
  );
};
