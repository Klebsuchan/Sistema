import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(
  /const handleDeleteEvent = \(id: string\) => \{[\s\S]*?addLog\('DELETE'[^;]+;[\s\n]*\};/,
  `const handleDeleteEvent = (id: string) => {
    confirmAction('Excluir Ocorrência', 'Tem certeza que deseja excluir esta ocorrência? Esta ação não pode ser desfeita.', () => {
      setEvents(prev => prev.filter(ev => ev.id !== id));
      addLog('DELETE', id, \`Excluiu evento \${id}\`);
      toast.success('Excluído com sucesso');
    });
  };`
);

fs.writeFileSync('src/App.tsx', code);
console.log("App.tsx updated for handleDeleteEvent");
