import Image from "next/image";

export default function HeroSection({
  imageSrc = null,
  imageAlt = "",
  priority = false,
  className = "py-24",
  overlayClassName = "",
  children,
  imageSizes = "100vw",
  objectPosition = "50% 30%",
}) {
  const hasImage = Boolean(imageSrc);

  return (
    <section className={`relative overflow-hidden text-white ${className}`}>
      <div className="absolute inset-0">
        {hasImage ? (
          <>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priority}
              sizes={imageSizes}
              className="object-cover"
              style={{ objectPosition }}
              quality={80}
            />
            <div
              className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,19,31,0.45)_0%,_rgba(10,19,31,0.85)_100%)] ${overlayClassName}`}
            />
          </>
        ) : (
          <div
            className={`absolute inset-0 bg-[#0f2135] ${overlayClassName}`}
          />
        )}
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
