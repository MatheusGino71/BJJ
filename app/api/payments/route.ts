import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST - Registrar pagamento
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const payment = await prisma.payment.create({
      data: {
        studentId: data.studentId,
        amount: parseFloat(data.amount),
        dueDate: new Date(data.dueDate),
        paidDate: data.paidDate ? new Date(data.paidDate) : undefined,
        status: data.status || 'pending',
        method: data.method,
      },
    });
    return NextResponse.json(payment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao registrar pagamento' }, { status: 500 });
  }
}

// GET - Listar pagamentos (com filtro opcional por aluno)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');
    
    const payments = await prisma.payment.findMany({
      where: studentId ? { studentId } : undefined,
      include: {
        student: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        dueDate: 'desc',
      },
    });
    
    return NextResponse.json(payments);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar pagamentos' }, { status: 500 });
  }
}
