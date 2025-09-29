import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const quickQuestions = [
    {
      id: 1,
      question: "Giá cả các gói sản phẩm như thế nào?",
      answer: "Chúng tôi có 4 gói sản phẩm: Gói Tiết kiệm (1.999.000đ), Gói Cơ bản (3.099.000đ), Gói Tiêu chuẩn (9.390.000đ), và Gói Nâng cao (9.699.000đ). Mỗi gói phù hợp với quy mô và nhu cầu khác nhau."
    },
    {
      id: 2,
      question: "Thời gian lắp đặt mất bao lâu?",
      answer: "Thời gian lắp đặt từ 2.75 giờ đến 6 giờ tùy thuộc vào gói sản phẩm bạn chọn. Gói Tiết kiệm: 2.75 giờ, Gói Cơ bản: 3 giờ, Gói Tiêu chuẩn: 4-5 giờ, Gói Nâng cao: 5-6 giờ."
    },
    {
      id: 3,
      question: "Hệ thống có hỗ trợ điều khiển từ xa không?",
      answer: "Có! Gói Nâng cao hỗ trợ điều khiển từ xa qua Internet với ứng dụng di động, cảnh báo qua SMS/Email, và truy cập mọi lúc mọi nơi với chi phí thuê bao từ 200k/năm."
    },
    {
      id: 4,
      question: "Làm sao để được tư vấn miễn phí?",
      answer: "Bạn có thể liên hệ với chúng tôi qua số điện thoại 1234280105 hoặc đến trực tiếp văn phòng tại 193 Vĩnh Hưng, Hoàng Mai, HN để được tư vấn miễn phí."
    },
    {
      id: 5,
      question: "Bảo hành sản phẩm như thế nào?",
      answer: "Tất cả sản phẩm của XNetFarm đều được bảo hành 12 tháng kể từ ngày lắp đặt. Chúng tôi cũng cung cấp dịch vụ bảo trì định kỳ và hỗ trợ kỹ thuật 24/7."
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-accent hover:bg-accent-light shadow-feature animate-pulse group"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 shadow-feature border-primary/20 animate-scale-in">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">
                Trợ lý XNetFarm 🤖
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  setSelectedQuestion(null);
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Chọn câu hỏi bên dưới để được hỗ trợ nhanh
            </p>
          </CardHeader>
          
          <CardContent className="space-y-3 max-h-64 overflow-y-auto">
            {!selectedQuestion ? (
              // Quick Questions
              <>
                {quickQuestions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedQuestion(item.answer)}
                    className="w-full text-left p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all duration-200 text-sm"
                  >
                    {item.question}
                  </button>
                ))}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Hoặc liên hệ trực tiếp: <strong>1234280105</strong>
                  </p>
                </div>
              </>
            ) : (
              // Answer Display
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    {selectedQuestion}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedQuestion(null)}
                    className="flex-1"
                  >
                    Câu hỏi khác
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent-light"
                  >
                    <Send className="h-4 w-4 mr-1" />
                    Liên hệ
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Chatbot;