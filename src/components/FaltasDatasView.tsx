import React from 'react';
import { FaltaItem } from '../data_faltas';
import { CursoData } from '../data_curso_datas';
import { CalendarX, CalendarClock, PlusCircle, Edit2, Trash2 } from 'lucide-react';

interface FaltasDatasViewProps {
  faltas: FaltaItem[];
  cursoDatas: CursoData[];
  onAddFalta: () => void;
  onEditFalta: (falta: FaltaItem) => void;
  onDeleteFalta: (id: string) => void;
  onAddCurso: () => void;
  onEditCurso: (curso: CursoData) => void;
  onDeleteCurso: (id: string) => void;
}

export function FaltasDatasView({ faltas, cursoDatas, onAddFalta, onEditFalta, onDeleteFalta, onAddCurso, onEditCurso, onDeleteCurso }: FaltasDatasViewProps) {
  return (
    <div className="space-y-8">
      
      {/* Cursos */}
      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
        <div className="p-6 border-b border-blue-100 bg-blue-50 flex justify-between items-center">
          <h3 className="text-lg font-bold text-blue-800 flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-blue-600" />
            Agenda dos Cursos (Integração, Brigada e 1º Socorros)
          </h3>
          <button
            onClick={onAddCurso}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            <PlusCircle className="h-4 w-4" />
            Novo Agendamento
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-blue-600">
            <thead className="bg-white border-b border-blue-100 text-blue-700 font-semibold">
              <tr>
                <th className="px-6 py-4">Qtd</th>
                <th className="px-6 py-4">Integração (Data/Dia)</th>
                <th className="px-6 py-4">Brigada (Data/Dia/Turno)</th>
                <th className="px-6 py-4">1º Socorros (Data/Dia)</th>
                <th className="px-6 py-4">Mês/Turma</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {cursoDatas.map((curso) => (
                <tr key={curso.id} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-blue-900">{curso.qtd}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-blue-800">{curso.data_integ}</div>
                    <div className="text-xs text-blue-500">{curso.dia_integ}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-blue-800">{curso.data_brigada}</div>
                    <div className="text-xs text-blue-500">{curso.dia_brigada} • {curso.turno_brigada}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-blue-800">{curso.data_socorros}</div>
                    <div className="text-xs text-blue-500">{curso.dia_socorros}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                      {curso.data_integ.split('/')[1] || '-'} - {'-'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => onEditCurso(curso)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => onDeleteCurso(curso.id)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {cursoDatas.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-blue-500">Nenhum agendamento encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Faltas */}
      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
        <div className="p-6 border-b border-blue-100 bg-blue-50 flex justify-between items-center">
          <h3 className="text-lg font-bold text-blue-800 flex items-center gap-2">
            <CalendarX className="h-5 w-5 text-blue-600" />
            Faltas Registradas
          </h3>
          <button
            onClick={onAddFalta}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            <PlusCircle className="h-4 w-4" />
            Registrar Falta
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-blue-600">
            <thead className="bg-white border-b border-blue-100 text-blue-700 font-semibold">
              <tr>
                <th className="px-6 py-4">Qtd / Data</th>
                <th className="px-6 py-4">Colaborador / Crachá</th>
                <th className="px-6 py-4">Setor</th>
                <th className="px-6 py-4">Módulo</th>
                <th className="px-6 py-4">Data Disponibilidade / Obs</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {faltas.map((falta) => (
                <tr key={falta.id} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-mono text-xs text-blue-500 mb-1">#{falta.qtd}</div>
                    <div className="font-semibold text-blue-900">{falta.data}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-blue-800">{falta.nome}</div>
                    <div className="text-xs text-blue-500 mt-0.5">{falta.cracha}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-blue-700">{falta.setor}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-bold ${falta.modulo === '1º Socorros' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                      {falta.modulo || 'Brigada de incêndio'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-blue-800">{falta.data_disp}</div>
                    {falta.observacao && <div className="text-xs text-blue-500 mt-0.5 italic">{falta.observacao}</div>}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => onEditFalta(falta)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => onDeleteFalta(falta.id)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {faltas.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-blue-500">Nenhuma falta registrada.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
