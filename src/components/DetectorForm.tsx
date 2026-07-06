import React, { useState, useEffect } from 'react';
import { Detector } from '../data_detectors';
import { Save, X } from 'lucide-react';

interface DetectorFormProps {
  initialData?: Detector | null;
  onSave: (detector: Detector) => void;
  onCancel: () => void;
}

export function DetectorForm({ initialData, onSave, onCancel }: DetectorFormProps) {
  const [formData, setFormData] = useState<Partial<Detector>>({
    numero: '',
    endereco_mac: '',
    tipo: '',
    localizacao: '',
    predio: 'Geral',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: initialData?.id || Date.now().toString(),
      numero: formData.numero || '',
      endereco_mac: formData.endereco_mac || '',
      tipo: formData.tipo || '',
      localizacao: formData.localizacao || '',
      predio: formData.predio || 'Geral',
    } as Detector);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-blue-200 overflow-hidden">
      <div className="border-b border-blue-200 px-4 sm:px-6 py-4 flex justify-between items-center bg-blue-50/50">
        <h3 className="font-semibold text-blue-800">
          {initialData ? 'EDITAR DETECTOR/ACIONADOR' : 'NOVO DETECTOR/ACIONADOR'}
        </h3>
        <button onClick={onCancel} className="text-blue-400 hover:text-blue-600 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">Nº / Item</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.numero} 
              onChange={e => setFormData({...formData, numero: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">Endereço MAC</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.endereco_mac} 
              onChange={e => setFormData({...formData, endereco_mac: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">Tipo</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.tipo} 
              onChange={e => setFormData({...formData, tipo: e.target.value})}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">Prédio</label>
            <select
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.predio}
              onChange={e => setFormData({...formData, predio: e.target.value})}
            >
              <option value="Geral">Geral</option>
              <option value="CD">CD</option>
              <option value="RAD">RAD</option>
              <option value="PA">PA</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-blue-700">Localização</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.localizacao} 
              onChange={e => setFormData({...formData, localizacao: e.target.value})}
            />
          </div>
          
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-blue-300 text-blue-700 rounded-md hover:bg-blue-50 font-medium transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 font-medium flex items-center gap-2 transition-colors"
          >
            <Save className="w-4 h-4" />
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
