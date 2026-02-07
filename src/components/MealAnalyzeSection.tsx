import React, { useState, useRef } from 'react';
import { Upload, ImageIcon, Send } from 'lucide-react';
import HealthyAlternatives from './HealthyAlternatives';

type Status = 'idle' | 'uploading' | 'success' | 'error';

const WEBHOOK_URL = 'https://YOUR_N8N_WEBHOOK_URL';

const statusConfig: Record<Status, { label: string; className: string }> = {
  idle: { label: 'Ready to analyze', className: 'status-idle' },
  uploading: { label: 'Uploading…', className: 'status-uploading' },
  success: { label: 'Submitted successfully ✓', className: 'status-success' },
  error: { label: 'Something went wrong. Try again.', className: 'status-error' },
};

const MealAnalyzeSection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setStatus('idle');
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setStatus('uploading');

    try {
      const formData = new FormData();
      formData.append('meal_image', file);

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: formData,
      });

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped && dropped.type.startsWith('image/')) {
      setFile(dropped);
      setPreview(URL.createObjectURL(dropped));
      setStatus('idle');
    }
  };

  return (
    <section id="analyze" className="section-full py-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* Main upload card */}
          <div className="col-12 col-lg-7">
            <div className="card-themed p-4 p-md-5">
              <div className="d-flex align-items-center gap-2 mb-4">
                <ImageIcon size={24} className="text-primary-themed" />
                <h3 className="fw-bold text-themed mb-0">Analyze Your Meal</h3>
              </div>
              <p className="text-muted-themed mb-4">
                Upload a photo of your meal and we'll send it for analysis. Supported formats: JPG, PNG, WebP.
              </p>

              {/* Upload area */}
              <div
                className={`image-preview-container mb-4 ${preview ? 'has-image' : ''}`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                style={{ cursor: 'pointer' }}
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Meal preview"
                    className="img-fluid rounded"
                    style={{ maxHeight: 320, objectFit: 'cover', width: '100%' }}
                  />
                ) : (
                  <div className="py-5">
                    <Upload size={40} className="text-muted-themed mb-3" />
                    <p className="text-muted-themed mb-1 fw-medium">
                      Drag & drop your meal photo here
                    </p>
                    <p className="text-muted-themed small mb-0">or click to browse</p>
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="d-none"
              />

              {/* Status + Button */}
              <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
                <span className={`status-badge ${statusConfig[status].className}`}>
                  {statusConfig[status].label}
                </span>
                <button
                  className="btn btn-primary-themed d-flex align-items-center gap-2"
                  onClick={handleAnalyze}
                  disabled={!file || status === 'uploading'}
                >
                  <Send size={18} />
                  {status === 'uploading' ? 'Analyzing…' : 'Analyze Meal'}
                </button>
              </div>
            </div>
          </div>

          {/* Healthy alternatives sidebar */}
          <div className="col-12 col-lg-5">
            <div className="card-themed p-4">
              <HealthyAlternatives />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealAnalyzeSection;
