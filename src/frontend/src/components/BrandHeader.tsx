export function BrandHeader() {
  return (
    <header className="mb-8 text-center">
      <div className="mb-6 flex justify-center">
        <img
          src="/assets/generated/azhari-logo.dim_512x512.png"
          alt="Azhari Tours & Travels Logo"
          className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 font-display">
        Azhari Tours & Travels
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground font-medium">
        Azhari Hajj Umrah Ziyarat
      </p>
      <div className="mt-6 rounded-2xl overflow-hidden shadow-medium">
        <img
          src="/assets/generated/azhari-hero.dim_1200x600.png"
          alt="Hajj and Umrah Services"
          className="w-full h-auto"
        />
      </div>
    </header>
  );
}
