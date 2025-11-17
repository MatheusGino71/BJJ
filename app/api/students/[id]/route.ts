import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Buscar aluno específico
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const student = await prisma.student.findUnique({
      where: { id },
      include: {
        payments: { orderBy: { dueDate: 'desc' } },
        attendances: { orderBy: { date: 'desc' } },
        notes: { orderBy: { createdAt: 'desc' } },
      },
    });
    
    if (!student) {
      return NextResponse.json({ error: 'Aluno não encontrado' }, { status: 404 });
    }
    
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar aluno' }, { status: 500 });
  }
}

// PATCH - Atualizar aluno
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    
    const updateData: any = { ...data };
    if (data.monthlyFee) updateData.monthlyFee = parseFloat(data.monthlyFee);
    if (data.paymentDay) updateData.paymentDay = parseInt(data.paymentDay);
    if (data.dateOfBirth) updateData.dateOfBirth = new Date(data.dateOfBirth);
    
    const student = await prisma.student.update({
      where: { id },
      data: updateData,
    });
    
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar aluno' }, { status: 500 });
  }
}

// DELETE - Deletar aluno
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.student.delete({
      where: { id },
    });
    
    return NextResponse.json({ message: 'Aluno deletado com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao deletar aluno' }, { status: 500 });
  }
}
