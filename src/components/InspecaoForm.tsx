import React, { useState, useEffect } from 'react';
import { InspecaoAntiga } from '../data_inspecoes';
import { Save, X, ClipboardList } from 'lucide-react';

interface InspecaoFormProps {
  settings?: any;
  initialData?: InspecaoAntiga | null;
  onSave: (insp: InspecaoAntiga) => void;
  onCancel: () => void;
}

export function InspecaoForm({ settings, initialData, onSave, onCancel }: InspecaoFormProps) {
  const [formData, setFormData] = useState<Partial<InspecaoAntiga>>({
    sheet: 'CD',
    predio: '',
    andar: '',
    local: '',
    id_equipamento: '',
    tipo: '',
    testado_central: false,
    conforme: true,
    nao_conforme: false,
    observacao: '',
    os: '',
    status: '',
    data: '',
    operador: '',
    dispositivo: '',
    falhas: '',
    entendeuCorretamente: true
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInsp: InspecaoAntiga = {
      ...formData,
      id: initialData?.id || `INSP-${Date.now()}`
    } as InspecaoAntiga;
    onSave(newInsp);
  };

  

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-light max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6 border-b border-brand-light pb-4">
        <h3 className="text-xl font-bold text-brand-blue flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-brand-blue" />
          {initialData ? 'Editar Inspeção' : 'Nova Inspeção Mensal'}
        </h3>
        <button onClick={onCancel} className="text-brand-blue hover:text-brand-blue transition-colors">
          <X className="h-6 w-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Data da Inspeção</label>
            <input required type="date" value={formData.data} onChange={e => setFormData({ ...formData, data: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Prédio</label>
            <select required value={formData.sheet} onChange={e => setFormData({ ...formData, sheet: e.target.value, predio: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none">
              <option value="" disabled>Selecione...</option>
              {(settings?.buildings || ['CD', 'Edifício Sede', 'Anexo', 'Geral']).map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Andar</label>
            <input required type="text" value={formData.andar} onChange={e => setFormData({ ...formData, andar: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Setor / Local</label>
            <input required type="text" value={formData.local} onChange={e => setFormData({ ...formData, local: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Nome do Operador</label>
            <input required type="text" value={formData.operador} onChange={e => setFormData({ ...formData, operador: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Dispositivo Testado</label>
            <input required type="text" value={formData.dispositivo} onChange={e => setFormData({ ...formData, dispositivo: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2 lg:col-span-3">
            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-brand-light hover:bg-brand-light transition-colors w-fit">
              <input type="checkbox" checked={formData.entendeuCorretamente} onChange={e => setFormData({ ...formData, entendeuCorretamente: e.target.checked })}
                className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue" />
              <span className="text-sm text-brand-blue font-medium">Operador entendeu corretamente o que fazer?</span>
            </label>
          </div>

          <div className="space-y-2 lg:col-span-3">
            <label className="text-sm font-semibold text-brand-blue">Quais falhas ocorreram?</label>
            <input type="text" placeholder="Descreva falhas se houveram..." value={formData.falhas} onChange={e => setFormData({ ...formData, falhas: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2 lg:col-span-3">
            <label className="text-sm font-semibold text-brand-blue">Observação Geral</label>
            <input type="text" value={formData.observacao} onChange={e => setFormData({ ...formData, observacao: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Conformidade</label>
            <div className="flex gap-4 items-center h-10">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={formData.conforme} onChange={() => setFormData({ ...formData, conforme: true, nao_conforme: false })}
                  className="text-brand-blue focus:ring-brand-blue" />
                <span className="text-sm text-brand-blue">Conforme</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={formData.nao_conforme} onChange={() => setFormData({ ...formData, conforme: false, nao_conforme: true })}
                  className="text-brand-blue focus:ring-brand-blue" />
                <span className="text-sm text-brand-blue">Não Conforme</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Status O.S</label>
            <input type="text" placeholder="Ex: Em andamento" value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">O.S Nº</label>
            <input type="text" value={formData.os} onChange={e => setFormData({ ...formData, os: e.target.value })}
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
