---
description: 'Bước 1: Nhấp vào Cửa hàng trực tuyến, sau đó nhấp vào Chủ đề. Mẹo: Nhấp chuột phải vào Cửa hàng trực tuyến và chọn “Mở liên kết trong tab mới” để tiết kiệm thời gian.'
lang: vi
layout: default
permalink: /vi/docs/usage/mega-menu-desktop/publishing-on-shopify/
title: Xuất bản trên Shopify
---
# Xuất bản trên Shopify

### Bước 2: (Shopify) Xuất bản menu trên trang web của bạn.

#### **I) PHƯƠNG PHÁP 1: CHÈN (TRƯỚC HOẶC SAU) MENU NÀY TẠI MỘT VỊ TRÍ CỤ THỂ TRÊN TRANG WEB CỦA BẠN, HOẶC THAY THẾ MỘT MENU HIỆN CÓ, SỬ DỤNG MỘT CSS SELECTOR. (**&#x52;ECOMMENDED)

#### I.1. Bật Navi+ trên Ứng dụng Nhúng

Bước 1: Nhấp vào Cửa hàng trực tuyến, sau đó nhấp vào Chủ đề. Mẹo: Nhấp chuột phải vào Cửa hàng trực tuyến và chọn “Mở liên kết trong tab mới” để tiết kiệm thời gian.

Bước 2: Chọn chủ đề mà bạn muốn xuất bản menu.  Nhấp: **Tùy chỉnh**

* Nếu trang web của bạn mới và chưa có người dùng, hãy thoải mái xuất bản menu mà không lo lắng—bạn có thể dễ dàng bật hoặc tắt bất cứ lúc nào mà không ảnh hưởng đến khách truy cập.
* Nếu trang web của bạn đã có lưu lượng truy cập thường xuyên, hãy cẩn thận hơn. Thực tiễn tốt nhất là tạo một **Chủ đề sao chép** và thử nghiệm Navi+ trên phiên bản đó trước.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

Bước 3: Đi đến Ứng dụng nhúng, tìm “Navi+ trên Tất cả các trang”, và bật nó lên.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

Bước 4: Đừng quên nhấp “Lưu” để áp dụng các thay đổi.

Sau 4 bước này, Navi+ đã được cài đặt trên trang web của bạn và sẵn sàng hiển thị. Tuy nhiên, quá trình vẫn chưa hoàn tất. Quay lại tab ứng dụng Navi+ để thực sự bật **Xuất bản Menu**.

#### I.2. Chọn cài đặt hiển thị và xuất bản menu.

Bước 1: Nhấp vào nút **Xuất bản lên trang web**.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

Bước 2: Bật công tắc "Xuất bản menu theo phương pháp Chèn/Thay thế".

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMKj8nfrhd9jdA3bXSFio%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=dd78fff1-36fb-4ce9-93e5-24d3076c170d" alt=""><figcaption></figcaption></figure>

Bước 3: Chọn CSS Selector chính xác và phương pháp thay thế/chèn

Trong hướng dẫn này, chúng tôi sẽ tập trung vào 2 cách: chèn menu này dưới tiêu đề hoặc thay thế Mega Menu mặc định. Bạn cũng có thể sử dụng phương pháp này một cách sáng tạo bằng cách tìm và áp dụng các CSS selector khác để kích hoạt menu.

<details><summary>Cách chèn menu này dưới tiêu đề của trang web<strong>?</strong></summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F8qcOprJA7RFqTtJUD1PB%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=94ea06fa-2cbe-4fc8-be0b-7c5dd0864f47" alt=""><figcaption></figcaption></figure>

<p>Để làm điều này, chỉ cần xác định CSS selector của tiêu đề trang web của bạn và nhập nó vào ô văn bản. Chúng tôi đã tìm thấy các CSS selector cho một số chủ đề phổ biến nhất cho bạn, được liệt kê dưới đây.</p>
<ol>
<li>Các CSS selector cho một số chủ đề miễn phí phổ biến.. từ Shopify như Dawn, Sense, Savor, Horizon..</li>
</ol>
<pre class="codehilite"><code>header
</code></pre>

<ol>
<li>Không có trong danh sách này, đừng lo lắng</li>
</ol>
<pre class="codehilite"><code>- Bạn có thể trò chuyện với một người hỗ trợ Navi+ để được giúp đỡ ngay lập tức—điều này chỉ mất vài phút để tìm CSS selector.

- Hoặc, bạn có thể theo dõi hướng dẫn tự giúp trong các chủ đề tiếp theo (Ngay sau chủ đề này).
</code></pre>
</details>

<details><summary>Cách thay thế Mega Menu mặc định?</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FWnWkPsXB1g3zZl0ejugp%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=ffaa1872-48b5-4092-a499-990a21a3abc3" alt=""><figcaption></figcaption></figure>

<p>Để làm điều này, chỉ cần xác định CSS selector của tiêu đề trang web của bạn và nhập nó vào ô văn bản. Chúng tôi đã tìm thấy các CSS selector cho một số chủ đề phổ biến nhất cho bạn, được liệt kê dưới đây.</p>
<ol>
<li>Các CSS selector cho một số chủ đề miễn phí phổ biến.. từ Shopify như Dawn, Sense, Savor, Horizon..</li>
</ol>
<pre class="codehilite"><code>.header-menu
</code></pre>

<ol>
<li>Không có trong danh sách này, đừng lo lắng</li>
</ol>
<pre class="codehilite"><code>- Bạn có thể trò chuyện với một người hỗ trợ Navi+ để được giúp đỡ ngay lập tức—điều này chỉ mất vài phút để tìm CSS selector.

