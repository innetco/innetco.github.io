## Các lưu ý đối với người quản trị nội dung.

Quản trị nội dung cho website này không đòi hỏi kiến thức chuyên môn sâu về lập trình web. Người quản trị nội dung chỉ cần biết cách sử dụng [markdown] cho việc trình bày văn bản với một phần mềm soạn thảo plain text bất kỳ (như sublime text, notepad++, atom, brackets...), có kiến thức cơ bản về `git` và cách làm việc với một dự án trên github.

Nếu chưa bao giờ làm việc với github và các lệnh `git`, việc soạn thảo nội dung nên thực hiện với các phần mềm soạn thảo văn bản thông thường rồi gửi cho người quản trị site để cập nhật lên web.

Hướng dẫn này được viết cho người dùng đã nắm được sơ bộ các khái niệm trên. Các thuật ngữ thường dùng khi làm việc với `git` sẽ không được giải thích lại.

Người quản trị nội dung có thể đăng nhập và sửa file trực tiếp trong `repo` này. Mọi thay đổi trên nhánh `master` sẽ được github render ra trang web chính thức. Do đó chúng tôi khuyến khích tạo một nhánh mới dùng cho việc sửa nội dung hoặc bất kỳ thành phần nào của trang web. 

Tên nhánh nên được đặt để phản ánh nội dung chỉnh sửa. Ví dụ: `fix_about_page_content` hoặc `sua_noi_dung_homepage`, không đặt tên nhánh không rõ nghĩa theo kiểu đánh số như `branch_fix_001`...

Nội dung sau khi sửa cần được `push` lên github và gửi thông báo (`pull request`) cho người quản trị để trộn (`merge`) vào nhánh chính.

## Cấu trúc tổng thể
Website được xây dựng với [jekyll][jekyll], theo các quy tắc và cấu trúc của jekyll ở thời điểm hiện tại. Hiện Github đang sử dụng phiên bản Jekyll `2.4.0`. Trang web có sử dụng hệ thống logic (`if... else`) của Jekyll (dựa trên [liquid template language](http://liquidmarkup.org/)) cho việc hiển thị phiên bản tiếng Anh.

Các khối nội dung của trang web được chia thành các modul để tiện quản lý. Mỗi modul có yêu cầu nội dung và cách trình bày riêng.

- **Site navigation:** `_includes/navbar.html` (bản tiếng Anh: `_includes/navbar_en.html`) - Là menu điều hướng chung cho website. Do một số yêu cầu riêng của khách hàng và còn có thể thay đổi nhiều, hiện tại việc đưa thêm thông tin vào `navbar` vẫn cần thực hiện thủ công.
- **Site header:** `_includes/header.html` - là phần giới thiệu tổng thể, hiển thị dạng slideshow. Phần này hiện chỉ được dùng để hiển thị trên homepage. Hình ảnh và nội dung (cho cả tiếng Việt lẫn tiếng Anh) đều có thể sửa trong file này.
- **Single page header:** `_includes/header_single.html` - là phần header hiển thị ở các trang đơn. Ngoài homepage, hầu như tất cả các trang còn lại đều dùng header này.
- **Site Content:** (Các file bắt đầu bằng `inn_*` trong thư mục `_includes`) là các modul nội dung dùng cho việc hiển thị thông tin. Trên homepage, người quản trị có thể cho hiển thị hoặc ẩn bất kỳ mục nội dung nào hoặc có thể bổ sung thêm nếu cần (xem file `_layout/default.html`). Đây cũng là phẩn hiển thị nội dung của các trang đơn (nội dung của các file `*.md`)
- **Site Footer:** `_includes/footer.html` - là phần báo hiệu kết thúc trang web. Hiển thị trên tất cả các trang.

Code của trang web hoàn toàn sử dụng mã nguồn mở, có thể sử dụng lại hoặc sửa chữa, cập nhật không cần bất kỳ licence nào. Tuy nhiên trừ khi người quản trị thành thạo về git, github và jekyll, chúng tôi đề nghị khách hàng **chỉ sửa và cập nhật nội dung**. Đặc biệt không tự tiện sửa code trong `master branch`. Hãy tạo một nhánh mới hoặc `clone` thành một `repo` riêng để thử nghiệm nếu có nhu cầu sửa code.

### site navigation
Các file dùng hiển thị trên site thanh điều hướng chung (menu) hiện tại được đặt trong thư mục `lev00_pages` hoặc `lev01_pages`. Mỗi trang là một nội dung với tiêu đề trang được thể hiện như menu (hoặc submenu) trên **site navigation bar**. Cấu trúc phần định nghĩa đầu trang (`YAML Front Matters`) tương tự nhau. Ví dụ file `lev00_pages/inn_about.md` (Xem và so sánh nội dung của các file khác trong 2 thư mục trên để hiểu rõ hơn).

~~~
---
layout: page_about
title: "Giới thiệu chung"
headline: "Giới thiệu chung về Innetco"
permalink: /about/
icon: "fa fa-trophy"
cover: "images/cover2.jpg"

sub_nav: true
parent: about
sub_level: 001

img1: /images/inpost_temp.jpg
img2: http://lisatorracolaw.com/wp-content/uploads/2013/03/LisaTorracoSlider.jpg
---
~~~

Giải thích:

- *layout:* Template dùng để hiển thị trang. Ví dụ `"page_about"` (các file trong thư mục `_layouts`)
- *title:* Tiêu đề, nội dung hiển thị trên menu và tiêu đề trang web. Ví dụ "Giới thiệu chung"
- *headline:* phần nội dung hiển thị trên header của từng trang. Ví dụ: "Giới thiệu chung về Innetco"
- *permalink:* Liên kết tham chiếu đến trang. Ví dụ: `"/about/"`.
- *icon:* Biểu tượng hiển thị trên header của từng trang. Dùng icon của Fontawsome. Ví dụ: `"fa fa-trophy"`
- *cover:* Hình ảnh nền. Ví dụ: `"images/cover2.jpg"`. Nếu dùng liên kết ngoài thì thay `cover` bằng `coverurl`. Nếu mục này không có thông tin nào được khai báo, website tự động lấy hình ảnh được định nghĩa trong mục khai báo tương ứng (`cover`) trong file `_config.yml` ở thư mục gốc.
- *sub_nav:* Nhận giá trị `true` hoặc `false` (có hoặc không). Nếu giá trị là `true`, tiêu đề trang (`title` sẽ hiển thị như một menu phụ liên kết với trang chính)
- *parent:* Nếu hiển thị trong menu phụ, thì khai báo menu cấp cao hơn ở đây. Ví dụ `"about"`. Hiện chỉ chấp nhận một trang hai giá trị là `about` (submenu của mục "giới thiệu chung") hoặc `service` (submenu của mục "dịch vụ").
- *sub_level:* Thứ tự sắp xếp trong menu. Ví dụ `"001"`. Số lớn hơn sẽ xếp xuống dưới.
- *img1:* khai báo đường dẫn đến hình ảnh định nghĩa trước để sử dụng lại trong nội dung, số lượng tuỳ ý. Mục này không bắt buộc.



[markdown]: http://daringfireball.net/projects/markdown/syntax
[jekyll]: http://jekyllrb.com/