---
description: Hai cài đặt giúp ngăn Desktop Mega Menu của bạn xuống dòng thứ hai hoặc chuyển sang di động quá sớm, và một cài đặt cho phép bạn hiển thị nó dưới dạng menu Slide trên di động.
lang: vi
layout: default
permalink: /vi/docs/usage/mega-menu-desktop/faq/
title: Câu hỏi thường gặp
---
# Câu hỏi thường gặp

#### Câu hỏi 1: Làm cách nào để ngăn Desktop Mega Menu của tôi xuống dòng thứ hai?

Có hai tình huống có thể làm hỏng bố cục của thanh Desktop Mega Menu: quá nhiều mục cấp 1, hoặc trang web được xem trong cửa sổ hẹp hơn desktop tiêu chuẩn. Hai cài đặt trong `Setting → Layout → Desktop` sẽ khắc phục điều này — không cần code.

<div align="center">

<svg viewBox="0 0 680 340" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="24" font-size="14" font-weight="600" fill="#1a1d21">Before — too many items wrap to a second line</text>
  <rect x="20" y="36" width="640" height="110" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="69" y="68" text-anchor="middle">Home</text>
    <rect x="112" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="147" y="68" text-anchor="middle">Shop</text>
    <rect x="190" y="50" width="110" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="245" y="68" text-anchor="middle">Categories</text>
    <rect x="308" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="343" y="68" text-anchor="middle">Sale</text>
    <rect x="386" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="421" y="68" text-anchor="middle">Blog</text>
    <rect x="464" y="50" width="82" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="505" y="68" text-anchor="middle">About</text>
    <rect x="554" y="50" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
  </g>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="92" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
    <rect x="84" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="131" y="110" text-anchor="middle">Contact</text>
    <rect x="186" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="233" y="110" text-anchor="middle">Support</text>
  </g>
  <text x="600" y="140" font-size="20" text-anchor="middle" fill="#dc2626">⚠</text>
  <text x="20" y="170" font-size="12" fill="#4b5563">The second row pushes page content down, and the header height changes unpredictably across screen sizes.</text>

  <text x="20" y="204" font-size="14" font-weight="600" fill="#1a1d21">After — "Menu overflow navigation" keeps it on one row</text>
  <rect x="20" y="216" width="640" height="50" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="69" y="245" text-anchor="middle">Home</text>
    <rect x="112" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="147" y="245" text-anchor="middle">Shop</text>
    <rect x="190" y="228" width="106" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="243" y="245" text-anchor="middle">Categories</text>
    <rect x="304" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="337" y="245" text-anchor="middle">Sale</text>
    <rect x="378" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="411" y="245" text-anchor="middle">Blog</text>
  </g>
  <rect x="600" y="228" width="40" height="26" rx="13" fill="#1a7a4f"/>
  <text x="620" y="246" font-size="14" text-anchor="middle" fill="#fff">›</text>
  <path d="M615 216 L625 216 L620 208 Z" fill="#fff" stroke="#e6e8eb"/>
  <rect x="520" y="150" width="140" height="66" rx="6" fill="#fff" stroke="#e6e8eb"/>
  <text x="590" y="170" font-size="12" text-anchor="middle" fill="#1a1d21">About</text>
  <text x="590" y="188" font-size="12" text-anchor="middle" fill="#1a1d21">Contact</text>
  <text x="590" y="206" font-size="12" text-anchor="middle" fill="#1a1d21">Support</text>
  <text x="20" y="298" font-size="12" fill="#4b5563">Items that don't fit (About, Contact, Support...) live behind the arrow button — click to reveal them, without wrapping.</text>
</svg>

</div>

##### Menu overflow navigation

Bật `Show navigation arrows when menu overflows`. Thanh cấp 1 luôn ở một hàng; các mục không vừa được ẩn sau nút mũi tên `›` thay vì xuống dòng. Hai trường màu, `Button background color` và `Arrow icon color`, cho phép bạn tạo kiểu cho nút.

##### Mobile switch breakpoint

Theo mặc định, bất kỳ màn hình nào hẹp hơn 768px sẽ chuyển toàn bộ menu sang chế độ di động, ngay cả khi vẫn còn đủ chỗ cho bố cục desktop — thường gặp trên máy tính bảng hoặc cửa sổ trình duyệt đã thay đổi kích thước. Hạ thấp trường `Breakpoint (px)` để giữ thanh desktop hiển thị ở độ rộng hẹp hơn.

<div align="center">

