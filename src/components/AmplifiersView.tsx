import React, { useState, useMemo } from 'react';
import { Amplifier } from '../data_amplificadores';
import { Search, Radio, Download, PlusCircle, Pencil, Trash2, Activity } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AmplifiersViewProps {
  amplifiers: Amplifier[];
  onAdd: () => void;
  onEdit: (amp: Amplifier) => void;
  onDelete: (id: string) => void;
  onExport: (amps: Amplifier[]) => void;
}

const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6'];

export function AmplifiersView({ amplifiers, onAdd, onEdit, onDelete, onExport }: AmplifiersViewProps) {
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
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-blue-500">Total Amplificadores</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Radio className="w-5 h-5"/></div>
          </div>
          <h3 className="text-3xl font-bold text-blue-900">{metrics.total}</h3>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-blue-500">Online / Sinc.</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Activity className="w-5 h-5"/></div>
          </div>
          <h3 className="text-3xl font-bold text-blue-600">{metrics.online}</h3>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 md:col-span-2">
          <h3 className="text-sm font-semibold text-blue-800 mb-2">Status da Rede</h3>
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
              <div className="h-full flex items-center justify-center text-blue-400 text-sm">Sem dados</div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-blue-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-blue-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400" />
            <input
              type="text"
              placeholder="Buscar por MAC, grupo ou local..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm transition-all shadow-sm"
            />
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button onClick={() => onExport(filtered)} className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors shadow-sm text-sm font-medium">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
            <button onClick={onAdd} className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm text-sm font-medium">
              <PlusCircle className="h-4 w-4" />
              Novo Amplificador
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-blue-50 border-b border-blue-100 text-blue-500">
                <th className="px-6 py-4 font-medium whitespace-nowrap">MAC Address</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Status</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Grupo / Localização</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Qtd. Itens</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Última Sincronização</th>
                <th className="px-6 py-4 font-medium text-right whitespace-nowrap">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {filtered.map((amp) => {
                const isOnline = amp.status.toLowerCase().includes('online');
                const isOffline = amp.status.toLowerCase().includes('offline');

                return (
                  <tr key={amp.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-mono font-semibold text-blue-900">{amp.codigo_mac}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        isOnline ? 'bg-blue-100 text-blue-700' :
                        isOffline ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-blue-500' : isOffline ? 'bg-blue-500' : 'bg-red-500'}`}></span>
                        {amp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-blue-800">{amp.grupo}</div>
                      <div className="text-xs text-blue-500 mt-0.5">{amp.localizacao}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                        {amp.quantidade ?? 1}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-blue-600">
                      {amp.data_hora}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => onEdit(amp)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => onDelete(amp.id)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Excluir">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-blue-500">
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
