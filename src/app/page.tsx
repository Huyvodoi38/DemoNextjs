'use client' // Chỉ định rằng đây là một component chạy ở phía client trong Next.js.
import { useState } from "react"; // Import hook useState để quản lý trạng thái.

export default function Home() {
  // Khai báo một state `text` để lưu trữ dữ liệu nhập từ ô input.
  const [text, setText] = useState("");

  // Hàm xử lý sự kiện khi nút được bấm.
  const handleButtonClick = (message: string) => {
    alert(message); // Hiển thị thông báo được truyền vào qua hộp thoại alert.
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}> {/* Đặt căn giữa nội dung và thêm khoảng cách padding */}
      <h1>Trang Web Đơn Giản với Next.js</h1> {/* Tiêu đề chính */}
      <div style={{ marginBottom: "20px" }}> {/* Thêm khoảng cách dưới ô input */}
        <input
          type="text" // Loại input là văn bản.
          placeholder="Nhập gì đó..." // Gợi ý khi chưa có nội dung.
          value={text} // Giá trị của input được liên kết với state `text`.
          onChange={(e) => setText(e.target.value)} // Cập nhật state `text` khi người dùng nhập.
          style={{
            padding: "10px", // Khoảng cách bên trong input.
            width: "300px", // Chiều rộng của input.
            borderRadius: "5px", // Bo tròn góc.
            border: "1px solid #ccc", // Đường viền màu xám nhạt.
          }}
        />
      </div>
      <div>
        {/* Nút 1 */}
        <button
          onClick={() => handleButtonClick("Nút 1 được bấm!")} // Gọi hàm khi nút được bấm.
          style={{
            marginRight: "10px", // Khoảng cách giữa nút 1 và nút 2.
            padding: "10px 20px", // Khoảng cách bên trong nút.
            backgroundColor: "#0070f3", // Màu nền xanh dương.
            color: "white", // Màu chữ trắng.
            border: "none", // Loại bỏ đường viền.
            borderRadius: "5px", // Bo tròn góc.
            cursor: "pointer", // Hiển thị con trỏ khi di chuột.
          }}
        >
          Nút 1
        </button>
        {/* Nút 2 */}
        <button
          onClick={() => handleButtonClick("Nút 2 được bấm!")} // Gọi hàm khi nút được bấm.
          style={{
            padding: "10px 20px", // Khoảng cách bên trong nút.
            backgroundColor: "#ff0000", // Màu nền đỏ.
            color: "white", // Màu chữ trắng.
            border: "none", // Loại bỏ đường viền.
            borderRadius: "5px", // Bo tròn góc.
            cursor: "pointer", // Hiển thị con trỏ khi di chuột.
          }}
        >
          Nút 2
        </button>
      </div>
      <div style={{ marginTop: "20px" }}> {/* Khoảng cách trên phần hiển thị hình ảnh */}
        {/* Hình ảnh 1 */}
        <img
          src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
          alt="Ảnh 1" // Văn bản thay thế nếu ảnh không hiển thị.
          style={{ marginRight: "10px" }} // Khoảng cách giữa hai hình ảnh.
        />
        {/* Hình ảnh 2 */}
        <img 
          src="https://cdn.tgdd.vn/Files/2022/03/31/1423196/moi-dieu-can-biet-cho-con-cach-nuoi-cham-soc-va-huan-luyen-202203311027080129.jpg" 
          alt="Ảnh 2" // Văn bản thay thế nếu ảnh không hiển thị.
        />
      </div>
    </div>
  );
}
