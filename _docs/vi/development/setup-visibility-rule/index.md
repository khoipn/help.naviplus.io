---
description: 'Điều kiện hiển thị (Visibility Rules) áp dụng cho menu và menu item — theo thiết bị, giỏ hàng, lịch, thị trường, tag khách hàng và khách B2B.'
lang: vi
layout: default
permalink: /vi/docs/development/setup-visibility-rule/
title: Cài đặt Visibility Rules
---
# Cài đặt Visibility Rules

Visibility Rules là bộ điều kiện quyết định một **menu** hoặc một **menu item** có hiển thị hay không với một khách truy cập cụ thể — theo thiết bị, giỏ hàng, lịch, thị trường (Market), tag khách hàng, hay khách B2B — áp dụng cho cả hai cấp với đúng một bộ quy tắc.

---

## Đặt ở đâu

- **Cấp Menu item**: mở **Edit item** → nhóm **Visibility** → bấm **Setup the Visibility rules**. *(Nhóm Visibility nằm trong khối thu gọn — nếu không thấy ngay, bấm **See more** trước để mở ra.)*
- **Cấp Menu**: mở panel **Setting** của menu → card **Visibility Rules**.
- **Đường tắt từ Menu list** (bảng liệt kê tất cả menu của shop): cột **Visibility Rules** luôn có link **Setup** (kèm tóm tắt phía trước nếu menu đã có điều kiện) — bấm vào là nhảy thẳng tới đúng menu, tự mở panel Setting và cuộn tới đúng card.
- **Trên cây menu**: item nào đang bật điều kiện thì có icon mắt 👁 ngay sau tên — di chuột vào để xem nhanh tóm tắt điều kiện mà không cần mở popup.

Từ đây trở xuống, mọi điều kiện, cú pháp và cách kết hợp đều **dùng chung** cho cả hai cấp — chỉ khác đúng vị trí bấm vào ở trên.

> Market / Customer tag / B2B chỉ áp dụng cho **Shopify**, và hiện là ô tự nhập (chưa có dropdown chọn sẵn) — mỗi ô đều có link **"View your Markets"** / **"Manage customer tags"** / **"Manage B2B companies"** dẫn thẳng sang đúng trang Shopify Admin để tra giá trị chính xác trước khi gõ vào.

---

## Các điều kiện hỗ trợ

| Điều kiện | Gói | Chỉ hiện khi nào | Giá trị nhập |
|---|---|---|---|
| **Device** | Business trở lên | Đúng loại thiết bị đang chọn | `All devices` / `Mobile only` / `Desktop only` |
| **Page / URL** | Business trở lên | Đúng loại trang, hoặc URL có/không chứa từ khóa | Tick nhóm trang (Home/Products/Collections/Pages/Blogs/Others) + 2 ô từ khóa |
| **Cart contents** | Business trở lên | Giỏ hàng có từ N sản phẩm trở lên (hoặc **ẩn** khi từ N sản phẩm trở lên — 2 chiều độc lập) | Số nguyên, ví dụ `1` |
| **Schedule** | Business trở lên | Đang trong khung ngày + giờ đã đặt | Ngày giờ bắt đầu → kết thúc, nhập theo **UTC** (quy đổi từ giờ địa phương trước khi nhập), so sánh bằng đồng hồ thiết bị khách |
| **Market / Country** | Elite | Khách đang duyệt dưới đúng Market đã chọn | Market handle, nhiều giá trị cách nhau dấu phẩy: `us, ca` |
| **Customer tag** | Elite | Khách đã đăng nhập có đúng tag | Một tag, ví dụ `vip` |
| **B2B customer** | Elite | Khách đã đăng nhập bằng tài khoản B2B | Bật/tắt |

---

## Cách kết hợp nhiều điều kiện

Mọi điều kiện đang bật phải **cùng đúng** thì menu/item mới hiển thị — chỉ cần một điều kiện sai là ẩn ngay. Điều kiện nào để trống thì bỏ qua, không ảnh hưởng.

Ví dụ bật cả Device = Mobile only **và** Schedule = 01/09–15/09: chỉ hiện cho khách xem trên điện thoại, **và** chỉ trong đúng 2 tuần đó.

<div align="center">

<svg viewBox="0 0 680 300" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="vrArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a7a4f"/>
    </marker>
    <marker id="vrArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="150" y="10" width="180" height="30" rx="15" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="30" font-size="12.5" text-anchor="middle" fill="#1a1d21">Khách truy cập trang</text>

  <line x1="240" y1="40" x2="240" y2="58" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="60" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="86" font-size="12.5" text-anchor="middle" fill="#1a1d21">Device — đúng thiết bị đang chọn?</text>

  <line x1="240" y1="104" x2="240" y2="122" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="124" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="150" font-size="12.5" text-anchor="middle" fill="#1a1d21">Page/URL, Cart, Schedule — đủ điều kiện?</text>

  <line x1="240" y1="168" x2="240" y2="186" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="188" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="214" font-size="12.5" text-anchor="middle" fill="#1a1d21">Market, Tag, B2B (gói Elite) — đúng khách?</text>

  <line x1="240" y1="232" x2="240" y2="250" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="150" y="252" width="180" height="34" rx="17" fill="#1a7a4f"/>
  <text x="240" y="274" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">Hiển thị</text>

  <rect x="470" y="55" width="160" height="182" rx="10" fill="#fef2f2" stroke="#fecaca"/>
  <text x="550" y="140" font-size="16" font-weight="700" text-anchor="middle" fill="#b91c1c">Ẩn</text>
  <text x="550" y="158" font-size="11" text-anchor="middle" fill="#b91c1c">ngay lập tức</text>

  <line x1="420" y1="82" x2="470" y2="82" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="76" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="146" x2="470" y2="146" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="140" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="210" x2="470" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="204" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>
