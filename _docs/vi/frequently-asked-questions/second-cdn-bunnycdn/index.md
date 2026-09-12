---
description: "Cách Navi+ phân phối menu qua hai mạng CDN độc lập để menu luôn hoạt động, và tuỳ chọn \"Use a Secondary CDN (BunnyCDN)\" trong app embed làm gì — kể cả khi khách ở một số vùng không truy cập được Cloudflare."
lang: vi
layout: default
permalink: /vi/docs/frequently-asked-questions/second-cdn-bunnycdn/
title: "Navi+ giữ menu luôn hoạt động thế nào — tuỳ chọn \"Use a Secondary CDN (BunnyCDN)\""
---
# Navi+ giữ menu luôn hoạt động thế nào — tuỳ chọn "Use a Secondary CDN (BunnyCDN)"

Menu của bạn không nằm trong theme. Mỗi lần trang tải, trình duyệt lấy vài file nhỏ từ Navi+ — bộ máy vẽ menu, style của nó và dữ liệu menu. Các file này đến từ đâu quyết định menu có hiện hay không, và nhanh hay chậm. Trang này giải thích cơ chế phân phối đó, cách nó được bảo vệ trước sự cố, và ô **Use a Secondary CDN (BunnyCDN)** trong app embed của Shopify thay đổi điều gì.

---

## Hai mạng, một menu

Navi+ phân phối file menu qua mạng phân phối nội dung (CDN): một hệ thống máy chủ đặt khắp thế giới, cùng giữ bản sao của các file, để mỗi khách được phục vụ từ vị trí gần họ nhất.

Để chắc chắn sự cố ở một mạng không bao giờ làm menu của bạn biến mất, cùng bộ file đó được giữ trên **hai mạng độc lập**, do hai nhà cung cấp khác nhau vận hành:

| Mạng | Nhà cung cấp | Vai trò |
|---|---|---|
| Mạng chính | Cloudflare | Phục vụ mọi cửa hàng theo mặc định. |
| Mạng thứ hai | BunnyCDN | Giữ bản sao y hệt, được làm mới ở mỗi bản phát hành của Navi+. Thay thế khi mạng chính không phân phối được. |

Mỗi nhà cung cấp vận hành hạ tầng toàn cầu riêng với cam kết thời gian hoạt động riêng. Vì hai bên không dùng chung máy chủ, sự cố ở bên này không ảnh hưởng tới bên kia — menu không bao giờ phụ thuộc vào việc một công ty duy nhất phải luôn hoạt động.

---

## Một lượt tải trang diễn ra thế nào theo mặc định

<div align="center">

<svg viewBox="0 0 720 330" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="20" y="120" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Trình duyệt của khách</text>
  <text x="95" y="172" text-anchor="middle" font-size="12" fill="#4b5563">mở cửa hàng của bạn</text>
  <text x="95" y="190" text-anchor="middle" font-size="12" fill="#4b5563">script khởi động Navi+ chạy</text>

  <rect x="290" y="40" width="200" height="100" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="390" y="66" text-anchor="middle" font-size="14" font-weight="600" fill="#9a3412">Mạng chính</text>
  <text x="390" y="86" text-anchor="middle" font-size="12" fill="#7c2d12">Cloudflare</text>
  <text x="390" y="110" text-anchor="middle" font-size="11" fill="#7c2d12">bộ máy menu · style · dữ liệu menu</text>
  <text x="390" y="126" text-anchor="middle" font-size="11" fill="#7c2d12">phục vụ từ vị trí gần khách nhất</text>

  <rect x="290" y="200" width="200" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="390" y="226" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Mạng thứ hai</text>
  <text x="390" y="246" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN</text>
  <text x="390" y="270" text-anchor="middle" font-size="11" fill="#1e40af">bản sao y hệt của mọi file</text>
  <text x="390" y="286" text-anchor="middle" font-size="11" fill="#1e40af">làm mới ở mỗi bản phát hành Navi+</text>

  <rect x="560" y="120" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="152" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Menu hiện ra</text>
  <text x="630" y="174" text-anchor="middle" font-size="12" fill="#047857">trên trang</text>

  <path d="M170,150 C230,150 230,90 290,90" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="222" y="108" text-anchor="middle" font-size="11" fill="#374151">1. xin file</text>

  <path d="M490,90 C530,90 530,150 560,150" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="522" y="108" text-anchor="middle" font-size="11" fill="#374151">2. trả về</text>

  <path d="M170,180 C230,180 230,250 290,250" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>
  <text x="222" y="230" text-anchor="middle" font-size="11" fill="#dc2626">file nào lỗi →</text>
  <text x="222" y="244" text-anchor="middle" font-size="11" fill="#dc2626">tự động thử lại</text>

  <path d="M490,250 C530,250 530,180 560,180" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>

  <path d="M390,140 L390,200" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="404" y="174" font-size="10" fill="#6b7280">luôn đồng bộ</text>
