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
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-start">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          <Database className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Tabela de Ocorrências e Atendimentos</h3>
          <p className="text-blue-800 mb-4 leading-relaxed">
            Aqui estão detalhados os eventos de forma exata, com local, horário, motivo (Bateria baixa, Fumaça, etc), número de O.S e atendimento final.
            O arquivo Excel gerado manterá a mesma estrutura.
          </p>
        </div>
      </div>

      {/* Tabela de Eventos */}
      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-blue-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-400" />
            <h4 className="font-semibold text-blue-800">Visualização de Dados</h4>
          </div>
          {eventsData.length > 0 && (
            <button 
              onClick={onClearAll}
              className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              Apagar Todos os Eventos
            </button>
          )}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-blue-50 border-b border-blue-100 text-blue-500 text-sm">
                <th className="px-6 py-4 font-medium">Evento / Local</th>
                <th className="px-6 py-4 font-medium">Data / Horário</th>
                <th className="px-6 py-4 font-medium">Motivo (Bateria Baixa / Fumaça / etc)</th>
                <th className="px-6 py-4 font-medium">Nº de O.S</th>
                <th className="px-6 py-4 font-medium">Status O.S</th>
                <th className="px-6 py-4 font-medium max-w-[200px]">Atendimento Final</th>
                <th className="px-6 py-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {eventsData.map((row) => {
                let priorityColor = 'bg-blue-100 text-blue-700';
                if (row.priority === 'Crítica') priorityColor = 'bg-red-100 text-red-800 border border-red-200';
                else if (row.priority === 'Alta') priorityColor = 'bg-red-100 text-red-800';
                else if (row.priority === 'Média') priorityColor = 'bg-red-100 text-red-800';

                return (
                  <tr key={row.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-blue-900">{row.id} / {row.building} / {row.floor}</div>
                      <div className="text-xs text-blue-500">{row.sector}</div>
                      <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold ${priorityColor}`}>
                        {row.priority}
                      </span>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="font-medium text-blue-900">{row.date}</div>
                      <div className="text-sm text-blue-500">{row.time}</div>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="text-blue-900 font-medium">{row.reason}</div>
                      {row.isFalseAlarm && <div className="text-xs text-red-500 mt-1">Alarme Falso</div>}
                    </td>

                    <td className="px-6 py-4 text-blue-700">
                      {row.numeroOS || '-'}
                    </td>

                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.osStatus === 'Aberta e Concluída' ? 'bg-blue-100 text-blue-700' :
                        row.osStatus === 'Aberta e Não Concluída' ? 'bg-red-100 text-red-700' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {row.osStatus || 'Não Aberta'}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-blue-600 max-w-[200px] truncate" title={row.atendimentoFinal}>
                      {row.atendimentoFinal || '-'}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {onEdit && (
                          <button 
                            onClick={() => onEdit(row)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Editar Evento"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                        )}
                        {onDelete && (
                          <button 
                            onClick={() => onDelete(row.id)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
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
                  <td colSpan={7} className="px-6 py-8 text-center text-blue-500">
                    Nenhum evento registrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Histórico de Alterações */}
      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-blue-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History className="h-5 w-5 text-blue-400" />
            <h4 className="font-semibold text-blue-800">Histórico de Alterações (Audit Log)</h4>
          </div>
          {auditLogs.length > 0 && (
            <button 
              onClick={onClearHistory}
              className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              Limpar Histórico
            </button>
          )}
        </div>
        <div className="p-0 max-h-[400px] overflow-y-auto">
          {auditLogs.length === 0 ? (
            <div className="p-6 text-center text-blue-500 text-sm">
              Nenhuma alteração registrada ainda.
            </div>
          ) : (
            <div className="divide-y divide-blue-100">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-4 flex items-start gap-4 hover:bg-blue-50/50 transition-colors">
                  <div className={`p-2 rounded-lg mt-1 ${
                    log.action === 'CREATE' ? 'bg-blue-100 text-blue-600' :
                    log.action === 'UPDATE' ? 'bg-blue-100 text-blue-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-blue-900">{log.action}</span>
                      <span className="text-xs text-blue-500 font-mono bg-blue-100 px-1.5 py-0.5 rounded">{log.eventId}</span>
                    </div>
                    <p className="text-sm text-blue-600">{log.eventDescription}</p>
                    <div className="text-xs text-blue-400 mt-1">
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
