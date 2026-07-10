import React, { useState, useEffect } from 'react';
import { Amplifier } from '../data_amplificadores';
import { Save, X, Radio } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface AmplifierFormProps {
  settings?: any;
  initialData?: Amplifier | null;
  onSave: (amp: Amplifier) => void;
  onCancel: () => void;
}

export function AmplifierForm({ settings, initialData, onSave, onCancel }: AmplifierFormProps) {
  const [formData, setFormData] = useState<Partial<Amplifier>>({
    codigo_mac: '',
    status: 'online/sincronizado',
    grupo: '',
    localizacao: '',
    data_hora: '',
    quantidade: 1
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        quantidade: initialData.quantidade ?? 1
      });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAmp: Amplifier = {
      ...formData,
      id: initialData?.id || `AMP-${Date.now()}`
    } as Amplifier;
    onSave(newAmp);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-light max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6 border-b border-brand-light pb-4">
        <h3 className="text-xl font-bold text-brand-blue flex items-center gap-2">
          <Radio className="h-5 w-5 text-brand-blue" />
          {initialData ? 'Editar Amplificador' : 'Novo Amplificador'}
        </h3>
        <button onClick={onCancel} className="text-brand-blue hover:text-brand-blue transition-colors">
          <X className="h-6 w-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Código MAC</label>
            <input required type="text" value={formData.codigo_mac} onChange={e => setFormData({ ...formData, codigo_mac: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue flex items-center">Status <Tooltip content="Online: Funcionando normalmente. Offline: Sem comunicação com a rede. Erro: Falha de tensão, bateria ou hardware." /></label>
            <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none">
              <option value="online/sincronizado">Online / Sincronizado</option>
              <option value="offline">Offline</option>
              <option value="erro">Erro</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Grupo</label>
            <input required type="text" value={formData.grupo} onChange={e => setFormData({ ...formData, grupo: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Localização</label>
            <input required type="text" value={formData.localizacao} onChange={e => setFormData({ ...formData, localizacao: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Data / Hora</label>
            <input required type="text" placeholder="DD/MM/AAAA HH:MM" value={formData.data_hora} onChange={e => setFormData({ ...formData, data_hora: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Quantidade de Itens</label>
            <input required type="number" min="0" value={formData.quantidade} onChange={e => setFormData({ ...formData, quantidade: Number(e.target.value) })}
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
