import React from 'react';
import { EventData, AuditLog } from '../data';
import { FileText, Database, Edit, Trash2, History, Clock } from 'lucide-react';

interface DataViewProps {
  eventsData: EventData[];
  onEdit?: (event: EventData) => void;
  onDelete?: (id: string) => void;
  onClearAll?: () => void;
  onClearHistory?: () => void;
  auditLogs?: AuditLog[];
}

export function DataView({ eventsData, onEdit, onDelete, onClearAll, onClearHistory, auditLogs = [] }: DataViewProps) {
  return (
    <div className="space-y-8">
      
      {/* Seção Instruções Source Code */}
      <div className="bg-brand-light border border-brand-light p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-start">
        <div className="p-3 bg-brand-light text-brand-blue rounded-xl">
          <Database className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-blue mb-2">Tabela de Ocorrências e Atendimentos</h3>
          <p className="text-brand-blue mb-4 leading-relaxed">
            Aqui estão detalhados os eventos de forma exata, com local, horário, motivo (Bateria baixa, Fumaça, etc), número de O.S e atendimento final.
            O arquivo Excel gerado manterá a mesma estrutura.
          </p>
        </div>
      </div>

      {/* Tabela de Eventos */}
      <div className="bg-white rounded-2xl shadow-sm border border-brand-light overflow-hidden">
        <div className="px-6 py-5 border-b border-brand-light flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-brand-blue" />
            <h4 className="font-semibold text-brand-blue">Visualização de Dados</h4>
          </div>
          {eventsData.length > 0 && (
            <button 
              onClick={onClearAll}
              className="px-3 py-1.5 text-sm font-medium text-brand-blue bg-brand-light hover:bg-brand-light rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              Apagar Todos os Eventos
            </button>
          )}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-brand-light border-b border-brand-light text-brand-blue text-sm">
                <th className="px-6 py-4 font-medium">Evento / Local</th>
                <th className="px-6 py-4 font-medium">Data / Horário</th>
                <th className="px-6 py-4 font-medium">Motivo (Bateria Baixa / Fumaça / etc)</th>
                <th className="px-6 py-4 font-medium">Nº de O.S</th>
                <th className="px-6 py-4 font-medium">Status O.S</th>
                <th className="px-6 py-4 font-medium max-w-[200px]">Atendimento Final</th>
                <th className="px-6 py-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-light">
              {eventsData.map((row) => {
                let priorityColor = 'bg-brand-light text-brand-blue';
                if (row.priority === 'Crítica') priorityColor = 'bg-brand-light text-brand-red border border-brand-light';
                else if (row.priority === 'Alta') priorityColor = 'bg-brand-light text-brand-red';
                else if (row.priority === 'Média') priorityColor = 'bg-brand-light text-brand-red';

                return (
                  <tr key={row.id} className="hover:bg-brand-light/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-brand-blue">{row.id} / {row.building} / {row.floor}</div>
                      <div className="text-xs text-brand-blue">{row.sector}</div>
                      <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold ${priorityColor}`}>
                        {row.priority}
                      </span>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="font-medium text-brand-blue">{row.date}</div>
                      <div className="text-sm text-brand-blue">{row.time}</div>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="text-brand-blue font-medium">{row.reason}</div>
                      {row.isFalseAlarm && <div className="text-xs text-brand-red mt-1">Alarme Falso</div>}
                    </td>

                    <td className="px-6 py-4 text-brand-blue">
                      {row.numeroOS || '-'}
                    </td>

                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.osStatus === 'Aberta e Concluída' ? 'bg-brand-light text-brand-blue' :
                        row.osStatus === 'Aberta e Não Concluída' ? 'bg-brand-light text-brand-red' :
                        'bg-brand-light text-brand-blue'
                      }`}>
                        {row.osStatus || 'Não Aberta'}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-brand-blue max-w-[200px] truncate" title={row.atendimentoFinal}>
                      {row.atendimentoFinal || '-'}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {onEdit && (
                          <button 
                            onClick={() => onEdit(row)}
                            className="p-2 text-brand-blue hover:bg-brand-light rounded-lg transition-colors"
                            title="Editar Evento"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                        )}
                        {onDelete && (
                          <button 
                            onClick={() => onDelete(row.id)}
                            className="p-2 text-brand-blue hover:bg-brand-light rounded-lg transition-colors"
                            title="Excluir Evento"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {eventsData.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-brand-blue">
                    Nenhum evento registrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Histórico de Alterações */}
      <div className="bg-white rounded-2xl shadow-sm border border-brand-light overflow-hidden">
        <div className="px-6 py-5 border-b border-brand-light flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History className="h-5 w-5 text-brand-blue" />
            <h4 className="font-semibold text-brand-blue">Histórico de Alterações (Audit Log)</h4>
          </div>
          {auditLogs.length > 0 && (
            <button 
              onClick={onClearHistory}
              className="px-3 py-1.5 text-sm font-medium text-brand-blue bg-brand-light hover:bg-brand-light rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              Limpar Histórico
            </button>
          )}
        </div>
        <div className="p-0 max-h-[400px] overflow-y-auto">
          {auditLogs.length === 0 ? (
            <div className="p-6 text-center text-brand-blue text-sm">
              Nenhuma alteração registrada ainda.
            </div>
          ) : (
            <div className="divide-y divide-brand-light">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-4 flex items-start gap-4 hover:bg-brand-light/50 transition-colors">
                  <div className={`p-2 rounded-lg mt-1 ${
                    log.action === 'CREATE' ? 'bg-brand-light text-brand-blue' :
                    log.action === 'UPDATE' ? 'bg-brand-light text-brand-blue' :
                    'bg-brand-light text-brand-blue'
                  }`}>
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-brand-blue">{log.action}</span>
                      <span className="text-xs text-brand-blue font-mono bg-brand-light px-1.5 py-0.5 rounded">{log.eventId}</span>
                    </div>
                    <p className="text-sm text-brand-blue">{log.eventDescription}</p>
                    <div className="text-xs text-brand-blue mt-1">
                      {new Date(log.timestamp).toLocaleString()} • Por: {log.user}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