<svg viewBox="0 0 640 210" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="10" width="600" height="190" rx="10" fill="#fff" stroke="#e6e8eb"/>
  <text x="40" y="34" font-size="12" font-style="italic" fill="#4b5563">Setting → Layout → Desktop</text>
  <line x1="40" y1="44" x2="580" y2="44" stroke="#e6e8eb"/>
  <rect x="40" y="62" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="79" font-size="13" text-anchor="middle" fill="#1a7a4f">↔</text>
  <text x="76" y="72" font-size="13" font-weight="600" fill="#1a1d21">Mobile switch breakpoint</text>
  <text x="76" y="90" font-size="11" fill="#6b7280">Screen width below which the menu switches to mobile</text>
  <rect x="480" y="60" width="80" height="26" rx="5" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="520" y="78" font-size="12" text-anchor="middle" fill="#1a1d21">768 px</text>
  <line x1="40" y1="114" x2="580" y2="114" stroke="#f0f2f4"/>
  <rect x="40" y="132" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="149" font-size="13" text-anchor="middle" fill="#1a7a4f">›</text>
  <text x="76" y="142" font-size="13" font-weight="600" fill="#1a1d21">Menu overflow navigation</text>
  <text x="76" y="160" font-size="11" fill="#6b7280">Show navigation arrows when the menu overflows</text>
  <rect x="520" y="130" width="40" height="22" rx="11" fill="#1a7a4f"/>
  <circle cx="550" cy="141" r="9" fill="#fff"/>
  <text x="40" y="188" font-size="11" fill="#6b7280">Both cards only appear for a Desktop Mega Menu — not Tabbar, FAB, Slide, or Mobile Mega Menu.</text>
</svg>

</div>

<div align="center">

<svg viewBox="0 0 680 260" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="22" font-size="14" font-weight="600" fill="#1a1d21">Default — fixed at 768px</text>
  <rect x="40" y="34" width="384" height="34" fill="#e6e8eb"/>
  <text x="232" y="56" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="424" y="34" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="56" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="424" y1="26" x2="424" y2="76" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="90" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>

  <text x="20" y="140" font-size="14" font-weight="600" fill="#1a1d21">After setting Breakpoint = 600 (+ overflow navigation enabled)</text>
  <rect x="40" y="152" width="300" height="34" fill="#e6e8eb"/>
  <text x="190" y="174" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="340" y="152" width="84" height="34" fill="#e6f4ed" stroke="#1a7a4f" stroke-dasharray="4 2"/>
  <text x="382" y="169" font-size="10.5" text-anchor="middle" fill="#0f5c3a">Desktop</text>
  <text x="382" y="181" font-size="10.5" text-anchor="middle" fill="#0f5c3a">(new range)</text>
  <rect x="424" y="152" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="174" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="340" y1="144" x2="340" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="340" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">600px</text>
  <line x1="424" y1="144" x2="424" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>
  <text x="20" y="238" font-size="12" fill="#4b5563">The 600–768px range used to be hidden as mobile — it now keeps the desktop layout.</text>
</svg>

</div>

> Dải mới mà điều này mở ra (giữa breakpoint của bạn và 768px) hẹp hơn desktop tiêu chuẩn — bật thêm Menu overflow navigation để các mục cấp 1 không xuống dòng trong dải đó.

Ví dụ: breakpoint = `600` với Menu overflow navigation bật:

| Chiều rộng màn hình | Hành vi |
|---|---|
| Dưới 600px | Menu di động / hamburger |
| 600px – 768px | Desktop Mega Menu, nút mũi tên giữ các mục ở một hàng |
| Trên 768px | Desktop Mega Menu, hành vi tiêu chuẩn |

Hai cài đặt này độc lập với nhau, và chỉ ảnh hưởng đến Desktop Mega Menu — không phải Tabbar, FAB, Slide menu, hoặc Mobile Mega Menu.

***

#### Câu hỏi 2: Làm cách nào để hiển thị Desktop Mega Menu của tôi dưới dạng Slide menu trên di động?

Đôi khi bạn muốn dùng cách responsive kiểu cũ: dựng một Desktop Mega Menu duy nhất rồi để nó tự thu gọn thành Slide (Hamburger) menu trên di động, thay vì dựng riêng một menu mobile từ đầu.

<div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1.25rem 0;">
<div style="flex:1 1 260px;border-left:3px solid #1a7a4f;background:#e6f4ed;padding:0.85rem 1.1rem;border-radius:0 8px 8px 0;">
<span style="color:#0f5c3a;font-weight:600;">Điểm mạnh</span><br>
<span style="color:#374151;">Bạn chỉ cần maintain 1 menu — bản desktop. Bản mobile tự động ăn theo, không có cây thứ hai phải giữ đồng bộ.</span>
</div>
<div style="flex:1 1 260px;border-left:3px solid #dc2626;background:#fef2f2;padding:0.85rem 1.1rem;border-radius:0 8px 8px 0;">
<span style="color:#b91c1c;font-weight:600;">Điểm yếu</span><br>
<span style="color:#374151;">Mobile-first mới là xu hướng thiết kế điều hướng đúng hiện nay — điện thoại mang lại lượt truy cập nhiều nhất, thường cả doanh thu cao nhất. Một cây menu dựng cho thanh desktop rộng rồi ép xuống mobile thực chất là desktop-first: quá nhiều lần chạm mới tới được 1 link, các nhóm kiểu dropdown khi xếp dọc lại đọc rất khó, không có chỗ cho các shortcut riêng cho mobile.</span>
</div>
</div>

Với menu điều hướng chính của store, dựng riêng 1 menu cho mobile ngay từ đầu — Slide, Grid, hoặc TabBar riêng — thường đáng công maintain thêm hơn.

