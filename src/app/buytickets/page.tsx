"use client";

import React, { useMemo, useState } from "react";

type TicketKey = "vip" | "vipPlus" | "vvip" | "priority";

type Ticket = {
  key: TicketKey;
  name: string;
  description: string;
  price: number;
};

const TICKETS: Ticket[] = [
  {
    key: "vip",
    name: "VIP Access",
    description:
      "Full-day access to all four creative districts at the National Theatre. Experience keynotes, panels, exhibitions, and networking opportunities across Arts & Design, Fashion & Film, Tech & Gaming, and the Main Conference.",
    price: 25000,
  },
  {
    key: "vipPlus",
    name: "VIP+ Premium",
    description:
      "Enhanced full-day experience with priority seating, exclusive networking lounge access, and premium perks. Navigate all four creative districts with dedicated VIP benefits.",
    price: 50000,
  },
  {
    key: "vvip",
    name: "VVIP Experience",
    description:
      "The ultimate SynergyCon experience. Enjoy exclusive backstage access, speaker meet-and-greets, and premium hospitality as you explore all four creative districts in style.",
    price: 100000,
  },
  {
    key: "priority",
    name: "Priority Pass (All-Access)",
    description:
      "The pinnacle of the SynergyCon experience. Unlimited all-access privileges across every space, exclusive concierge service, VIP transport, and intimate dinner with speakers and industry titans.",
    price: 150000,
  },
];

function formatNaira(n: number) {
  return `₦${n.toLocaleString("en-NG")}`;
}

function clampQty(q: number) {
  if (q < 0) return 0;
  if (q > 99) return 99;
  return q;
}

function Stepper() {
  return (
    <div className="w-full flex items-center justify-center gap-10 py-6">
      <div className="flex items-center gap-4">
        <div className="h-9 w-9 rounded-full bg-black text-white grid place-items-center text-sm font-bold">
          1
        </div>
        <div className="h-px w-24 bg-black/10" />
        <div className="h-9 w-9 rounded-full border border-black/20 text-black/60 grid place-items-center text-sm font-bold">
          2
        </div>
        <div className="h-px w-24 bg-black/10" />
        <div className="h-9 w-9 rounded-full border border-black/20 text-black/60 grid place-items-center text-sm font-bold">
          3
        </div>
      </div>
    </div>
  );
}

function QtyControl({
  value,
  onDec,
  onInc,
}: {
  value: number;
  onDec: () => void;
  onInc: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onDec}
        aria-label="Decrease"
        className="h-9 w-9 rounded-full border border-black/10 bg-black/5 hover:bg-black/10 transition grid place-items-center text-lg font-bold"
      >
        −
      </button>
      <div className="w-8 text-center font-bold">{value}</div>
      <button
        type="button"
        onClick={onInc}
        aria-label="Increase"
        className="h-9 w-9 rounded-full border border-black/10 bg-black/5 hover:bg-black/10 transition grid place-items-center text-lg font-bold"
      >
        +
      </button>
    </div>
  );
}

function TicketCard({
  ticket,
  qty,
  setQty,
}: {
  ticket: Ticket;
  qty: number;
  setQty: (q: number) => void;
}) {
  return (
    <div className="rounded-2xl border border-black/15 bg-white p-5 md:p-6 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="text-lg md:text-xl font-extrabold text-black">
            {ticket.name}
          </h3>
          <p className="mt-2 text-sm md:text-[15px] text-black/60 leading-relaxed">
            {ticket.description}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <div className="text-lg md:text-xl font-extrabold text-black">
              {formatNaira(ticket.price)}
            </div>
            <span className="text-black/40 text-sm" title="Info">
              ⓘ
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <QtyControl
            value={qty}
            onDec={() => setQty(clampQty(qty - 1))}
            onInc={() => setQty(clampQty(qty + 1))}
          />
        </div>
      </div>
    </div>
  );
}

