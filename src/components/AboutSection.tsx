import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Giới thiệu</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary/30 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Về chúng tôi</h3>
                  <p className="text-muted-foreground">
                    Chúng tôi tạo ra giải pháp công nghệ để nông nghiệp thông minh,
                    giúp tối ưu hóa quy trình canh tác và nâng cao hiệu suất.
                  </p>
                </div>
              </div>
              
              <Button 
                className="bg-accent hover:bg-accent-light text-accent-foreground"
              >
                Đọc thêm
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-64 bg-gradient-earth rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                <p className="text-white/80">Hình ảnh minh họa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;