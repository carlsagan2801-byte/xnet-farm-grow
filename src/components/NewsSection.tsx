import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Xu hướng nông nghiệp thông minh",
      description: "Những ứng dụng tiên tiến nhất trong việc quản lý sản xuất nông nghiệp hiện nay",
      image: "/api/placeholder/300/200",
      tag: "Đọc thêm"
    },
    {
      id: 2,
      title: "Hướng dẫn trồng nấm tại nhà",
      description: "Những kỹ thuật cơ bản để bắt đầu trồng nấm với hiệu quả cao",
      image: "/api/placeholder/300/200", 
      tag: "Đọc thêm"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Tin tức & kiến thức</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {news.map((item) => (
            <Card key={item.id} className="border border-border hover:border-primary/50 transition-colors overflow-hidden">
              <div className="w-full h-48 bg-gradient-earth"></div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  {item.tag}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;