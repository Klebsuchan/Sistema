import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(
  /const handleClearAllEvents = \(\) => \{[\s\S]*?return \[\];\s*\}\);\s*\};/,
  `const handleClearAllEvents = () => {
    confirmAction('Limpar Todos os Eventos', 'Tem certeza que deseja apagar todas as ocorrências? Esta ação é irreversível.', () => {
      setEvents(prev => {
        if (prev.length === 0) return prev;
        setTimeout(() => addLog('DELETE', 'TODOS', 'Apagou todos os eventos do sistema'), 0);
        return [];
      });
      toast.success('Todos os eventos apagados');
    });
  };`
);

code = code.replace(
  /const handleClearHistory = \(\) => \{[\s\S]*?return \[\];\s*\}\);\s*\};/,
  `const handleClearHistory = () => {
    confirmAction('Limpar Histórico', 'Tem certeza que deseja apagar o histórico de auditoria? Esta ação é irreversível.', () => {
      setAuditLogs(prev => {
        if (prev.length === 0) return prev;
        return [];
      });
      toast.success('Histórico limpo');
    });
  };`
);

fs.writeFileSync('src/App.tsx', code);
console.log("App.tsx updated for clear events");
