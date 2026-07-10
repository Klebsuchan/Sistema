import React, { useState, useMemo } from 'react';
import { exportHosesToPDF } from '../lib/pdf';
import { exportHosesToExcel } from '../lib/exportUtils';
import { Hose } from '../data_hoses';
import { Search, Droplet, Download, PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

interface HosesViewProps {
  hoses: Hose[];
  onAdd: () => void;
  onEdit: (hose: Hose) => void;
  onDelete: (id: string) => void;
  
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export function HosesView({ hoses, onAdd, onEdit, onDelete }: HosesViewProps) {
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
        <div className="bg-white rounded-2xl shadow-sm border border-brand-light p-6">
          <h3 className="text-sm font-semibold text-brand-blue mb-4">Mangueiras por Prédio</h3>
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
              <div className="h-full flex items-center justify-center text-brand-blue text-sm">Sem dados</div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-brand-light p-6">
          <h3 className="text-sm font-semibold text-brand-blue mb-4">Quantidade por Tipo</h3>
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
              <div className="h-full flex items-center justify-center text-brand-blue text-sm">Sem dados</div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-brand-light overflow-hidden flex flex-col">
        <div className="p-4 border-b border-brand-light flex flex-col sm:flex-row gap-4 justify-between items-center bg-brand-light/50">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-blue" />
              <input
                type="text"
                placeholder="Buscar mangueira..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none text-sm transition-all shadow-sm"
              />
            </div>
            <select 
              value={filterPredio}
              onChange={(e) => setFilterPredio(e.target.value)}
              className="bg-white border border-brand-light rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none shadow-sm"
            >
              <option value="TODOS">Todos os Prédios</option>
              {uniquePredios.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => exportHosesToPDF(filtered)}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">PDF</span>
            </button>
            <button
              onClick={() => exportHosesToExcel(filtered)}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Excel</span>
            </button>
            <button
              onClick={onAdd}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-xl hover:bg-brand-blue transition-colors shadow-sm text-sm font-medium"
            >
              <PlusCircle className="h-4 w-4" />
              Nova Mangueira
            </button>
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-50/50">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-brand-light text-center">
              <Search className="w-8 h-8 text-brand-blue mb-3 opacity-50" />
              <h3 className="font-semibold text-brand-blue">Nenhum registro</h3>
              <p className="text-sm text-brand-gray mt-1">Nenhuma mangueira encontrada com os filtros atuais.</p>
            </div>
          ) : filtered.map((h) => (
            <div key={h.id} className="bg-white p-4 rounded-xl shadow-sm border border-brand-light flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-brand-blue text-lg">Nº {h.num_mangueira}</div>
                  <div className="text-sm text-brand-gray">Patrimônio: {h.patrim}</div>
                </div>
                <div className="flex gap-1">
                  {h.checkEsguicho && <span className="w-3 h-3 rounded-full bg-brand-blue" title="Esguicho OK"></span>}
                  {h.checkEngate && <span className="w-3 h-3 rounded-full bg-brand-blue" title="Engate OK"></span>}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Prédio</span>
                  <span className="font-medium text-brand-blue">{h.predio || '-'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Localização</span>
                  <span className="font-medium text-brand-blue">{h.localizacao}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm bg-brand-light/30 p-2 rounded-lg">
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Tipo / Cap</span>
                  <span className="font-medium text-brand-blue">{h.tipo} • {h.cap}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Recarga / Teste</span>
                  <span className="font-medium text-brand-blue">{h.prox_recarga} / {h.prox_teste}</span>
                </div>
              </div>

              <div className="flex gap-2">
                {h.retiradoParaRecarga && <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">Recarga (Retirado)</span>}
                {h.coberturaNoLocal && <span className="px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-700">Cobertura Ativa</span>}
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-brand-light mt-1">
                <button onClick={() => onEdit(h)} className="p-2 text-brand-blue bg-brand-light hover:bg-brand-blue hover:text-white rounded-lg transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => onDelete(h.id)} className="p-2 text-brand-red bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-brand-light border-b border-brand-light text-brand-blue">
                <th className="px-6 py-4 font-medium whitespace-nowrap">Nº / Patrimônio</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Prédio / Localização</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Tipo / Cap.</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Vencimentos</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Status</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Checks</th>
                <th className="px-6 py-4 font-medium text-right whitespace-nowrap">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-light">
              {filtered.map((h) => (
                <tr key={h.id} className="hover:bg-brand-light/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-brand-blue">{h.num_mangueira}</div>
                    <div className="text-xs text-brand-blue mt-0.5">{h.patrim}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-brand-blue">{h.predio || '-'}</div>
                    <div className="text-xs text-brand-blue mt-0.5">{h.localizacao}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-brand-blue">{h.tipo}</div>
                    <div className="text-xs text-brand-blue mt-0.5">{h.cap}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-brand-blue"><span className="text-xs text-brand-blue">Manut:</span> {h.prox_recarga}</div>
                    <div className="text-brand-blue mt-0.5"><span className="text-xs text-brand-blue">Teste:</span> {h.prox_teste}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      {h.retiradoParaRecarga && <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-light text-brand-red">Manutenção (Retirado)</span>}
                      {h.coberturaNoLocal && <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-light text-brand-blue">Cobertura Ativa</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${h.checkLacre ? 'bg-brand-blue' : 'bg-brand-blue'}`} title="Acoplamento"></span>
                      <span className={`w-2 h-2 rounded-full ${h.checkPressurizacao ? 'bg-brand-blue' : 'bg-brand-blue'}`} title="Esguicho"></span>
                      <span className={`w-2 h-2 rounded-full ${h.checkAnel ? 'bg-brand-blue' : 'bg-brand-blue'}`} title="Botoeira"></span>
                      <span className={`w-2 h-2 rounded-full ${h.checkPino ? 'bg-brand-blue' : 'bg-brand-blue'}`} title="Sinalização"></span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => onEdit(h)}
                        className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => onDelete(h.id)}
                        className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors"
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
                  <td colSpan={7} className="px-6 py-8 text-center text-brand-blue">
                    Nenhuma mangueira encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-brand-light bg-brand-light flex items-center justify-between text-xs text-brand-blue">
          <div>Total filtrado: <span className="font-semibold text-brand-blue">{filtered.length}</span> mangueiras</div>
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
