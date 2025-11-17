import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Buscar lead específico
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const lead = await prisma.lead.findUnique({
      where: { id },
      include: { notes: true },
    });
    
    if (!lead) {
      return NextResponse.json({ error: 'Lead não encontrado' }, { status: 404 });
    }
    
    return NextResponse.json(lead);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar lead' }, { status: 500 });
  }
}

// PATCH - Atualizar lead
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    
    const lead = await prisma.lead.update({
      where: { id },
      data,
    });
    
    return NextResponse.json(lead);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar lead' }, { status: 500 });
  }
}

// DELETE - Deletar lead
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.lead.delete({
      where: { id },
    });
    
    return NextResponse.json({ message: 'Lead deletado com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao deletar lead' }, { status: 500 });
  }
}
