import { Thermometer, Droplets, Sun, Smartphone, AlertCircle, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Giám sát Nhiệt độ",
      description: "Theo dõi và điều chỉnh nhiệt độ tự động để tạo môi trường phát triển tối ưu cho nấm.",
      color: "text-red-500",
    },
    {
      icon: Droplets,
      title: "Kiểm soát Độ ẩm",
      description: "Duy trì độ ẩm không khí ổn định, đảm bảo điều kiện lý tưởng cho quá trình sinh trưởng.",
      color: "text-blue-500",
    },
    {
      icon: Sun,
      title: "Điều khiển Ánh sáng",
      description: "Quản lý cường độ và thời gian chiếu sáng phù hợp với từng giai đoạn phát triển.",
      color: "text-yellow-500",
    },
    {
      icon: Smartphone,
      title: "Điều khiển từ xa",
      description: "Quản lý hệ thống mọi lúc mọi nơi qua ứng dụng di động hoặc web browser.",
      color: "text-primary",
    },
    {
      icon: AlertCircle,
      title: "Cảnh báo thông minh",
      description: "Nhận thông báo ngay lập tức qua SMS, Email khi có bất thường về môi trường.",
      color: "text-accent",
    },
    {
      icon: BarChart3,
      title: "Phân tích dữ liệu",
      description: "Biểu đồ trực quan, báo cáo chi tiết và dự báo xu hướng dựa trên AI.",
      color: "text-primary-light",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tính năng & Công nghệ
          </h2>
          <p className="text-lg text-muted-foreground">
            Hệ thống IoT toàn diện với dashboard giám sát, ứng dụng di động và trí tuệ nhân tạo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-border hover:border-primary/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="mt-16 p-8 bg-gradient-earth rounded-2xl">
          <div className="text-center text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Công nghệ hiện đại</h3>
            <p className="text-lg mb-6 opacity-90">
              Sử dụng giao thức truyền dữ liệu tiên tiến
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="bg-white/20 px-4 py-2 rounded-full">WiFi</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">LoRa</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">NB-IoT</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">AI & ML</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Cloud Computing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;