> Giải pháp trung dung: phản chiếu Desktop Mega Menu vào 1 Slide menu bằng `Smart responsive` (các bước bên dưới), kết hợp thêm 1 item TabBar mở thẳng Slide menu đó. Đặt `Link To` của item thành `open:NaviMenu(SF-xxxxxxxxxx)` (Business / Elite) — dùng embed ID của Slide menu — để khách trên mobile có hẳn 1 điểm mở ở thanh dưới thay vì trông chờ vào icon hamburger ẩn.

##### Thiết lập Smart responsive

Mở Desktop Mega Menu của bạn → `Setting → Mobile` → thẻ `Smart responsive`. Nó nhúng một tham chiếu sống của menu này vào Slide menu — bạn chỉ chỉnh nội dung ở đây, bản mobile tự cập nhật theo.

<div align="center">

<svg viewBox="0 0 640 300" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="20" font-size="13" font-weight="600" fill="#1a1d21">Desktop Mega Menu — 3 columns</text>
  <rect x="20" y="30" width="270" height="230" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="35" y="50" font-size="11" font-weight="600" fill="#1a1d21">Collections</text>
  <line x1="20" y1="58" x2="290" y2="58" stroke="#e6e8eb"/>
  <line x1="110" y1="66" x2="110" y2="252" stroke="#e6e8eb"/>
  <line x1="200" y1="66" x2="200" y2="252" stroke="#e6e8eb"/>
  <text x="35" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Women</text>
  <text x="35" y="94" font-size="10.5" fill="#1a1d21">Dresses</text>
  <text x="35" y="112" font-size="10.5" fill="#1a1d21">Tops</text>
  <text x="125" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Men</text>
  <text x="125" y="94" font-size="10.5" fill="#1a1d21">New in</text>
  <text x="125" y="112" font-size="10.5" fill="#1a1d21">Sale</text>
  <text x="215" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Info</text>
  <text x="215" y="94" font-size="10.5" fill="#1a1d21">Size guide</text>
  <text x="215" y="112" font-size="10.5" fill="#1a1d21">Shipping</text>

  <text x="315" y="150" font-size="22" text-anchor="middle" fill="#1a7a4f">→</text>
  <text x="315" y="172" font-size="10" text-anchor="middle" fill="#6b7280">Smart</text>
  <text x="315" y="184" font-size="10" text-anchor="middle" fill="#6b7280">responsive</text>

  <text x="360" y="20" font-size="13" font-weight="600" fill="#1a1d21">Slide menu — flattened to 1 column</text>
  <rect x="360" y="30" width="130" height="250" rx="16" fill="#1a1d21"/>
  <rect x="368" y="42" width="114" height="226" rx="4" fill="#fff"/>
  <text x="425" y="60" font-size="10.5" font-weight="600" text-anchor="middle" fill="#1a1d21">Collections</text>
  <line x1="374" y1="68" x2="476" y2="68" stroke="#e6e8eb"/>
  <text x="380" y="86" font-size="9.5" fill="#1a1d21">Dresses</text>
  <text x="380" y="102" font-size="9.5" fill="#1a1d21">Tops</text>
  <line x1="374" y1="112" x2="476" y2="112" stroke="#f0f2f4"/>
  <text x="380" y="128" font-size="9.5" fill="#1a1d21">New in</text>
  <text x="380" y="144" font-size="9.5" fill="#1a1d21">Sale</text>
  <line x1="374" y1="154" x2="476" y2="154" stroke="#f0f2f4"/>
  <text x="380" y="170" font-size="9.5" fill="#1a1d21">Size guide</text>
  <text x="380" y="186" font-size="9.5" fill="#1a1d21">Shipping</text>
  <text x="425" y="250" font-size="8.5" text-anchor="middle" fill="#6b7280">one tap reaches every link</text>
</svg>

</div>

1. Nhấp `Copy embed item` để sao chép mẫu item này.
2. Dán ở `level 1` của một Slide menu có sẵn — hoặc tạo Slide menu mới trước nếu chưa có.

Bố cục nhiều cột tự động được làm phẳng: các cột trở thành 1 danh sách dọc, tiêu đề cột bị bỏ, và tự chèn 1 đường kẻ ngăn ở chỗ từng là ranh giới cột — để khách chạm 1 lần là tới được mọi link thay vì 2 lần.

Sau khi nhúng, thẻ hiển thị `This menu already shows on mobile` kèm link thẳng tới Slide menu, để bạn kiểm tra bất cứ lúc nào.

##### Tinh chỉnh bản mobile

- **Ẩn item chỉ hợp với desktop.** Mở item đó trên Desktop Mega Menu → `Visibility` → bật `Exclude when embedded`. Item vẫn còn trên desktop, chỉ biến mất khỏi bản mobile.
- **Thêm item riêng cho mobile.** Slide menu không bị giới hạn chỉ những gì tham chiếu mang qua — thêm các item level-1 bình thường ngay cạnh item nhúng cho những thứ thanh desktop không cần: nút gọi/WhatsApp, giờ mở cửa, nút đổi ngôn ngữ, hay các link vốn nằm ở header/footer theme. Các item này sống trực tiếp trong Slide menu, không đụng gì tới bản desktop.
