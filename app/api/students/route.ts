import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Listar todos os alunos
export async function GET() {
  try {
    const students = await prisma.student.findMany({
      include: {
        payments: {
          orderBy: { dueDate: 'desc' },
          take: 5,
        },
        attendances: {
          orderBy: { date: 'desc' },
          take: 10,
        },
        notes: {
          orderBy: { createdAt: 'desc' },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar alunos' }, { status: 500 });
  }
}

// POST - Criar novo aluno
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const student = await prisma.student.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        cpf: data.cpf,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
        address: data.address,
        emergencyContact: data.emergencyContact,
        emergencyPhone: data.emergencyPhone,
        belt: data.belt || 'branca',
        program: data.program,
        status: 'active',
        planType: data.planType,
        monthlyFee: parseFloat(data.monthlyFee),
        paymentDay: parseInt(data.paymentDay) || 10,
      },
    });
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar aluno' }, { status: 500 });
  }
}
