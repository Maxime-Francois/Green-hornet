import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }
  const body = await request.json();
  const { name, description, price, category, cover, inStock } = body;

  const product = await prisma.product.create({
    data: {
      name,
      description,
      category,
      cover,
      inStock,
      price: parseFloat(price),
    },
  });

  return NextResponse.json(product);
}
export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }
  const body = await request.json();
  const { id, inStock } = body;

  const product = await prisma.product.update({
    where: { id: id },
    data: { inStock },
  });
  return NextResponse.json(product)
}
