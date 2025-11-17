import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Dashboard stats
export async function GET() {
  try {
    const [
      totalStudents,
      activeStudents,
      totalLeads,
      newLeads,
      pendingPayments,
      todayAttendances,
    ] = await Promise.all([
      // Total de alunos
      prisma.student.count(),
      
      // Alunos ativos
      prisma.student.count({
        where: { status: 'active' },
      }),
      
      // Total de leads
      prisma.lead.count(),
      
      // Leads novos (últimos 30 dias)
      prisma.lead.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          },
        },
      }),
      
      // Pagamentos pendentes
      prisma.payment.count({
        where: { status: 'pending' },
      }),
      
      // Presenças de hoje
      prisma.attendance.count({
        where: {
          date: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lt: new Date(new Date().setHours(23, 59, 59, 999)),
          },
        },
      }),
    ]);
    
    // Receita mensal estimada
    const studentsWithFees = await prisma.student.findMany({
      where: { status: 'active' },
      select: { monthlyFee: true },
    });
    
    const monthlyRevenue = studentsWithFees.reduce(
      (sum: number, student: { monthlyFee: number }) => sum + student.monthlyFee,
      0
    );
    
    return NextResponse.json({
      totalStudents,
      activeStudents,
      totalLeads,
      newLeads,
      pendingPayments,
      todayAttendances,
      monthlyRevenue,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar estatísticas' }, { status: 500 });
  }
}
