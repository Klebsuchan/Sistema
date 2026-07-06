import React, { useState, useMemo } from 'react';
import { InspecaoAntiga } from '../data_inspecoes';
import { Search, ClipboardList, ShieldAlert, CheckCircle, XCircle, Download, Pencil, Trash2, PlusCircle } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';

interface InspecoesAntigasViewProps {
  inspecoes: InspecaoAntiga[];
  onAdd: () => void;
  onEdit: (insp: InspecaoAntiga) => void;
  onDelete: (id: string) => void;
  onExport: (inspecoes: InspecaoAntiga[]) => void;
}

const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export function InspecoesAntigasView({ inspecoes, onAdd, onEdit, onDelete, onExport }: InspecoesAntigasViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [predioFilter, setPredioFilter] = useState('Todos');
  const [conformeFilter, setConformeFilter] = useState('Todos');

  const filtered = useMemo(() => {
    return inspecoes.filter(insp => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        (insp.local || '').toLowerCase().includes(searchLower) ||
        (insp.id_equipamento || '').toLowerCase().includes(searchLower) ||
        (insp.observacao || '').toLowerCase().includes(searchLower) ||
        (insp.operador || '').toLowerCase().includes(searchLower);
      
      const matchesPredio = predioFilter === 'Todos' || insp.sheet === predioFilter;

      const matchesConforme = conformeFilter === 'Todos' || 
          (conformeFilter === 'Conforme' && insp.conforme) ||
          (conformeFilter === 'Não Conforme' && insp.nao_conforme) ||
          (conformeFilter === 'Em Andamento' && (insp.status || '').toLowerCase().includes('andamento'));
      
      return matchesSearch && matchesPredio && matchesConforme;
    });
  }, [inspecoes, searchTerm, predioFilter, conformeFilter]);

  const uniquePredios = useMemo(() => {
    const p = new Set(inspecoes.map(e => e.sheet).filter(Boolean));
    return ['Todos', ...Array.from(p).sort()];
  }, [inspecoes]);

  const statsConformidade = useMemo(() => {
    let conf = 0;
    let nConf = 0;
    filtered.forEach(i => {
      if (i.conforme) conf++;
      if (i.nao_conforme) nConf++;
    });
    return [
      { name: 'Conforme', value: conf },
      { name: 'Não Conforme', value: nConf }
    ].filter(d => d.value > 0);
  }, [filtered]);

  const statsPredio = useMemo(() => {
    const map: Record<string, number> = {};
    filtered.forEach(i => {
      map[i.sheet] = (map[i.sheet] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [filtered]);

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-blue-800">Conformidade Geral</h3>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><CheckCircle className="w-5 h-5"/></div>
          </div>
          <div className="h-48">
            {statsConformidade.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={statsConformidade} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={5} dataKey="value">
                    {statsConformidade.map((entry, index) => {
                      let color = COLORS[0];
                      if(entry.name === 'Não Conforme') color = COLORS[1];
                      return <Cell key={`cell-${index}`} fill={color} />;
                    })}
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
            <h3 className="text-sm font-semibold text-blue-800">Inspeções por Prédio</h3>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><ClipboardList className="w-5 h-5"/></div>
          </div>
          <div className="h-48">
            {statsPredio.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statsPredio} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={32} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-blue-400 text-sm">Sem dados</div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-blue-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-blue-50/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400" />
              <input
                type="text"
                placeholder="Buscar inspeção..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm transition-all shadow-sm"
              />
            </div>
            <select 
              value={predioFilter}
              onChange={(e) => setPredioFilter(e.target.value)}
              className="w-full sm:w-auto bg-white border border-blue-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm"
            >
              {uniquePredios.map(p => <option key={p} value={p}>{p === 'Todos' ? 'Todos os Prédios' : p}</option>)}
            </select>
            <select 
              value={conformeFilter}
              onChange={(e) => setConformeFilter(e.target.value)}
              className="w-full sm:w-auto bg-white border border-blue-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm"
            >
              <option value="Todos">Todas Conformidades</option>
              <option value="Conforme">Conforme</option>
              <option value="Não Conforme">Não Conforme</option>
              <option value="Em Andamento">Em Andamento</option>
            </select>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button onClick={() => onExport(filtered)} className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors shadow-sm text-sm font-medium">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
            <button onClick={onAdd} className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm text-sm font-medium">
              <PlusCircle className="h-4 w-4" />
              Nova Inspeção
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm min-w-[1000px]">
            <thead>
              <tr className="bg-blue-50 border-b border-blue-100 text-blue-500">
                <th className="px-6 py-4 font-medium whitespace-nowrap">ID / Data</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Prédio / Local</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Operador / Dispositivo</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Status</th>
                <th className="px-6 py-4 font-medium max-w-[200px]">Observações / Falhas</th>
                <th className="px-6 py-4 font-medium text-right whitespace-nowrap">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {filtered.map((insp) => (
                <tr key={insp.id} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-mono text-xs text-blue-500 mb-1">{insp.id}</div>
                    <div className="font-medium text-blue-900">{insp.data || '-'}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-blue-800">{insp.sheet}</div>
                    <div className="text-xs text-blue-500 mt-0.5">{insp.local} (Andar: {insp.andar})</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-blue-900">{insp.operador || 'Não informado'}</div>
                    <div className="text-xs text-blue-500 mt-0.5">Disp: {insp.dispositivo || '-'}</div>
                    {insp.entendeuCorretamente !== undefined && (
                      <div className={`text-xs mt-1 ${insp.entendeuCorretamente ? 'text-blue-600' : 'text-blue-600'}`}>
                        {insp.entendeuCorretamente ? 'Entendeu uso' : 'Não entendeu uso'}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1.5 items-start">
                      {insp.conforme && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                          <CheckCircle className="w-3 h-3" /> Conforme
                        </span>
                      )}
                      {insp.nao_conforme && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                          <XCircle className="w-3 h-3" /> Não Conforme
                        </span>
                      )}
                      {insp.status && (
                        <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-200">
                          Status: {insp.status}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-blue-600 line-clamp-2" title={insp.observacao}>
                      <span className="font-semibold">Obs:</span> {insp.observacao || '-'}
                    </div>
                    {insp.falhas && (
                      <div className="text-xs text-blue-600 mt-1 line-clamp-1" title={insp.falhas}>
                        <span className="font-semibold">Falhas:</span> {insp.falhas}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => onEdit(insp)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => onDelete(insp.id)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-blue-500">
                    Nenhuma inspeção encontrada.
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
