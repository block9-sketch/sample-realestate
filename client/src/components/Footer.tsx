import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-primary p-1.5 rounded-sm">
                <span className="font-serif font-bold text-xl">サ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none">サンプル不動産</span>
                <span className="text-xs tracking-widest uppercase text-white/70">Sugihara Real Estate</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              地域に根ざし、オーナー様の資産価値最大化と空き家再生に取り組む、
              真岡市の不動産プロフェッショナル。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 text-secondary">Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/#strengths" className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  当社の強み
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  サービス案内
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 text-secondary">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">
                  〒321-4300<br />
                  栃木県真岡市（詳細住所）
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/90 text-sm">0285-XX-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/90 text-sm">info@sample-re.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/90 text-sm">9:00 - 18:00 (水曜定休)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} Sample Real Estate. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white text-xs">プライバシーポリシー</a>
            <a href="#" className="text-white/60 hover:text-white text-xs">サイトマップ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
