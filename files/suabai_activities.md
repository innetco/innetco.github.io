## ảnh preview của bài:

1. lấy hình ảnh, crop theo tỉ lệ 5 x 4 (ngang x dọc). Ảnh hiện tại đang để 500px x 400px.
2. Upload cả ảnh gốc lẫn ảnh đã crop lên google drive. Để chế độ chia sẻ là **Public** để mọi người có thể xem được.
3. Khai báo đường dẫn ảnh trên đầu bài viết (các thông tin khác giữ nguyên):

```
---
...
//xoá hết dòng bắt đầu bằng imagefolder đi 
preview: // dán đường dẫn đến hình ảnh preview vào đây
full: // dán đường dẫn đến hình ảnh full vào đây
...
---
```
#### Ví dụ

```
---
...
preview: https://drive.google.com/open?id=0B7WZApu0ixrEU19COVVtRl9KM0k
full: https://drive.google.com/open?id=0B7WZApu0ixrEeE9jdnhBVVlrRG8
...
---
```

## chèn hình ảnh vào trong bài

1. Lấy hình ảnh bất kỳ (nên lấy hình ngang, chiều rộng ít nhất 1000px. Nếu dùng Google Drive thì hình ảnh phải để chế độ chia sẻ là **Public**.
2. Chèn ảnh vào bài viết theo cú pháp bình thường của markdown:

```
![ten hinh anh](duong/dan/den/hinhanh.jpg)
```

#### Ví dụ

```
![hình ảnh](https://drive.google.com/open?id=0B7WZApu0ixrEeE9jdnhBVVlrRG8)
```
