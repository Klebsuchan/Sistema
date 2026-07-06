import React, { useMemo, useState } from 'react';
import { EventData } from '../data';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { AlertTriangle, CheckCircle, Flame, Building, Calendar as CalendarIcon, FilterX, Activity, AlertCircle } from 'lucide-react';

interface DashboardProps {
  eventsData: EventData[];
}

const parseEventDate = (dateStr: string) => {
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
  }
  return new Date();
};

export function Dashboard({ eventsData }: DashboardProps) {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  // Filter data based on date range
  const filteredEvents = useMemo(() => {
    return eventsData.filter(event => {
      let passStart = true;
      let passEnd = true;
      const eventDate = parseEventDate(event.date);
      eventDate.setHours(0,0,0,0);

      if (startDate) {
        const start = new Date(startDate);
        start.setHours(0,0,0,0);
        const startLocal = new Date(start.getTime() + start.getTimezoneOffset() * 60000);
        passStart = eventDate >= startLocal;
      }

      if (endDate) {
        const end = new Date(endDate);
        end.setHours(0,0,0,0);
        const endLocal = new Date(end.getTime() + end.getTimezoneOffset() * 60000);
        passEnd = eventDate <= endLocal;
      }

      return passStart && passEnd;
    });
  }, [eventsData, startDate, endDate]);
  
  // Calculate KPIs
  const totalEvents = filteredEvents.length;
  
  // Taxa de alarmes - Bateria Baixa vs Fumaça
  const bateriaBaixaEvents = filteredEvents.filter(e => e.reason === 'Bateria Baixa').length;
  const fumacaEvents = filteredEvents.filter(e => e.reason === 'Fumaça').length;
  const testEvents = filteredEvents.filter(e => e.reason === 'Teste').length;
  const equipamentoRemovidoEvents = filteredEvents.filter(e => e.reason === 'Equipamento Removido').length;

  const bateriaBaixaRate = totalEvents > 0 ? (bateriaBaixaEvents / totalEvents) * 100 : 0;
  const fumacaRate = totalEvents > 0 ? (fumacaEvents / totalEvents) * 100 : 0;

  // Taxa de atendimento (O.S Status)
  const osConcluida = filteredEvents.filter(e => e.osStatus === 'Aberta e Concluída').length;
  const osNaoConcluida = filteredEvents.filter(e => e.osStatus === 'Aberta e Não Concluída').length;
  const osNaoAberta = filteredEvents.filter(e => e.osStatus === 'Não Aberta' || !e.osStatus).length;

  const osConcluidaRate = totalEvents > 0 ? (osConcluida / totalEvents) * 100 : 0;

  // Process data for charts
  const { reasonData, buildingData, priorityData, osData, criticalEvents } = useMemo(() => {
    const reasonsMap: Record<string, number> = {};
    const buildingsMap: Record<string, number> = {};
    const prioritiesMap: Record<string, number> = {};
    const osMap: Record<string, number> = {
      'Aberta e Concluída': 0,
      'Aberta e Não Concluída': 0,
      'Não Aberta': 0
    };

    const criticalList: EventData[] = [];

    filteredEvents.forEach(event => {
      // Reason
      const r = event.reason || 'Outros';
      reasonsMap[r] = (reasonsMap[r] || 0) + 1;
      
      // Building
      const b = event.building || 'Desconhecido';
      buildingsMap[b] = (buildingsMap[b] || 0) + 1;
      
      // Priority
      const priority = event.priority || 'Baixa';
      prioritiesMap[priority] = (prioritiesMap[priority] || 0) + 1;

      // Critical Events
      if (priority === 'Crítica') {
        criticalList.push(event);
      }

      // OS Status
      const os = event.osStatus || 'Não Aberta';
      if(osMap[os] !== undefined) {
        osMap[os]++;
      }
    });

    const parsedReasonData = Object.keys(reasonsMap)
      .map(key => ({ name: key, Quantidade: reasonsMap[key] }))
      .sort((a, b) => b.Quantidade - a.Quantidade);

    const parsedBuildingData = Object.keys(buildingsMap)
      .map(key => ({ name: key, value: buildingsMap[key] }));

    const parsedPriorityData = Object.keys(prioritiesMap)
      .map(key => ({ name: key, value: prioritiesMap[key] }));

    const parsedOsData = Object.keys(osMap)
      .map(key => ({ name: key, value: osMap[key] }));

    return { 
      reasonData: parsedReasonData, 
      buildingData: parsedBuildingData, 
      priorityData: parsedPriorityData,
      osData: parsedOsData,
      criticalEvents: criticalList
    };
  }, [filteredEvents]);

  const COLORS = ['#0F172A', '#1B2042', '#A51D1A', '#757B8B', '#A51D1A', '#1B2042'];
  const OS_COLORS = ['#A51D1A', '#757B8B', '#F4E9E9'];

  const clearFilters = () => {
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="space-y-6">

      {/* Filtros de Data */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-brand-blue">
          <div className="p-2 bg-blue-100 rounded-lg">
            <CalendarIcon className="h-5 w-5 text-blue-600" />
          </div>
          <span className="font-medium text-sm">Filtro de Período (Dia, Mês, Ano)</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label className="text-xs font-medium text-blue-500 uppercase tracking-wider">Início</label>
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-3 py-1.5 bg-brand-light border border-blue-200 rounded-lg text-sm text-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label className="text-xs font-medium text-blue-500 uppercase tracking-wider">Fim</label>
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="px-3 py-1.5 bg-brand-light border border-blue-200 rounded-lg text-sm text-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
          </div>
          
          {(startDate || endDate) && (
            <button 
              onClick={clearFilters}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-600 bg-brand-light rounded-lg hover:bg-blue-100 transition-colors w-full sm:w-auto justify-center"
            >
              <FilterX className="h-4 w-4" />
              Limpar
            </button>
          )}
        </div>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-blue-500">Total de Eventos</span>
            <div className="p-2 bg-brand-light rounded-lg text-blue-600">
              <Activity className="h-5 w-5" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-brand-blue">{totalEvents}</h3>
            <p className="text-sm text-blue-600 font-medium mt-1">Registros no sistema</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-blue-500">Taxa Fumaça vs Bateria</span>
            <div className={`p-2 rounded-lg bg-red-50 text-brand-red`}>
              <Flame className="h-5 w-5" />
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            <div className="flex justify-between items-center text-sm">
              <span className="text-blue-500">Fumaça</span>
              <span className="font-semibold text-brand-blue">{fumacaRate.toFixed(1)}% ({fumacaEvents})</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-blue-500">Bateria Baixa</span>
              <span className="font-semibold text-brand-blue">{bateriaBaixaRate.toFixed(1)}% ({bateriaBaixaEvents})</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-blue-500">Status O.S (Atendimento)</span>
            <div className={`p-2 rounded-lg bg-brand-light text-blue-600`}>
              <CheckCircle className="h-5 w-5" />
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-blue-600 font-medium">Concluída</span>
              <span className="font-semibold">{osConcluida}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-brand-red font-medium">Não Concluída</span>
              <span className="font-semibold">{osNaoConcluida}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-blue-400 font-medium">Não Aberta</span>
              <span className="font-semibold">{osNaoAberta}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-blue-500">Prédios Afetados</span>
            <div className="p-2 bg-brand-light rounded-lg text-blue-600">
              <Building className="h-5 w-5" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-brand-blue">{buildingData.length}</h3>
            <p className="text-sm text-blue-600 font-medium mt-1">Mapeamento Individual</p>
          </div>
        </div>
      </div>

      {/* Alertas Críticos Segregados */}
      {criticalEvents.length > 0 && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-200 bg-red-50/30">
          <div className="flex items-center gap-3 mb-4 text-brand-red">
            <AlertCircle className="h-6 w-6" />
            <h4 className="text-lg font-bold">Atenção: Eventos Críticos Detalhados ({criticalEvents.length})</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {criticalEvents.map((evt, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-red-100 shadow-sm flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded">{evt.id}</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-red-100 text-brand-red uppercase tracking-wider">
                    {evt.priority}
                  </span>
                </div>
                <h5 className="font-bold text-brand-blue">{evt.reason}</h5>
                <p className="text-sm text-blue-600 mt-1">{evt.building} - {evt.floor} - {evt.sector}</p>
                <div className="mt-3 pt-3 border-t border-blue-100 flex justify-between text-xs text-blue-500">
                  <span>{evt.date} às {evt.time}</span>
                  <span className={evt.osStatus === 'Aberta e Concluída' ? 'text-blue-600' : 'text-brand-red'}>
                    OS: {evt.osStatus || 'Não Aberta'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Gráfico O.S */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
          <h4 className="text-base font-semibold text-brand-blue mb-6">Taxa de Atendimento (O.S)</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={osData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {osData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={OS_COLORS[index % OS_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico Distribuição Prédio */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
          <h4 className="text-base font-semibold text-brand-blue mb-6">Mapeamento Individual por Prédio</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={buildingData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                <Tooltip
                  cursor={{ fill: '#F3F4F6' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" fill="#1B2042" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Motivos */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
          <h4 className="text-base font-semibold text-brand-blue mb-6">Eventos por Motivo</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reasonData} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} width={100} />
                <Tooltip
                  cursor={{ fill: '#F3F4F6' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="Quantidade" fill="#A51D1A" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Prioridades Segregadas */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
          <h4 className="text-base font-semibold text-brand-blue mb-6">Eventos por Prioridade (Segregados)</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={priorityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {priorityData.map((entry, index) => {
                    let color = '#1B2042';
                    if(entry.name === 'Crítica') color = '#A51D1A';
                    else if(entry.name === 'Alta') color = '#757B8B';
                    else if(entry.name === 'Média') color = '#757B8B';
                    else if(entry.name === 'Baixa') color = '#1B2042';
                    return <Cell key={`cell-${index}`} fill={color} />;
                  })}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
