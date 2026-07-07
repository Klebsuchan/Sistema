import React, { useState } from 'react';
import { 
  LayoutDashboard, TableProperties, Flame, PlusCircle, Box, Radio, 
  Speaker, ClipboardList, Users, CalendarClock, Settings, Menu, X, Upload, Database, Download, LogOut 
} from 'lucide-react';
import logoHSVP from '../logohsvp.png';

export function Layout({ 
  children, activeTab, setActiveTab, onRestore, onBackup, onExport, onLogout, isExporting, title, description 
}: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Painel', icon: LayoutDashboard, category: 'Principal' },
    { id: 'data', label: 'Ocorrências', icon: TableProperties, category: 'Principal' },
    { id: 'register', label: 'Nova Ocorrência', icon: PlusCircle, category: 'Principal' },
    { id: 'extinguishers', label: 'Extintores', icon: Flame, category: 'Equipamentos' },
    { id: 'hoses', label: 'Mangueiras', icon: Box, category: 'Equipamentos' },
    { id: 'detectors', label: 'Detectores', icon: Radio, category: 'Equipamentos' },
    { id: 'amplifiers', label: 'Amplificadores', icon: Speaker, category: 'Equipamentos' },
    { id: 'inspecoes_antigas', label: 'Inspeções', icon: ClipboardList, category: 'Registros' },
    { id: 'brigada', label: 'Brigada', icon: Users, category: 'Treinamentos' },
    { id: 'faltas_cursos', label: 'Cursos & Faltas', icon: CalendarClock, category: 'Treinamentos' },
    { id: 'settings', label: 'Configurações', icon: Settings, category: 'Sistema' },
  ];

  const categories = ['Principal', 'Equipamentos', 'Registros', 'Treinamentos', 'Sistema'];

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-blue flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 h-screen w-64 bg-white border-r border-brand-light shadow-xl lg:shadow-none z-50 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} flex flex-col`}>
        <div className="p-4 border-b border-brand-light flex items-center justify-between">
          <img src={logoHSVP} alt="HSVP" className="h-10 w-auto object-contain" />
          <button className="lg:hidden p-2 text-brand-gray hover:text-brand-blue" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {categories.map(cat => (
            <div key={cat} className="mb-6">
              <h3 className="px-6 text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">{cat}</h3>
              <div className="space-y-1 px-3">
                {navItems.filter(item => item.category === cat).map(item => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id || 
                    (item.id === 'extinguishers' && activeTab === 'extinguisher_form') ||
                    (item.id === 'hoses' && activeTab === 'hose_form') ||
                    (item.id === 'detectors' && activeTab === 'detector_form') ||
                    (item.id === 'amplifiers' && activeTab === 'amplifier_form') ||
                    (item.id === 'inspecoes_antigas' && activeTab === 'inspecao_form') ||
                    (item.id === 'brigada' && activeTab === 'brigada_form') ||
                    (item.id === 'faltas_cursos' && (activeTab === 'falta_form' || activeTab === 'curso_form'));
                    
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive 
                          ? 'bg-brand-blue text-white shadow-sm' 
                          : 'text-brand-gray hover:bg-brand-light hover:text-brand-blue'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-brand-light flex flex-col gap-2">
          <label className="flex items-center gap-2 px-3 py-2 text-sm text-brand-gray hover:text-brand-blue hover:bg-brand-light rounded-lg cursor-pointer transition-colors w-full">
            <Upload className="w-4 h-4" /> Restaurar
            <input type="file" accept=".json" className="hidden" onChange={onRestore} />
          </label>
          <button onClick={onBackup} className="flex items-center gap-2 px-3 py-2 text-sm text-brand-gray hover:text-brand-blue hover:bg-brand-light rounded-lg transition-colors w-full">
            <Database className="w-4 h-4" /> Backup
          </button>
          <button onClick={onExport} disabled={isExporting} className="flex items-center gap-2 px-3 py-2 text-sm text-brand-gray hover:text-brand-blue hover:bg-brand-light rounded-lg transition-colors w-full disabled:opacity-50">
            <Download className={`w-4 h-4 ${isExporting ? 'animate-bounce' : ''}`} /> Exportar PDF/Excel
          </button>
          <button onClick={onLogout} className="flex items-center gap-2 px-3 py-2 text-sm text-brand-red hover:bg-brand-light rounded-lg transition-colors w-full mt-2 border border-brand-light">
            <LogOut className="w-4 h-4" /> Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="bg-white border-b border-brand-light px-4 py-3 flex items-center gap-4 sticky top-0 z-10 shrink-0">
          <button className="lg:hidden p-2 text-brand-gray hover:text-brand-blue" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-brand-blue truncate">{title}</h1>
            {description && <p className="text-sm text-brand-gray hidden sm:block truncate">{description}</p>}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto pb-20">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
