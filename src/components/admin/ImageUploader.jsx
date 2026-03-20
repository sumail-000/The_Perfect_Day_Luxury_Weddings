import { useState, useRef } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function ImageUploader({ value, onChange, folder = "general", className = "" }) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

  const upload = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const name = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error } = await supabase.storage.from("images").upload(name, file, {
        cacheControl: "3600",
        upsert: false,
      });
      if (error) throw error;
      const { data: { publicUrl } } = supabase.storage.from("images").getPublicUrl(name);
      onChange(publicUrl);
    } catch (err) {
      alert("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) upload(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) upload(file);
  };

  return (
    <div className={className}>
      {value && (
        <div className="relative mb-3 overflow-hidden rounded-2xl border border-[#f1e1e7]">
          <img src={value} alt="Preview" className="h-48 w-full object-cover" />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 rounded-full bg-black/50 p-1.5 text-white transition hover:bg-black/70"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileRef.current?.click()}
        className={`flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed p-8 text-center transition ${
          dragOver
            ? "border-[#0fb7b1] bg-[#f0faf9]"
            : "border-[#eddce3] bg-[#fdfafa] hover:border-[#d4a8b8]"
        }`}
      >
        {uploading ? (
          <Loader2 className="h-8 w-8 animate-spin text-[#0fb7b1]" />
        ) : (
          <Upload className="h-8 w-8 text-[#b09099]" />
        )}
        <div className="font-body text-sm text-[#7b5e67]">
          {uploading ? "Uploading..." : "Click or drag image to upload"}
        </div>
        <div className="font-body text-xs text-[#b09099]">JPG, PNG, WebP</div>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
