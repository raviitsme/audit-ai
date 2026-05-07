"use client";
import { tools } from "@/data/tools";
import { useState } from "react";

type toolsListItems = {
  id: string;
  tool: string;
  plan: string;
  spend: string;
  seats: string;
  teamSize: string;
  useCase: string;
};
export default function SpendForm() {
  const [selectedTool, setSelectedTool] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const [spend, setSpend] = useState("");

  // Hook to add seats on form
  const [seats, setSeats] = useState("");

  // Hook to generate more input fields on form
  const [toolsList, setToolsList] = useState<toolsListItems[]>([]);

  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("");

  // Variable that holds the value of current selected tool
  const currentTool = tools.find((tool) => tool.name === selectedTool);

  //   const seatsNumber = Number(seats);

  const handleAdd = () => {
    if (!selectedTool || !selectedPlan) {
      alert("Select tool and plan first");
      return;
    }

    setToolsList([
      ...toolsList,
      {
        id: crypto.randomUUID(),
        tool: selectedTool,
        plan: selectedPlan,
        spend: spend,
        seats: seats,
        teamSize: teamSize,
        useCase: useCase,
      },
    ]);
    setSelectedTool("");
    setSelectedPlan("");
    setSpend("");
    setSeats("");
    setTeamSize("");
    setUseCase("");
  };

  const handleDelete = (id: string) => {
    setToolsList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-10">
      <div className="border-2 bg-paper border-border p-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            {/* Tool Input */}

            <label className="mb-2 block text-xs uppercase tracking-[0.3em]">
              Tool <span className="text-red">*</span>
            </label>

            <select
              value={selectedTool}
              onChange={(e) => {
                {
                  setSelectedTool(e.target.value);
                  setSelectedPlan("");
                }
              }}
              className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none"
            >
              <option value="">Select Tool</option>
              {tools.map((tool) => (
                <option value={tool.name} key={tool.name}>
                  {tool.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            {/* Plans */}
            <label className="mb-2 block text-xs uppercase tracking-[0.3em]">
              Plan <span className="text-red">*</span>
            </label>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none"
            >
              <option value="">Select Plan</option>
              {currentTool?.plans.map((plan) => (
                <option value={plan} key={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>

          {/* Use case */}
          <div>
            <label className="text-xs uppercase tracking-[0.3rem]">
              Primary Use Case <span className="text-red">*</span>
            </label>

            <select
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none"
            >
              <option value="">Select Use Case</option>
              <option value="coding">Coding</option>
              <option value="writing">Writing</option>
              <option value="research">Research</option>
              <option value="data">Data</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
          <div>
            {/* Monthly Spend */}
            <label className="text-xs uppercase tracking-[0.3rem]">
              Monthly Spend <span className="text-red">*</span>
            </label>

            <input
              type="number"
              placeholder="$99"
              value={spend}
              onChange={(e) => setSpend(e.target.value)}
              className="w-full border-b-2 border-border outline-none bg-transparent py-3 text-lg"
            />
          </div>

          {/* Seats */}
          <div>
            <label className="text-xs uppercase tracking-[0.3rem]">
              Seats <span className="text-red">*</span>
            </label>

            <input
              type="number"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              placeholder="5"
              className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none"
            />
          </div>

          {/* Team Size */}
          <div>
            <label className="text-xs uppercase tracking-[0.3rem]">
              Team Size <span className="text-red">*</span>
            </label>

            <input
              type="number"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              placeholder="10"
              className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none"
            />
          </div>

          {/* Add tool button */}
          <div>
            <button
              onClick={handleAdd}
              className="border-2 cursor-pointer border-border px-3 py-4 uppercase transition bg-black text-white hover:bg-violet-700"
            >
              + Add Tool
            </button>
          </div>
        </div>
        {toolsList.length === 0 && (
          <div className="border-2 mt-6 border-border bg-paper p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em]">Added Tools</p>
            <p className="text-2xl text-left text-black">No tools added</p>
          </div>
        )}

        {toolsList.length > 0 && (
          <div className="border-2 mt-6 border-border bg-paper p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] mb-9">
              Added Tools
            </p>

            {/* Header */}
            <div className="mx-auto grid grid-cols-5 justify-items-center border-b-4 border-border font-ui font-black items-center">
              <div className="text-sm tracking-widest mb-5">Tool Name</div>
              <div className="text-sm tracking-widest mb-5">Use Case</div>
              <div className="text-sm tracking-widest mb-5">Price | Seats</div>
              <div className="text-sm tracking-widest mb-5">Team Size</div>
              <div className="text-sm tracking-widest mb-5">Action</div>
            </div>

            {/* Rows */}
            {toolsList.map((item) => (
              <div
                key={item.id}
                className="mx-auto grid grid-cols-5 justify-items-center items-center border-b border-border py-4 font-ui text-sm"
              >
                {/* Tool */}
                <span className="font-semibold uppercase">
                  {item.tool} — {item.plan}
                </span>

                {/* Use Case */}
                <span className="uppercase tracking-wide">{item.useCase}</span>

                {/* Spend | Seats */}
                <span>
                  ${item.spend || "0"} | {item.seats || "0"} seats
                </span>

                {/* Team Size */}
                <span>{item.teamSize || "0"} users</span>

                {/* Action */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-xs border cursor-pointer border-red text-red px-3 py-1 hover:bg-red hover:text-bg transition uppercase"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