</svg>

</div>

1. App embed Navi+ trong theme chạy một script khởi động rất nhỏ.
2. Script khởi động xin **mạng chính** bộ máy menu, style của nó và dữ liệu menu của bạn.
3. Menu hiện ra.

Nếu bất kỳ file nào trong số đó không tới được từ mạng chính — sự cố, hết thời gian chờ, trục trặc theo vùng — script khởi động **tự động thử lại đúng file đó từ BunnyCDN**. Việc này tự diễn ra trong trình duyệt của khách, bạn không cần cấu hình gì. Trên thực tế, một mạng gặp trục trặc là điều khách hàng của bạn không hề nhận ra.

---

## Trường hợp duy nhất cơ chế tự thử lại không lo được

Cơ chế tự thử lại nằm ngay trong script khởi động. Điều đó tạo ra một điểm mù: nếu **chính script khởi động** không tới được, không có gì chạy cả, nên cũng không còn gì để thử lại.

Điều này xảy ra khi kết nối của khách hoàn toàn không tới được mạng chính. Cloudflare là một trong những mạng lớn nhất internet, nhưng không phải nơi nào cũng truy cập được:

- Một số quốc gia hạn chế hoặc bóp băng thông lưu lượng Cloudflare ở cấp quốc gia.
- Một số mạng công ty hoặc trường học chặn nó trong bộ lọc web của họ.
- Một số nhà mạng định tuyến tới Cloudflare kém ở vài khu vực, khiến yêu cầu bị hết thời gian chờ.

Với cửa hàng có phần lớn khách ở những nơi như vậy, menu hoạt động hoàn hảo với bạn lại có thể không hiện với họ — và cơ chế tự thử lại không bao giờ có cơ hội giúp.

---

## Tuỳ chọn "Use a Secondary CDN (BunnyCDN)" làm gì

Bật tuỳ chọn này sẽ đảo thứ tự ưu tiên, để menu không còn phụ thuộc vào mạng chính nữa:

<div align="center">

<svg viewBox="0 0 720 300" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect x="20" y="105" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="135" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Trình duyệt của khách</text>
  <text x="95" y="157" text-anchor="middle" font-size="12" fill="#4b5563">mở cửa hàng của bạn</text>
  <text x="95" y="175" text-anchor="middle" font-size="12" fill="#4b5563">script khởi động xin từ 2 nơi</text>

  <rect x="290" y="30" width="200" height="80" rx="10" fill="#fafafa" stroke="#d1d5db" stroke-width="1.5"/>
  <text x="390" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#6b7280">Mạng chính</text>
  <text x="390" y="76" text-anchor="middle" font-size="12" fill="#6b7280">Cloudflare</text>
  <text x="390" y="96" text-anchor="middle" font-size="11" fill="#6b7280">chỉ script khởi động</text>

  <rect x="290" y="150" width="200" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="390" y="176" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Mạng thứ hai</text>
  <text x="390" y="196" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN — nay là mạng chính</text>
  <text x="390" y="220" text-anchor="middle" font-size="11" fill="#1e40af">script khởi động</text>
  <text x="390" y="236" text-anchor="middle" font-size="11" fill="#1e40af">bộ máy menu · style · dữ liệu menu</text>
  <text x="390" y="256" text-anchor="middle" font-size="11" fill="#1e40af">mọi thứ sau khi khởi động</text>

  <rect x="560" y="105" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="137" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Menu hiện ra</text>
  <text x="630" y="159" text-anchor="middle" font-size="12" fill="#047857">trên trang</text>

  <path d="M170,135 C230,135 230,70 290,70" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#cdnArrow2)"/>
  <text x="222" y="90" text-anchor="middle" font-size="11" fill="#6b7280">khởi động (bên nào</text>
  <text x="222" y="104" text-anchor="middle" font-size="11" fill="#6b7280">trả lời trước)</text>

  <path d="M170,165 C230,165 230,210 290,210" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>

  <path d="M490,210 C530,210 530,150 560,150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>
  <text x="522" y="192" text-anchor="middle" font-size="11" fill="#2563eb">trả về</text>
