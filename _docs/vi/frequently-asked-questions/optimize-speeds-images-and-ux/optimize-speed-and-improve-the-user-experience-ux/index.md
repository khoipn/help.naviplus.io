---
description: Navi+ rất nhanh. Nó được triển khai hoàn toàn trên một CDN hàng đầu với độ trễ rất thấp (khoảng 100ms) và có thể phục vụ hàng triệu khách hàng mà không bị chậm lại.
lang: vi
layout: default
permalink: /vi/docs/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux/
title: Tối ưu hóa tốc độ và cải thiện trải nghiệm người dùng (UX).
---
# Tối ưu hóa tốc độ và cải thiện trải nghiệm người dùng (UX).

#### Tại sao bạn cần làm điều này? Không phải Navi+ đã nhanh rồi sao?

Navi+ rất nhanh. Nó được triển khai hoàn toàn trên một CDN hàng đầu với độ trễ rất thấp (khoảng 100ms) và có thể phục vụ hàng triệu khách hàng mà không bị chậm lại.

Tuy nhiên, Navi+ vẫn hoạt động trong hệ sinh thái Shopify. Shopify có các quy tắc tải riêng:

1. Shopify ưu tiên tải các tài nguyên của chính nó trước.
2. Sau đó, Shopify tải nội dung chủ đề.
3. Cuối cùng, Shopify tải nội dung ứng dụng, nhưng không theo bất kỳ thứ tự cụ thể nào.

Điều này có nghĩa là nếu bạn đang sử dụng nhiều ứng dụng, Navi+ có thể đôi khi được tải muộn hơn mong đợi. Đó là lý do tại sao nó có thể cảm thấy chậm hơn trong một số trường hợp.

***

### Giải pháp của tôi là gì?

Hiện tại, Navi+ có ưu tiên cao khi tải trên các trang web Shopify. Tuy nhiên, vẫn có một độ trễ nhất định. Chúng tôi sẽ giải quyết những vấn đề này từng cái một ở đây:

#### Slide Menu: Thêm hiệu ứng tải và khóa bộ chọn kích hoạt

Rất đơn giản: chỉ cần nhập bộ chọn CSS mà bạn sử dụng cho Slide Menu vào phần nhúng của ứng dụng Navi+ (xem hình dưới).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

#### Mega Menu (Chế độ thay thế): Thêm hiệu ứng tải và khóa bộ chọn kích hoạt

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

Lưu ý:

* Thêm hậu tố **(M)** nếu bạn muốn nó chỉ áp dụng trên di động.
* Thêm hậu tố **(D)** nếu bạn muốn nó chỉ áp dụng trên máy tính để bàn.
* Không để hậu tố nếu bạn muốn nó áp dụng trên cả hai nền tảng.
