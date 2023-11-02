import { usePrivy } from "@privy-io/react-auth";
import { FC, HTMLProps } from "react";

const Button: FC<HTMLProps<HTMLButtonElement>> = ({ onClick, children }) => (
  <button className="bg-slate-400 rounded-full p-3" onClick={onClick}>
    {children}
  </button>
);

export const Buttons = () => {
  const { login, logout, authenticated, connectWallet } = usePrivy();

  return (
    <div className="flex gap-2">
      {!authenticated && <Button onClick={login}>login via Privy</Button>}
      {authenticated && <Button onClick={logout}>logout via Privy</Button>}
      {authenticated && (
        <Button
          className="bg-slate-400 rounded-full p-3"
          onClick={connectWallet}
        >
          Connect wallet
        </Button>
      )}
    </div>
  );
};
