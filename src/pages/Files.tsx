import React, { useState, useCallback, useEffect } from "react";
import { RiUpload2Line, RiFileTextLine, RiCloseLine } from "react-icons/ri";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import DashboardLayout from "@/components/DashboardLayout";
import { token } from "@/lib/token";

const Files = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchFileDetails = async (id) => {
    try {
      const response = await axios.get(`https://api.vapi.ai/file/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSelectedFile(response.data);
    } catch (err) {
      console.error("Error fetching file details:", err);
      setError("Failed to fetch file details. Please try again.");
    }
  };

  const fetchRecentFiles = async () => {
    try {
      const response = await axios.get("https://api.vapi.ai/file", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUploadedFiles(response.data as any[]);
    } catch (err) {
      console.error("Error fetching files:", err);
      setError("Failed to fetch recent files. Please try again.");
    }
  };

  useEffect(() => {
    fetchRecentFiles();
  }, []);

  const onDrop = useCallback(async (acceptedFiles) => {
    setError("");
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);

      const response = await axios.post("https://api.vapi.ai/file", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const uploadedFile = response.data;
      setUploadedFiles((prevFiles) => [...prevFiles, uploadedFile]);
    } catch (err) {
      console.error("Upload error:", err);
      setError("Failed to upload the file. Please try again.");
    } finally {
      setUploading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "text/plain": [".txt"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
  });

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#1A1B1E] bg-gradient-to-br from-[#1A1B1E] via-[#1A1B1E] to-[#7C3AED]/5 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-[#25262B]/50 via-[#25262B]/30 to-[#25262B]/50 border border-[#2C2D32] rounded-xl p-8 mb-6 hover:border-[#7C3AED]/30 transition-all duration-300 backdrop-blur-xl">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center shadow-lg shadow-[#7C3AED]/20">
                <RiFileTextLine className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-semibold text-white mb-4">
                Knowledge Base
              </h1>
              <p className="text-gray-400 text-base mb-4 max-w-2xl">
                Knowledge base is a bank of files that are accessible by your
                assistants.
              </p>
              <p className="text-gray-400 text-base max-w-2xl">
                You can upload a PDF, etc., and attach it to your assistants for
                more context during conversations.
              </p>
            </div>

            {/* Upload Area */}
            <div
              {...getRootProps()}
              className={`
              bg-gradient-to-br from-[#25262B]/50 via-[#25262B]/30 to-[#25262B]/50 border border-[#2C2D32] rounded-2xl p-8 transition-all duration-300 backdrop-blur-xl transform hover:scale-[1.01] ${
                isDragActive
                  ? "border-[#7C3AED] bg-[#25262B]/80 scale-[1.02]"
                  : ""
              }
            `}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-[#2C2D32] to-[#333438] rounded-lg flex items-center justify-center group-hover:bg-[#333438] transition-all duration-300 ring-4 ring-[#2C2D32]/50 transform hover:scale-110">
                  <RiUpload2Line className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <p className="text-gray-300 mb-2">
                  Drag and drop a file here or click to select file locally.
                </p>
                <p className="text-sm text-gray-500">
                  Supported formats: PDF, TXT, DOC, DOCX
                </p>
                {uploading && (
                  <p className="text-sm text-[#7C3AED]">Uploading...</p>
                )}
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
            </div>
          </div>

          {/* Recent Files Section */}
          <div className="bg-gradient-to-br from-[#25262B]/50 via-[#25262B]/30 to-[#25262B]/50 border border-[#2C2D32] rounded-xl p-6 hover:border-[#7C3AED]/30 transition-all duration-300 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Recent Files</h2>
              <div className="text-sm text-gray-500">
                {uploadedFiles.length} file{uploadedFiles.length !== 1 && "s"}
              </div>
            </div>

            {uploadedFiles.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-[#2C2D32] rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#2C2D32] to-[#333438] rounded-lg flex items-center justify-center transition-all duration-300 ring-4 ring-[#2C2D32]/50 transform hover:scale-110">
                  <RiFileTextLine className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <p className="text-gray-300 mb-2">No files uploaded yet</p>
                <p className="text-sm text-gray-500">
                  Your uploaded files will appear here
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={file.id || index}
                    className="flex items-center justify-between p-4 bg-gradient-to-br from-[#25262B]/50 via-[#25262B]/30 to-[#25262B]/50 border border-[#2C2D32] rounded-lg hover:border-[#7C3AED]/30 transition-all duration-300 backdrop-blur-xl transform hover:scale-[1.02]"
                  >
                    <div
                      className="flex items-center space-x-3"
                      onClick={() => fetchFileDetails(file.id)}
                    >
                      <RiFileTextLine className="w-5 h-5 text-[#7C3AED]" />
                      <div>
                        <p className="font-medium text-white">
                          {file.name.length > 20
                            ? file.name.substring(0, 20) + "..."
                            : file.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(file.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <button
                      className="p-2 text-gray-500 hover:text-red-500 rounded-lg hover:bg-red-500/10 transition-all duration-300"
                      onClick={async () => {
                        try {
                          await axios.delete(
                            `https://api.vapi.ai/file/${file.id}`,
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          );
                          setUploadedFiles((files) =>
                            files.filter((f) => f.id !== file.id)
                          );
                        } catch (err) {
                          console.error("Error deleting file:", err);
                          setError(
                            "Failed to delete the file. Please try again."
                          );
                        }
                      }}
                    >
                      <RiCloseLine className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            {selectedFile && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-gradient-to-br from-[#25262B]/50 via-[#25262B]/30 to-[#25262B]/50 rounded-xl shadow-lg p-6 max-w-lg w-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      File Details
                    </h3>
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <RiCloseLine className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={selectedFile.name}
                          onChange={(e) => {
                            const newName = e.target.value.endsWith(".pdf")
                              ? e.target.value
                              : `${e.target.value}.pdf`;
                            setSelectedFile({
                              ...selectedFile,
                              name: newName,
                            });
                          }}
                          className="w-full px-3 py-2 border border-[#2C2D32] rounded-md focus:ring-[#7C3AED] focus:border-[#7C3AED]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-400">
                      <p>
                        <strong>ID:</strong> {selectedFile.id}
                      </p>
                      <p>
                        <strong>Name:</strong> {selectedFile.name}
                      </p>
                      <p>
                        <strong>Size:</strong> {selectedFile.bytes} bytes
                      </p>
                      <p>
                        <strong>MIME Type:</strong> {selectedFile.mimetype}
                      </p>
                      <p>
                        <strong>Status:</strong> {selectedFile.status}
                      </p>
                      <p>
                        <strong>Created:</strong>{" "}
                        {new Date(selectedFile.createdAt).toLocaleString()}
                      </p>
                      <p>
                        <strong>Updated:</strong>{" "}
                        {new Date(selectedFile.updatedAt).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 gap-4">
                      <a
                        href={selectedFile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] transition-all duration-300"
                      >
                        Download File
                      </a>
                      <button
                        onClick={async () => {
                          try {
                            const nameWithPdf = selectedFile.name.endsWith(
                              ".pdf"
                            )
                              ? selectedFile.name
                              : `${selectedFile.name}.pdf`;
                            const response = await axios.patch(
                              `https://api.vapi.ai/file/${selectedFile.id}`,
                              {
                                name: nameWithPdf,
                              },
                              {
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                  "Content-Type": "application/json",
                                },
                              }
                            );
                            setSelectedFile(response.data);
                            setUploadedFiles((files) =>
                              files.map((f) =>
                                f.id === selectedFile.id ? response.data : f
                              )
                            );
                          } catch (err) {
                            setError("Failed to update file details");
                          }
                        }}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] transition-all duration-300"
                      >
                        Save Changes
                      </button>
                      {error && <p className="text-sm text-red-500">{error}</p>}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Files;
