import { ImageIcon } from "lucide-react";
import { useState } from "react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  loading?: "eager" | "lazy";
  objectFit?: "cover" | "contain";
}

export function ResponsiveImage({
  src,
  alt,
  className = "",
  fallback,
  loading = "lazy",
  objectFit = "cover",
}: ResponsiveImageProps) {
  const [hasError, setHasError] = useState(false);
  const imageSrc = hasError ? fallback : src;

  if (!imageSrc || hasError) {
    return (
      <div
        className={`flex min-h-40 items-center justify-center rounded-lg border border-dashed border-brand-line bg-gradient-to-br from-brand-mist to-white text-center text-sm text-slate-500 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="grid place-items-center gap-2 px-4">
          <ImageIcon className="h-8 w-8 text-brand-primary" aria-hidden="true" />
          <span>Imagen editable</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading={loading}
      onError={() => setHasError(true)}
      className={`max-w-full ${objectFit === "cover" ? "object-cover" : "object-contain"} ${className}`}
    />
  );
}
