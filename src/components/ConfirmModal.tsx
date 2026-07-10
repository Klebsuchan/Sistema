import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({ isOpen, title, message, onConfirm, onCancel }: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 text-brand-red rounded-lg">
              <AlertTriangle className="h-6 w-6 text-brand-red" />
            </div>
            <h3 className="font-bold text-brand-blue text-lg">{title}</h3>
          </div>
          <button onClick={onCancel} className="text-brand-gray hover:bg-brand-light p-1 rounded-md">
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-brand-gray text-sm mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} className="px-4 py-2 bg-brand-light text-brand-blue font-medium rounded-lg hover:opacity-80 transition-opacity text-sm">
            Cancelar
          </button>
          <button onClick={() => { onConfirm(); onCancel(); }} className="px-4 py-2 bg-brand-red text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm">
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
