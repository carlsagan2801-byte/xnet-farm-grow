import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mushrooms.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hệ thống IoT trồng nấm thông minh" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">
                XNetFarm - giải pháp tự động hóa cho nông trại
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Hệ thống giám sát và điều khiển tự động nhiệt độ, độ ẩm, ánh sáng cho vườn nấm. 
              Tối ưu năng suất, tiết kiệm chi phí với công nghệ IoT tiên tiến.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light transition-all duration-300 shadow-feature group"
              >
                Xem giải pháp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Đặt hàng với ưu đãi ngay
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8 animate-slide-up">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Độ chính xác cảm biến</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Giám sát liên tục</div>
              </div>
              <div className="text-center lg:text-left col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Tiết kiệm chi phí</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;