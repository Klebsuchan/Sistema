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
      <div className="bg-white rounded-2xl shadow-sm border border-brand-light overflow-hidden">
        <div className="p-6 border-b border-brand-light bg-brand-light flex justify-between items-center">
          <h3 className="text-lg font-bold text-brand-blue flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-brand-blue" />
            Agenda dos Cursos (Integração, Brigada e 1º Socorros)
          </h3>
          <button
            onClick={onAddCurso}
            className="flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-brand-blue transition-colors shadow-sm"
          >
            <PlusCircle className="h-4 w-4" />
            Novo Agendamento
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-brand-blue">
            <thead className="bg-white border-b border-brand-light text-brand-blue font-semibold">
              <tr>
                <th className="px-6 py-4">Qtd</th>
                <th className="px-6 py-4">Integração (Data/Dia)</th>
                <th className="px-6 py-4">Brigada (Data/Dia/Turno)</th>
                <th className="px-6 py-4">1º Socorros (Data/Dia)</th>
                <th className="px-6 py-4">Mês/Turma</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-light">
              {cursoDatas.map((curso) => (
                <tr key={curso.id} className="hover:bg-brand-light/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-brand-blue">{curso.qtd}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-brand-blue">{curso.data_integ}</div>
                    <div className="text-xs text-brand-blue">{curso.dia_integ}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-brand-blue">{curso.data_brigada}</div>
                    <div className="text-xs text-brand-blue">{curso.dia_brigada} • {curso.turno_brigada}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-brand-blue">{curso.data_socorros}</div>
                    <div className="text-xs text-brand-blue">{curso.dia_socorros}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-light text-brand-blue">
                      {curso.data_integ.split('/')[1] || '-'} - {'-'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => onEditCurso(curso)} className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors" title="Editar">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => onDeleteCurso(curso.id)} className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {cursoDatas.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-3 text-brand-blue">
                        <span className="text-xl">🔍</span>
                      </div>
                      <h3 className="text-base font-semibold text-brand-blue mb-1">Nenhum registro encontrado</h3>
                      <p className="text-brand-gray text-sm">Não foram encontrados dados com os filtros atuais.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Faltas */}
      <div className="bg-white rounded-2xl shadow-sm border border-brand-light overflow-hidden">
        <div className="p-6 border-b border-brand-light bg-brand-light flex justify-between items-center">
          <h3 className="text-lg font-bold text-brand-blue flex items-center gap-2">
            <CalendarX className="h-5 w-5 text-brand-blue" />
            Faltas Registradas
          </h3>
          <button
            onClick={onAddFalta}
            className="flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-brand-blue transition-colors shadow-sm"
          >
            <PlusCircle className="h-4 w-4" />
            Registrar Falta
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-brand-blue">
            <thead className="bg-white border-b border-brand-light text-brand-blue font-semibold">
              <tr>
                <th className="px-6 py-4">Qtd / Data</th>
                <th className="px-6 py-4">Colaborador / Crachá</th>
                <th className="px-6 py-4">Setor</th>
                <th className="px-6 py-4">Módulo</th>
                <th className="px-6 py-4">Data Disponibilidade / Obs</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-light">
              {faltas.map((falta) => (
                <tr key={falta.id} className="hover:bg-brand-light/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-mono text-xs text-brand-blue mb-1">#{falta.qtd}</div>
                    <div className="font-semibold text-brand-blue">{falta.data}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-brand-blue">{falta.nome}</div>
                    <div className="text-xs text-brand-blue mt-0.5">{falta.cracha}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-brand-blue">{falta.setor}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-bold ${falta.modulo === '1º Socorros' ? 'bg-brand-light text-brand-red' : 'bg-brand-light text-brand-blue'}`}>
                      {falta.modulo || 'Brigada de incêndio'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-brand-blue">{falta.data_disp}</div>
                    {falta.observacao && <div className="text-xs text-brand-blue mt-0.5 italic">{falta.observacao}</div>}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => onEditFalta(falta)} className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors" title="Editar">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => onDeleteFalta(falta.id)} className="p-1.5 text-brand-blue hover:bg-brand-light rounded-lg transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {faltas.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-3 text-brand-blue">
                        <span className="text-xl">🔍</span>
                      </div>
                      <h3 className="text-base font-semibold text-brand-blue mb-1">Nenhum registro encontrado</h3>
                      <p className="text-brand-gray text-sm">Não foram encontrados dados com os filtros atuais.</p>
                    </div>
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
