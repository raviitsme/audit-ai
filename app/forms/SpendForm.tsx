"use client";

import { useEffect, useState } from "react";
import { TextInput, SelectInput } from "../components/Inputs";
import { aiToolsPlansData, useCases } from "../data/tools";
import Button from "../components/Button";
import ToolCard from "../components/ToolCard";
import { AddedToolItem } from "../types/input";
import { aiToolsPricingData } from "../data/pricingData";

const dummyAddedTools = [
  {
    id: "1",
    toolName: "Cursor",
    planName: "Pro",
    costPerSeat: 20,
    noOfSeats: 5,
    monthlySpend: 100,
  },
  // {
  //   id: "2",
  //   toolName: "OpenAI API",
  //   planName: "Pay-as-you-go",
  //   costPerSeat: "—", // API tool ke liye dash
  //   noOfSeats: "—",
  //   monthlySpend: 250,
  // },
  // {
  //   id: "3",
  //   toolName: "GitHub Copilot",
  //   planName: "Business",
  //   costPerSeat: 19,
  //   noOfSeats: 10,
  //   monthlySpend: 190,
  // }
];

export default function SpendForm() {
  const getSavedState = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("spend_form_state");
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  };

  const savedData = getSavedState();

  const [selectedToolId, setSelectedToolId] = useState(
    savedData?.selectedToolId || "",
  );
  const [selectedPlan, setSelectedPlan] = useState(
    savedData?.selectedPlan || "",
  );
  const [seats, setSeats] = useState(savedData?.seats || "");
  const [monthlySpendInput, setMonthlySpendInput] = useState(
    savedData?.monthlySpendInput || "",
  );
  const [teamSize, setTeamSize] = useState(savedData?.teamSize || "");
  const [selectedCase, setSelectedCase] = useState(
    savedData?.selectedCase || "",
  );

  const [addedTools, setAddedTools] = useState<AddedToolItem[]>(
    savedData?.addedTools || [],
  );

  useEffect(() => {
    const formState = {
      selectedToolId,
      selectedPlan,
      seats,
      monthlySpendInput,
      teamSize,
      selectedCase,
      addedTools,
    };

    localStorage.setItem("spend_form_state", JSON.stringify(formState));
  }, [
    selectedToolId,
    selectedPlan,
    seats,
    monthlySpendInput,
    teamSize,
    selectedCase,
    addedTools,
  ]);

  const toolOptions = aiToolsPlansData.map((tool) => ({
    value: tool.toolId,
    label: tool.name,
  }));

  const caseOptions = useCases.map((useCase) => ({
    value: useCase.caseId,
    label: useCase.name,
  }));

  const activeTool = aiToolsPlansData.find((t) => t.toolId === selectedToolId);
  const isAPITool = activeTool?.toolId.includes("api");

  const activePlanOptions = activeTool
    ? activeTool.plans.map((plan) => ({
        value: plan.toLowerCase(),
        label: plan,
      }))
    : [];

  const handleAddTool = () => {
    // Validate if an option is selected :
    if (!selectedToolId) return alert("Please select a tool!");
    if (!selectedPlan) return alert("Please select a plan!");
    if (!selectedCase) return alert("Please select a Use Case!");
    if (!teamSize) return alert("Please enter team size!");

    if (isAPITool && !monthlySpendInput) {
      return alert(
        "Please enter your estimated monthly spend for your current plan!",
      );
    }
    if (!isAPITool && !seats) {
      return alert("Please enter the number of seats!");
    }

    // Real price fetch
    type PricingDataType = typeof aiToolsPricingData;
    type toolKey = keyof PricingDataType;

    const toolPricing = aiToolsPricingData[selectedToolId as toolKey];

    if (toolPricing) {
      type PlanKey = keyof typeof toolPricing;
      const planKeyFormatted = selectedPlan.toLowerCase() as PlanKey;

      const matchedPricing = toolPricing[planKeyFormatted];

      if (matchedPricing) {
        const isMatchedAPI = matchedPricing.isAPI;
        const currentCostPerSeat = matchedPricing.costPerSeat;

        const calculatedSeats = isMatchedAPI ? "-" : seats || 1;
        const calculatedCost = isMatchedAPI ? "-" : currentCostPerSeat;

        const calculatedSpend = isMatchedAPI
          ? Number(monthlySpendInput) || 0
          : Number(currentCostPerSeat) * Number(calculatedSeats);

        const newTool: AddedToolItem = {
          id: Date.now().toString(),
          toolName: activeTool?.name || "Custom Tool",
          planName: selectedPlan.toUpperCase(),
          noOfSeats: calculatedSeats,
          costPerSeat: calculatedCost,
          monthlySpend: calculatedSpend,
        };

        setAddedTools([...addedTools, newTool]);
        setSelectedToolId("");
        setSelectedPlan("");
        setSeats("");
        setSelectedCase("");
        setMonthlySpendInput("");
        setTeamSize("");
      } else {
        return alert("Selected plan pricing not found!");
      }
    } else {
      return alert("Selected tool pricing not found!");
    }
  };

  const handleDeleteTool = (idToDelete : string) => {
    const updatedList = addedTools.filter((tool) => tool.id !== idToDelete);
    setAddedTools(updatedList);
  }

  return (
    // Mobile : flex-col, Desktop : flex-row
    <div className="relative p-6 md:p-12 flex flex-col md:flex-row w-full gap-4 min-h-screen border-2 border-black">
      {/* LEFT COLUMN: Input Stack */}
      <div className="border-2 p-2 w-full md:w-1/2 flex flex-col justify-start items-center">
        <h1 className="text-2xl md:text-3xl text-black uppercase font-medium my-3 border-b-2 w-full text-center font-body">
          Enter your stack
        </h1>

        <div className="flex flex-col justify-start min-w-full py-4 gap-2">
          {/* Row 1: Tools & Plans Dropdowns */}
          <div className="flex flex-col md:flex-row w-full">
            <SelectInput
              name="tools"
              label="tools"
              options={toolOptions}
              value={selectedToolId}
              onChange={(val) => {
                setSelectedPlan("");
                setSelectedToolId(val);
              }}
            />
            <SelectInput
              name="plans"
              label="plans"
              options={activePlanOptions}
              value={selectedPlan}
              onChange={(val) => {
                setSelectedPlan(val);
              }}
            />
          </div>

          {/* Row 2: Spend/Seats & Team Size Inputs */}
          <div className="flex flex-col md:flex-row w-full">
            {isAPITool && (
              <TextInput
                label="Monthly Spend"
                placeholder="Current monthly spend"
                value={monthlySpendInput || ""}
                onChange={(val) => setMonthlySpendInput(val)}
              />
            )}
            {!isAPITool && (
              <TextInput
                label="Seats"
                placeholder="Enter seats"
                value={seats || ""}
                onChange={(val) => setSeats(val)}
              />
            )}
            <TextInput
              label="Size"
              placeholder="Enter team size"
              value={teamSize}
              onChange={(val) => setTeamSize(val)}
            />
          </div>

          {/* Row 3: Usage Dropdown */}
          <div className="flex flex-col md:flex-row w-full">
            <SelectInput
              name="Usage"
              label="Usage"
              options={caseOptions}
              value={selectedCase}
              onChange={(val) => {
                setSelectedCase(val);
              }}
            />
          </div>
        </div>

        {/* Buttons */}
        {/* Rows ke bilkul baad bina kisi break ke ye aayega */}
        <div className="flex flex-col sm:flex-row gap-4 px-5 justify-between w-full mt-2 pb-4">
          <Button
            onClick={handleAddTool}
            className="w-full sm:w-auto py-3 bg-bg text-black hover:bg-black hover:text-bg border-[3px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            + Add Tools
          </Button>
          <Button
            onClick={() => console.log("Current stack : ", addedTools)}
            className="w-full sm:w-auto py-3 bg-black text-bg border-[3px] hover:border-[3px] hover:bg-bg hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Run Audit
          </Button>
        </div>
      </div>

      {/* RIGHT COLUMN: Added Tools Output Display */}
      <div className="bg-black text-bg w-full md:w-1/2 py-2 flex flex-col">
        <h1 className="text-2xl md:text-3xl uppercase font-medium my-3 border-b-2 w-full text-center font-body">
          Added tools
        </h1>
        <div className="p-5 w-full flex-1 flex flex-col gap-4 overflow-y-auto min-h-75">
          {addedTools.length === 0 ? (
            <p className="text-zinc-100 font-mono text-center text-sm mt-10">
              No tools added yet!
            </p>
          ) : (
            addedTools.map((tool) => (
              <ToolCard
                key={tool.id}
                toolName={tool.toolName}
                planName={tool.planName}
                costPerSeat={tool.costPerSeat}
                noOfSeats={tool.noOfSeats}
                monthlySpend={tool.monthlySpend}
                onDelete={() => handleDeleteTool(tool.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
