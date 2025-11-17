import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Listar todos os leads
export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      include: {
        notes: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar leads' }, { status: 500 });
  }
}

// POST - Criar novo lead
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        source: data.source || 'website',
      },
    });
    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar lead' }, { status: 500 });
  }
}
