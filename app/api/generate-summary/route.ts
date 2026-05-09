import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY!
)

const model = genAI.getGenerativeModel({
    model : "gemini-2.0-flash"
});

function fallBackSummary(data: any) {
    
}