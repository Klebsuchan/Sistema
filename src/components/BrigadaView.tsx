import React, { useState, useMemo } from 'react';
import { BrigadaItem } from '../data_brigada';
import { Search, Users, CheckCircle, Clock, PlusCircle, Download, Pencil, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BrigadaViewProps {
  items: BrigadaItem[];
  onAdd: () => void;
  onEdit: (item: BrigadaItem) => void;
  onDelete: (qtd: number) => void;
  onExport: (items: BrigadaItem[]) => void;
}

const COLORS = ['#10b981', '#f59e0b', '#ef4444']; 

export function BrigadaView({ items, onAdd, onEdit, onDelete, onExport }: BrigadaViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');

  const filtered = useMemo(() => {
    return items.filter(item => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        (item.nome || '').toLowerCase().includes(searchLower) ||
        (item.setor || '').toLowerCase().includes(searchLower) ||
        (item.cargo || '').toLowerCase().includes(searchLower);
      
      const matchesStatus = statusFilter === 'Todos' || item.status_modulo === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [items, searchTerm, statusFilter]);

  const uniqueStatus = useMemo(() => {
    const p = new Set(items.map(e => e.status_modulo).filter(Boolean));
    return ['Todos', ...Array.from(p).sort()];
  }, [items]);

  const statsStatus = useMemo(() => {
    let concluido = 0, pendente = 0, outros = 0;
    filtered.forEach(item => {
      if (item.status_modulo === 'CONCLUIDO') concluido++;
      else if (item.status_modulo === 'PENDENTE') pendente++;
      else outros++;
    });

    return [
      { name: 'Concluído', value: concluido },
      { name: 'Pendente', value: pendente },
      { name: 'Outros', value: outros }
    ].filter(d => d.value > 0);
  }, [filtered]);

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-blue-800">Status dos Módulos</h3>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><CheckCircle className="w-5 h-5"/></div>
          </div>
          <div className="h-48">
            {statsStatus.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={statsStatus} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={5} dataKey="value">
                    {statsStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-blue-400 text-sm">Sem dados</div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-blue-800">Total de Brigadistas</h3>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users className="w-5 h-5"/></div>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900">{filtered.length}</h3>
            <p className="text-sm text-blue-500 mt-2">Membros listados atualmente</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-blue-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-blue-50/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400" />
              <input
                type="text"
                placeholder="Buscar por nome, setor ou cargo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm transition-all shadow-sm"
              />
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-auto bg-white border border-blue-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm"
            >
              {uniqueStatus.map(p => <option key={p} value={p}>{p === 'Todos' ? 'Todos os Status' : p}</option>)}
            </select>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button onClick={() => onExport(filtered)} className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors shadow-sm text-sm font-medium">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
            <button onClick={onAdd} className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm text-sm font-medium">
              <PlusCircle className="h-4 w-4" />
              Novo
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm min-w-[1000px]">
            <thead>
              <tr className="bg-blue-50 border-b border-blue-100 text-blue-500">
                <th className="px-6 py-4 font-medium whitespace-nowrap">Nome / Setor</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Cargo / Status Geral</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Frequência (Pres/On)</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Notas (Teo/Prát)</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Status Curso/Módulo</th>
                <th className="px-6 py-4 font-medium text-right whitespace-nowrap">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {filtered.map((item) => (
                <tr key={item.qtd} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-blue-900">{item.nome}</div>
                    <div className="text-xs text-blue-500 mt-0.5">{item.setor}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-blue-800">{item.cargo}</div>
                    <div className={`text-xs mt-1 font-bold ${item.status === 'desligado' ? 'text-blue-500' : 'text-blue-500'}`}>
                      {item.status?.toUpperCase() || 'ATIVO'}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-blue-700">
                    <div className="text-xs font-semibold text-blue-600">Pres: {item.frequenciaPresencial || 0}</div>
                    <div className="text-xs font-semibold text-blue-600 mt-1">On: {item.frequenciaOnline || 0}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs font-semibold text-blue-700">Teor: {item.notaTeorica || 0}</div>
                    <div className="text-xs font-semibold text-blue-700 mt-1">Sist: {item.notaSistema || 0}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1.5 items-start">
                      <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.status_modulo === 'CONCLUIDO' ? 'bg-blue-100 text-blue-800' : 
                        item.status_modulo === 'PENDENTE' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        Mód: {item.status_modulo || '-'}
                      </span>
                      {item.modulesConcluded && (
                        <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                          Mód. Completos (1-4)
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => onEdit(item)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => onDelete(item.qtd)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-blue-500">
                    Nenhum brigadista encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
