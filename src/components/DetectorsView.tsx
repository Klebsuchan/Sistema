import React, { useState, useMemo } from 'react';
import { Detector } from '../data_detectors';
import { Search, Radio, Download, PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DetectorsViewProps {
  detectors: Detector[];
  onAdd: () => void;
  onEdit: (detector: Detector) => void;
  onDelete: (id: string) => void;
  onExport: (detectors: Detector[]) => void;
}

const COLORS = ['#0f172a', '#1B2042', '#A51D1A', '#757B8B', '#A51D1A', '#8b5cf6', '#1B2042'];

export function DetectorsView({ detectors, onAdd, onEdit, onDelete, onExport }: DetectorsViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [tipoFilter, setTipoFilter] = useState('Todos');
  const [filterPredio, setFilterPredio] = useState('TODOS');

  const filtered = useMemo(() => {
    return detectors.filter(det => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        det.numero.toLowerCase().includes(searchLower) ||
        det.endereco_mac.toLowerCase().includes(searchLower) ||
        det.localizacao.toLowerCase().includes(searchLower);
      
      const matchesTipo = tipoFilter === 'Todos' || det.tipo === tipoFilter;
      const matchesPredio = filterPredio === 'TODOS' || det.predio === filterPredio;
      
      return matchesSearch && matchesTipo && matchesPredio;
    });
  }, [detectors, searchTerm, tipoFilter]);

  const uniquePredios = useMemo(() => {
    const list = Array.from(new Set(detectors.map(e => e.predio).filter(Boolean))) as string[];
    return list.sort();
  }, [detectors]);

  const uniqueTipos = useMemo(() => {
    const tipos = new Set(detectors.map(e => e.tipo).filter(Boolean));
    return ['Todos', ...Array.from(tipos).sort()];
  }, [detectors]);

  // Status para gráficos based on Tipo and Predio
  const statsByTipo = useMemo(() => {
    const counts = filtered.reduce((acc, det) => {
      const t = det.tipo || 'N/A';
      acc[t] = (acc[t] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [filtered]);

  const statsByPredio = useMemo(() => {
    const counts = detectors.reduce((acc, det) => {
      const t = det.predio || 'Geral';
      acc[t] = (acc[t] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [detectors]);

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-brand-light shadow-sm">
          <h3 className="text-sm font-semibold text-brand-blue mb-4">Itens por Prédio (Total)</h3>
          <div className="h-64">
            {statsByPredio.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={statsByPredio} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                    {statsByPredio.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip wrapperClassName="text-sm bg-white border border-brand-light shadow-sm rounded-lg" />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-brand-blue text-sm">Nenhum dado</div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-brand-light shadow-sm">
          <h3 className="text-sm font-semibold text-brand-blue mb-4">Itens por Tipo (Filtro Atual)</h3>
          <div className="h-64">
            {statsByTipo.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={statsByTipo} cx="50%" cy="50%" outerRadius={80} paddingAngle={2} dataKey="value">
                    {statsByTipo.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip wrapperClassName="text-sm bg-white border border-brand-light shadow-sm rounded-lg" />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-brand-blue text-sm">Nenhum dado</div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-brand-light overflow-hidden">
        <div className="p-4 border-b border-brand-light bg-brand-light/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 text-brand-blue">
            <Radio className="w-5 h-5 text-brand-blue" />
            <h4 className="font-semibold text-brand-blue">Detectores e Acionadores</h4>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <select
              className="px-3 py-2 border border-brand-light rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
              value={tipoFilter}
              onChange={(e) => setTipoFilter(e.target.value)}
            >
              {uniqueTipos.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            
            <div className="relative flex-grow sm:max-w-xs">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -tranneutral-y-1/2 text-brand-blue" />
              <input
                type="text"
                placeholder="Buscar por nº, mac ou local..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-brand-light rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            
            <button
              onClick={() => onExport(filtered)}
              className="flex items-center gap-2 px-3 py-2 bg-brand-blue text-white rounded-md hover:bg-brand-blue transition-colors text-sm font-medium whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              Exportar PDF
            </button>
            <button
              onClick={onAdd}
              className="flex items-center gap-2 px-3 py-2 bg-brand-red text-white rounded-md hover:opacity-90 transition-colors text-sm font-medium whitespace-nowrap"
            >
              <PlusCircle className="w-4 h-4" />
              Novo
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-light text-brand-blue uppercase text-xs tracking-wider border-b border-brand-light">
              <tr>
                <th className="px-6 py-4 font-semibold">Prédio</th>
                <th className="px-6 py-4 font-semibold">Número</th>
                <th className="px-6 py-4 font-semibold">Endereço MAC</th>
                <th className="px-6 py-4 font-semibold">Tipo</th>
                <th className="px-6 py-4 font-semibold">Localização</th>
                <th className="px-6 py-4 font-semibold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-light">
              {filtered.map(det => (
                <tr key={det.id} className="hover:bg-brand-light/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-brand-blue font-medium">{det.predio}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-blue">{det.numero}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-blue font-mono tracking-tight">{det.endereco_mac}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-light text-brand-blue">
                      {det.tipo}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-brand-blue max-w-sm truncate">{det.localizacao}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => onEdit(det)} className="p-1.5 text-brand-blue hover:text-brand-blue hover:bg-brand-light rounded transition-colors" title="Editar">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => onDelete(det.id)} className="p-1.5 text-brand-red hover:text-brand-red hover:bg-brand-light rounded transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-brand-blue">
                    Nenhum item encontrado com a busca.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 border-t border-brand-light bg-brand-light text-xs text-brand-blue text-right">
          Mostrando {filtered.length} de {detectors.length} itens
        </div>
      </div>
    </div>
  );
}
