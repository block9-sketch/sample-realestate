import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("お問い合わせを受け付けました。担当者より折り返しご連絡いたします。");
      // Reset form logic would go here
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary pt-32 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663305741270/tSZqWrBudaPJdtJp.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container relative z-10 text-center">
          <h1 className="font-serif font-bold text-3xl md:text-5xl mb-4">お問い合わせ</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            不動産に関するご相談、査定依頼など、お気軽にお問い合わせください。<br />
            秘密厳守にて承ります。
          </p>
        </div>
      </div>

      <div className="container py-16 max-w-3xl mx-auto">
        <div className="bg-white p-8 md:p-12 shadow-lg border-t-4 border-secondary">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="space-y-4">
              <Label className="text-base font-bold text-primary">ご相談内容 <span className="text-red-500">*</span></Label>
              <Select required>
                <SelectTrigger className="w-full h-12 text-base">
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="satei">査定依頼（売却・賃貸）</SelectItem>
                  <SelectItem value="akiya">空き家活用・管理相談</SelectItem>
                  <SelectItem value="buy">物件購入の相談</SelectItem>
                  <SelectItem value="rent">お部屋探しの相談</SelectItem>
                  <SelectItem value="other">その他のお問い合わせ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-bold text-primary">お名前 <span className="text-red-500">*</span></Label>
                <Input id="name" required placeholder="例：サンプル 太郎" className="h-12 text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kana" className="text-base font-bold text-primary">フリガナ <span className="text-red-500">*</span></Label>
                <Input id="kana" required placeholder="例：サンプル タロウ" className="h-12 text-base" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-bold text-primary">メールアドレス <span className="text-red-500">*</span></Label>
                <Input id="email" type="email" required placeholder="例：info@example.com" className="h-12 text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tel" className="text-base font-bold text-primary">電話番号 <span className="text-red-500">*</span></Label>
                <Input id="tel" type="tel" required placeholder="例：090-1234-5678" className="h-12 text-base" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-bold text-primary">お問い合わせ詳細</Label>
              <Textarea id="message" placeholder="ご相談内容の詳細や、連絡のつきやすい時間帯などをご記入ください。" className="min-h-[150px] text-base leading-relaxed" />
            </div>

            <div className="flex items-start gap-2 pt-4">
              <Checkbox id="privacy" required className="mt-1" />
              <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-normal cursor-pointer">
                <a href="#" className="text-primary underline hover:text-secondary">プライバシーポリシー</a>に同意の上、送信します。
              </Label>
            </div>

            <div className="pt-4 text-center">
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full md:w-auto min-w-[240px] h-14 text-lg font-bold bg-primary text-white hover:bg-primary/90 rounded-none shadow-md transition-all hover:-translate-y-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    この内容で送信する
                  </>
                )}
              </Button>
            </div>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
