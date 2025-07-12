Mini Project 1: CRUD Quản lý Sản phẩm

1) Tổng kết:
  a) Các phương thức:
  - GET: Lấy dữ liệu từ server, không làm thay đổi dữ liệu, request.body thường không có.
  - POST: Tạo một bản ghi dữ liệu mới trên server, dữ liệu mới được gửi thông qua request.body
  - PUT: Cập nhật toàn bộ một bản ghi dữ liệu đã có, client phải gửi toàn bộ các trường của dữ liệu, cho dù có thay đổi hay không
  - PATCH: Cập nhật một phần của dữ liệu, client chỉ cần gửi những trường thay đổi trên dữ liệu
  - DELETE: Xóa tài nguyên trên server, client sẽ gửi yêu cầu xóa tài nguyên (thường là theo ID)

  Các phương thức phải trả về mã code và tin nhắn để biết được rằng có thực hiện được thành công hay không

  b) params và query:
  - request.params: Thông tin được lấy từ URL path, được định nghĩa bằng dấu ":", thường dùng để xác định tài nguyên cụ thể
  - request.query: Thông tin được truyền ở phần query string của URL, được xác định sau dấu ?, thường dùng để truy vấn các dữ liệu, được viết đưới dạng key-value. Nếu có nhiều tham số, các tham số được nối với nhau bằng dấu "&"

2) Cấu trúc file

```
product-api/
├── src/
│   ├── routes/
│   │   └── products.js / API
│   ├── controllers/
│   │   └── productController.js /Các hàm xử  lý với mỗi phương thức
│   ├── middlewares/
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── data/
│   │   └── products.js / Mock Data
│   ├── utils/
│   │   └── helpers.js
│   └── app.js
├── package.json
├── .env
└── README.md
```
3) Setup:
```
npm init -y
npm install express cors dotenv
npm install -D nodemon

Thêm "scripts": {
  "start": "node src/app.js",
  "dev": "nodemon src/app.js"
} vào trong file package.json
```
Chạy file products.js
