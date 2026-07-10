import React, { useState, useMemo } from 'react';
import { exportBrigadaToPDF, exportBrigadaToExcel } from '../lib/exportUtils';
import { BrigadaItem } from '../data_brigada';
import { Search, Users, CheckCircle, Clock, PlusCircle, Download, Pencil, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BrigadaViewProps {
  items: BrigadaItem[];
  onAdd: () => void;
  onEdit: (item: BrigadaItem) => void;
  onDelete: (qtd: number) => void;
  
}

const COLORS = ['#10b981', '#f59e0b', '#ef4444']; 

export function BrigadaView({ items, onAdd, onEdit, onDelete }: BrigadaViewProps) {
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
        <div className="bg-white rounded-2xl shadow-sm border border-brand-light p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-brand-blue">Status dos Módulos</h3>
            <div className="p-2 bg-brand-light text-brand-blue rounded-lg"><CheckCircle className="w-5 h-5"/></div>
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
              <div className="h-full flex items-center justify-center text-brand-blue text-sm">Sem dados</div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-brand-light p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-brand-blue">Total de Brigadistas</h3>
            <div className="p-2 bg-brand-light text-brand-blue rounded-lg"><Users className="w-5 h-5"/></div>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-brand-blue">{filtered.length}</h3>
            <p className="text-sm text-brand-blue mt-2">Membros listados atualmente</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-brand-light overflow-hidden flex flex-col">
        <div className="p-4 border-b border-brand-light flex flex-col sm:flex-row gap-4 justify-between items-center bg-brand-light/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-blue" />
              <input
                type="text"
                placeholder="Buscar por nome, setor ou cargo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none text-sm transition-all shadow-sm"
              />
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-auto bg-white border border-brand-light rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none shadow-sm"
            >
              {uniqueStatus.map(p => <option key={p} value={p}>{p === 'Todos' ? 'Todos os Status' : p}</option>)}
            </select>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => exportBrigadaToPDF(filtered)}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">PDF</span>
            </button>
            <button
              onClick={() => exportBrigadaToExcel(filtered)}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Excel</span>
            </button>
            <button onClick={onAdd} className="flex items-center justify-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-xl hover:bg-brand-blue transition-colors shadow-sm text-sm font-medium">
              <PlusCircle className="h-4 w-4" />
              Novo
            </button>
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-50/50">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-brand-light text-center">
              <Search className="w-8 h-8 text-brand-blue mb-3 opacity-50" />
              <h3 className="font-semibold text-brand-blue">Nenhum registro</h3>
              <p className="text-sm text-brand-gray mt-1">Nenhum brigadista encontrado com os filtros atuais.</p>
            </div>
          ) : filtered.map((b) => (
            <div key={b.id} className="bg-white p-4 rounded-xl shadow-sm border border-brand-light flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-brand-blue text-lg">{b.nome}</div>
                  <div className="text-sm text-brand-gray">{b.cargo} • {b.predio}</div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-bold ${b.status_ead === 'Aprovado' && b.status_pratica === 'Aprovado' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {b.status_ead === 'Aprovado' && b.status_pratica === 'Aprovado' ? 'Aprovado' : 'Pendente'}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm bg-brand-light/30 p-2 rounded-lg">
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Setor</span>
                  <span className="font-medium text-brand-blue truncate" title={b.setor}>{b.setor || '-'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Frequência</span>
                  <span className="font-medium text-brand-blue">{b.freq_presencial || 0}% / {b.freq_online || 0}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm bg-brand-light/30 p-2 rounded-lg">
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">EAD</span>
                  <span className={`font-medium ${b.status_ead === 'Aprovado' ? 'text-green-600' : 'text-red-500'}`}>{b.status_ead} (Nota {b.nota_teorica || '-'})</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Prática</span>
                  <span className={`font-medium ${b.status_pratica === 'Aprovado' ? 'text-green-600' : 'text-red-500'}`}>{b.status_pratica} (Nota {b.nota_pratica || '-'})</span>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-brand-light mt-1">
                <button onClick={() => onEdit(b)} className="p-2 text-brand-blue bg-brand-light hover:bg-brand-blue hover:text-white rounded-lg transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => onDelete(b.id)} className="p-2 text-brand-red bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm min-w-[1000px]">
            <thead>
              <tr className="bg-brand-light border-b border-brand-light text-brand-blue">
                <th className="px-6 py-4 font-medium whitespace-nowrap">Nome / Setor</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Cargo / Status Geral</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Frequência (Pres/On)</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Notas (Teo/Prát)</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Status Curso/Módulo</th>
                <th className="px-6 py-4 font-medium text-right whitespace-nowrap">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-light">
              {filtered.map((item) => (
                <tr key={item.qtd} className="hover:bg-brand-light/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-brand-blue">{item.nome}</div>
                    <div className="text-xs text-brand-blue mt-0.5">{item.setor}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-brand-blue">{item.cargo}</div>
                    <div className={`text-xs mt-1 font-bold ${item.status === 'desligado' ? 'text-brand-blue' : 'text-brand-blue'}`}>
                      {item.status?.toUpperCase() || 'ATIVO'}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-brand-blue">
                    <div className="text-xs font-semibold text-brand-blue">Pres: {item.frequenciaPresencial || 0}</div>
                    <div className="text-xs font-semibold text-brand-blue mt-1">On: {item.frequenciaOnline || 0}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs font-semibold text-brand-blue">Teor: {item.notaTeorica || 0}</div>
                    <div className="text-xs font-semibold text-brand-blue mt-1">Sist: {item.notaSistema || 0}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1.5 items-start">
                      <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.status_modulo === 'CONCLUIDO' ? 'bg-brand-light text-brand-blue' : 
                        item.status_modulo === 'PENDENTE' ? 'bg-brand-light text-brand-red' : 'bg-brand-light text-brand-blue'
                      }`}>
                        Mód: {item.status_modulo || '-'}
                      </span>
                      {item.modulesConcluded && (
                        <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-brand-light text-brand-blue">
                          Mód. Completos (1-4)
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => onEdit(item)} className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors" title="Editar">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => onDelete(item.qtd)} className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-brand-blue">
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
