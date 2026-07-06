import React, { useState, useEffect } from 'react';
import { Hose } from '../data_hoses';
import { Save, X, ShieldCheck, Droplet } from 'lucide-react';

interface HoseFormProps {
  initialData?: Hose | null;
  onSave: (hose: Hose) => void;
  onCancel: () => void;
}

export function HoseForm({ initialData, onSave, onCancel }: HoseFormProps) {
  const [formData, setFormData] = useState<Partial<Hose>>({
    patrim: '',
    num_mangueira: '',
    tipo: '1',
    cap: '25mm - 30m',
    prox_recarga: '',
    prox_teste: '',
    localizacao: '',
    ano_fab: '',
    fabricante: '',
    selo: '',
    predio: 'CD',
    retiradoParaRecarga: false,
    coberturaNoLocal: false,
    checkLacre: false,
    checkPressurizacao: false,
    checkAnel: false,
    checkPino: false
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        ano_fab: initialData.ano_fab || '',
        fabricante: initialData.fabricante || '',
        selo: initialData.selo || '',
        predio: initialData.predio || 'CD',
        retiradoParaRecarga: initialData.retiradoParaRecarga || false,
        coberturaNoLocal: initialData.coberturaNoLocal || false,
        checkLacre: initialData.checkLacre || false,
        checkPressurizacao: initialData.checkPressurizacao || false,
        checkAnel: initialData.checkAnel || false,
        checkPino: initialData.checkPino || false
      });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newHose: Hose = {
      ...formData,
      id: initialData?.id || `MANG-${Date.now()}`
    } as Hose;
    onSave(newHose);
  };

  const BUILDINGS = ['CD', 'RAD', 'PA', 'CDR', 'CES'];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6 border-b border-blue-100 pb-4">
        <h3 className="text-xl font-bold text-brand-blue flex items-center gap-2">
          <Droplet className="h-5 w-5 text-blue-600" />
          {initialData ? 'Editar Mangueira' : 'Nova Mangueira'}
        </h3>
        <button onClick={onCancel} className="text-blue-400 hover:text-blue-600 transition-colors">
          <X className="h-6 w-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Patrimônio</label>
            <input required type="text" value={formData.patrim} onChange={e => setFormData({ ...formData, patrim: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Nº Mangueira</label>
            <input required type="text" value={formData.num_mangueira} onChange={e => setFormData({ ...formData, num_mangueira: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Prédio</label>
            <select required value={formData.predio} onChange={e => setFormData({ ...formData, predio: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
              <option value="" disabled>Selecione...</option>
              {BUILDINGS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Localização (Setor)</label>
            <input required type="text" value={formData.localizacao} onChange={e => setFormData({ ...formData, localizacao: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Tipo</label>
            <input type="text" value={formData.tipo} onChange={e => setFormData({ ...formData, tipo: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Especificação (Cap.)</label>
            <input required type="text" value={formData.cap} onChange={e => setFormData({ ...formData, cap: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Manutenção / Inspeção</label>
            <input required type="text" placeholder="MM/AAAA" value={formData.prox_recarga} onChange={e => setFormData({ ...formData, prox_recarga: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Próx. Teste Hidro</label>
            <input required type="text" placeholder="AAAA" value={formData.prox_teste} onChange={e => setFormData({ ...formData, prox_teste: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Fabricante</label>
            <input type="text" value={formData.fabricante} onChange={e => setFormData({ ...formData, fabricante: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
          </div>
        </div>

        <div className="border-t border-blue-100 pt-6">
          <h4 className="text-sm font-semibold text-brand-blue mb-4 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-600" /> Checks & Status
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-blue-100 hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.retiradoParaRecarga} onChange={e => setFormData({ ...formData, retiradoParaRecarga: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-brand-blue font-medium">Retirado (Teste/Manut)</span>
            </label>
            
            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-blue-100 hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.coberturaNoLocal} onChange={e => setFormData({ ...formData, coberturaNoLocal: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-brand-blue font-medium">Cobertura no Local</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-blue-100 hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.checkLacre} onChange={e => setFormData({ ...formData, checkLacre: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-brand-blue font-medium">Acoplamento OK</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-blue-100 hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.checkPressurizacao} onChange={e => setFormData({ ...formData, checkPressurizacao: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-brand-blue font-medium">Esguicho OK</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-blue-100 hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.checkAnel} onChange={e => setFormData({ ...formData, checkAnel: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-brand-blue font-medium">Botoeira OK</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-blue-100 hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.checkPino} onChange={e => setFormData({ ...formData, checkPino: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-brand-blue font-medium">Sinalização OK</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-6 border-t border-blue-100">
          <button type="button" onClick={onCancel}
            className="px-6 py-2.5 text-sm font-semibold text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-xl transition-colors">
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
