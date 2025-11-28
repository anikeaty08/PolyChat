"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
<<<<<<< HEAD
import { injected } from "wagmi";
=======
import { injected } from "wagmi/connectors";
>>>>>>> bad6130af101019355316f82819031bc2578bb17

export function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (!isConnected) {
    return (
      <button
        onClick={() => connect({ connector: injected() })}
        className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-violet-500 transition"
        disabled={isPending}
      >
        {isPending ? "Connecting..." : "Connect wallet"}
      </button>
    );
  }

  return (
    <button
      onClick={() => disconnect()}
      className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-mono text-zinc-100 hover:bg-zinc-900/60 transition"
    >
      {address?.slice(0, 6)}...{address?.slice(-4)} · Disconnect
    </button>
  );
}

<<<<<<< HEAD
=======

>>>>>>> bad6130af101019355316f82819031bc2578bb17
