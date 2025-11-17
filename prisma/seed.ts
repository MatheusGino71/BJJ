import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../lib/auth';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Criar usuário admin
  const adminPassword = await hashPassword('admin123');
  const admin = await prisma.user.upsert({
    where: { email: 'admin@ngbjj.com' },
    update: {},
    create: {
      email: 'admin@ngbjj.com',
      password: adminPassword,
      name: 'Administrador NGBJJ',
      role: 'admin',
    },
  });

  console.log('✅ Usuário admin criado:', admin.email);

  // Criar alguns leads de exemplo
  const leads = await Promise.all([
    prisma.lead.create({
      data: {
        name: 'João Silva',
        email: 'joao@example.com',
        phone: '(11) 98765-4321',
        message: 'Gostaria de conhecer a academia e fazer uma aula experimental.',
        status: 'new',
      },
    }),
    prisma.lead.create({
      data: {
        name: 'Maria Santos',
        email: 'maria@example.com',
        phone: '(11) 91234-5678',
        message: 'Tenho interesse no programa kids para meu filho de 8 anos.',
        status: 'contacted',
      },
    }),
  ]);

  console.log(`✅ ${leads.length} leads de exemplo criados`);

  // Criar alguns alunos de exemplo
  const students = await Promise.all([
    prisma.student.create({
      data: {
        name: 'Carlos Oliveira',
        email: 'carlos@example.com',
        phone: '(11) 99999-8888',
        belt: 'azul',
        program: 'avancado',
        status: 'active',
        planType: 'mensal',
        monthlyFee: 350.00,
        paymentDay: 10,
      },
    }),
    prisma.student.create({
      data: {
        name: 'Ana Costa',
        email: 'ana@example.com',
        phone: '(11) 98888-7777',
        belt: 'branca',
        program: 'fundamentos',
        status: 'active',
        planType: 'trimestral',
        monthlyFee: 300.00,
        paymentDay: 5,
      },
    }),
  ]);

  console.log(`✅ ${students.length} alunos de exemplo criados`);

  // Criar pagamentos para os alunos
  for (const student of students) {
    await prisma.payment.create({
      data: {
        studentId: student.id,
        amount: student.monthlyFee,
        dueDate: new Date(new Date().getFullYear(), new Date().getMonth(), student.paymentDay),
        status: 'pending',
      },
    });
  }

  console.log('✅ Pagamentos criados');

  // Criar presenças de hoje
  for (const student of students) {
    await prisma.attendance.create({
      data: {
        studentId: student.id,
        program: student.program,
        instructor: 'Prof. Marcus',
        present: true,
      },
    });
  }

  console.log('✅ Presenças criadas');

  console.log('\n🎉 Seed concluído com sucesso!');
  console.log('\n📝 Credenciais de acesso:');
  console.log('   Email: admin@ngbjj.com');
  console.log('   Senha: admin123');
  console.log('\n⚠️  Lembre-se de alterar a senha em produção!\n');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
