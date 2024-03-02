import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {


  await prisma.todo.deleteMany(); // DELETE * FROM table

  await prisma.todo.createMany({
    data: [
      {description: "Piedra del alma", complete: true},
      {description: "Piedra del poder", complete: false},
      {description: "Piedra del espacio", complete: false},
      {description: "Piedra del tiempo", complete: false},
      {description: "Piedra del realidad", complete: false},
      {description: "Piedra del mente", complete: false},
    ]
  });


  return NextResponse.json({message: "Seed"});
}
