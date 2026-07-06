import React, { useState, useMemo } from 'react';
import { Extinguisher } from '../data_extintores';
import { Search, Flame, Download, PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ExtinguishersViewProps {
  extinguishers: Extinguisher[];
  onAdd: () => void;
  onEdit: (ext: Extinguisher) => void;
  onDelete: (id: string) => void;
  onExport: (extinguishersToExport: Extinguisher[]) => void;
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export function ExtinguishersView({ extinguishers, onAdd, onEdit, onDelete, onExport }: ExtinguishersViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPredio, setFilterPredio] = useState<string>('TODOS');

  const filtered = useMemo(() => extinguishers.filter(ext => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = ext.num_extintor.toLowerCase().includes(searchLower) ||
                          ext.patrim.toLowerCase().includes(searchLower) ||
                          ext.localizacao.toLowerCase().includes(searchLower) ||
                          (ext.predio || '').toLowerCase().includes(searchLower);
    
    const matchesPredio = filterPredio === 'TODOS' || ext.predio === filterPredio;

    return matchesSearch && matchesPredio;
  }), [extinguishers, searchTerm, filterPredio]);

  const metrics = useMemo(() => {
    const byPredioCount: Record<string, number> = {};
    const byTypeCount: Record<string, number> = {};

    filtered.forEach(ext => {
      const predio = ext.predio || 'Desconhecido';
      byPredioCount[predio] = (byPredioCount[predio] || 0) + 1;

      const tipo = ext.tipo.trim() || 'Indefinido';
      byTypeCount[tipo] = (byTypeCount[tipo] || 0) + 1;
    });

    const predioData = Object.entries(byPredioCount).map(([name, value]) => ({ name, value }));
    
    let typeData = Object.entries(byTypeCount)
      .sort((a, b) => b[1] - a[1])
      .map(([name, value]) => ({ name, value }));
      
    // Group small types into "Outros" if there are many
    if (typeData.length > 6) {
      const topTypes = typeData.slice(0, 5);
      const others = typeData.slice(5).reduce((sum, item) => sum + item.value, 0);
      topTypes.push({ name: 'Outros', value: others });
      typeData = topTypes;
    }

    return { predioData, typeData };
  }, [filtered]);

  const uniquePredios = useMemo(() => {
    const list = Array.from(new Set(extinguishers.map(e => e.predio).filter(Boolean))) as string[];
    return list.sort();
  }, [extinguishers]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-brand-light p-6">
          <h3 className="text-sm font-semibold text-brand-blue mb-4">Extintores por Prédio</h3>
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
          <h3 className="text-sm font-semibold text-brand-blue mb-4">Extintores por Tipo</h3>
          <div className="h-64">
            {metrics.typeData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={metrics.typeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {metrics.typeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
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
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-brand-light overflow-hidden flex flex-col">
        <div className="p-4 border-b border-brand-light flex flex-col sm:flex-row gap-4 justify-between items-center bg-brand-light/50">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-blue" />
              <input
                type="text"
                placeholder="Buscar extintor..."
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
              onClick={() => onExport(filtered)}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
            <button
              onClick={onAdd}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-xl hover:bg-brand-blue transition-colors shadow-sm text-sm font-medium"
            >
              <PlusCircle className="h-4 w-4" />
              Novo Extintor
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
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
              {filtered.map((ext) => (
                <tr key={ext.id} className="hover:bg-brand-light/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-brand-blue">{ext.num_extintor}</div>
                    <div className="text-xs text-brand-blue mt-0.5">{ext.patrim}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-brand-blue">{ext.predio || '-'}</div>
                    <div className="text-xs text-brand-blue mt-0.5">{ext.localizacao}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-brand-blue">{ext.tipo}</div>
                    <div className="text-xs text-brand-blue mt-0.5">{ext.cap}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-brand-blue"><span className="text-xs text-brand-blue">Recarga:</span> {ext.prox_recarga}</div>
                    <div className="text-brand-blue mt-0.5"><span className="text-xs text-brand-blue">Teste:</span> {ext.prox_teste}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      {ext.retiradoParaRecarga && <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-light text-brand-red">Recarga (Retirado)</span>}
                      {ext.coberturaNoLocal && <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-light text-brand-blue">Cobertura Ativa</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${ext.checkLacre ? 'bg-brand-blue' : 'bg-brand-blue'}`} title="Lacre"></span>
                      <span className={`w-2 h-2 rounded-full ${ext.checkPressurizacao ? 'bg-brand-blue' : 'bg-brand-blue'}`} title="Pressurização"></span>
                      <span className={`w-2 h-2 rounded-full ${ext.checkAnel ? 'bg-brand-blue' : 'bg-brand-blue'}`} title="Anel"></span>
                      <span className={`w-2 h-2 rounded-full ${ext.checkPino ? 'bg-brand-blue' : 'bg-brand-blue'}`} title="Pino"></span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => onEdit(ext)}
                        className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => onDelete(ext.id)}
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
                    Nenhum extintor encontrado com os filtros atuais.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-brand-light bg-brand-light flex items-center justify-between text-xs text-brand-blue">
          <div>Total filtrado: <span className="font-semibold text-brand-blue">{filtered.length}</span> extintores</div>
          <div className="flex gap-2">
             <span>Lacre</span>
             <span>Pressurização</span>
             <span>Anel</span>
             <span>Pino</span>
          </div>
        </div>
      </div>
    </div>
  );
}
