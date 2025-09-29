import { Users, Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Về <span className="bg-gradient-primary bg-clip-text text-transparent">XNetFarm</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Chúng tôi là đội ngũ chuyên gia công nghệ với sứ mệnh đem công nghệ IoT đến với nông nghiệp Việt Nam, 
                giúp nông dân nâng cao năng suất và tối ưu chi phí sản xuất.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Câu chuyện của chúng tôi
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    XNetFarm được thành lập với mong muốn mang công nghệ IoT tiên tiến đến với 
                    nông nghiệp Việt Nam. Chúng tôi nhận thấy rằng nhiều nông hộ vẫn đang gặp khó khăn 
                    trong việc quản lý môi trường canh tác, đặc biệt là trong lĩnh vực trồng nấm.
                  </p>
                  <p>
                    Với kinh nghiệm sâu sắc về công nghệ IoT và hiểu biết về nhu cầu thực tế của 
                    nông dân, chúng tôi đã phát triển hệ thống giám sát và điều khiển tự động 
                    giúp tối ưu hóa điều kiện môi trường, nâng cao năng suất và giảm thiểu rủi ro.
                  </p>
                  <p>
                    Hành trình của chúng tôi bắt đầu từ việc nghiên cứu và thử nghiệm tại các 
                    nông trại thực tế, thu thập phản hồi từ nông dân để không ngừng cải tiến sản phẩm.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-earth rounded-2xl p-8 text-primary-foreground">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-sm opacity-90">Nông hộ tin dùng</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">99%</div>
                      <div className="text-sm opacity-90">Độ tin cậy hệ thống</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">Hỗ trợ kỹ thuật</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">3+</div>
                      <div className="text-sm opacity-90">Năm kinh nghiệm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Sứ mệnh</h3>
                <p className="text-muted-foreground">
                  Đem công nghệ IoT đến với nông nghiệp, hỗ trợ nông dân nâng cao năng suất 
                  và tiết kiệm chi phí thông qua giải pháp tự động hóa thông minh.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                  <Eye className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tầm nhìn</h3>
                <p className="text-muted-foreground">
                  Trở thành đơn vị tiên phong trong lĩnh vực IoT nông nghiệp tại Việt Nam, 
                  góp phần hiện đại hóa ngành nông nghiệp.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Giá trị cốt lõi</h3>
                <p className="text-muted-foreground">
                  Đổi mới - Chất lượng - Tin cậy. Chúng tôi cam kết mang đến giải pháp 
                  công nghệ tốt nhất với dịch vụ hỗ trợ tận tâm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Đội ngũ phát triển
              </h2>
              <p className="text-lg text-muted-foreground">
                Đội ngũ chuyên gia có kinh nghiệm sâu sắc trong lĩnh vực IoT và nông nghiệp
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Nguyễn Văn A",
                  role: "CEO & Founder",
                  description: "10+ năm kinh nghiệm IoT, chuyên gia về hệ thống tự động hóa"
                },
                {
                  name: "Trần Thị B",
                  role: "CTO",
                  description: "Chuyên gia phần mềm, AI và machine learning cho nông nghiệp"
                },
                {
                  name: "Lê Văn C",
                  role: "Head of Hardware",
                  description: "Kỹ sư điện tử với 8+ năm kinh nghiệm thiết kế cảm biến IoT"
                }
              ].map((member, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
};

export default About;