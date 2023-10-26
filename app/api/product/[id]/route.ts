import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();
  if (currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }
  const product = await prisma?.product.delete({
    where: { id: params.id },
  });
  return NextResponse.json(product);
}

export async function PUT( 
   request: Request,
  { params }: { params: { id: string } }
)  {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.error();
  if (currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }
  const body = await request.json();
  const { name, inStock, description, category, cover, price } = body;

  const priceAsFloat = parseFloat(price);

  const product = await prisma?.product.update({
    where: { id: params.id }, // Utilisez le paramètre d'URL pour l'ID
    data: {
      name: name,
      inStock: inStock,
      description: description,
      category: category,
      cover: cover,
      price: priceAsFloat,
    },
  });
  return NextResponse.json(product);
}
