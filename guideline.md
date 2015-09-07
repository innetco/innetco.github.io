## Các lưu ý đối với người quản trị nội dung.

Quản trị nội dung cho website này không đòi hỏi kiến thức chuyên môn sâu về lập trình web. Người quản trị nội dung chỉ cần biết cách sử dụng [markdown] cho việc trình bày văn bản với một phần mềm soạn thảo plain text bất kỳ (như sublime text, notepad++, atom, brackets...), có kiến thức cơ bản về `git` và cách làm việc với một dự án trên github.

Nếu chưa bao giờ làm việc với github và các lệnh `git`, việc soạn thảo nội dung nên thực hiện với các phần mềm soạn thảo văn bản thông thường rồi gửi cho người quản trị site để cập nhật lên web.

Hướng dẫn này được viết cho người dùng đã nắm được sơ bộ các khái niệm trên. Các thuật ngữ thường dùng khi làm việc với `git` sẽ không được giải thích lại.

Người quản trị nội dung có thể đăng nhập và sửa file trực tiếp trong `repo` này. Mọi thay đổi trên nhánh `master` sẽ được github render ra trang web chính thức. Do đó chúng tôi khuyến khích tạo một nhánh mới dùng cho việc sửa nội dung hoặc bất kỳ thành phần nào của trang web. 

Tên nhánh nên được đặt để phản ánh nội dung chỉnh sửa. Ví dụ: `fix_about_page_content` hoặc `sua_noi_dung_homepage`, không đặt tên nhánh không rõ nghĩa theo kiểu đánh số như `branch_fix_001`...

Nội dung sau khi sửa cần được `push` lên github và gửi thông báo (`pull request`) cho người quản trị để trộn (`merge`) vào nhánh chính.

## Cấu trúc tổng thể
Website được xây dựng với [jekyll], theo các quy tắc và cấu trúc của jekyll ở thời điểm hiện tại. Hiện Github đang sử dụng phiên bản Jekyll `2.4.0`.

Các khối nội dung của trang web được chia thành các modul để tiện quản lý. Mỗi modul có yêu cầu nội dung và cách trình bày riêng.

- Site navigation: `_includes/navbar.html` (bản tiếng Anh: `_includes/navbar_en.html`) - Là menu điều hướng chung cho website. Do một số yêu cầu riêng của khách hàng và còn có thể thay đổi nhiều, hiện tại việc đưa thêm thông tin vào `navbar` vẫn cần thực hiện thủ công.
- Site header: `_includes/header.html` - là phần giới thiệu tổng thể, hiển thị dạng slideshow. Phần này hiện chỉ được dùng để hiển thị trên homepage. Hình ảnh và nội dung (cho cả tiếng Việt lẫn tiếng Anh) đều có thể sửa trong file này.
- Single page header: `_includes/header_single.html` - là phần header hiển thị ở các trang đơn. Ngoài homepage, hầu như tất cả các trang còn lại đều dùng header này.
- Site Content: (Các file bắt đầu bằng `inn_*` trong thư mục `_includes`) là các modul nội dung dùng cho việc hiển thị thông tin. Người quản trị có thể cho hiển thị hoặc ẩn bất kỳ mục nội dung nào hoặc có thể bổ sung thêm nếu cần.
- Site Footer: `_includes/footer.html` - là phần báo hiệu kết thúc trang web. Hiển thị trên tất cả các trang.

[markdown]: http://daringfireball.net/projects/markdown/syntax
[jekyll]: http://jekyllrb.com/