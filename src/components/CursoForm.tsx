import React, { useState } from 'react';
import { CursoData } from '../data_curso_datas';
import { Save, X } from 'lucide-react';

interface CursoFormProps {
  initialData?: CursoData | null;
  onSave: (data: CursoData) => void;
  onCancel: () => void;
}

export function CursoForm({ initialData, onSave, onCancel }: CursoFormProps) {
  const [formData, setFormData] = useState<CursoData>(
    initialData || {
      qtd: '',
      data_integ: '',
      dia_integ: '',
      data_brigada: '',
      dia_brigada: '',
      turno_brigada: '',
      data_socorros: '',
      dia_socorros: '',
      turno_socorros: ''
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: formData.id || `curso-${Date.now()}`
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-blue-200 overflow-hidden max-w-2xl mx-auto">
      <div className="p-4 border-b border-blue-200 bg-brand-light flex justify-between items-center">
        <h3 className="text-lg font-semibold text-brand-blue">
          {initialData ? 'Editar Agenda de Curso' : 'Nova Agenda de Curso'}
        </h3>
        <button onClick={onCancel} className="text-blue-400 hover:text-blue-600 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-brand-blue">Quantidade (ID)</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.qtd}
              onChange={e => setFormData({ ...formData, qtd: e.target.value })}
            />
          </div>

          <div className="border-t border-blue-100 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <h4 className="md:col-span-2 text-sm font-bold text-brand-blue">Integração</h4>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brand-blue">Data Integração</label>
              <input
                type="text"
                placeholder="Ex: 07/01/2026"
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.data_integ}
                onChange={e => setFormData({ ...formData, data_integ: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brand-blue">Dia Integração</label>
              <input
                type="text"
                placeholder="Ex: Quarta-feira"
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.dia_integ}
                onChange={e => setFormData({ ...formData, dia_integ: e.target.value })}
              />
            </div>
          </div>

          <div className="border-t border-blue-100 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <h4 className="md:col-span-3 text-sm font-bold text-brand-blue">Brigada</h4>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brand-blue">Data Brigada</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.data_brigada}
                onChange={e => setFormData({ ...formData, data_brigada: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brand-blue">Dia Brigada</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.dia_brigada}
                onChange={e => setFormData({ ...formData, dia_brigada: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brand-blue">Turno Brigada</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.turno_brigada}
                onChange={e => setFormData({ ...formData, turno_brigada: e.target.value })}
              />
            </div>
          </div>

          <div className="border-t border-blue-100 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <h4 className="md:col-span-3 text-sm font-bold text-brand-blue">Primeiros Socorros</h4>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brand-blue">Data 1º Socorros</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.data_socorros}
                onChange={e => setFormData({ ...formData, data_socorros: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brand-blue">Dia 1º Socorros</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.dia_socorros}
                onChange={e => setFormData({ ...formData, dia_socorros: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brand-blue">Turno 1º Socorros</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.turno_socorros}
                onChange={e => setFormData({ ...formData, turno_socorros: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-6 border-t border-blue-200">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-blue-300 text-brand-blue rounded-md hover:bg-brand-light transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-brand-blue text-white rounded-md hover:bg-blue-800 transition-colors flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            Salvar Registro
          </button>
        </div>
      </form>
    </div>
  );
}
