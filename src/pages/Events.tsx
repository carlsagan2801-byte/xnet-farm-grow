import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Hội thảo IoT cho Nông nghiệp 2024",
      date: "15/12/2024",
      time: "09:00 - 17:00",
      location: "Trung tâm Hội nghị Quốc gia, Hà Nội",
      attendees: "200+",
      description: "Giới thiệu các giải pháp IoT tiên tiến cho nông nghiệp thông minh, chia sẻ kinh nghiệm thực tiễn từ các nông hộ.",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Workshop: Thiết lập hệ thống IoT cho trồng nấm",
      date: "22/12/2024",
      time: "14:00 - 16:00",
      location: "Văn phòng XNetFarm, Hoàng Mai, HN",
      attendees: "50",
      description: "Hướng dẫn thực hành cài đặt và vận hành hệ thống IoT cho trồng nấm từ A đến Z.",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Triển lãm Công nghệ Nông nghiệp VietAg 2024",
      date: "05/11/2024",
      time: "08:00 - 18:00",
      location: "SECC, TP. Hồ Chí Minh",
      attendees: "5000+",
      description: "XNetFarm tham gia triển lãm với gian hàng trưng bày sản phẩm và demo trực tiếp hệ thống.",
      status: "completed",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sự kiện & <span className="bg-gradient-primary bg-clip-text text-transparent">Hoạt động</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Tham gia các sự kiện, hội thảo và workshop để cập nhật những xu hướng mới nhất 
              trong lĩnh vực IoT nông nghiệp và kết nối với cộng đồng.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {events.map((event) => (
              <Card 
                key={event.id} 
                className={`border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card ${
                  event.status === 'upcoming' ? 'ring-2 ring-accent/20' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          event.status === 'upcoming' 
                            ? 'bg-accent text-accent-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {event.status === 'upcoming' ? 'Sắp diễn ra' : 'Đã kết thúc'}
                        </span>
                      </div>
                      <CardTitle className="text-xl lg:text-2xl text-foreground">
                        {event.title}
                      </CardTitle>
                    </div>
                    {event.status === 'upcoming' && (
                      <Button className="bg-accent hover:bg-accent-light">
                        Đăng ký tham gia
                      </Button>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{event.attendees} người tham gia</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Đăng ký nhận thông báo sự kiện
            </h2>
            <p className="text-lg text-muted-foreground">
              Không bỏ lỡ những sự kiện và workshop hữu ích từ XNetFarm
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Nhập email của bạn" 
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-accent hover:bg-accent-light">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;