
//add
document.getElementById("add").addEventListener("click" ,() => {
        var li=document.createElement("li");
        li.innerHTML="hoa";
        document.getElementById("tkb").appendChild(li);
    }) 
    //document.getElementById("add"):trong dom tìm đến nut add
    //addEventListener: gán sự kiện cho nút add
    //() : đây là hàm
    // trong hàm suy ra các hành động cần thực hiện 
    // đầu tiên tạo 1 biến li trong domcument
    //nút createElement là nút khởi tạo
    // tiếm đó gọi đến nút li vừa khỏi tạo trong html bàng cách dùng li.innerhtmt = " giá trị muốn nằm trong biến li"
    // cuối cùng tròn dom  gọi đến phần tử đang chứa giá trị li và thêm vào 
    // appendchild(li) : phần tử li cuối cùng 