import React, { useState, useMemo } from 'react';
import { exportAmplifiersToPDF } from '../lib/pdf';
import { exportAmplifiersToExcel } from '../lib/exportUtils';
import { Amplifier } from '../data_amplificadores';
import { Search, Radio, Download, PlusCircle, Pencil, Trash2, Activity } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AmplifiersViewProps {
  amplifiers: Amplifier[];
  onAdd: () => void;
  onEdit: (amp: Amplifier) => void;
  onDelete: (id: string) => void;
  
}

const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6'];

export function AmplifiersView({ amplifiers, onAdd, onEdit, onDelete }: AmplifiersViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = useMemo(() => amplifiers.filter(amp => {
    const searchLower = searchTerm.toLowerCase();
    return amp.codigo_mac.toLowerCase().includes(searchLower) ||
           amp.grupo.toLowerCase().includes(searchLower) ||
           amp.localizacao.toLowerCase().includes(searchLower) ||
           amp.status.toLowerCase().includes(searchLower);
  }), [amplifiers, searchTerm]);

  const metrics = useMemo(() => {
    let online = 0;
    let offline = 0;
    let erro = 0;

    filtered.forEach(a => {
      const s = a.status.toLowerCase();
      if (s.includes('online')) online++;
      else if (s.includes('offline')) offline++;
      else erro++;
    });

    const statusData = [
      { name: 'Online', value: online },
      { name: 'Offline', value: offline },
      { name: 'Erro', value: erro }
    ].filter(d => d.value > 0);

    return { statusData, total: filtered.length, online, offline, erro };
  }, [filtered]);

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-brand-light p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-brand-blue">Total Amplificadores</span>
            <div className="p-2 bg-brand-light text-brand-blue rounded-lg"><Radio className="w-5 h-5"/></div>
          </div>
          <h3 className="text-3xl font-bold text-brand-blue">{metrics.total}</h3>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-brand-light p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-brand-blue">Online / Sinc.</span>
            <div className="p-2 bg-brand-light text-brand-blue rounded-lg"><Activity className="w-5 h-5"/></div>
          </div>
          <h3 className="text-3xl font-bold text-brand-blue">{metrics.online}</h3>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-brand-light p-6 md:col-span-2">
          <h3 className="text-sm font-semibold text-brand-blue mb-2">Status da Rede</h3>
          <div className="h-32">
            {metrics.statusData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={metrics.statusData} cx="50%" cy="50%" innerRadius={30} outerRadius={50} paddingAngle={5} dataKey="value">
                    {metrics.statusData.map((entry, index) => {
                      let color = COLORS[0];
                      if(entry.name === 'Offline') color = COLORS[1];
                      if(entry.name === 'Erro') color = COLORS[2];
                      return <Cell key={`cell-${index}`} fill={color} />;
                    })}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend verticalAlign="middle" align="right" layout="vertical" />
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
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-blue" />
            <input
              type="text"
              placeholder="Buscar por MAC, grupo ou local..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none text-sm transition-all shadow-sm"
            />
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => exportAmplifiersToPDF(filtered)}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">PDF</span>
            </button>
            <button
              onClick={() => exportAmplifiersToExcel(filtered)}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Excel</span>
            </button>
            <button onClick={onAdd} className="flex items-center justify-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-xl hover:bg-brand-blue transition-colors shadow-sm text-sm font-medium">
              <PlusCircle className="h-4 w-4" />
              Novo Amplificador
            </button>
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-50/50">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-brand-light text-center">
              <Search className="w-8 h-8 text-brand-blue mb-3 opacity-50" />
              <h3 className="font-semibold text-brand-blue">Nenhum registro</h3>
              <p className="text-sm text-brand-gray mt-1">Nenhum amplificador encontrado com os filtros atuais.</p>
            </div>
          ) : filtered.map((a) => (
            <div key={a.id} className="bg-white p-4 rounded-xl shadow-sm border border-brand-light flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-brand-blue text-lg">{a.codigo_mac}</div>
                  <div className="text-sm text-brand-gray">Sincronização: {a.data_hora}</div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-bold ${a.status === 'Online' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {a.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm bg-brand-light/30 p-2 rounded-lg">
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Grupo</span>
                  <span className="font-medium text-brand-blue">{a.grupo}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Itens Associados</span>
                  <span className="font-medium text-brand-blue">{a.quantidade_itens || '0'} itens</span>
                </div>
              </div>
              
              <div className="flex flex-col text-sm p-2">
                <span className="text-brand-gray text-xs uppercase tracking-wide">Localização</span>
                <span className="font-medium text-brand-blue">{a.localizacao}</span>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-brand-light mt-1">
                <button onClick={() => onEdit(a)} className="p-2 text-brand-blue bg-brand-light hover:bg-brand-blue hover:text-white rounded-lg transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => onDelete(a.id)} className="p-2 text-brand-red bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
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
                <th className="px-6 py-4 font-medium whitespace-nowrap">MAC Address</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Status</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Grupo / Localização</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Qtd. Itens</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Última Sincronização</th>
                <th className="px-6 py-4 font-medium text-right whitespace-nowrap">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-light">
              {filtered.map((amp) => {
                const isOnline = amp.status.toLowerCase().includes('online');
                const isOffline = amp.status.toLowerCase().includes('offline');

                return (
                  <tr key={amp.id} className="hover:bg-brand-light/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-mono font-semibold text-brand-blue">{amp.codigo_mac}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        isOnline ? 'bg-brand-light text-brand-blue' :
                        isOffline ? 'bg-brand-light text-brand-blue' :
                        'bg-brand-light text-brand-red'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-brand-blue' : isOffline ? 'bg-brand-blue' : 'bg-brand-red'}`}></span>
                        {amp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-brand-blue">{amp.grupo}</div>
                      <div className="text-xs text-brand-blue mt-0.5">{amp.localizacao}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-brand-blue bg-brand-light px-3 py-1 rounded-full">
                        {amp.quantidade ?? 1}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-brand-blue">
                      {amp.data_hora}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => onEdit(amp)} className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors" title="Editar">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => onDelete(amp.id)} className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors" title="Excluir">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-brand-blue">
                    Nenhum amplificador encontrado.
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
