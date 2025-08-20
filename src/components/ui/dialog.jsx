// File: src/components/ui/dialog.jsx
import React from 'react';

export const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={() => onOpenChange(false)}>
      <div className="bg-white dark:bg-[#0e0e0e] p-6 rounded-2xl shadow-xl max-w-xl w-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ children }) => {
  return <div>{children}</div>;
};
