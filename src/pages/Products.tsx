import ProductPackages from "@/components/ProductPackages";
import { Cpu, Wifi, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const equipment = [
    {
      icon: Cpu,
      name: "Cảm biến đa thông số",
      description: "Cảm biến tích hợp đo nhiệt độ, độ ẩm không khí và cường độ ánh sáng",
      specs: ["Độ chính xác: ±0.5°C", "Phạm vi: -40°C đến 80°C", "Độ ẩm: 0-100% RH", "Ánh sáng: 0-65535 Lux"],
    },
    {
      icon: Wifi,
      name: "Tủ điều khiển thông minh",
      description: "Tủ điều khiển tự động với khả năng kết nối không dây",
      specs: ["4-8 kênh relay", "Giao tiếp LoRa", "Màn hình LCD", "Chống nước IP65"],
    },
    {
      icon: Shield,
      name: "Thiết bị trung tâm",
      description: "Raspberry Pi 4 với màn hình cảm ứng để quản lý toàn bộ hệ thống",
      specs: ["Màn hình 7 inch", "RAM 4GB", "Wifi/Ethernet", "Lưu trữ 32GB"],
    },
    {
      icon: Zap,
      name: "Phụ kiện & Linh kiện",
      description: "Các thành phần hỗ trợ và linh kiện thay thế",
      specs: ["Dây kết nối", "Module LoRa", "Nguồn điện", "Vỏ bảo vệ"],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sản phẩm & <span className="bg-gradient-primary bg-clip-text text-transparent">Giải pháp</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Hệ thống IoT hoàn chỉnh cho trồng nấm với 4 gói giải pháp linh hoạt, 
              từ cơ bản đến nâng cao, phù hợp với mọi quy mô nông hộ.
            </p>
          </div>
        </div>
      </section>

      {/* Product Packages */}
      <ProductPackages />

      {/* Equipment Details */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Bộ kit & Thiết bị
            </h2>
            <p className="text-lg text-muted-foreground">
              Các thành phần chính trong hệ thống với thông số kỹ thuật chi tiết
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipment.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{item.name}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground mb-3">Thông số kỹ thuật:</h4>
                      <ul className="space-y-1">
                        {item.specs.map((spec, specIndex) => (
                          <li key={specIndex} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ứng dụng & Mở rộng
            </h2>
            <p className="text-lg text-muted-foreground">
              Hệ thống có thể áp dụng cho nhiều loại cây trồng khác nhau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-4xl">
                🍄
              </div>
              <h3 className="text-xl font-semibold text-foreground">Trồng nấm</h3>
              <p className="text-muted-foreground">
                Giải pháp chuyên biệt cho các loại nấm: nấm sò, nấm kim châm, nấm linh chi
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-gradient-earth rounded-2xl flex items-center justify-center text-4xl">
                🌿
              </div>
              <h3 className="text-xl font-semibold text-foreground">Dược liệu</h3>
              <p className="text-muted-foreground">
                Mở rộng trong tương lai cho các loại dược liệu quý như sâm, đảng sâm
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center text-4xl">
                🌸
              </div>
              <h3 className="text-xl font-semibold text-foreground">Hoa cảnh</h3>
              <p className="text-muted-foreground">
                Phát triển hệ thống cho trồng hoa lan, hoa hồng trong nhà kính
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;