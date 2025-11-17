'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DashboardStats {
  totalStudents: number;
  activeStudents: number;
  totalLeads: number;
  newLeads: number;
  pendingPayments: number;
  todayAttendances: number;
  monthlyRevenue: number;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  source: string;
  createdAt: string;
}

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  belt: string;
  program: string;
  status: string;
  monthlyFee: number;
  planType: string;
}

interface Payment {
  id: string;
  amount: number;
  dueDate: string;
  paidDate: string | null;
  status: string;
  method: string | null;
  student: {
    name: string;
    email: string;
  };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'students' | 'payments'>('overview');
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [statsRes, leadsRes, studentsRes, paymentsRes] = await Promise.all([
        fetch('/api/dashboard/stats'),
        fetch('/api/leads'),
        fetch('/api/students'),
        fetch('/api/payments'),
      ]);

      const statsData = await statsRes.json();
      const leadsData = await leadsRes.json();
      const studentsData = await studentsRes.json();
      const paymentsData = await paymentsRes.json();

      setStats(statsData);
      setLeads(leadsData);
      setStudents(studentsData);
      setPayments(paymentsData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      contacted: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      converted: 'bg-green-500/20 text-green-400 border-green-500/30',
      lost: 'bg-red-500/20 text-red-400 border-red-500/30',
      active: 'bg-green-500/20 text-green-400 border-green-500/30',
      inactive: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      paid: 'bg-green-500/20 text-green-400 border-green-500/30',
      late: 'bg-red-500/20 text-red-400 border-red-500/30',
    };
    return colors[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      new: 'Novo',
      contacted: 'Contatado',
      converted: 'Convertido',
      lost: 'Perdido',
      active: 'Ativo',
      inactive: 'Inativo',
      pending: 'Pendente',
      paid: 'Pago',
      late: 'Atrasado',
    };
    return labels[status] || status;
  };

  const updateLeadStatus = async (id: string, newStatus: string) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchAllData();
    } catch (error) {
      alert('Erro ao atualizar status');
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Deseja realmente deletar este lead?')) return;
    try {
      await fetch(`/api/leads/${id}`, { method: 'DELETE' });
      fetchAllData();
    } catch (error) {
      alert('Erro ao deletar lead');
    }
  };

  const deleteStudent = async (id: string) => {
    if (!confirm('Deseja realmente deletar este aluno?')) return;
    try {
      await fetch(`/api/students/${id}`, { method: 'DELETE' });
      fetchAllData();
    } catch (error) {
      alert('Erro ao deletar aluno');
    }
  };

  if (loading || !stats) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-luxury-gold text-2xl font-serif">Carregando Dashboard...</div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total de Alunos',
      value: stats.totalStudents,
      subtitle: `${stats.activeStudents} ativos`,
      color: 'gold',
    },
    {
      title: 'Leads',
      value: stats.totalLeads,
      subtitle: `${stats.newLeads} novos este mês`,
      color: 'gold',
    },
    {
      title: 'Receita Mensal',
      value: `R$ ${stats.monthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      subtitle: 'Projetada',
      color: 'gold',
    },
    {
      title: 'Pagamentos Pendentes',
      value: stats.pendingPayments,
      subtitle: 'Requer atenção',
      color: 'gold',
    },
    {
      title: 'Presenças Hoje',
      value: stats.todayAttendances,
      subtitle: 'Alunos presentes',
      color: 'gold',
    },
  ];

  return (
    <div className="min-h-screen bg-luxury-black">
      {/* Header */}
      <header className="bg-luxury-royal border-b border-luxury-gold/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-serif text-luxury-gold">Dashboard CRM - NGBJJ</h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90 luxury-transition">
              Meu Perfil
            </button>
            <button className="px-4 py-2 border border-luxury-gold/30 text-luxury-white hover:border-luxury-gold luxury-transition">
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-luxury-royal border-b border-luxury-gold/10 px-6">
        <div className="max-w-7xl mx-auto flex space-x-8">
          {[
            { id: 'overview', label: 'Visão Geral' },
            { id: 'leads', label: 'Leads' },
            { id: 'students', label: 'Alunos' },
            { id: 'payments', label: 'Pagamentos' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-2 uppercase tracking-widest text-sm luxury-transition relative ${
                activeTab === tab.id
                  ? 'text-luxury-gold'
                  : 'text-luxury-white/60 hover:text-luxury-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto p-6">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif text-luxury-white mb-6">Estatísticas Gerais</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {statCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-luxury-royal border border-luxury-gold/20 p-6 hover:border-luxury-gold luxury-transition"
                >
                  <h3 className="text-sm uppercase tracking-widest text-luxury-white/60 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-4xl font-serif text-luxury-gold mb-2">{card.value}</p>
                  <p className="text-sm text-luxury-white/50">{card.subtitle}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-luxury-royal border border-luxury-gold/20 p-6">
                <h3 className="text-xl font-serif text-luxury-gold mb-4">Ações Rápidas</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90 luxury-transition text-left">
                    + Novo Aluno
                  </button>
                  <button className="w-full px-4 py-3 border border-luxury-gold/30 text-luxury-white hover:border-luxury-gold luxury-transition text-left">
                    + Registrar Pagamento
                  </button>
                  <button className="w-full px-4 py-3 border border-luxury-gold/30 text-luxury-white hover:border-luxury-gold luxury-transition text-left">
                    + Registrar Presença
                  </button>
                </div>
              </div>

              <div className="bg-luxury-royal border border-luxury-gold/20 p-6">
                <h3 className="text-xl font-serif text-luxury-gold mb-4">Notificações</h3>
                <div className="space-y-3 text-luxury-white/70 text-sm">
                  <p>• {stats.pendingPayments} pagamentos pendentes requerem atenção</p>
                  <p>• {stats.newLeads} novos leads nos últimos 30 dias</p>
                  <p>• {stats.todayAttendances} presenças registradas hoje</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'leads' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-luxury-gold">Gerenciar Leads ({leads.length})</h2>
            </div>
            
            <div className="bg-luxury-royal border border-luxury-gold/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-luxury-black/50">
                    <tr>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Nome</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Contato</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Mensagem</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Status</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Data</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id} className="border-t border-luxury-gold/10 hover:bg-luxury-black/30 luxury-transition">
                        <td className="p-4">
                          <div className="text-luxury-white font-medium">{lead.name}</div>
                          <div className="text-luxury-white/40 text-xs mt-1">{lead.source}</div>
                        </td>
                        <td className="p-4">
                          <div className="text-luxury-white/80 text-sm">{lead.email}</div>
                          <div className="text-luxury-white/60 text-sm">{lead.phone}</div>
                        </td>
                        <td className="p-4">
                          <div className="text-luxury-white/80 text-sm line-clamp-2 max-w-xs">
                            {lead.message}
                          </div>
                        </td>
                        <td className="p-4">
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                            className={`text-xs px-3 py-1.5 rounded border cursor-pointer ${getStatusColor(lead.status)}`}
                          >
                            <option value="new">Novo</option>
                            <option value="contacted">Contatado</option>
                            <option value="converted">Convertido</option>
                            <option value="lost">Perdido</option>
                          </select>
                        </td>
                        <td className="p-4 text-luxury-white/60 text-sm">
                          {formatDate(lead.createdAt)}
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="text-red-400 hover:text-red-300 text-sm luxury-transition"
                          >
                            Deletar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'students' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-luxury-gold">Gerenciar Alunos ({students.length})</h2>
            </div>
            
            <div className="bg-luxury-royal border border-luxury-gold/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-luxury-black/50">
                    <tr>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Nome</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Contato</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Faixa</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Programa</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Plano</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Mensalidade</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Status</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-t border-luxury-gold/10 hover:bg-luxury-black/30 luxury-transition">
                        <td className="p-4">
                          <div className="text-luxury-white font-medium">{student.name}</div>
                        </td>
                        <td className="p-4">
                          <div className="text-luxury-white/80 text-sm">{student.email}</div>
                          <div className="text-luxury-white/60 text-sm">{student.phone}</div>
                        </td>
                        <td className="p-4">
                          <span className="text-luxury-white/80 capitalize">{student.belt}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-luxury-white/80 capitalize">{student.program}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-luxury-white/80 capitalize">{student.planType}</span>
                        </td>
                        <td className="p-4 text-luxury-gold font-medium">
                          {formatCurrency(student.monthlyFee)}
                        </td>
                        <td className="p-4">
                          <span className={`text-xs px-3 py-1.5 rounded border ${getStatusColor(student.status)}`}>
                            {getStatusLabel(student.status)}
                          </span>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => deleteStudent(student.id)}
                            className="text-red-400 hover:text-red-300 text-sm luxury-transition"
                          >
                            Deletar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'payments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-luxury-gold">Controle de Pagamentos ({payments.length})</h2>
            </div>
            
            <div className="bg-luxury-royal border border-luxury-gold/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-luxury-black/50">
                    <tr>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Aluno</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Valor</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Vencimento</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Pagamento</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Método</th>
                      <th className="text-left p-4 text-luxury-gold text-xs uppercase tracking-widest">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr key={payment.id} className="border-t border-luxury-gold/10 hover:bg-luxury-black/30 luxury-transition">
                        <td className="p-4">
                          <div className="text-luxury-white font-medium">{payment.student.name}</div>
                          <div className="text-luxury-white/60 text-sm">{payment.student.email}</div>
                        </td>
                        <td className="p-4 text-luxury-gold font-medium">
                          {formatCurrency(payment.amount)}
                        </td>
                        <td className="p-4 text-luxury-white/80 text-sm">
                          {formatDate(payment.dueDate)}
                        </td>
                        <td className="p-4 text-luxury-white/80 text-sm">
                          {payment.paidDate ? formatDate(payment.paidDate) : '-'}
                        </td>
                        <td className="p-4 text-luxury-white/80 text-sm capitalize">
                          {payment.method || '-'}
                        </td>
                        <td className="p-4">
                          <span className={`text-xs px-3 py-1.5 rounded border ${getStatusColor(payment.status)}`}>
                            {getStatusLabel(payment.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
