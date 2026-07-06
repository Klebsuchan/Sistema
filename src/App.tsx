import React, { useState, useEffect } from 'react';
import logoHSVP from './logohsvp.png';
import { Dashboard } from './components/Dashboard';
import { DataView } from './components/DataView';
import { EventForm } from './components/EventForm';
import { ExtinguishersView } from './components/ExtinguishersView';
import { ExtinguisherForm } from './components/ExtinguisherForm';
import { exportToStructuredExcel } from './lib/excel';
import { exportExtinguishersToPDF, exportHosesToPDF, exportDetectorsToPDF, exportAmplifiersToPDF } from './lib/pdf';
import { eventsData as initialEvents, EventData, AuditLog } from './data';
import { initialExtinguishers, Extinguisher } from './data_extintores';
import { HosesView } from './components/HosesView';
import { HoseForm } from './components/HoseForm';
import { initialHoses, Hose } from './data_hoses';
import { initialDetectors, Detector } from './data_detectors';
import { initialAmplifiers, Amplifier } from './data_amplificadores';
import { initialInspecoesAntigas, InspecaoAntiga } from './data_inspecoes';
import { DetectorsView } from './components/DetectorsView';
import { DetectorForm } from './components/DetectorForm';
import { AmplifiersView } from './components/AmplifiersView';
import { AmplifierForm } from './components/AmplifierForm';
import { InspecoesAntigasView } from "./components/InspecoesAntigasView";
import { InspecaoForm } from "./components/InspecaoForm";
 './components/InspecoesAntigasView';
import { BrigadaView } from './components/BrigadaView';
import { BrigadaForm } from './components/BrigadaForm';
import { FaltasDatasView } from './components/FaltasDatasView';
import { initialBrigada, BrigadaItem } from './data_brigada';
import { initialFaltas, FaltaItem } from './data_faltas';
import { initialCursoDatas, CursoData } from './data_curso_datas';
import { FaltaForm } from './components/FaltaForm';
import { CursoForm } from './components/CursoForm';
import { LayoutDashboard, TableProperties, Download, ShieldAlert, PlusCircle, Flame, Box, Radio, Speaker, ClipboardList, Users, MoreHorizontal, CalendarClock, Eye, EyeOff, Upload, Database } from 'lucide-react';

