import profilePhoto from '@/assets/profile-photo.jpg';

export const ProfileBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto reveal">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <img 
              src={profilePhoto} 
              alt="Fareeha Fathima" 
              className="relative rounded-2xl w-48 h-56 md:w-56 md:h-64 object-cover border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Fareeha Fathima
            </h2>
            <p className="text-xl text-muted-foreground">
              Data Analytics & AI-Driven Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
