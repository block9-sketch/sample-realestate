import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Home as HomeIcon, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-secondary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="栃木県真岡市の美しい古民家" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block bg-secondary/90 text-primary px-4 py-1 mb-6 text-sm font-bold tracking-widest uppercase rounded-sm backdrop-blur-sm">
              栃木県真岡市・地域密着
            </div>
            <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 drop-shadow-lg">
              その空き家、<br />
              <span className="text-secondary">価値</span>に変えます。
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed font-medium text-shadow-sm">
              思い出の詰まった家を、ただの「空き家」で終わらせない。<br />
              地域を知り尽くしたプロフェッショナルが、<br />
              あなたの資産に新たな息吹を吹き込みます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary font-bold text-lg px-8 h-14 rounded-none transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  無料査定・相談依頼
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white font-bold text-lg px-8 h-14 rounded-none transition-all duration-300">
                  サービス一覧
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto mb-2"></div>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* Our Strengths Section */}
      <section id="strengths" className="py-24 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Strengths</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              選ばれる<span className="relative inline-block px-2 z-10 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-3 after:bg-secondary/30 after:-z-10">3つの理由</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              私たちは単なる仲介業者ではありません。<br />
              自らも大家業を営む「当事者意識」と、最新技術を駆使した「提案力」があります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Strength 1 */}
            <div className="group bg-white p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary/10 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="bg-primary/5 p-3 w-fit rounded-lg mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Users className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors">圧倒的な客付能力</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                賃貸経営の核心は「埋める力」。地域密着のネットワークと独自の集客ノウハウで、早期満室を実現します。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span>地元企業との太いパイプ</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span>ターゲットに響く募集図面作成</span>
                </li>
              </ul>
            </div>

            {/* Strength 2 */}
            <div className="group bg-white p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary/10 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="bg-primary/5 p-3 w-fit rounded-lg mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <HomeIcon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors">空き家再生のプロ</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                代表自らが8棟の大家業を営み、「空き家の駆け込み寺」を運営。実体験に基づいた、机上の空論ではない提案が可能です。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span>低コスト・高利回りのリノベ提案</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span>相続・権利関係の複雑な悩みも解決</span>
                </li>
              </ul>
            </div>

            {/* Strength 3 */}
            <div className="group bg-white p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary/10 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="bg-primary/5 p-3 w-fit rounded-lg mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <TrendingUp className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors">AI×不動産実務</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                最新のAI技術（画像生成・動画生成等）を駆使し、物件の隠れた魅力を最大限に引き出すプロモーションを行います。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span>バーチャルホームステージング</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span>AIによる市場分析と適正賃料査定</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Renovation */}
      <section className="relative h-[500px] flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/renovation.jpg')" }}>
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="container relative z-10 text-center text-white px-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            古いからこそ、<br />
            新しい価値がある。
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            築年数が古くても、諦める必要はありません。<br />
            リノベーションと適切な管理で、愛される住まいへと生まれ変わります。
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 h-12 rounded-none">
              空き家再生の事例を見る
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">事業内容</h2>
            </div>
            <p className="text-muted-foreground max-w-md text-right md:text-left">
              オーナー様の資産価値向上と、住まい手の快適な暮らし。<br />
              その両方を実現するための包括的なサービスを提供します。
            </p>
          </div>

          <div className="space-y-8">
            {/* Service 1 */}
            <div className="bg-white group overflow-hidden border border-border flex flex-col md:flex-row hover:shadow-lg transition-all duration-300">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img src="/images/consulting.jpg" alt="空き家管理・再生コンサルティング" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="text-secondary text-4xl opacity-30 font-sans font-black">01</span>
                  空き家管理・再生コンサルティング
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  放置された空き家の定期巡回から、リフォームによる収益化提案まで。
                  「売る」「貸す」「維持する」の最適解を、オーナー様と共に考えます。
                  相続対策や税務面でのサポートも提携専門家と連携して行います。
                </p>
                <Link href="/contact">
                  <a className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group-hover:translate-x-2 duration-300">
                    詳しく相談する <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white group overflow-hidden border border-border flex flex-col md:flex-row-reverse hover:shadow-lg transition-all duration-300">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img src="/images/hero-bg.jpg" alt="賃貸仲介・管理" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="text-secondary text-4xl opacity-30 font-sans font-black">02</span>
                  賃貸仲介・管理
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  入居者募集から契約、入居後のトラブル対応、退去精算まで一貫サポート。
                  高い入居率を維持するための物件メンテナンスや、トレンドを意識した設備導入も提案します。
                  AIを活用した魅力的な物件紹介で、早期成約を目指します。
                </p>
                <Link href="/contact">
                  <a className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group-hover:translate-x-2 duration-300">
                    管理プランを見る <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white group overflow-hidden border border-border flex flex-col md:flex-row hover:shadow-lg transition-all duration-300">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img src="/images/ai-tech.jpg" alt="売買仲介" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="text-secondary text-4xl opacity-30 font-sans font-black">03</span>
                  売買仲介
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  土地・戸建て・マンションの売買仲介。
                  地域相場を熟知した適正査定と、購入希望者への的確なアプローチで、
                  売主様・買主様双方にとって納得のいく取引を実現します。
                </p>
                <Link href="/contact">
                  <a className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group-hover:translate-x-2 duration-300">
                    査定を依頼する <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-secondary"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary"></div>
                <img src="/images/consulting.jpg" alt="代表写真" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">About Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
                「現場主義」で、<br />
                不動産の未来をつくる。
              </h2>
              <div className="space-y-6 text-white/90 leading-relaxed">
                <p>
                  はじめまして、杉原不動産 代表の杉原です。
                  私はこれまで、飲食チェーンの取締役として店舗開発や経営に携わり、
                  また個人としても8棟の物件を所有する大家業を営んでまいりました。
                </p>
                <p>
                  その経験の中で痛感したのは、「現場を知らない提案はいかに無力か」ということです。
                  机上の空論ではなく、実際に汗をかき、悩み、解決してきた経験があるからこそ、
                  オーナー様の本当の痛みがわかります。
                </p>
                <p>
                  真岡市という愛着ある地域で、一つでも多くの空き家を「価値ある資産」に変え、
                  街に明かりを灯していくこと。それが私の使命です。
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="font-serif font-bold text-xl">杉原 〇〇</p>
                <p className="text-sm text-secondary mt-1">代表取締役 / 不動産経営管理士</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            空き家のこと、賃貸経営のこと、売買のこと。<br />
            専門的な知識と豊富な経験で、あなたに最適な解決策をご提案します。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-10 h-16 text-lg rounded-none shadow-xl">
                <Users className="mr-2 w-5 h-5" /> 無料相談・査定依頼
              </Button>
            </Link>
            <a href="tel:0285XXXXXX">
              <Button size="lg" variant="outline" className="bg-white border-primary text-primary hover:bg-primary/5 font-bold px-10 h-16 text-lg rounded-none shadow-md">
                <ArrowRight className="mr-2 w-5 h-5" /> 0285-XX-XXXX
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">受付時間 9:00 - 18:00 (水曜定休)</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