</svg>

</div>

- **Script khởi động được xin từ cả hai mạng**, nên menu vẫn khởi động miễn là một trong hai mạng tới được từ nơi khách đang đứng.
- **Mọi thứ sau đó** — bộ máy menu, style của nó và dữ liệu menu — được tải từ **BunnyCDN** thay vì Cloudflare.

Mạng chính chỉ còn đóng vai trò cơ hội thứ hai cho script khởi động; BunnyCDN trở thành nguồn chính cho bản thân menu.

---

## Khi nào nên bật?

Hãy để **tắt**, trừ khi rơi vào một trong hai trường hợp sau:

- **Đội hỗ trợ Navi+ đề nghị bạn bật.** Khi bạn báo menu không hiện với một số khách, chúng tôi kiểm tra những khách đó ở đâu và họ tới được mạng nào. Nếu vấn đề nằm ở mạng chính, chúng tôi sẽ đề nghị bạn bật tuỳ chọn này.
- **Bạn biết khách hàng của mình ở vùng mà Cloudflare bị hạn chế hoặc không ổn định.** Nếu cửa hàng chủ yếu phục vụ vùng như vậy, BunnyCDN là lựa chọn mạng chính an toàn hơn cho bạn. Hãy tick tuỳ chọn và báo cho chúng tôi — chúng tôi sẵn sàng xác nhận thay đổi đã ổn từ phía mình.

Dấu hiệu điển hình: menu hiện với bạn và với phần lớn khách, nhưng khách ở một quốc gia cụ thể hoặc trên một mạng cụ thể báo rằng menu không bao giờ xuất hiện.

---

## Vì sao mặc định tắt

Cả hai mạng đều toàn cầu và nhanh. Với đại đa số cửa hàng, chuyển đổi không mang lại lợi ích gì, và đường mặc định là đường chúng tôi theo dõi sát nhất và đưa bản sửa lên trước tiên. Tuỳ chọn này là công cụ cho các trường hợp hiếm ở trên, không phải cài đặt hiệu năng.

---

## Có ảnh hưởng tới tốc độ trang không?

Không có thay đổi đáng kể. BunnyCDN phục vụ cùng bộ file từ các vị trí toàn cầu của riêng họ. Xin script khởi động từ hai mạng chỉ thêm một yêu cầu nhỏ; bộ máy menu và dữ liệu menu vẫn chỉ tải một lần, từ một nguồn duy nhất.

---

## Cách bật hoặc tắt

1. Trong trang quản trị Shopify, mở **Online Store → Themes → Customize**.
2. Bấm biểu tượng **App embeds** ở thanh bên trái.
3. Tìm **Navi+** và mở rộng nó.
4. Tick hoặc bỏ tick **Use a Secondary CDN (BunnyCDN)**.
5. Bấm **Save**.

Thay đổi có hiệu lực ở lượt tải trang tiếp theo. Không cần cấu hình gì thêm trong app Navi+.

> Nếu đội hỗ trợ đề nghị bạn bật trong lúc điều tra sự cố, hãy giữ bật cho tới khi họ xác nhận sự cố đã được xử lý — sau đó bạn có thể tắt lại.