- Hoặc, bạn có thể theo dõi hướng dẫn tự giúp trong các chủ đề tiếp theo (Ngay sau chủ đề này).
</code></pre>
</details>

<details><summary><strong>Cách tìm CSS selector trên trang web của bạn?</strong></summary>
<p>Bạn có thể trò chuyện với một người hỗ trợ Navi+ để được giúp đỡ ngay lập tức thay vì tự làm.

Tuy nhiên, (1) điều này sẽ giúp bạn hiểu ý tưởng cốt lõi, và (2) nếu bạn muốn tự làm, hãy làm theo hướng dẫn dưới đây.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

**I.3. Quan trọng! Tối ưu hóa tốc độ Mega Menu và trải nghiệm người dùng (Chế độ Thay thế)**

Khi bạn thay thế một menu bằng một menu khác, Navi+ sẽ chờ cho đến khi menu cũ được hiển thị và sau đó ngay lập tức thay thế nó bằng menu mới. Mặc dù điều này xảy ra gần như ngay lập tức, vẫn có một khoảnh khắc ngắn mà menu cũ xuất hiện, điều này có thể gây nhầm lẫn cho người dùng.

Với bước này, bạn có thể hoàn toàn ẩn menu cũ và hiển thị hiệu ứng tải thay thế. Điều này làm cho trang web cảm thấy nhanh hơn và cải thiện trải nghiệm người dùng.

<details><summary>Navi+ cung cấp một giải pháp đơn giản để tối ưu hóa trải nghiệm người dùng và tốc độ như sau</summary>
<p><strong>Tại sao bạn cần làm điều này? Không phải Navi+ đã nhanh rồi sao?</strong></p>
<p>Navi+ rất nhanh. Nó được triển khai hoàn toàn trên một CDN hàng đầu với độ trễ rất thấp (khoảng 100ms) và có thể phục vụ hàng triệu khách hàng mà không bị chậm lại.</p>
<p>Tuy nhiên, Navi+ vẫn hoạt động trong hệ sinh thái Shopify. Shopify có các quy tắc tải riêng:</p>
<ol>
<li>Shopify ưu tiên tải tài nguyên của chính nó trước.</li>
<li>Rồi Shopify tải nội dung chủ đề.</li>
<li>Cuối cùng, Shopify tải nội dung ứng dụng, nhưng không theo thứ tự cụ thể nào.</li>
</ol>
<p>Điều này có nghĩa là nếu bạn đang sử dụng nhiều ứng dụng, Navi+ có thể đôi khi được tải muộn hơn mong đợi. Đó là lý do tại sao nó có thể cảm thấy chậm hơn trong một số trường hợp.</p>
<hr />
<h4>Giải pháp của tôi là gì?</h4>
<p>Hiện tại, Navi+ có ưu tiên cao khi tải trên các trang web Shopify. Tuy nhiên, vẫn có một độ trễ nhất định. Chúng tôi sẽ giải quyết những vấn đề này từng bước ở đây:</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

<p>Ghi chú:</p>
<ul>
<li>Thêm hậu tố <strong>(M)</strong> nếu bạn muốn nó chỉ áp dụng trên di động.</li>
<li>Thêm hậu tố <strong>(D)</strong> nếu bạn muốn nó chỉ áp dụng trên máy tính để bàn.</li>
<li>Không để hậu tố nếu bạn muốn nó áp dụng trên cả hai nền tảng.</li>
</ul>
</details>

#### **II) PHƯƠNG PHÁP 2: THÊM MENU NÀY NHƯ MỘT PHẦN/BLÔC TRONG CHỦ ĐỀ SHOPIFY**

Phương pháp này chèn menu bằng cách thêm một Blok/Phần trong chủ đề Shopify của bạn. Đây là một cách tiếp cận truyền thống, vì vậy tôi sẽ không mô tả chi tiết. Với phương pháp này, bạn thậm chí không cần phải **“Bật Navi+ trong Ứng dụng Nhúng”** như yêu cầu trong Bước 1 của Phương pháp 1.

Sao chép ID Nhúng của menu này, sau đó chèn vào blốc có tên "Navi+ trên Phần" trong Các Phần Chủ đề. Bạn có thể thêm tiêu đề, thiết lập chiều rộng đầy đủ và điều chỉnh khoảng cách cho phần này sau khi thêm nó.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FO2uavUwCekKwBVqvtJrt%2FMargin-padding%201.1.png?alt=media&#x26;token=35261670-ad9b-445f-9730-b10be40e406e" alt=""><figcaption></figcaption></figure>

<details><summary>Hướng dẫn thêm menu này như một phần/blốc trong chủ đề Shopify</summary>
<p>Dưới đây là hướng dẫn chi tiết về việc chèn menu Navi+ như một phần/blốc trong chủ đề Shopify của bạn. Phương pháp này cho phép bạn thêm menu theo cách tiêu chuẩn, được Shopify hỗ trợ, mặc dù nó không linh hoạt như các phương pháp khác do Navi+ cung cấp.</p>
<p>Phương pháp này áp dụng cho <strong>Mega Menus</strong> và <strong>Grid Menus</strong>. Nó <strong>KHÔNG ÁP DỤNG</strong> cho <strong>Tabbar</strong>, <strong>FAB</strong>, hoặc <strong>Slide Menus</strong>.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcdnKqInMqe14B9NBOTqr%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=dcac5183-9433-4a11-bf2e-6508101ab089" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FF5RAjnmtKv4kXRhIMxaV%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=8eb3748c-16c6-4508-aebe-781d00c2a8d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F1ss5KONiPDSu0AphvToH%2FHelp.MenuTree.1.1.9.png.png?alt=media&#x26;token=395e460a-f275-4642-9a86-41f996ea87f5" alt=""><figcaption></figcaption></figure>
</details>
