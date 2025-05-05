"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import posthog from "posthog-js";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";

console.log(`APP_VERSION: ${process.env.APP_VERSION}`);

export default function Home() {
    const handleTrackCta = (ctaType: string) => () => {
        posthog.capture("contact_us_clicked", { ctaType });
    };

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative flex h-[600px] items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/fly-clean.jpeg?height=600&width=1200"
                        alt="Clean modern living room"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
                    <div className="absolute bottom-0 h-24 w-full origin-bottom-right translate-y-24 skew-y-3 transform bg-white" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
                        Fly Clean
                    </h1>
                    <p className="mb-8 text-xl text-white md:text-2xl">
                        Vệ Sinh Chuyên Sâu – Tiêu Chuẩn Cao – Giá Cạnh Tranh!
                    </p>
                    <Button
                        onClick={handleTrackCta("hero")}
                        size="lg"
                        className="px-8 py-6 text-lg"
                    >
                        <Link href="#services">Xem các dịch vụ</Link>
                    </Button>
                </div>
            </section>

            {/* Services Section */}
            <section id="overview" className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-primary text-3xl font-medium tracking-wider uppercase">
                                Fly Clean
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                Cung cấp dịch vụ vệ sinh chuyên nghiệp hàng đầu
                                tại TP. Hồ Chí Minh, Việt Nam. Chúng tôi tự hào
                                mang đến giải pháp vệ sinh kỹ lưỡng và đáng tin
                                cậy, đáp ứng mọi nhu cầu của bạn. Dù là tổng vệ
                                sinh một lần hay bảo trì định kỳ, đội ngũ tận
                                tâm của chúng tôi luôn sử dụng kỹ thuật và thiết
                                bị hiện đại để đảm bảo không gian của bạn sạch
                                sẽ như mới. Trải nghiệm sự khác biệt cùng Fly –
                                nơi chất lượng và sự hài lòng của khách hàng
                                luôn được đặt lên hàng đầu.
                            </p>
                            <Link href="tel:0906865780">
                                <Button onClick={handleTrackCta("overview")}>
                                    Đặt lịch ngay!
                                </Button>
                            </Link>
                        </div>
                        <div className="relative h-[400px]">
                            <Image
                                src="/services.jpeg?height=400&width=500"
                                alt="Cleaning tools"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Cards */}
            <section id="services" className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="mb-12 text-center text-3xl font-bold">
                        Các dịch vụ của chúng tôi
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <ServiceCard
                            href="/dich-vu/giat-ghe-van-phong"
                            name="Giặt ghế văn phòng"
                            description=""
                            price="Từ 15.000đ"
                            imageUrl="/chairs.jpeg"
                        />
                        <ServiceCard
                            href="/dich-vu/giat-tham"
                            name="Giặt thảm"
                            description=""
                            price="Từ 95.000đ"
                            imageUrl="/carpet.jpeg"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-primary-foreground mb-6 text-3xl font-bold">
                        Sẵn sàng cho một không gian sạch hơn?
                    </h2>
                    <p className="text-primary-foreground mx-auto mb-8 max-w-2xl text-lg">
                        Liên hệ với chúng tôi ngay hôm nay để đặt lịch vệ sinh.
                        Chúng tôi cung cấp báo giá miễn phí và lịch trình linh
                        hoạt!
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link href="tel:0906865780">
                            <Button
                                onClick={handleTrackCta("cta")}
                                className="bg-primary-foreground text-primary hover:text-primary hover:bg-primary-foreground/90 flex gap-2 py-2"
                            >
                                <Phone />
                                <p>Liên hệ</p>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
