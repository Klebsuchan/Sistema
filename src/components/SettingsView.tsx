import React, { useState } from 'react';
import { Save, Plus, Trash2, Settings, Building, MapPin, AlertTriangle, ShieldAlert } from 'lucide-react';

interface AppSettings {
  buildings: string[];
  sectors: string[];
  reasons: string[];
  detectorTypes: string[];
  extinguisherTypes: string[];
}

interface SettingsViewProps {
  settings: AppSettings;
  onSave: (settings: AppSettings) => void;
}

export function SettingsView({ settings, onSave }: SettingsViewProps) {
  const [localSettings, setLocalSettings] = useState<AppSettings>(settings);

  const handleChange = (category: keyof AppSettings, index: number, value: string) => {
    const updated = [...localSettings[category]];
    updated[index] = value;
    setLocalSettings({ ...localSettings, [category]: updated });
  };

  const handleAdd = (category: keyof AppSettings) => {
    setLocalSettings({ ...localSettings, [category]: [...localSettings[category], 'Novo Item'] });
  };

  const handleRemove = (category: keyof AppSettings, index: number) => {
    const updated = localSettings[category].filter((_, i) => i !== index);
    setLocalSettings({ ...localSettings, [category]: updated });
  };

  const SettingSection = ({ title, icon: Icon, category }: { title: string, icon: any, category: keyof AppSettings }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-brand-light p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-brand-blue" />
          <h3 className="font-semibold text-brand-blue">{title}</h3>
        </div>
        <button 
          onClick={() => handleAdd(category)}
          className="p-2 text-brand-blue bg-brand-light rounded-lg hover:opacity-80 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
        {localSettings[category].map((item, index) => (
          <div key={index} className="flex gap-2">
            <input 
              type="text" 
              value={item} 
              onChange={(e) => handleChange(category, index, e.target.value)}
              className="flex-1 px-3 py-2 bg-brand-light/30 border border-brand-light rounded-lg text-sm text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button 
              onClick={() => handleRemove(category, index)}
              className="p-2 text-brand-red bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
        {localSettings[category].length === 0 && (
          <p className="text-sm text-brand-gray text-center py-4">Nenhum item cadastrado.</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-brand-blue text-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Configurações do Sistema</h2>
            <p className="text-white/80 text-sm">Gerencie as opções exibidas nos formulários de cadastro</p>
          </div>
        </div>
        <button 
          onClick={() => onSave(localSettings)}
          className="bg-brand-red hover:opacity-90 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          Salvar Tudo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SettingSection title="Prédios / Locais" icon={Building} category="buildings" />
        <SettingSection title="Setores" icon={MapPin} category="sectors" />
        <SettingSection title="Motivos de Ocorrência" icon={AlertTriangle} category="reasons" />
        <SettingSection title="Tipos de Extintor" icon={ShieldAlert} category="extinguisherTypes" />
        <SettingSection title="Tipos de Detector" icon={ShieldAlert} category="detectorTypes" />
      </div>
    </div>
  );
}
