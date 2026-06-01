export interface Input {
    placeholder: string,
    label: string,
    value : string,
    onChange : (value : string) => void;
}

export interface SelectOption {
    value: string,
    label :string,
}

export interface SelectInputProps {
    label : string,
    name : string,
    options : SelectOption[],
    value : string,
    onChange: (value : string) => void;
}

export interface ButtonProps {
  children: React.ReactNode; // Allows all children of any types
  className?: string; 
  onClick : () => void;       
}

export interface ToolCardProps {
    toolName : string,
    planName : string,
    costPerSeat? : string | number,
    noOfSeats? : string | number,
    monthlySpend : string | number,
    onDelete : () => void,
}

export interface AddedToolItem {
    id: string;
    toolId: string;
    toolName: string;
    planName: string;
    useCase: string;
    teamSize: number;
    costPerSeat: string | number;
    noOfSeats: string | number;
    monthlySpend: string | number;
}

export interface PlanPriceDetail {
    costPerSeat : number | string,
    isAPI : boolean,
    minSeats : number,
    maxSeats : number,
    tier: "individual" | "team" | "enterprise";
}