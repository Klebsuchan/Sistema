import { Layout } from "./components/Layout";
import { SettingsView } from "./components/SettingsView";
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


const defaultSettings = {
  buildings: ['CD', 'Edifício Sede', 'Anexo', 'Geral'],
  sectors: ['C.C', 'Recepção', 'UTI', 'Emergência', 'Patrimônio', 'S.S'],
  reasons: ['Bateria Baixa', 'Fumaça', 'Teste', 'Manutenção'],
  extinguisherTypes: ['AP', 'CO2', 'PQS'],
  detectorTypes: ['Detector de Fumaça', 'Acionador Manual', 'Sirene']
};
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
  
  
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('hsvp_settings');
    if (saved) return JSON.parse(saved);
    return {
      buildings: ['CD', 'Edifício Sede', 'Anexo', 'Geral'],
      sectors: [],
      reasons: ['Bateria Baixa', 'Fumaça', 'Teste', 'Manutenção', 'Equipamento Removido'],
      detectorTypes: ['Acionador Manual', 'Detector de Fumaça', 'Sirene'],
      extinguisherTypes: ['ABC', 'CO2', 'AP', 'BC']
    };
  });

  useEffect(() => {
    localStorage.setItem('hsvp_settings', JSON.stringify(settings));
  }, [settings]);

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
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-brand-light max-w-md w-full">
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


  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginPassword('');
  };

  const getTabTitle = () => {
    switch(activeTab) {
      case 'dashboard': return 'Painel Geral';
      case 'data': return 'Lista de Ocorrências';
      case 'register': return 'Registrar Ocorrência';
      case 'extinguishers': case 'extinguisher_form': return 'Extintores';
      case 'hoses': case 'hose_form': return 'Mangueiras';
      case 'detectors': case 'detector_form': return 'Detectores';
      case 'amplifiers': case 'amplifier_form': return 'Amplificadores';
      case 'inspecoes_antigas': case 'inspecao_form': return 'Histórico de Inspeções';
      case 'brigada': case 'brigada_form': return 'Brigada EAD 2026';
      case 'faltas_cursos': case 'falta_form': case 'curso_form': return 'Cursos e Faltas (2026)';
      case 'settings': return 'Configurações do Sistema';
      default: return 'Painel de Ocorrências';
    }
  };

  const getTabDescription = () => {
    switch(activeTab) {
      case 'dashboard': return 'Análise estatística e acompanhamento.';
      case 'data': return 'Verifique informações detalhadas.';
      case 'register': return 'Preencha os dados da nova ocorrência.';
      case 'extinguishers': case 'extinguisher_form': return 'Gestão de extintores.';
      case 'settings': return 'Gerencie as opções de seleção do sistema.';
      default: return '';
    }
  };

  return (
    <Layout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onRestore={handleRestore}
      onBackup={handleBackup}
      onExport={handleExport}
      onLogout={handleLogout}
      isExporting={isExporting}
      title={getTabTitle()}
      description={getTabDescription()}
    >
        {activeTab === 'dashboard' && <Dashboard eventsData={events} />}
        {activeTab === 'data' && <DataView eventsData={events} onEdit={setEditingEvent} onDelete={handleDeleteEvent} onClearAll={handleClearAllEvents} onClearHistory={handleClearHistory} auditLogs={auditLogs} />}
        {activeTab === 'register' && <EventForm 
                 initialData={editingEvent} 
                 onSave={handleAddOrUpdateEvent} 
                 onCancel={() => setEditingEvent(null)} 
                 settings={settings}
               />}
        {activeTab === 'settings' && <SettingsView settings={settings} onSave={(newSettings) => { setSettings(newSettings); alert('Configurações salvas com sucesso!'); }} />}
        
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
            onDelete={(id) => {
              if (window.confirm('Tem certeza que deseja excluir?')) {
                setExtinguishers(prev => prev.filter(e => e.num_extintor !== id));
                safeAlert('Excluído com sucesso');
              }
            }}
            
          />
        )}
        {activeTab === 'extinguisher_form' && (
          <ExtinguisherForm settings={settings} initialData={editingExtinguisher} onSave={(ext) => {
            setExtinguishers(prev => {
              if (editingExtinguisher) {
                return prev.map(e => e.num_extintor === ext.num_extintor ? ext : e);
              }
              return [...prev, ext];
            });
            setActiveTab('extinguishers');
            safeAlert('Salvo com sucesso!');
          }} onCancel={() => setActiveTab('extinguishers')} />
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
              if (window.confirm('Excluir mangueira?')) {
                setHoses(prev => prev.filter(h => h.id !== id));
                safeAlert('Excluído com sucesso');
              }
            }}
            
          />
        )}
        {activeTab === 'hose_form' && (
          <HoseForm settings={settings} initialData={editingHose} onSave={(hose) => {
            setHoses(prev => {
              if (editingHose) return prev.map(h => h.id === hose.id ? hose : h);
              return [...prev, hose];
            });
            setActiveTab('hoses');
            safeAlert('Salvo com sucesso!');
          }} onCancel={() => setActiveTab('hoses')} />
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
              if (window.confirm('Excluir item?')) {
                setDetectors(prev => prev.filter(d => d.id !== id));
                safeAlert('Excluído com sucesso');
              }
            }}
            
          />
        )}
        {activeTab === 'detector_form' && (
          <DetectorForm settings={settings} initialData={editingDetector} onSave={(det) => {
            setDetectors(prev => {
              if (editingDetector) return prev.map(d => d.id === det.id ? det : d);
              return [...prev, det];
            });
            setActiveTab('detectors');
            safeAlert('Salvo com sucesso!');
          }} onCancel={() => setActiveTab('detectors')} />
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
              if (window.confirm('Excluir amplificador?')) {
                setAmplifiers(prev => prev.filter(a => a.id !== id));
                safeAlert('Excluído com sucesso');
              }
            }}
            
          />
        )}
        {activeTab === 'amplifier_form' && (
          <AmplifierForm settings={settings} initialData={editingAmplifier} onSave={(amp) => {
            setAmplifiers(prev => {
              if (editingAmplifier) return prev.map(a => a.id === amp.id ? amp : a);
              return [...prev, amp];
            });
            setActiveTab('amplifiers');
            safeAlert('Salvo com sucesso!');
          }} onCancel={() => setActiveTab('amplifiers')} />
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
              if(window.confirm('Excluir inspeção?')) {
                setInspecoes(prev => prev.filter(i => i.id !== id));
                safeAlert('Excluído');
              }
            }}
            
          />
        )}
        
        {activeTab === 'inspecao_form' && (
          <InspecaoForm settings={settings} initialData={editingInspecao} onSave={(insp) => {
            setInspecoes(prev => {
              if (editingInspecao) return prev.map(i => i.id === insp.id ? insp : i);
              return [insp, ...prev];
            });
            setActiveTab('inspecoes_antigas');
            safeAlert('Inspeção salva!');
          }} onCancel={() => setActiveTab('inspecoes_antigas')} />
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
        
        {/* Modais */}
        {editingEvent && activeTab !== 'register' && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-3xl my-8">
              <EventForm 
                 initialData={editingEvent} 
                 onSave={handleAddOrUpdateEvent} 
                 onCancel={() => setEditingEvent(null)} 
                 settings={settings}
               />
            </div>
          </div>
        )}
    </Layout>
  );
}
