import React, { useState } from 'react';
import { FaltaItem } from '../data_faltas';
import { Save, X } from 'lucide-react';

interface FaltaFormProps {
  initialData?: FaltaItem | null;
  onSave: (data: FaltaItem) => void;
  onCancel: () => void;
}

export function FaltaForm({ initialData, onSave, onCancel }: FaltaFormProps) {
  const [formData, setFormData] = useState<FaltaItem>(
    initialData || {
      qtd: '',
      data: '',
      nome: '',
      cracha: '',
      setor: '',
      data_disp: '',
      observacao: ''
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: formData.id || `falta-${Date.now()}`
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-brand-light overflow-hidden max-w-2xl mx-auto">
      <div className="p-4 border-b border-brand-light bg-brand-light flex justify-between items-center">
        <h3 className="text-lg font-semibold text-brand-blue">
          {initialData ? 'Editar Registro de Falta/Presença' : 'Novo Registro de Falta/Presença'}
        </h3>
        <button onClick={onCancel} className="text-brand-blue hover:text-brand-blue transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 lg:col-span-2">
            <label className="block text-sm font-medium text-brand-blue">Módulo</label>
            <select value={formData.modulo || "Brigada de incêndio"} onChange={e => setFormData({ ...formData, modulo: e.target.value as any })}
              className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue">
              <option value="Brigada de incêndio">Brigada de incêndio</option>
              <option value="1º Socorros">1º Socorros</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-brand-blue">Data do Curso</label>
            <input
              type="text"
              required
              placeholder="Ex: 05/02/26"
              className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={formData.data}
              onChange={e => setFormData({ ...formData, data: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-brand-blue">Quantidade / ID Seq.</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={formData.qtd}
              onChange={e => setFormData({ ...formData, qtd: e.target.value })}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-brand-blue">Nome do Colaborador(a)</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={formData.nome}
              onChange={e => setFormData({ ...formData, nome: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-brand-blue">Nº Crachá</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={formData.cracha}
              onChange={e => setFormData({ ...formData, cracha: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-brand-blue">Setor</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={formData.setor}
              onChange={e => setFormData({ ...formData, setor: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-brand-blue">Data de Disponibilidade (Remarcação)</label>
            <input
              type="text"
              placeholder="Ex: 09/04/26"
              className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={formData.data_disp}
              onChange={e => setFormData({ ...formData, data_disp: e.target.value })}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-brand-blue">Observação / Situação</label>
            <input
              type="text"
              placeholder="Ex: 2º falta, Faltou, Não compareceu, 1 e 2 módulo"
              className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={formData.observacao}
              onChange={e => setFormData({ ...formData, observacao: e.target.value })}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-6 border-t border-brand-light">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-brand-light text-brand-blue rounded-md hover:bg-brand-light transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-brand-blue text-white rounded-md hover:bg-brand-blue transition-colors flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            Salvar Registro
          </button>
        </div>
      </form>
    </div>
  );
}
