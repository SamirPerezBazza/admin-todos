import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

interface Segments {
	params: {
		id: string;
	};
}

export async function GET(request: Request, segments: Segments) {
	const { params } = segments;

	const todo = await prisma.todo.findFirst({
		where: { id: params.id },
	});

  if(!todo) return NextResponse.json({message: `Todo with id ${params.id} not found`}, {status: 404});

	return NextResponse.json(params.id);
}
