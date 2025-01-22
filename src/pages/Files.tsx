import React, { useState, useCallback } from 'react';
import Sidebar from '@/components/Sidebar';
import { FileText, Upload, Info, Trash2, Search, X } from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: Date;
}

const Files = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  }, []);

  const handleFiles = (newFiles: File[]) => {
    const validTypes = ['application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    const validFiles = newFiles.filter(file => validTypes.includes(file.type));
    
    if (validFiles.length < newFiles.length) {
      // Could add a toast notification here for invalid files
      console.warn('Some files were skipped due to invalid format');
    }

    const newFileItems: FileItem[] = validFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date()
    }));

    setFiles(prev => [...prev, ...newFileItems]);
  };

  const deleteFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#1A1B1E] bg-gradient-to-br from-[#1A1B1E] via-[#1A1B1E] to-[#7C3AED]/5 flex">
      <Sidebar />
      
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header with Search */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center shadow-lg shadow-[#7C3AED]/20">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                Knowledge Base
              </h1>
              <p className="text-gray-400">Knowledge base is a bank of files that are accessible by your assistants.</p>
              <p className="text-gray-400">You can upload a PDF, etc., and attach it to your assistants for more context during conversations.</p>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#25262B]/50 border border-[#2C2D32] rounded-xl py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all duration-300"
              />
            </div>
          </div>

          {/* Upload Area */}
          <div 
            className={`bg-gradient-to-br from-[#25262B]/50 via-[#25262B]/30 to-[#25262B]/50 border border-[#2C2D32] rounded-2xl p-8 mb-8 hover:border-[#7C3AED]/30 transition-all duration-300 backdrop-blur-xl transform hover:scale-[1.01] ${
              isDragging ? 'border-[#7C3AED] bg-[#25262B]/80 scale-[1.02]' : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="border-2 border-dashed border-[#2C2D32] rounded-xl p-8 text-center hover:border-[#7C3AED]/30 transition-all duration-300">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2C2D32] to-[#333438] rounded-2xl flex items-center justify-center group-hover:bg-[#333438] transition-all duration-300 ring-4 ring-[#2C2D32]/50 transform hover:scale-110">
                  <Upload className="w-8 h-8 text-[#7C3AED]" />
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 text-lg">Drag and drop a file here or click to select file locally.</p>
                  <p className="text-sm text-gray-500">Supported formats: PDF, TXT, DOC, DOCX</p>
                </div>
                <label className="cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.txt,.doc,.docx"
                    onChange={handleFileInput}
                    multiple
                  />
                  <div className="px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white rounded-xl hover:from-[#6D28D9] hover:to-[#4C1D95] transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-[#7C3AED]/20 hover:shadow-xl hover:shadow-[#7C3AED]/30">
                    <Upload className="w-5 h-5" />
                    <span className="font-medium">Browse files</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Recent Files */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium text-white flex items-center gap-2">
                Recent Files
                {files.length > 0 && (
                  <span className="px-2 py-1 bg-[#7C3AED]/10 rounded-md text-[#7C3AED] text-sm">
                    {files.length} files
                  </span>
                )}
              </h2>
            </div>
            
            {files.length === 0 ? (
              // Empty State
              <div className="bg-gradient-to-br from-[#25262B]/50 via-[#25262B]/30 to-[#25262B]/50 border border-[#2C2D32] rounded-2xl p-16 text-center hover:border-[#7C3AED]/30 transition-all duration-300 backdrop-blur-xl">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2C2D32] to-[#333438] rounded-2xl flex items-center justify-center transition-all duration-300 ring-4 ring-[#2C2D32]/50 transform hover:scale-110">
                    <FileText className="w-8 h-8 text-[#7C3AED]" />
                  </div>
                  <p className="text-gray-300 text-lg">No files uploaded yet</p>
                  <p className="text-sm text-gray-500">Your uploaded files will appear here</p>
                </div>
              </div>
            ) : (
              // File List
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFiles.map(file => (
                  <div 
                    key={file.id}
                    className="group bg-gradient-to-br from-[#25262B]/50 via-[#25262B]/30 to-[#25262B]/50 border border-[#2C2D32] rounded-xl p-4 hover:border-[#7C3AED]/30 transition-all duration-300 backdrop-blur-xl transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2C2D32] to-[#333438] rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <FileText className="w-6 h-6 text-[#7C3AED]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{file.name}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(file.uploadedAt).toLocaleDateString()} • {(file.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                      <button 
                        onClick={() => deleteFile(file.id)}
                        className="p-2 text-gray-500 hover:text-red-500 rounded-lg hover:bg-red-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Files; 