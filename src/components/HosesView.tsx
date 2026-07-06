import React, { useState, useMemo } from 'react';
import { Hose } from '../data_hoses';
import { Search, Droplet, Download, PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

interface HosesViewProps {
  hoses: Hose[];
  onAdd: () => void;
  onEdit: (hose: Hose) => void;
  onDelete: (id: string) => void;
  onExport: (hosesToExport: Hose[]) => void;
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export function HosesView({ hoses, onAdd, onEdit, onDelete, onExport }: HosesViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPredio, setFilterPredio] = useState<string>('TODOS');

  const filtered = useMemo(() => hoses.filter(h => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = h.num_mangueira.toLowerCase().includes(searchLower) ||
                          h.patrim.toLowerCase().includes(searchLower) ||
                          h.localizacao.toLowerCase().includes(searchLower) ||
                          (h.predio || '').toLowerCase().includes(searchLower);
    
    const matchesPredio = filterPredio === 'TODOS' || h.predio === filterPredio;

    return matchesSearch && matchesPredio;
  }), [hoses, searchTerm, filterPredio]);

  const metrics = useMemo(() => {
    const byPredioCount: Record<string, number> = {};
    const byTypeCount: Record<string, number> = {};

    filtered.forEach(h => {
      const predio = h.predio || 'Desconhecido';
      byPredioCount[predio] = (byPredioCount[predio] || 0) + 1;

      const tipo = h.tipo.trim() || 'Indefinido';
      byTypeCount[tipo] = (byTypeCount[tipo] || 0) + 1;
    });

    const predioData = Object.entries(byPredioCount).map(([name, value]) => ({ name, value }));
    const typeData = Object.entries(byTypeCount).map(([name, value]) => ({ name, value }));

    return { predioData, typeData };
  }, [filtered]);

  const uniquePredios = useMemo(() => {
    const list = Array.from(new Set(hoses.map(h => h.predio).filter(Boolean))) as string[];
    return list.sort();
  }, [hoses]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
          <h3 className="text-sm font-semibold text-blue-800 mb-4">Mangueiras por Prédio</h3>
          <div className="h-64">
            {metrics.predioData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={metrics.predioData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {metrics.predioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-blue-400 text-sm">Sem dados</div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
          <h3 className="text-sm font-semibold text-blue-800 mb-4">Quantidade por Tipo</h3>
          <div className="h-64">
            {metrics.typeData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={metrics.typeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip
                    cursor={{ fill: '#F3F4F6' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40}>
                    {metrics.typeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[(index + 1) % COLORS.length]} />
                    ))}
                  </Bar>
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
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400" />
              <input
                type="text"
                placeholder="Buscar mangueira..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm transition-all shadow-sm"
              />
            </div>
            <select 
              value={filterPredio}
              onChange={(e) => setFilterPredio(e.target.value)}
              className="bg-white border border-blue-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm"
            >
              <option value="TODOS">Todos os Prédios</option>
              {uniquePredios.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => onExport(filtered)}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors shadow-sm text-sm font-medium"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
            <button
              onClick={onAdd}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm text-sm font-medium"
            >
              <PlusCircle className="h-4 w-4" />
              Nova Mangueira
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-blue-50 border-b border-blue-100 text-blue-500">
                <th className="px-6 py-4 font-medium whitespace-nowrap">Nº / Patrimônio</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Prédio / Localização</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Tipo / Cap.</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Vencimentos</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Status</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Checks</th>
                <th className="px-6 py-4 font-medium text-right whitespace-nowrap">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {filtered.map((h) => (
                <tr key={h.id} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-blue-900">{h.num_mangueira}</div>
                    <div className="text-xs text-blue-500 mt-0.5">{h.patrim}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-blue-800">{h.predio || '-'}</div>
                    <div className="text-xs text-blue-500 mt-0.5">{h.localizacao}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-blue-800">{h.tipo}</div>
                    <div className="text-xs text-blue-500 mt-0.5">{h.cap}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-blue-700"><span className="text-xs text-blue-400">Manut:</span> {h.prox_recarga}</div>
                    <div className="text-blue-700 mt-0.5"><span className="text-xs text-blue-400">Teste:</span> {h.prox_teste}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      {h.retiradoParaRecarga && <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">Manutenção (Retirado)</span>}
                      {h.coberturaNoLocal && <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">Cobertura Ativa</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${h.checkLacre ? 'bg-blue-500' : 'bg-blue-500'}`} title="Acoplamento"></span>
                      <span className={`w-2 h-2 rounded-full ${h.checkPressurizacao ? 'bg-blue-500' : 'bg-blue-500'}`} title="Esguicho"></span>
                      <span className={`w-2 h-2 rounded-full ${h.checkAnel ? 'bg-blue-500' : 'bg-blue-500'}`} title="Botoeira"></span>
                      <span className={`w-2 h-2 rounded-full ${h.checkPino ? 'bg-blue-500' : 'bg-blue-500'}`} title="Sinalização"></span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => onEdit(h)}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => onDelete(h.id)}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Excluir"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-blue-500">
                    Nenhuma mangueira encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-blue-100 bg-blue-50 flex items-center justify-between text-xs text-blue-500">
          <div>Total filtrado: <span className="font-semibold text-blue-900">{filtered.length}</span> mangueiras</div>
          <div className="flex gap-2">
             <span>Acopl.</span>
             <span>Esguicho</span>
             <span>Botoeira</span>
             <span>Sinal.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