</svg>

</div>

*Chỉ cần 1 điều kiện đang bật mà sai (nhánh ✗ bên phải) là ẩn ngay — bất kể các điều kiện còn lại đúng hay không. Điều kiện nào để trống (không bật) thì bỏ qua, không xét.*

---

## 5 ví dụ thực tế

### 1. Bán sỉ và lẻ cùng lúc, ẩn bảng giá sỉ khỏi khách lẻ (cấp Menu)

Shop vừa bán lẻ vừa bán sỉ. Khách sỉ (đã được Shopify duyệt tài khoản B2B) được mua với giá tốt hơn và có riêng một nhóm sản phẩm/collection chỉ dành cho họ. Shop muốn nhóm menu dẫn tới các trang này — "Bảng giá sỉ", "Đặt hàng sỉ nhanh", "Sản phẩm giá sỉ" — chỉ hiện cho đúng khách sỉ, còn khách lẻ truy cập bình thường thì không thấy chúng tồn tại (tránh nhầm giá, tránh lộ giá ưu đãi ra ngoài).

**Cách làm:** Dựng riêng 1 menu (hoặc 1 nhóm mục) chứa các link giá sỉ. Vào **Setting → Visibility Rules**, bật **B2B customer**. Kết quả: cả menu này chỉ hiện với khách đã đăng nhập bằng tài khoản B2B, khách lẻ (kể cả chưa đăng nhập) sẽ không thấy menu này trong lúc duyệt web.

### 2. Banner khuyến mãi có hạn, chỉ hiện khi đang mua hàng (cấp Item)

Muốn 1 banner "Miễn phí ship đơn từ 500K" chỉ xuất hiện trong đợt sale, và chỉ với khách đã bỏ ít nhất 1 sản phẩm vào giỏ (tránh làm phân tâm khách mới vào xem).

**Cách làm:** Trên item banner, bấm **Setup the Visibility rules** → bật **Cart contents** = `1`, và **Schedule** = ngày bắt đầu/kết thúc đợt sale.

### 3. Link ưu đãi riêng cho khách VIP (cấp Item)

Muốn có 1 mục menu "Ưu đãi VIP" chỉ khách hạng VIP mới thấy, trong khi khách thường không biết mục này tồn tại.

**Cách làm:** Gắn tag `vip` cho đúng nhóm khách qua Shopify Flow/Customer Segment (Segment → Flow "Customer enters segment" → gắn tag). Trên item, bấm **Setup the Visibility rules** → bật **Customer tag** = `vip`.

### 4. Tab Bar "đẳng cấp" riêng cho khách VIP (cấp Menu)

Shop muốn khách VIP có trải nghiệm điều hướng khác biệt hẳn — nền đen, hiệu ứng lóng lánh, đúng cảm giác đẳng cấp — thay vì dùng chung giao diện tiêu chuẩn với mọi khách khác.

**Cách làm:** Dựng riêng 1 Tab Bar theo mẫu đen sang trọng, publish vào đúng vị trí Tab Bar mặc định của shop. Vào **Setting → Visibility Rules**, bật **Customer tag** = `vip` (gắn tag qua Shopify Flow/Customer Segment như ví dụ 3). Kết quả: khách có tag `vip` thấy thanh điều hướng riêng, khách thường vẫn thấy Tab Bar mặc định như cũ. *(Mobile Menu áp dụng cùng cách.)*

### 5. FAB mời khách xem ưu đãi ngay khi vừa thêm giỏ hàng (cấp Menu)

Khách vừa bỏ sản phẩm đầu tiên vào giỏ — đúng lúc đang cân nhắc mua thêm — shop muốn 1 nút nổi (FAB) xuất hiện mời khách bấm vào xem thông tin khuyến mãi (ví dụ "mua thêm để đạt mốc miễn phí ship", quà tặng kèm...) để kích thích chốt đơn nhanh hơn, thay vì FAB hiện sẵn gây rối mắt ngay từ đầu.

**Cách làm:** Dựng 1 FAB (Floating Button) chứa nội dung khuyến mãi. Vào **Setting → Visibility Rules**, bật **Cart contents** = `1` (chỉ hiện khi giỏ hàng có từ 1 sản phẩm). Kết quả: FAB ẩn hoàn toàn cho tới khi khách thêm sản phẩm đầu tiên vào giỏ thì mới hiện ra. *Lưu ý: điều kiện chỉ kiểm được SỐ LƯỢNG sản phẩm trong giỏ, không tính theo giá trị đơn hàng — mốc "miễn phí ship từ 100$" là nội dung marketing shop tự viết bên trong FAB, không phải điều kiện Visibility Rules tự tính theo giá trị đơn.*

---
