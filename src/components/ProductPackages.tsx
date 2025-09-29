import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProductPackages = () => {
  const packages = [
    {
      id: 1,
      name: "Gói Tiết kiệm",
      price: "1,999,000",
      description: "Tủ điều khiển thông thường cho khởi đầu",
      popular: false,
      features: [
        "1 Tủ điều khiển (TĐK)",
        "Điều khiển trực tiếp tại vườn",
        "Bật/tắt thiết bị thủ công",
        "Không có cảm biến",
        "Phù hợp cho nông hộ nhỏ",
      ],
      installation: "2.75 giờ",
    },
    {
      id: 2,
      name: "Gói Cơ bản",
      price: "3,099,000",
      description: "Quản lý thủ công với giám sát cơ bản",
      popular: false,
      features: [
        "1 Cảm biến môi trường",
        "1 Tủ điều khiển (TĐK)",
        "Hiển thị thông số trên màn hình",
        "Điều khiển bật/tắt thiết bị",
        "Giám sát nhiệt độ, độ ẩm",
      ],
      installation: "3 giờ",
    },
    {
      id: 3,
      name: "Gói Tiêu chuẩn",
      price: "9,390,000",
      description: "Quản lý tự động thông minh (Khuyến nghị)",
      popular: true,
      features: [
        "1 Thiết bị trung tâm (TBTT)",
        "Mỗi vườn: 1 TĐK + 1 Cảm biến",
        "Màn hình cảm ứng 5 inch",
        "Quản lý nhiều vườn",
        "Biểu đồ lịch sử dữ liệu",
        "Hệ thống luật tự động",
        "Điều khiển thông minh",
      ],
      installation: "4-5 giờ",
    },
    {
      id: 4,
      name: "Gói Nâng cao",
      price: "9,699,000",
      description: "Quản lý từ xa qua Internet",
      popular: false,
      features: [
        "Tất cả tính năng Gói Tiêu chuẩn",
        "Quản lý từ xa qua Internet",
        "Ứng dụng di động",
        "Cảnh báo qua SMS/Email",
        "Truy cập mọi lúc mọi nơi",
        "Tên miền riêng",
        "Hỗ trợ đám mây",
      ],
      installation: "5-6 giờ",
      note: "Chi phí thuê bao từ 200k/năm",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Gói sản phẩm & Giải pháp
          </h2>
          <p className="text-lg text-muted-foreground">
            Lựa chọn gói phù hợp với quy mô và nhu cầu của bạn. Từ giải pháp cơ bản đến hệ thống IoT hoàn chỉnh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative transition-all duration-300 hover:scale-105 hover:shadow-feature ${
                pkg.popular
                  ? "border-primary shadow-card ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Khuyến nghị
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {pkg.description}
                </CardDescription>
                <div className="pt-2">
                  <span className="text-3xl font-bold text-primary">
                    {pkg.price.toLocaleString()}₫
                  </span>
                  {pkg.note && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {pkg.note}
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}

                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Lắp đặt:</span>
                    <span className="font-medium text-foreground">{pkg.installation}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-accent hover:bg-accent-light"
                      : "bg-primary hover:bg-primary-light"
                  } transition-colors group`}
                >
                  Chọn gói này
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Cần tư vấn để chọn gói phù hợp? Liên hệ với chúng tôi ngay!
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Tư vấn miễn phí
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPackages;