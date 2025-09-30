import { Card, CardContent } from "@/components/ui/card";
import iotSensorsImage from "@/assets/iot-sensors.jpg";
import farmAccessoriesImage from "@/assets/farm-accessories.jpg";
import farmSolutionImage from "@/assets/farm-solution.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "IoT cho nấm",
      description: "Hệ thống tương tự dành cho việc trồng nấm với cảm biến và thiết bị chuyên dụng",
      image: iotSensorsImage
    },
    {
      id: 2,
      title: "Phụ kiện",
      description: "Cảm biến cho thiết bị theo dõi về tình trạng thiết bị của hệ thống",
      image: farmAccessoriesImage
    },
    {
      id: 3,
      title: "Giải pháp",
      description: "Ý tưởng liên quan đến hệ thống của cảm biến trực tiếp khung bao hệ thống",
      image: farmSolutionImage
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Sản phẩm</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;