Để hình ảnh hiển thị tốt, đường dẫn đến file hình ảnh phải là đường dẫn thực (đường dẫn đến file có đuôi giống với file đã upload, ví dụ `.jpg`, `png`...). 

Dùng Google hiện không cho liên kết trực tiếp tới hình ảnh lưu trong google drive. Việc dùng hình ảnh host tại google drive chỉ là giải pháp tạm thời. Nên tìm host lưu trữ hình ảnh có thể lấy được đường dẫn thực như đã nêu trên.

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
4. Thay thế đoạn trước `id` trong đường dẫn bằng dòng này: `http://drive.google.com/uc?export=view&`

#### Ví dụ

```
---
...
preview: http://drive.google.com/uc?export=view&id=0B7WZApu0ixrEU19COVVtRl9KM0k
full: http://drive.google.com/uc?export=view&id=0B7WZApu0ixrEeE9jdnhBVVlrRG8
...
---
```

## chèn hình ảnh vào trong bài

1. Lấy hình ảnh bất kỳ (nên lấy hình ngang, chiều rộng ít nhất 1000px. Nếu dùng Google Drive thì hình ảnh phải để chế độ chia sẻ là **Public**.
2. Chèn ảnh vào bài viết theo cú pháp bình thường của markdown:

```
![ten hinh anh](duong/dan/den/hinhanh.jpg)
```
3. Nếu dùng hình ảnh trong google drive thì thay đường dẫn như trên

#### Ví dụ

```
![hình ảnh](https://drive.google.com/open?id=0B7WZApu0ixrEeE9jdnhBVVlrRG8)
```

thay bằng

```
![hình ảnh](http://drive.google.com/uc?export=view&id=0B7WZApu0ixrEeE9jdnhBVVlrRG8)
```
