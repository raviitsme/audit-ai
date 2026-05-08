"use client";

import { tools } from "@/data/tools";
import { useEffect, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                  TYPES                                     */
/* -------------------------------------------------------------------------- */

type ToolsListItem = {
  id: string;
  tool: string;
  plan: string;
  spend: string;
  seats: string;
  teamSize: string;
  useCase: string;
};

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function SpendForm() {
  /* ------------------------------------------------------------------------ */
  /*                               FORM STATES                                */
  /* ------------------------------------------------------------------------ */

  // Selected AI tool
  const [selectedTool, setSelectedTool] = useState("");

  // Selected pricing plan
  const [selectedPlan, setSelectedPlan] = useState("");

  // Monthly spend
  const [spend, setSpend] = useState("");

  // Number of paid seats
  const [seats, setSeats] = useState("");

  // Total company/team size
  const [teamSize, setTeamSize] = useState("");

  // Primary use case
  const [useCase, setUseCase] = useState("");

  // List of added tools
  const [toolsList, setToolsList] = useState<ToolsListItem[]>([]);

  /* ------------------------------------------------------------------------ */
  /*                         CURRENT SELECTED TOOL                            */
  /* ------------------------------------------------------------------------ */

  // Finds the currently selected tool object
  // Used to dynamically show plan options
  const currentTool = tools.find(
    (tool) => tool.name === selectedTool
  );

  /* ------------------------------------------------------------------------ */
  /*                     LOAD DATA FROM LOCAL STORAGE                         */
  /* ------------------------------------------------------------------------ */

  // Runs once when component mounts
  // Loads previously saved tools from browser storage
  useEffect(() => {
    const savedTools = localStorage.getItem("audit-tools");

    if (savedTools) {
      setToolsList(JSON.parse(savedTools));
    }
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                    SAVE DATA TO LOCAL STORAGE                            */
  /* ------------------------------------------------------------------------ */

  // Runs whenever toolsList changes
  // Persists form data across page reloads
  useEffect(() => {
    localStorage.setItem(
      "audit-tools",
      JSON.stringify(toolsList)
    );
  }, [toolsList]);

  /* ------------------------------------------------------------------------ */
  /*                             ADD TOOL LOGIC                               */
  /* ------------------------------------------------------------------------ */

  const handleAdd = () => {
    // Basic validation
    if (!selectedTool || !selectedPlan || !spend || !seats || !teamSize || !useCase) {
      alert("Please fill all fields");
      return;
    }

    // Add new tool object to toolsList
    setToolsList((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        tool: selectedTool,
        plan: selectedPlan,
        spend,
        seats,
        teamSize,
        useCase,
      },
    ]);

    // Reset form fields after adding
    setSelectedTool("");
    setSelectedPlan("");
    setSpend("");
    setSeats("");
    setTeamSize("");
    setUseCase("");
  };

  /* ------------------------------------------------------------------------ */
  /*                           DELETE TOOL LOGIC                              */
  /* ------------------------------------------------------------------------ */

  const handleDelete = (id: string) => {
    setToolsList((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  /* ------------------------------------------------------------------------ */
  /*                                  UI                                      */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      aria-labelledby="spend-form-heading"
      className="space-y-10"
    >
      {/* Hidden heading for accessibility */}
      <h2 id="spend-form-heading" className="sr-only">
        AI Spend Audit Form
      </h2>

      {/* Main Form Container */}
      <div className="border-2 border-border bg-paper p-6">

        {/* ------------------------------------------------------------------ */}
        {/*                             INPUT GRID                              */}
        {/* ------------------------------------------------------------------ */}

        <div className="grid gap-10 md:grid-cols-2">

          {/* ---------------------------- TOOL INPUT ------------------------- */}

          <div>
            <label
              htmlFor="tool"
              className="mb-2 block text-xs uppercase tracking-[0.3em]"
            >
              Tool <span className="text-red">*</span>
            </label>

            <select
              id="tool"
              name="tool"
              value={selectedTool}
              onChange={(e) => {
                setSelectedTool(e.target.value);

                // Reset plan when tool changes
                setSelectedPlan("");
              }}
              className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none"
            >
              <option value="">Select Tool</option>

              {tools.map((tool) => (
                <option key={tool.name} value={tool.name}>
                  {tool.name}
                </option>
              ))}
            </select>
          </div>

          {/* ---------------------------- PLAN INPUT ------------------------- */}

          <div>
            <label
              htmlFor="plan"
              className="mb-2 block text-xs uppercase tracking-[0.3em]"
            >
              Plan <span className="text-red">*</span>
            </label>

            <select
              id="plan"
              name="plan"
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              disabled={!selectedTool}
              className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select Plan</option>

              {currentTool?.plans.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>

          {/* -------------------------- USE CASE INPUT ----------------------- */}

          <div>
            <label
              htmlFor="use-case"
              className="mb-2 block text-xs uppercase tracking-[0.3em]"
            >
              Primary Use Case{" "}
              <span className="text-red">*</span>
            </label>

            <select
              id="use-case"
              name="use-case"
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

          {/* ------------------------- MONTHLY SPEND ------------------------- */}

          <div>
            <label
              htmlFor="spend"
              className="mb-2 block text-xs uppercase tracking-[0.3em]"
            >
              Monthly Spend
              <span className="text-red">*</span>
            </label>

            <input
              id="spend"
              name="spend"
              type="number"
              placeholder="99"
              value={spend}
              onChange={(e) => setSpend(e.target.value)}
              className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none"
            />
          </div>

          {/* ----------------------------- SEATS ----------------------------- */}

          <div>
            <label
              htmlFor="seats"
              className="mb-2 block text-xs uppercase tracking-[0.3em]"
            >
              Seats <span className="text-red">*</span>
            </label>

            <input
              id="seats"
              name="seats"
              type="number"
              placeholder="5"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none"
            />
          </div>

          {/* --------------------------- TEAM SIZE --------------------------- */}

          <div>
            <label
              htmlFor="team-size"
              className="mb-2 block text-xs uppercase tracking-[0.3em]"
            >
              Team Size <span className="text-red">*</span>
            </label>

            <input
              id="team-size"
              name="team-size"
              type="number"
              placeholder="10"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none"
            />
          </div>

          {/* -------------------------- ADD BUTTON --------------------------- */}

          <div>
            <button
              type="button"
              onClick={handleAdd}
              className="cursor-pointer border-2 border-border bg-black px-4 py-4 uppercase text-white transition hover:bg-violet-700"
            >
              + Add Tool
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*                         EMPTY STATE UI                              */}
        {/* ------------------------------------------------------------------ */}

        {toolsList.length === 0 && (
          <div className="mt-6 border-2 border-border bg-paper p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.3em]">
              Added Tools
            </p>

            <p className="text-2xl">
              No tools added yet.
            </p>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/*                          TOOLS TABLE                                */}
        {/* ------------------------------------------------------------------ */}

        {toolsList.length > 0 && (
          <div className="mt-6 border-2 border-border bg-paper p-6">

            {/* Section Heading */}
            <p className="mb-8 text-xs uppercase tracking-[0.3em]">
              Added Tools
            </p>

            {/* Table Header */}
            <div className="hidden border-b-4 border-border pb-4 md:grid md:grid-cols-5 md:gap-4">
              <p className="text-sm font-black uppercase tracking-widest">
                Tool
              </p>

              <p className="text-sm font-black uppercase tracking-widest">
                Use Case
              </p>

              <p className="text-sm font-black uppercase tracking-widest">
                Spend / Seats
              </p>

              <p className="text-sm font-black uppercase tracking-widest">
                Team Size
              </p>

              <p className="text-sm font-black uppercase tracking-widest">
                Action
              </p>
            </div>

            {/* Tool Rows */}
            <div className="space-y-4 pt-6">

              {toolsList.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-4 border-b border-border pb-4 md:grid-cols-5 md:items-center"
                >
                  {/* Tool */}
                  <div>
                    <p className="font-semibold uppercase">
                      {item.tool}
                    </p>

                    <p className="text-sm uppercase text-black/70">
                      {item.plan}
                    </p>
                  </div>

                  {/* Use Case */}
                  <p className="uppercase tracking-wide">
                    {item.useCase}
                  </p>

                  {/* Spend + Seats */}
                  <p>
                    ${item.spend} / {item.seats} seats
                  </p>

                  {/* Team Size */}
                  <p>
                    {item.teamSize} users
                  </p>

                  {/* Delete Button */}
                  <button
                    type="button"
                    aria-label={`Delete ${item.tool}`}
                    onClick={() => handleDelete(item.id)}
                    className="w-fit border border-red px-3 py-2 text-xs uppercase text-red transition hover:bg-red hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}