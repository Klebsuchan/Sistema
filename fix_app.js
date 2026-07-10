import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Undo the incorrect replacement
code = code.replace(
  `  if (!isAuthenticated) {\n    return (\n    <>\n      <Toaster position="top-right" toastOptions={{ duration: 4000, style: { background: '#1B2042', color: '#fff' }, success: { style: { background: '#059669' } }, error: { style: { background: '#A51D1A' } } }} />\n      <ConfirmModal isOpen={confirmDialog.isOpen} title={confirmDialog.title} message={confirmDialog.message} onConfirm={confirmDialog.onConfirm} onCancel={() => setConfirmDialog(prev => ({ ...prev, isOpen: false }))} />\n      <div className="min-h-screen bg-brand-light font-sans text-brand-blue flex items-center justify-center p-4">`,
  `  if (!isAuthenticated) {\n    return (\n      <div className="min-h-screen bg-brand-light font-sans text-brand-blue flex items-center justify-center p-4">`
);

// We need to also remove the incorrect fragment closing
code = code.replace(
  `            </button>\n          </form>\n        </div>\n      </div>\n    </Layout>\n    </>\n  );`,
  `            </button>\n          </form>\n        </div>\n      </div>\n    );\n`
);

// Now apply it to the main return
code = code.replace(
  `  return (\n    <Layout`,
  `  return (\n    <>\n      <Toaster position="top-right" toastOptions={{ duration: 4000, style: { background: '#1B2042', color: '#fff' }, success: { style: { background: '#059669' } }, error: { style: { background: '#A51D1A' } } }} />\n      <ConfirmModal isOpen={confirmDialog.isOpen} title={confirmDialog.title} message={confirmDialog.message} onConfirm={confirmDialog.onConfirm} onCancel={() => setConfirmDialog(prev => ({ ...prev, isOpen: false }))} />\n    <Layout`
);

// add the fragment close
code = code.replace(
  `    </Layout>\n  );`,
  `    </Layout>\n    </>\n  );`
);

fs.writeFileSync('src/App.tsx', code);
console.log("App.tsx fixed");
