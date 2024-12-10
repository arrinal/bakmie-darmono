'use client';

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface MenuViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuViewer({ isOpen, onClose }: MenuViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [width, setWidth] = useState(800);

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth > 1024 
        ? 800 
        : window.innerWidth > 768 
        ? 600 
        : window.innerWidth - 48;
      setWidth(newWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[1000px] max-h-[90vh] bg-white shadow-lg z-50 rounded-lg flex flex-col">
          <div className="sticky top-0 flex items-center justify-between p-4 bg-white border-b z-10">
            <Dialog.Title className="text-lg font-semibold">
              Menu Bakmie Darmono
            </Dialog.Title>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex justify-center">
              <Document
                file="/menu-bakmie-darmono.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex justify-center items-center h-96">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-800" />
                  </div>
                }
                error={
                  <div className="text-center text-red-600">
                    <p>Error loading menu. Please try again later.</p>
                  </div>
                }
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={width}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    className="mb-4 last:mb-0"
                  />
                ))}
              </Document>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 