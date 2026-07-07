import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

if (!content.includes('import { Layout }')) {
  content = content.replace(
    "import { SettingsView } from './components/SettingsView';",
    "import { SettingsView } from './components/SettingsView';\nimport { Layout } from './components/Layout';"
  );
}

// Find the return statement around line 430
const searchStr = '  return (\n    <div className="min-h-screen bg-brand-light font-sans text-brand-blue">';
const startIndex = content.indexOf(searchStr);

if (startIndex !== -1) {
  const newReturn = `
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
            onExport={(exts) => exportToStructuredExcel(events, exts, hoses, detectors, amplifiers, inspecoes, brigadistas, auditLogs, faltas, cursoDatas)}
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
            onExport={(h) => exportToStructuredExcel(events, extinguishers, h, detectors, amplifiers, inspecoes, brigadistas, auditLogs, faltas, cursoDatas)}
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
            onExport={(d) => exportToStructuredExcel(events, extinguishers, hoses, d, amplifiers, inspecoes, brigadistas, auditLogs, faltas, cursoDatas)}
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
            onExport={(amps) => exportToStructuredExcel(events, extinguishers, hoses, detectors, amps, inspecoes, brigadistas, auditLogs, faltas, cursoDatas)}
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
            onExport={(insps) => exportToStructuredExcel(events, extinguishers, hoses, detectors, amplifiers, insps, brigadistas, auditLogs, faltas, cursoDatas)}
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
export default App;
`;

  content = content.substring(0, startIndex) + newReturn;
  fs.writeFileSync('src/App.tsx', content);
  console.log('App.tsx layout patched');
} else {
  console.log('Could not find start index in App.tsx');
}
