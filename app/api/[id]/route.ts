import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
  console.log(params);
  return NextResponse.json({
    id: params.id,
  });
}
