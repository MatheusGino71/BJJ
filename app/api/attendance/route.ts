import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST - Registrar presença
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const attendance = await prisma.attendance.create({
      data: {
        studentId: data.studentId,
        date: data.date ? new Date(data.date) : new Date(),
        program: data.program,
        instructor: data.instructor,
        present: data.present !== false,
      },
    });
    return NextResponse.json(attendance, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao registrar presença' }, { status: 500 });
  }
}

// GET - Listar presenças
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');
    const date = searchParams.get('date');
    
    const where: any = {};
    if (studentId) where.studentId = studentId;
    if (date) {
      const targetDate = new Date(date);
      const nextDay = new Date(targetDate);
      nextDay.setDate(nextDay.getDate() + 1);
      
      where.date = {
        gte: targetDate,
        lt: nextDay,
      };
    }
    
    const attendances = await prisma.attendance.findMany({
      where,
      include: {
        student: {
          select: {
            name: true,
            program: true,
          },
        },
      },
      orderBy: {
        date: 'desc',
      },
    });
    
    return NextResponse.json(attendances);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar presenças' }, { status: 500 });
  }
}
