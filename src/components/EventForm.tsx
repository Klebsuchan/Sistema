import React, { useState } from 'react';
import { EventData } from '../data';
import { AlertCircle, Calendar, Clock, MapPin, Building, ShieldCheck, HelpCircle, Activity, FileText } from 'lucide-react';

interface EventFormProps {
  onSave: (event: EventData) => void;
  initialData?: EventData;
  onCancel?: () => void;
}

export function EventForm({ onSave, initialData, onCancel }: EventFormProps) {
  // Converte data pt-BR para yyyy-mm-dd apenas para popular o input=date
  const parseInitialDate = (dt: string) => {
    if (!dt) return '';
    const parts = dt.split('/');
    if (parts.length === 3) return `${parts[2]}-${parts[1]}-${parts[0]}`;
    return dt;
  };

  const [date, setDate] = useState(initialData ? parseInitialDate(initialData.date) : '');
  const [time, setTime] = useState(initialData?.time || '');
  const [building, setBuilding] = useState(initialData?.building || '');
  const [floor, setFloor] = useState(initialData?.floor || '');
  const [sector, setSector] = useState(initialData?.sector || '');
  const [reason, setReason] = useState(initialData?.reason || '');
  const [priority, setPriority] = useState<'Baixa' | 'Média' | 'Alta' | 'Crítica'>(initialData?.priority || 'Baixa');
  const [isFalseAlarm, setIsFalseAlarm] = useState(initialData?.isFalseAlarm || false);
  const [attended, setAttended] = useState(initialData?.attended || false);
  
  // Novos campos O.S e Atendimento
  const [osStatus, setOsStatus] = useState<'Aberta e Concluída' | 'Aberta e Não Concluída' | 'Não Aberta'>(initialData?.osStatus || 'Não Aberta');
  const [numeroOS, setNumeroOS] = useState(initialData?.numeroOS || '');
  const [atendimentoFinal, setAtendimentoFinal] = useState(initialData?.atendimentoFinal || '');

  // Campos extras
  const [ht7, setHt7] = useState(initialData?.ht7 || '');
  const [ht9, setHt9] = useState(initialData?.ht9 || '');
  const [supervisao, setSupervisao] = useState(initialData?.supervisao || '');
  const [protocolo, setProtocolo] = useState(initialData?.protocolo || '');
  const [decisao, setDecisao] = useState(initialData?.decisao || '');
  const [atividade, setAtividade] = useState(initialData?.atividade || '');
  const [resultado, setResultado] = useState(initialData?.resultado || '');

  const BUILDINGS = ['CD', 'RAD', 'PA', 'CDR', 'CES'];
  const REASONS = ['Bateria Baixa', 'Equipamento Removido', 'Fumaça', 'Teste'];
  const OS_STATUSES = ['Aberta e Concluída', 'Aberta e Não Concluída', 'Não Aberta'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Converte de volta yyyy-mm-dd para dd/mm/yyyy
    const parts = date.split('-');
    const formattedDate = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : date;

    const newEvent: EventData = {
      id: initialData?.id || `EV-N${Math.floor(Math.random() * 1000)}`,
      date: formattedDate,
      time,
      building,
      floor,
      sector,
      reason,
      isFalseAlarm,
      attended,
      priority,
      osStatus,
      numeroOS,
      atendimentoFinal,
      ht7, ht9, supervisao, protocolo, decisao, atividade, resultado
    };
    onSave(newEvent);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-light max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-8 border-b border-brand-light pb-4">
        <Activity className="h-6 w-6 text-brand-blue" />
        <h2 className="text-xl font-bold text-brand-blue">
          {initialData ? 'Editar Evento Crítico' : 'Registrar Novo Evento'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Date / Time */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-blue flex items-center gap-2">
            <Calendar className="h-4 w-4 text-brand-blue" /> Data
          </label>
          <input required type="date" value={date} onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-blue flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand-blue" /> Hora
          </label>
          <input required type="time" value={time} onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-blue flex items-center gap-2">
            <Building className="h-4 w-4 text-brand-blue" /> Prédio
          </label>
          <select required value={building} onChange={(e) => setBuilding(e.target.value)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
          >
            <option value="" disabled>Selecione um prédio...</option>
            {BUILDINGS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-blue flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-blue" /> Andar
          </label>
          <input required type="text" placeholder="Ex: 3º Andar" value={floor} onChange={(e) => setFloor(e.target.value)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-blue">Setor</label>
          <input required type="text" placeholder="Ex: Oncologia" value={sector} onChange={(e) => setSector(e.target.value)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
          />
        </div>

        {/* Details */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-blue flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-brand-blue" /> Motivo
          </label>
          <select required value={reason} onChange={(e) => setReason(e.target.value)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
          >
            <option value="" disabled>Selecione um motivo...</option>
            {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-blue">Prioridade</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value as any)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
          >
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
            <option value="Crítica">Crítica</option>
          </select>
        </div>

        {/* O.S Info */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-blue flex items-center gap-2">
            <FileText className="h-4 w-4 text-brand-blue" /> Status O.S
          </label>
          <select value={osStatus} onChange={(e) => setOsStatus(e.target.value as any)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
          >
            {OS_STATUSES.map(os => <option key={os} value={os}>{os}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-blue">Nº de O.S</label>
          <input type="text" placeholder="Ex: OS-12345" value={numeroOS} onChange={(e) => setNumeroOS(e.target.value)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-brand-blue">Atendimento Final</label>
          <textarea placeholder="Descrição do atendimento e resolução..." rows={3} value={atendimentoFinal} onChange={(e) => setAtendimentoFinal(e.target.value)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none resize-none"
          />
        </div>

        {/* Toggles */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4 mt-2">
          <label className="flex items-center gap-3 p-4 border border-brand-light rounded-xl cursor-pointer hover:bg-brand-light transition-colors">
            <input type="checkbox" checked={isFalseAlarm} onChange={(e) => setIsFalseAlarm(e.target.checked)}
              className="w-5 h-5 rounded border-brand-light text-brand-blue focus:ring-brand-blue"
            />
            <span className="font-medium text-brand-blue flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-brand-blue" />
              Alarme Falso
            </span>
          </label>

          <label className="flex items-center gap-3 p-4 border border-brand-light rounded-xl cursor-pointer hover:bg-brand-light transition-colors">
            <input type="checkbox" checked={attended} onChange={(e) => setAttended(e.target.checked)}
              className="w-5 h-5 rounded border-brand-light text-brand-blue focus:ring-brand-blue"
            />
            <span className="font-medium text-brand-blue flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-blue" />
              Atendido / Verificado
            </span>
          </label>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-brand-light">
        {onCancel && (
          <button type="button" onClick={onCancel}
            className="px-6 py-2.5 text-sm font-semibold text-brand-blue hover:text-brand-blue bg-brand-light hover:bg-brand-light rounded-xl transition-colors"
          >
            Cancelar
          </button>
        )}
        <button type="submit"
          className="px-6 py-2.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue rounded-xl shadow-sm transition-colors"
        >
          {initialData ? 'Atualizar Evento' : 'Salvar Evento'}
        </button>
      </div>
    </form>
  );
}