export default function BuyTicketsPage() {
  const [qty, setQty] = useState<Record<TicketKey, number>>({
    vip: 0,
    vipPlus: 0,
    vvip: 0,
    priority: 0,
  });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ref, setRef] = useState("");

  const cartItems = useMemo(() => {
    return TICKETS.filter((t) => qty[t.key] > 0).map((t) => ({
      ...t,
      quantity: qty[t.key],
      lineTotal: qty[t.key] * t.price,
    }));
  }, [qty]);

  const totalQty = useMemo(
    () => Object.values(qty).reduce((a, b) => a + b, 0),
    [qty]
  );

  const subtotal = useMemo(
    () => cartItems.reduce((sum, x) => sum + x.lineTotal, 0),
    [cartItems]
  );

  const canContinue = totalQty > 0;

  const handleContinue = () => {
    const payload = {
      tickets: cartItems.map((x) => ({
        tier: x.name,
        key: x.key,
        unitPrice: x.price,
        quantity: x.quantity,
      })),
      subtotal,
      customer: { fullName, email, phone, referral: ref },
    };

    console.log("Checkout payload:", payload);
    alert("Next step: connect payment + backend. Check console for payload.");
  };

  return (
    // ✅ Added padding-top so it doesn't hide behind fixed header
    <main className="bg-white min-h-screen pt-28 md:pt-32">
      <div className="container">
        <Stepper />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pb-14">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <h2 className="text-xl md:text-2xl font-extrabold text-black">
              1. Select Your Tickets
            </h2>

            <div className="mt-4 grid gap-4">
              {TICKETS.map((t) => (
                <TicketCard
                  key={t.key}
                  ticket={t}
                  qty={qty[t.key]}
                  setQty={(q) => setQty((prev) => ({ ...prev, [t.key]: q }))}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 space-y-6">
            {/* ORDER SUMMARY */}
            <div className="rounded-2xl border border-black/15 bg-white p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-black">
                2. Order Summary
              </h2>

              <div className="mt-4 rounded-xl border border-black/10 bg-white">
                {cartItems.length === 0 ? (
                  <div className="py-10 text-center text-black/50 text-sm">
                    Your cart is empty.
                  </div>
                ) : (
                  <div className="p-4 space-y-3">
                    {cartItems.map((x) => (
                      <div
                        key={x.key}
                        className="flex items-start justify-between gap-4"
                      >
                        <div className="min-w-0">
                          <div className="font-bold text-black">{x.name}</div>
                          <div className="text-sm text-black/60">
                            {x.quantity} × {formatNaira(x.price)}
                          </div>
                        </div>
                        <div className="font-extrabold text-black">
                          {formatNaira(x.lineTotal)}
                        </div>
                      </div>
                    ))}

                    <div className="pt-3 mt-3 border-t border-black/10 flex items-center justify-between">
                      <div className="text-black/60 text-sm font-semibold">
                        Subtotal
                      </div>
                      <div className="text-black text-lg font-extrabold">
                        {formatNaira(subtotal)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* DETAILS */}
            <div className="rounded-2xl border border-black/15 bg-white p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-black">
                3. Your Details
              </h2>

              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Full Name
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-black/20 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Email Address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.doe@example.com"
                    className="w-full rounded-lg border border-black/20 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full rounded-lg border border-black/20 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Where did you hear about us?
                  </label>
                  <select
                    value={ref}
                    onChange={(e) => setRef(e.target.value)}
                    className="w-full rounded-lg border border-black/20 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10 bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter / X</option>
                    <option value="friend">Friend / Referral</option>
                    <option value="press">Press / Blog</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CONTINUE */}
            <button
              type="button"
              onClick={handleContinue}
              disabled={!canContinue}
              className={[
                "w-full rounded-lg py-4 font-extrabold transition",
                canContinue
                  ? "bg-black text-white hover:opacity-95"
                  : "bg-black/40 text-white/80 cursor-not-allowed",
              ].join(" ")}
            >
              Continue
            </button>

            <p className="text-xs text-black/50 text-center">
              Payments will be handled securely on the next step.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}