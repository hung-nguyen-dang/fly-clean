# Các bước tạo trang mới

## Path: `app/dich-vu/{tên_trang}/page.mdx`

Nội dung trang được định nghĩa bằng cú pháp [Markdown](https://www.markdownguide.org/cheat-sheet/) cơ bản hoặc các component đặc biệt được định nghĩa trong `components/mdx/`.

## Tạo tile trong landing page
![tile-example.png](../public/tile-example.png)

Thêm đoạn code sau trong file `app/page.tsx`, nằm trong section `Services Cards`
```
<ServiceCard
  href="/dich-vu/{path}"
  name="{tên dịch vụ}"
  description="{mô tả dịch vụ}"
  price="{giá dịch vụ}"
  imageUrl="/{tên file ảnh}.jpeg"
/>
```

Ảnh được lưu trong thư mục `public` với định dạng `.jpeg`. Đường dẫn ảnh được sử dụng trong thuộc tính `imageUrl` là đường dẫn tương đối từ thư mục `public` đến file ảnh. Ví dụ: nếu file ảnh nằm trong thư mục `public/images`, thì đường dẫn sẽ là `/images/{tên file ảnh}.jpeg`.