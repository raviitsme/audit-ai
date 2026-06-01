import { ToolCardProps } from "../types/input";

export default function ToolCard({
  toolName,
  planName,
  noOfSeats,
  costPerSeat,
  monthlySpend,
  onDelete
}: ToolCardProps) {
  return (
    // FIX 1: "text-white" add kiya taaki sara content saaf dikhe aur "border-white" lagaya dynamic borders ke liye
    <div className="w-full border-2 border-white p-4 bg-zinc-950 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] text-white">
      {/* 1. TOP ROW GRID: Tool Name & Plan Name */}
      <div className="grid grid-cols-2 border-b border-zinc-800 pb-3 mb-3 items-center">
        <div className="text-left">
          <span className="text-[10px] text-zinc-400 uppercase font-mono block tracking-wider">
            Tool
          </span>
          <h3 className="text-lg md:text-xl font-bold uppercase text-white tracking-wide">
            {toolName}
          </h3>

          <button
            onClick={onDelete}
            className="bg-red-600 text-white cursor-pointer font-bold px-2 py-1 text-xs uppercase border border-white hover:bg-red-700 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
          >
            Delete
          </button>
        </div>

        <div className="text-right">
          <span className="text-[10px] text-zinc-400 uppercase font-mono block tracking-wider">
            Selected Plan
          </span>
          {/* text-black kiya taaki white background label ke upar text acche se highlight ho */}
          <span className="inline-block bg-white text-black text-xs px-2 py-1 uppercase font-bold border border-white tracking-wide">
            {planName || "Default Plan"}
          </span>
        </div>
      </div>

      {/* 2. BOTTOM ROW GRID: Cost/Seat, No. of Seats, Monthly Spend */}
      {/* Mobile par stack hoga (grid-cols-1) aur desktop par clean 3-columns matrix banega (sm:grid-cols-3) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center font-mono text-xs md:text-sm">
        {/* Box A: Cost / Seat */}
        <div className="bg-zinc-900 border border-zinc-800 p-2 text-left sm:text-center flex sm:flex-col justify-between sm:justify-center items-center">
          <span className="text-[10px] text-zinc-400 uppercase block tracking-tight">
            Cost / Seat
          </span>
          <span className="font-bold text-white text-sm md:text-base mt-0 sm:mt-1">
            {costPerSeat && costPerSeat !== "—" ? `$${costPerSeat}` : "—"}
          </span>
        </div>

        {/* Box B: No. of Seats */}
        <div className="bg-zinc-900 border border-zinc-800 p-2 text-left sm:text-center flex sm:flex-col justify-between sm:justify-center items-center">
          <span className="text-[10px] text-zinc-400 uppercase block tracking-tight">
            No. of Seats
          </span>
          <span className="font-bold text-white text-sm md:text-base mt-0 sm:mt-1">
            {noOfSeats && noOfSeats !== "—" ? `${noOfSeats} Seats` : "—"}
          </span>
        </div>

        {/* Box C: Highlighted Monthly Spend */}
        <div className="bg-zinc-900 border-2 border-yellow-400 p-2 text-left sm:text-center flex sm:flex-col justify-between sm:justify-center items-center shadow-[2px_2px_0px_0px_rgba(234,179,8,1)]">
          <span className="text-[10px] text-yellow-400 block uppercase font-bold tracking-tight">
            Monthly Spend
          </span>
          <span className="font-bold text-yellow-400 text-base md:text-lg mt-0 sm:mt-1">
            ${monthlySpend}
          </span>
        </div>
      </div>
    </div>
  );
}
