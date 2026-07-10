import React, { useState, useEffect } from 'react';
import { Extinguisher } from '../data_extintores';
import { Save, X, CheckSquare, ShieldCheck, Flame } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface ExtinguisherFormProps {
  settings?: any;
  initialData?: Extinguisher | null;
  onSave: (extinguisher: Extinguisher) => void;
  onCancel: () => void;
}

export function ExtinguisherForm({ settings, initialData, onSave, onCancel }: ExtinguisherFormProps) {
  const [formData, setFormData] = useState<Partial<Extinguisher>>({
    patrim: '',
    num_extintor: '',
    tipo: 'ABC',
    cap: '06 KG',
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
    const newExtinguisher: Extinguisher = {
      ...formData,
      id: initialData?.id || `EXT-${Date.now()}`
    } as Extinguisher;
    onSave(newExtinguisher);
  };

  

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-light max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6 border-b border-brand-light pb-4">
        <h3 className="text-xl font-bold text-brand-blue flex items-center gap-2">
          <Flame className="h-5 w-5 text-brand-blue" />
          {initialData ? 'Editar Extintor' : 'Novo Extintor'}
        </h3>
        <button onClick={onCancel} className="text-brand-blue hover:text-brand-blue transition-colors">
          <X className="h-6 w-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Patrimônio</label>
            <input required type="text" value={formData.patrim} onChange={e => setFormData({ ...formData, patrim: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Nº Extintor</label>
            <input required type="text" value={formData.num_extintor} onChange={e => setFormData({ ...formData, num_extintor: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Prédio</label>
            <select required value={formData.predio} onChange={e => setFormData({ ...formData, predio: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none">
              <option value="" disabled>Selecione...</option>
              {(settings?.buildings || ['CD', 'Edifício Sede', 'Anexo', 'Geral']).map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Localização (Setor)</label>
            <input required type="text" value={formData.localizacao} onChange={e => setFormData({ ...formData, localizacao: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Tipo</label>
            <select value={formData.tipo} onChange={e => setFormData({ ...formData, tipo: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none">
              {(settings?.extinguisherTypes || ['ABC', 'CO2', 'AP', 'BC']).map((t: string) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Capacidade</label>
            <input required type="text" value={formData.cap} onChange={e => setFormData({ ...formData, cap: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Próx. Recarga</label>
            <input required type="text" placeholder="MM/AAAA" value={formData.prox_recarga} onChange={e => setFormData({ ...formData, prox_recarga: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Próx. Teste Hidro</label>
            <input required type="text" placeholder="AAAA" value={formData.prox_teste} onChange={e => setFormData({ ...formData, prox_teste: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-blue">Selo INMETRO</label>
            <input type="text" value={formData.selo} onChange={e => setFormData({ ...formData, selo: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
          </div>
        </div>

        <div className="border-t border-brand-light pt-6">
          <h4 className="text-sm font-semibold text-brand-blue mb-4 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-blue" /> Checks & Status
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-brand-light hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.retiradoParaRecarga} onChange={e => setFormData({ ...formData, retiradoParaRecarga: e.target.checked })}
                className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue" />
              <span className="text-sm text-brand-blue font-medium flex items-center">Retirado (Recarga) <Tooltip content="Marque se o extintor foi recolhido para manutenção/recarga." /></span>
            </label>
            
            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-brand-light hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.coberturaNoLocal} onChange={e => setFormData({ ...formData, coberturaNoLocal: e.target.checked })}
                className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue" />
              <span className="text-sm text-brand-blue font-medium flex items-center">Cobertura no Local <Tooltip content="Marque se foi deixado um extintor reserva no mesmo ponto para não desproteger a área." /></span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-brand-light hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.checkLacre} onChange={e => setFormData({ ...formData, checkLacre: e.target.checked })}
                className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue" />
              <span className="text-sm text-brand-blue font-medium flex items-center">Lacre OK <Tooltip content="Confirme se o lacre plástico de segurança está intacto." /></span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-brand-light hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.checkPressurizacao} onChange={e => setFormData({ ...formData, checkPressurizacao: e.target.checked })}
                className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue" />
              <span className="text-sm text-brand-blue font-medium flex items-center">Pressurização OK <Tooltip content="Verifique o manômetro: o ponteiro deve estar na área verde. Não aplicável a CO2." /></span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-brand-light hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.checkAnel} onChange={e => setFormData({ ...formData, checkAnel: e.target.checked })}
                className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue" />
              <span className="text-sm text-brand-blue font-medium">Anel OK</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-3 bg-brand-light rounded-lg border border-brand-light hover:bg-brand-light transition-colors">
              <input type="checkbox" checked={formData.checkPino} onChange={e => setFormData({ ...formData, checkPino: e.target.checked })}
                className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue" />
              <span className="text-sm text-brand-blue font-medium">Pino OK</span>
            </label>
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