function safeGetItem(key: string) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function safeSetItem(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [activeTab, setActiveTab] = useState<'dashboard' | 'data' | 'extinguishers' | 'extinguisher_form' | 'hoses' | 'hose_form' | 'detectors' | 'detector_form' | 'amplifiers' | 'amplifier_form' | 'inspecoes_antigas' | 'inspecao_form' | 'brigada' | 'brigada_form' | 'faltas_cursos' | 'falta_form' | 'curso_form' | 'register'>('dashboard');
  const [isExporting, setIsExporting] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventData | null>(null);
  const [editingExtinguisher, setEditingExtinguisher] = useState<Extinguisher | null>(null);
  const [editingHose, setEditingHose] = useState<Hose | null>(null);
  const [editingDetector, setEditingDetector] = useState<Detector | null>(null);
  const [editingAmplifier, setEditingAmplifier] = useState<Amplifier | null>(null);
  const [editingInspecao, setEditingInspecao] = useState<InspecaoAntiga | null>(null);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  
  const [events, setEvents] = useState<EventData[]>(() => {
    const saved = safeGetItem('hospital_events_data_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialEvents;
      }
    }
    return initialEvents;
  });

  const [extinguishers, setExtinguishers] = useState<Extinguisher[]>(() => {
    const saved = safeGetItem('hospital_extinguishers_data_v8');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialExtinguishers;
      }
    }
    return initialExtinguishers;
  });

  const [hoses, setHoses] = useState<Hose[]>(() => {
    const saved = safeGetItem('hospital_hoses_data_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialHoses;
      }
    }
    return initialHoses;
  });

  const [detectors, setDetectors] = useState<Detector[]>(() => {
    const saved = safeGetItem('hospital_detectors_data_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialDetectors;
      }
    }
    return initialDetectors;
  });

  const [amplifiers, setAmplifiers] = useState<Amplifier[]>(() => {
    const saved = safeGetItem('hospital_amplifiers_data_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialAmplifiers;
      }
    }
    return initialAmplifiers;
  });

  const [inspecoes, setInspecoes] = useState<InspecaoAntiga[]>(() => {
    const saved = safeGetItem('inspecoes_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialInspecoesAntigas;
      }
    }
    return initialInspecoesAntigas;
  });

  useEffect(() => {
    safeSetItem('inspecoes_data', JSON.stringify(inspecoes));
  }, [inspecoes]);
  const [brigadistas, setBrigadistas] = useState<BrigadaItem[]>(initialBrigada);
  const [editingBrigadista, setEditingBrigadista] = useState<BrigadaItem | null>(null);

  const [faltas, setFaltas] = useState<FaltaItem[]>(() => {
    const saved = safeGetItem('hospital_faltas_data_v1');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((item: any, i: number) => ({
          ...item,
          id: item.id || `falta-${Date.now()}-${i}`
        }));
      } catch(e) {
        return initialFaltas.map((f, i) => ({ ...f, id: `falta-init-${i}` }));
      }
    }
    return initialFaltas.map((f, i) => ({ ...f, id: `falta-init-${i}` }));
  });

  const [cursoDatas, setCursoDatas] = useState<CursoData[]>(() => {
    const saved = safeGetItem('hospital_curso_datas_v1');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((item: any, i: number) => ({
          ...item,
          id: item.id || `curso-${Date.now()}-${i}`
        }));
      } catch(e) {
        return initialCursoDatas.map((c, i) => ({ ...c, id: `curso-init-${i}` }));
      }
    }
    return initialCursoDatas.map((c, i) => ({ ...c, id: `curso-init-${i}` }));
  });

  const [editingCurso, setEditingCurso] = useState<CursoData | null>(null);

  useEffect(() => {
    safeSetItem('hospital_curso_datas_v1', JSON.stringify(cursoDatas));
  }, [cursoDatas]);

  const handleAddOrUpdateCurso = (newCurso: CursoData) => {
    if (editingCurso) {
      setCursoDatas(cursoDatas.map(c => c.id === newCurso.id ? newCurso : c));
      setEditingCurso(null);
    } else {
      setCursoDatas([newCurso, ...cursoDatas]);
    }
    setActiveTab('faltas_cursos');
  };

  const handleDeleteCurso = (id: string) => {
    setCursoDatas(prev => prev.filter(c => c.id !== id));
  };
  const [editingFalta, setEditingFalta] = useState<FaltaItem | null>(null);

  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(() => {
    const saved = safeGetItem('hospital_events_audit_logs');
    if (saved) return JSON.parse(saved);
    return [];
  });

  useEffect(() => {
    safeSetItem('hospital_events_data_v2', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    safeSetItem('hospital_extinguishers_data_v8', JSON.stringify(extinguishers));
  }, [extinguishers]);

  useEffect(() => {
    safeSetItem('hospital_hoses_data_v2', JSON.stringify(hoses));
  }, [hoses]);

  useEffect(() => {
    safeSetItem('hospital_detectors_data_v1', JSON.stringify(detectors));
  }, [detectors]);

  useEffect(() => {
    safeSetItem('hospital_amplifiers_data_v1', JSON.stringify(amplifiers));
  }, [amplifiers]);

  useEffect(() => {
    safeSetItem('hospital_faltas_data_v1', JSON.stringify(faltas));
  }, [faltas]);

  useEffect(() => {
    safeSetItem('hospital_events_audit_logs', JSON.stringify(auditLogs));
  }, [auditLogs]);

  const addLog = (action: 'CREATE' | 'UPDATE' | 'DELETE', eventId: string, description: string) => {
    const newLog: AuditLog = {
      id: `LOG-${Date.now()}`,
      action,
      eventId,
      eventDescription: description,
      timestamp: new Date().toISOString(),
      user: 'Usuário Ativo'
    };
    setAuditLogs(prev => [newLog, ...prev].slice(0, 50)); // Mantém últimos 50 logs
  };

  const handleAddOrUpdateEvent = (newEvent: EventData) => {
    if (editingEvent) {
      setEvents(events.map(ev => ev.id === newEvent.id ? newEvent : ev));
      setEditingEvent(null);
      addLog('UPDATE', newEvent.id, `Atualizou evento ${newEvent.id} - ${newEvent.building}`);
    } else {
      setEvents([newEvent, ...events]);
      setActiveTab('data');
      addLog('CREATE', newEvent.id, `Criou novo evento ${newEvent.id} - ${newEvent.building}`);
    }
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(prev => prev.filter(ev => ev.id !== id));
    addLog('DELETE', id, `Excluiu evento ${id}`);
  };

  const handleAddOrUpdateExtinguisher = (newExt: Extinguisher) => {
    if (editingExtinguisher) {
      setExtinguishers(extinguishers.map(e => e.id === newExt.id ? newExt : e));
      setEditingExtinguisher(null);
    } else {
      setExtinguishers([newExt, ...extinguishers]);
    }
    setActiveTab('extinguishers');
  };

  const handleDeleteExtinguisher = (id: string) => {
    setExtinguishers(prev => prev.filter(e => e.id !== id));
  };

  const handleClearAllEvents = () => {
    setEvents(prev => {
      if (prev.length === 0) return prev;
      setTimeout(() => addLog('DELETE', 'TODOS', 'Apagou todos os eventos do sistema'), 0);
      return [];
    });
  };

  const handleClearHistory = () => {
    setAuditLogs(prev => {
      if (prev.length === 0) return prev;
      return [];
    });
  };

  const safeAlert = (msg: string) => {
    try { alert(msg); } catch (e) { console.warn('Alert blocked:', msg); }
  };

  const handleBackup = () => {
    const backupData = {
      hospital_events_data_v2: events,
      hospital_extinguishers_data_v8: extinguishers,
      hospital_hoses_data_v1: hoses,
      hospital_detectors_data_v1: detectors,
      hospital_amplifiers_data_v1: amplifiers,
      hospital_events_audit_logs: auditLogs,
      hospital_faltas_data_v1: faltas,
      hospital_curso_datas_v1: cursoDatas,
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_hospital_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleRestore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const data = JSON.parse(content);

        if (data.hospital_events_data_v2) setEvents(data.hospital_events_data_v2);
        if (data.hospital_extinguishers_data_v8) setExtinguishers(data.hospital_extinguishers_data_v8);
        if (data.hospital_hoses_data_v1) setHoses(data.hospital_hoses_data_v1);
        if (data.hospital_detectors_data_v1) setDetectors(data.hospital_detectors_data_v1);
        if (data.hospital_amplifiers_data_v1) setAmplifiers(data.hospital_amplifiers_data_v1);
        if (data.hospital_events_audit_logs) setAuditLogs(data.hospital_events_audit_logs);
        if (data.hospital_faltas_data_v1) setFaltas(data.hospital_faltas_data_v1);
        if (data.hospital_curso_datas_v1) setCursoDatas(data.hospital_curso_datas_v1);

        safeAlert('Backup restaurado com sucesso!');
      } catch (error) {
        console.error("Erro ao restaurar backup:", error);
        safeAlert('Erro ao processar o arquivo de backup. Verifique se o formato é válido.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await exportToStructuredExcel(events, extinguishers, hoses, detectors, amplifiers, inspecoes, brigadistas, auditLogs, faltas, cursoDatas);
    } catch (error) {
      console.error("Erro ao exportar planilha", error);
      safeAlert("Houve um erro ao tentar exportar o Excel.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportPDF = async (filteredExtinguishers: Extinguisher[]) => {
    try {
      await exportExtinguishersToPDF(filteredExtinguishers);
    } catch (error) {
      console.error("Erro ao exportar PDF", error);
      safeAlert("Houve um erro ao tentar exportar o PDF.");
    }
  };

  const handleAddOrUpdateFalta = (newFalta: FaltaItem) => {
    if (editingFalta) {
      setFaltas(faltas.map(f => f.id === newFalta.id ? newFalta : f));
      setEditingFalta(null);
    } else {
      setFaltas([newFalta, ...faltas]);
    }
    setActiveTab('faltas_cursos');
  };

  const handleDeleteFalta = (id: string) => {
    setFaltas(prev => prev.filter(f => f.id !== id));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginPassword === 'paineldeocorrencias13?') {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-light font-sans text-brand-blue flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-light max-w-md w-full">
          <div className="flex justify-center mb-6">
            <img src={logoHSVP} alt="HSVP Logo" className="h-20 w-auto" />
          </div>
          <h1 className="text-2xl font-bold text-center text-brand-blue mb-2">Acesso Restrito</h1>
          <p className="text-center text-brand-gray mb-8">Painel de Ocorrências e Alarmes</p>
          
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-brand-blue">Senha de Acesso</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginPassword}
                  onChange={e => { setLoginPassword(e.target.value); setLoginError(false); }}
                  autoFocus
                  placeholder="Digite a senha..."
                  className="w-full px-4 py-3 border border-brand-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gray hover:opacity-80 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {loginError && <p className="text-sm text-brand-red mt-2">Senha incorreta. Tente novamente.</p>}
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-brand-blue hover:opacity-90 text-white font-semibold rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              Acessar Painel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-blue">
      
      {/* Top Header */}
      <header className="bg-brand-blue border-b border-brand-red sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Title & Actions */}
          <div className="flex items-center justify-between py-3 h-auto sm:h-auto">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg shadow-sm"><img src={logoHSVP} alt="HSVP" className="h-8 w-auto object-contain" /></div>
              <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-white drop-shadow-md truncate max-w-[180px] sm:max-w-none">Painel de Ocorrências</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 bg-brand-light hover:bg-brand-light text-brand-blue px-3 py-2 sm:py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer">
                <Upload className="h-4 w-4" />
                <span className="hidden sm:inline">Restaurar</span>
                <input type="file" accept=".json" className="hidden" onChange={handleRestore} />
              </label>
              
              <button
                onClick={handleBackup}
                className="flex items-center gap-2 bg-brand-blue hover:opacity-90 text-white px-3 py-2 sm:py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                <Database className="h-4 w-4" />
                <span className="hidden sm:inline">Backup</span>
              </button>

              <button
                onClick={handleExport}
                disabled={isExporting}
                className="flex items-center gap-2 bg-brand-red hover:opacity-90 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-semibold transition-colors disabled:opacity-70"
              >
                <Download className={`h-4 w-4 ${isExporting ? 'animate-bounce' : ''}`} />
                <span className="hidden lg:inline">{isExporting ? 'Montando Excel...' : 'Exportar Planilha Excel'}</span>
                <span className="hidden sm:inline lg:hidden">{isExporting ? 'Montando...' : 'Exportar'}</span>
              </button>
            </div>
          </div>
          
          {/* Bottom Row: Navigation Tabs */}
          <div className="hidden sm:flex justify-center pb-3">
            <div className="flex items-center gap-2 bg-brand-blue/60 p-1.5 rounded-xl border border-brand-blue/30">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'dashboard' ? 'bg-white shadow-sm text-brand-red' : 'text-brand-light hover:text-white hover:bg-brand-light/20'
                }`}
              >
                <LayoutDashboard className="h-4 w-4" />
                Indicadores
              </button>
              <button
                onClick={() => setActiveTab('data')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'data' ? 'bg-white shadow-sm text-brand-red' : 'text-brand-light hover:text-white hover:bg-brand-light/20'
                }`}
              >
                <TableProperties className="h-4 w-4" />
                Tabela
              </button>
              <button
                onClick={() => setActiveTab('extinguishers')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  (activeTab === 'extinguishers' || activeTab === 'extinguisher_form') ? 'bg-white shadow-sm text-brand-red' : 'text-brand-light hover:text-white hover:bg-brand-light/20'
                }`}
              >
                <Flame className="h-4 w-4" />
                Extintores
              </button>
              <button
                onClick={() => { setActiveTab('register'); setIsMoreMenuOpen(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'register' ? 'bg-white shadow-sm text-brand-red' : 'text-brand-light hover:text-white hover:bg-brand-light/20'
                }`}
              >
                <PlusCircle className="h-4 w-4" />
                Registrar
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    ['hoses', 'hose_form', 'detectors', 'detector_form', 'amplifiers', 'amplifier_form', 'inspecoes_antigas', 'brigada', 'faltas_cursos', 'falta_form'].includes(activeTab) ? 'bg-white shadow-sm text-brand-red' : 'text-brand-light hover:text-white hover:bg-brand-light/20'
                  }`}
                >
                  <MoreHorizontal className="h-4 w-4" />
                  Mais
                </button>
                {isMoreMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsMoreMenuOpen(false)} />
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-brand-light z-20 py-2 flex flex-col gap-1">
                      <button
                        onClick={() => { setActiveTab('hoses'); setIsMoreMenuOpen(false); }}
                        className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                          (activeTab === 'hoses' || activeTab === 'hose_form') ? 'bg-brand-light text-brand-red font-medium' : 'text-brand-gray hover:bg-brand-light hover:text-brand-red'
                        }`}
                      >
                        <Box className="h-4 w-4" /> Mangueiras
                      </button>
                      <button
                        onClick={() => { setActiveTab('detectors'); setIsMoreMenuOpen(false); }}
                        className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                          (activeTab === 'detectors' || activeTab === 'detector_form') ? 'bg-brand-light text-brand-red font-medium' : 'text-brand-gray hover:bg-brand-light hover:text-brand-red'
                        }`}
                      >
                        <Radio className="h-4 w-4" /> Detectores
                      </button>
                      <button
                        onClick={() => { setActiveTab('amplifiers'); setIsMoreMenuOpen(false); }}
                        className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                          (activeTab === 'amplifiers' || activeTab === 'amplifier_form') ? 'bg-brand-light text-brand-red font-medium' : 'text-brand-gray hover:bg-brand-light hover:text-brand-red'
                        }`}
                      >
                        <Speaker className="h-4 w-4" /> Amplificadores
                      </button>
                      <button
                        onClick={() => { setActiveTab('inspecoes_antigas'); setIsMoreMenuOpen(false); }}
                        className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                          activeTab === 'inspecoes_antigas' ? 'bg-brand-light text-brand-red font-medium' : 'text-brand-gray hover:bg-brand-light hover:text-brand-red'
                        }`}
                      >
                        <ClipboardList className="h-4 w-4" /> Histórico Inspeções
                      </button>
                      <button
                        onClick={() => { setActiveTab('brigada'); setIsMoreMenuOpen(false); }}
                        className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                          activeTab === 'brigada' ? 'bg-brand-light text-brand-red font-medium' : 'text-brand-gray hover:bg-brand-light hover:text-brand-red'
                        }`}
                      >
                        <Users className="h-4 w-4" /> Brigada EAD
                      </button>
                      <button
                        onClick={() => { setActiveTab('faltas_cursos'); setIsMoreMenuOpen(false); }}
                        className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                          (activeTab === 'faltas_cursos' || activeTab === 'falta_form') ? 'bg-brand-light text-brand-red font-medium' : 'text-brand-gray hover:bg-brand-light hover:text-brand-red'
                        }`}
                      >
                        <CalendarClock className="h-4 w-4" /> Cursos e Faltas
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Correção para mobile tabs */}
      <div className="sm:hidden mt-4 px-4 flex gap-2 overflow-x-auto relative pb-2">
        <button
          onClick={() => { setActiveTab('dashboard'); setIsMoreMenuOpen(false); }}
          className={`flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all min-w-[max-content] ${
            activeTab === 'dashboard' ? 'bg-brand-blue shadow-sm text-white' : 'bg-transparent text-brand-gray hover:opacity-80'
          }`}
        >
          <LayoutDashboard className="h-4 w-4" />
          Métricas
        </button>
        <button
          onClick={() => { setActiveTab('data'); setIsMoreMenuOpen(false); }}
          className={`flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all min-w-[max-content] ${
            activeTab === 'data' ? 'bg-brand-blue shadow-sm text-white' : 'bg-transparent text-brand-gray hover:opacity-80'
          }`}
        >
          <TableProperties className="h-4 w-4" />
          Dados
        </button>
        <button
          onClick={() => { setActiveTab('extinguishers'); setIsMoreMenuOpen(false); }}
          className={`flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all min-w-[max-content] ${
            (activeTab === 'extinguishers' || activeTab === 'extinguisher_form') ? 'bg-brand-blue shadow-sm text-white' : 'bg-transparent text-brand-gray hover:opacity-80'
          }`}
        >
          <Flame className="h-4 w-4" />
          Extintores
        </button>
        <button
          onClick={() => { setActiveTab('register'); setIsMoreMenuOpen(false); }}
          className={`flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all min-w-[max-content] ${
            activeTab === 'register' ? 'bg-brand-blue shadow-sm text-white' : 'bg-transparent text-brand-gray hover:opacity-80'
          }`}
        >
          <PlusCircle className="h-4 w-4" />
          Novo
        </button>
        
        <div className="relative">
          <button
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className={`flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all min-w-[max-content] ${
              ['hoses', 'hose_form', 'detectors', 'detector_form', 'amplifiers', 'amplifier_form', 'inspecoes_antigas', 'brigada', 'faltas_cursos', 'falta_form'].includes(activeTab) ? 'bg-brand-blue shadow-sm text-white' : 'bg-transparent text-brand-gray hover:opacity-80'
            }`}
          >
            <MoreHorizontal className="h-4 w-4" />
            Mais
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Texto */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {activeTab === 'dashboard' && 'Dashboard de Eventos e Segurança'}
            {activeTab === 'data' && 'Planilha de Eventos e Disparos'}
            {activeTab === 'extinguishers' && 'Controle de Extintores'}
            {activeTab === 'extinguisher_form' && (editingExtinguisher ? 'Editar Extintor' : 'Cadastrar Extintor')}
            {activeTab === 'hoses' && 'Controle de Mangueiras'}
            {activeTab === 'hose_form' && (editingHose ? 'Editar Mangueira' : 'Cadastrar Mangueira')}
            {activeTab === 'detectors' && 'Controle de Detectores e Acionadores'}
            {activeTab === 'detector_form' && (editingDetector ? 'Editar Item' : 'Cadastrar Item')}
            {activeTab === 'amplifiers' && 'Controle de Amplificadores'}
            {activeTab === 'amplifier_form' && (editingAmplifier ? 'Editar Amplificador' : 'Cadastrar Amplificador')}
            {activeTab === 'inspecoes_antigas' && 'Histórico de Inspeções'}
            {activeTab === 'brigada' && 'Participantes Brigada EAD (2026)'}
            {activeTab === 'faltas_cursos' && 'Agenda e Faltas dos Cursos (2026)'}
            {activeTab === 'falta_form' && (editingFalta ? 'Editar Registro de Falta/Curso' : 'Novo Registro de Falta/Curso')}
            {activeTab === 'register' && 'Cadastrar Nova Ocorrência'}
          </h2>
          <p className="mt-2 text-brand-gray">
            {activeTab === 'dashboard' && 'Análise estatística e acompanhamento de chamados baseado na sua Planilha de Eventos.'}
            {activeTab === 'data' && 'Verifique as informações tabulares exportáveis que refletem a aba original do seu PDF / Excel.'}
            {activeTab === 'extinguishers' && 'Verifique a listagem e os vencimentos dos extintores mapeados no hospital.'}
            {activeTab === 'extinguisher_form' && 'Preencha os dados do extintor e salve para manter os registros atualizados.'}
            {activeTab === 'hoses' && 'Verifique a listagem e os testes das mangueiras mapeadas no hospital.'}
            {activeTab === 'hose_form' && 'Preencha os dados da mangueira e salve para manter os registros atualizados.'}
            {activeTab === 'detectors' && 'Verifique a listagem de detectores e acionadores mapeados no hospital.'}
            {activeTab === 'detector_form' && 'Preencha os dados de identificação do item e salve para manter os registros atualizados.'}
            {activeTab === 'amplifiers' && 'Verifique o status de sincronização dos amplificadores mapeados no hospital.'}
            {activeTab === 'amplifier_form' && 'Preencha os dados de identificação do amplificador e salve para manter os registros atualizados.'}
            {activeTab === 'inspecoes_antigas' && 'Visualize o relatório do histórico de inspeções (2024-2025).'}
            {activeTab === 'brigada' && 'Visualização da lista de participantes formatados no curso da Brigada de Incêndio de 2026.'}
            {activeTab === 'faltas_cursos' && 'Agenda do ano e lista de colaboradores que faltaram ao Curso da Brigada de Incêndio de 2026.'}
            {activeTab === 'falta_form' && 'Preencha as informações do colaborador, data de remarcação e status.'}
            {activeTab === 'register' && 'Preecha os dados abaixo. Após salvar, o app sincroniza o dashboard e o sistema de exportação do Excel.'}
          </p>
        </div>

        {/* Render Tab Content */}
        {activeTab === 'dashboard' && <Dashboard eventsData={events} />}
        {activeTab === 'data' && <DataView eventsData={events} onEdit={setEditingEvent} onDelete={handleDeleteEvent} onClearAll={handleClearAllEvents} onClearHistory={handleClearHistory} auditLogs={auditLogs} />}
        {activeTab === 'extinguishers' && (
          <ExtinguishersView 
            extinguishers={extinguishers} 
            onAdd={() => {
              setEditingExtinguisher(null);
              setActiveTab('extinguisher_form');
            }}
            onEdit={(ext) => {
              setEditingExtinguisher(ext);
              setActiveTab('extinguisher_form');
            }}
            onDelete={handleDeleteExtinguisher}
            onExport={handleExportPDF}
          />
        )}
        {activeTab === 'extinguisher_form' && (
          <ExtinguisherForm
            initialData={editingExtinguisher}
            onSave={handleAddOrUpdateExtinguisher}
            onCancel={() => {
              setEditingExtinguisher(null);
              setActiveTab('extinguishers');
            }}
          />
        )}
        {activeTab === 'hoses' && (
          <HosesView
            hoses={hoses}
            onAdd={() => {
              setEditingHose(null);
              setActiveTab('hose_form');
            }}
            onEdit={(hose) => {
              setEditingHose(hose);
              setActiveTab('hose_form');
            }}
            onDelete={(id) => {
              setHoses(prev => prev.filter(e => e.id !== id));
            }}
            onExport={(hosesToExport) => {
              exportHosesToPDF(hosesToExport);
            }}
          />
        )}
        {activeTab === 'hose_form' && (
          <HoseForm
            initialData={editingHose}
            onSave={(hose) => {
              if (editingHose) {
                setHoses(prev => prev.map(e => e.id === hose.id ? hose : e));
              } else {
                setHoses(prev => [hose, ...prev]);
              }
              setActiveTab('hoses');
              setEditingHose(null);
            }}
            onCancel={() => {
              setEditingHose(null);
              setActiveTab('hoses');
            }}
          />
        )}
        {activeTab === 'detectors' && (
          <DetectorsView
            detectors={detectors}
            onAdd={() => {
              setEditingDetector(null);
              setActiveTab('detector_form');
            }}
            onEdit={(det) => {
              setEditingDetector(det);
              setActiveTab('detector_form');
            }}
            onDelete={(id) => {
              setDetectors(prev => prev.filter(e => e.id !== id));
            }}
            onExport={(detectorsToExport) => {
              exportDetectorsToPDF(detectorsToExport);
            }}
          />
        )}
        {activeTab === 'detector_form' && (
          <DetectorForm
            initialData={editingDetector}
            onSave={(det) => {
              if (editingDetector) {
                setDetectors(prev => prev.map(e => e.id === det.id ? det : e));
              } else {
                setDetectors(prev => [det, ...prev]);
              }
              setActiveTab('detectors');
              setEditingDetector(null);
            }}
            onCancel={() => {
              setEditingDetector(null);
              setActiveTab('detectors');
            }}
          />
        )}
        {activeTab === 'amplifiers' && (
          <AmplifiersView
            amplifiers={amplifiers}
            onAdd={() => {
              setEditingAmplifier(null);
              setActiveTab('amplifier_form');
            }}
            onEdit={(amp) => {
              setEditingAmplifier(amp);
              setActiveTab('amplifier_form');
            }}
            onDelete={(id) => {
              setAmplifiers(prev => prev.filter(e => e.id !== id));
            }}
            onExport={(amplifiersToExport) => {
              exportAmplifiersToPDF(amplifiersToExport);
            }}
          />
        )}
        {activeTab === 'amplifier_form' && (
          <AmplifierForm
            initialData={editingAmplifier}
            onSave={(amp) => {
              if (editingAmplifier) {
                setAmplifiers(prev => prev.map(e => e.id === amp.id ? amp : e));
              } else {
                setAmplifiers(prev => [amp, ...prev]);
              }
              setActiveTab('amplifiers');
              setEditingAmplifier(null);
            }}
            onCancel={() => {
              setEditingAmplifier(null);
              setActiveTab('amplifiers');
            }}
          />
        )}
        {activeTab === 'inspecoes_antigas' && (
          <InspecoesAntigasView 
            inspecoes={inspecoes} 
            onAdd={() => {
              setEditingInspecao(null);
              setActiveTab('inspecao_form');
            }}
            onEdit={(insp) => {
              setEditingInspecao(insp);
              setActiveTab('inspecao_form');
            }}
            onDelete={(id) => {
              if (window.confirm('Excluir inspeção?')) {
                setInspecoes(prev => prev.filter(i => i.id !== id));
                safeAlert('Inspeção excluída com sucesso!');
              }
            }}
            onExport={(insps) => exportToStructuredExcel(events, extinguishers, hoses, detectors, amplifiers, insps, brigadistas, auditLogs, faltas, cursoDatas)}
          />
        )}
        
        {activeTab === 'inspecao_form' && (
          <InspecaoForm 
            initialData={editingInspecao}
            onSave={(insp) => {
              setInspecoes(prev => {
                if (editingInspecao) return prev.map(i => i.id === insp.id ? insp : i);
                return [insp, ...prev];
              });
              setActiveTab('inspecoes_antigas');
              safeAlert('Inspeção salva!');
            }}
            onCancel={() => setActiveTab('inspecoes_antigas')}
          />
        )}
        {activeTab === 'brigada' && (
          <BrigadaView 
            items={brigadistas} 
            onAdd={() => {
              setEditingBrigadista(null);
              setActiveTab('brigada_form');
            }}
            onEdit={(b) => {
              setEditingBrigadista(b);
              setActiveTab('brigada_form');
            }}
            onDelete={(qtd) => {
              if(window.confirm('Excluir brigadista?')) {
                setBrigadistas(prev => prev.filter(x => x.qtd !== qtd));
                safeAlert('Excluído com sucesso');
              }
            }}
            onExport={(items) => exportToStructuredExcel(events, extinguishers, hoses, detectors, amplifiers, inspecoes, items, auditLogs, faltas, cursoDatas)}
          />
        )}
        
        {activeTab === 'brigada_form' && (
          <BrigadaForm
            initialData={editingBrigadista}
            onSave={(b) => {
              setBrigadistas(prev => {
                if (editingBrigadista) {
                  return prev.map(x => x.qtd === b.qtd ? b : x);
                } else {
                  return [{...b, qtd: Date.now()}, ...prev];
                }
              });
              setActiveTab('brigada');
              safeAlert('Salvo com sucesso!');
            }}
            onCancel={() => setActiveTab('brigada')}
          />
        )}
        {activeTab === 'faltas_cursos' && (
          <FaltasDatasView 
            faltas={faltas} 
            cursoDatas={cursoDatas} 
            onAddFalta={() => {
              setEditingFalta(null);
              setActiveTab('falta_form');
            }}
            onEditFalta={(falta) => {
              setEditingFalta(falta);
              setActiveTab('falta_form');
            }}
            onDeleteFalta={handleDeleteFalta}
            onAddCurso={() => {
              setEditingCurso(null);
              setActiveTab('curso_form');
            }}
            onEditCurso={(curso) => {
              setEditingCurso(curso);
              setActiveTab('curso_form');
            }}
            onDeleteCurso={handleDeleteCurso}
          />
        )}
        {activeTab === 'curso_form' && (
          <CursoForm
            initialData={editingCurso}
            onSave={handleAddOrUpdateCurso}
            onCancel={() => {
              setEditingCurso(null);
              setActiveTab('faltas_cursos');
            }}
          />
        )}
        {activeTab === 'falta_form' && (
          <FaltaForm
            initialData={editingFalta}
            onSave={handleAddOrUpdateFalta}
            onCancel={() => {
              setEditingFalta(null);
              setActiveTab('faltas_cursos');
            }}
          />
        )}
        {activeTab === 'register' && <EventForm onSave={handleAddOrUpdateEvent} />}
        
        {/* Modais */}
        {editingEvent && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-3xl my-8">
              <EventForm 
                initialData={editingEvent} 
                onSave={handleAddOrUpdateEvent} 
                onCancel={() => setEditingEvent(null)} 
              />
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12 border-t border-brand-light">
        <div className="flex flex-col items-center justify-center gap-2">
          <a 
            href="https://portfolio-braian-three.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-gray hover:text-brand-red text-sm font-medium transition-colors"
          >
            Desenvolvedor Braian Kmdc
          </a>
          <p className="text-xs text-brand-gray">© 2026 FireSafe Hub - Sistema de Gestão de Prevenção</p>
        </div>
      </footer>

      {/* Mobile More Menu Overlay (Rendered outside overflow containers) */}
      {isMoreMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setIsMoreMenuOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl border-t border-brand-light z-50 py-2 px-3 pb-8 flex flex-col gap-1 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-center pt-2 pb-4 w-full" onClick={() => setIsMoreMenuOpen(false)}>
              <div className="w-12 h-1.5 bg-brand-light rounded-full" />
            </div>
            <button
              onClick={() => { setActiveTab('hoses'); setIsMoreMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-base rounded-xl transition-colors ${
                (activeTab === 'hoses' || activeTab === 'hose_form') ? 'bg-brand-light text-brand-blue font-medium' : 'text-brand-blue hover:bg-brand-light hover:opacity-80'
              }`}
            >
              <Box className="h-5 w-5" /> Mangueiras
            </button>
            <button
              onClick={() => { setActiveTab('detectors'); setIsMoreMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-base rounded-xl transition-colors ${
                (activeTab === 'detectors' || activeTab === 'detector_form') ? 'bg-brand-light text-brand-blue font-medium' : 'text-brand-blue hover:bg-brand-light hover:opacity-80'
              }`}
            >
              <Radio className="h-5 w-5" /> Detectores
            </button>
            <button
              onClick={() => { setActiveTab('amplifiers'); setIsMoreMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-base rounded-xl transition-colors ${
                (activeTab === 'amplifiers' || activeTab === 'amplifier_form') ? 'bg-brand-light text-brand-blue font-medium' : 'text-brand-blue hover:bg-brand-light hover:opacity-80'
              }`}
            >
              <Speaker className="h-5 w-5" /> Amplificadores
            </button>
            <button
              onClick={() => { setActiveTab('inspecoes_antigas'); setIsMoreMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-base rounded-xl transition-colors ${
                activeTab === 'inspecoes_antigas' ? 'bg-brand-light text-brand-blue font-medium' : 'text-brand-blue hover:bg-brand-light hover:opacity-80'
              }`}
            >
              <ClipboardList className="h-5 w-5" /> Histórico Inspeções
            </button>
            <button
              onClick={() => { setActiveTab('brigada'); setIsMoreMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-base rounded-xl transition-colors ${
                activeTab === 'brigada' ? 'bg-brand-light text-brand-blue font-medium' : 'text-brand-blue hover:bg-brand-light hover:opacity-80'
              }`}
            >
              <Users className="h-5 w-5" /> Brigada EAD
            </button>
            <button
              onClick={() => { setActiveTab('faltas_cursos'); setIsMoreMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-base rounded-xl transition-colors ${
                (activeTab === 'faltas_cursos' || activeTab === 'falta_form') ? 'bg-brand-light text-brand-blue font-medium' : 'text-brand-blue hover:bg-brand-light hover:opacity-80'
              }`}
            >
              <CalendarClock className="h-5 w-5" /> Cursos e Faltas
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

