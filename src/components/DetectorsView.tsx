import React, { useState, useMemo } from 'react';
import { exportDetectorsToPDF } from '../lib/pdf';
import { exportDetectorsToExcel } from '../lib/exportUtils';
import { Detector } from '../data_detectors';
import { Search, Radio, Download, PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DetectorsViewProps {
  detectors: Detector[];
  onAdd: () => void;
  onEdit: (detector: Detector) => void;
  onDelete: (id: string) => void;
  
}

const COLORS = ['#0f172a', '#1B2042', '#A51D1A', '#757B8B', '#A51D1A', '#8b5cf6', '#1B2042'];

export function DetectorsView({ detectors, onAdd, onEdit, onDelete }: DetectorsViewProps) {
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
              onClick={() => exportDetectorsToPDF(filtered)}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">PDF</span>
            </button>
            <button
              onClick={() => exportDetectorsToExcel(filtered)}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Excel</span>
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

        <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-50/50">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-brand-light text-center">
              <Search className="w-8 h-8 text-brand-blue mb-3 opacity-50" />
              <h3 className="font-semibold text-brand-blue">Nenhum registro</h3>
              <p className="text-sm text-brand-gray mt-1">Nenhum detector encontrado com os filtros atuais.</p>
            </div>
          ) : filtered.map((d) => (
            <div key={d.id} className="bg-white p-4 rounded-xl shadow-sm border border-brand-light flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-brand-blue text-lg">Nº {d.numero}</div>
                  <div className="text-sm text-brand-gray">MAC: {d.endereco_mac}</div>
                </div>
                <span className="px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-700">{d.tipo}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm bg-brand-light/30 p-2 rounded-lg">
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Prédio</span>
                  <span className="font-medium text-brand-blue">{d.predio || 'Geral'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Localização</span>
                  <span className="font-medium text-brand-blue">{d.localizacao}</span>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-brand-light mt-1">
                <button onClick={() => onEdit(d)} className="p-2 text-brand-blue bg-brand-light hover:bg-brand-blue hover:text-white rounded-lg transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => onDelete(d.id)} className="p-2 text-brand-red bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block overflow-x-auto">
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
