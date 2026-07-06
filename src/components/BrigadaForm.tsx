import React, { useState, useEffect } from 'react';
import { BrigadaItem } from '../data_brigada';
import { Save, X, User } from 'lucide-react';

interface BrigadaFormProps {
  initialData?: BrigadaItem | null;
  onSave: (item: BrigadaItem) => void;
  onCancel: () => void;
}

export function BrigadaForm({ initialData, onSave, onCancel }: BrigadaFormProps) {
  const [formData, setFormData] = useState<Partial<BrigadaItem>>({
    qtd: 0,
    nome: '',
    setor: '',
    cargo: '',
    situacao: 'INSCRITO',
    status_prova: '',
    status_modulo: '',
    aproveitamento: '',
    frequencia: '',
    observacao: '',
    modulesConcluded: false,
    frequenciaPresencial: 0,
    frequenciaOnline: 0,
    status: 'ativo',
    notaTeorica: 0,
    notaSistema: 0
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        modulesConcluded: initialData.modulesConcluded ?? false,
        frequenciaPresencial: initialData.frequenciaPresencial ?? 0,
        frequenciaOnline: initialData.frequenciaOnline ?? 0,
        status: initialData.status || 'ativo',
        notaTeorica: initialData.notaTeorica ?? 0,
        notaSistema: initialData.notaSistema ?? 0
      });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData as BrigadaItem);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-light max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6 border-b border-brand-light pb-4">
        <h3 className="text-xl font-bold text-brand-blue flex items-center gap-2">
          <User className="h-5 w-5 text-brand-blue" />
          {initialData ? 'Editar Brigadista' : 'Novo Brigadista'}
        </h3>
        <button onClick={onCancel} className="text-brand-blue hover:text-brand-blue transition-colors">
          <X className="h-6 w-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2 lg:col-span-2">
            <label className="text-sm font-semibold text-brand-blue">Nome</label>
            <input required type="text" value={formData.nome} onChange={e => setFormData({ ...formData, nome: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Status Geral</label>
            <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value as any })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none">
              <option value="ativo">Ativo</option>
              <option value="desligado">Desligado</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Setor</label>
            <input required type="text" value={formData.setor} onChange={e => setFormData({ ...formData, setor: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Cargo</label>
            <input required type="text" value={formData.cargo} onChange={e => setFormData({ ...formData, cargo: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Situação Curso</label>
            <input type="text" value={formData.situacao} onChange={e => setFormData({ ...formData, situacao: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Frequência Presencial (Horas/% )</label>
            <input type="number" value={formData.frequenciaPresencial} onChange={e => setFormData({ ...formData, frequenciaPresencial: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Frequência Online (Horas/% )</label>
            <input type="number" value={formData.frequenciaOnline} onChange={e => setFormData({ ...formData, frequenciaOnline: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Nota Teórica</label>
            <input type="number" step="0.1" value={formData.notaTeorica} onChange={e => setFormData({ ...formData, notaTeorica: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Nota Sistema (Prática)</label>
            <input type="number" step="0.1" value={formData.notaSistema} onChange={e => setFormData({ ...formData, notaSistema: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Status Módulo</label>
            <select value={formData.status_modulo} onChange={e => setFormData({ ...formData, status_modulo: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none">
              <option value="CONCLUIDO">Concluído</option>
              <option value="PENDENTE">Pendente</option>
              <option value="">Não iniciado</option>
            </select>
          </div>
          
          <div className="space-y-2 lg:col-span-3">
            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-brand-light hover:bg-brand-light transition-colors w-fit">
              <input type="checkbox" checked={formData.modulesConcluded} onChange={e => setFormData({ ...formData, modulesConcluded: e.target.checked })}
                className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue" />
              <span className="text-sm text-brand-blue font-medium">Todos Módulos Concluídos (Mód 1 a 4)</span>
            </label>
          </div>

          <div className="space-y-2 lg:col-span-3">
            <label className="text-sm font-semibold text-brand-blue">Observação</label>
            <input type="text" value={formData.observacao} onChange={e => setFormData({ ...formData, observacao: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-6 border-t border-brand-light">
          <button type="button" onClick={onCancel}
            className="px-6 py-2.5 text-sm font-semibold text-brand-blue bg-brand-light hover:bg-brand-light rounded-xl transition-colors">
            Cancelar
          </button>
          <button type="submit"
            className="px-6 py-2.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue rounded-xl flex items-center gap-2 shadow-sm transition-colors">
            <Save className="h-4 w-4" />
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
