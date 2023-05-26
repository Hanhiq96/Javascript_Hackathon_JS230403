let student = [];
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function render() {
  let tableContent = `<tr>
    <td>id</td>
    <td>Họ và tên</td>
    <td>Email</td>
    <td>Điện thoại</td>
    <td>Giới tính</td>
    <td>Địa chỉ</td>
    <td>Sắp sếp</td>

</tr>`;
  student.forEach((student, index) => {
    index++;
    let genderLabel = parseInt(student.gender) === 1 ? "Nam" : "Nữ";
    tableContent += `<tr>
          <td>${index}</td>
          <td>${student.fullName}</td>
          <td>${student.email}</td>
          <td>${student.phone}</td>
          <td>${genderLabel}</td>
          <td>${student.address}</td>
  
          <td>
          <button class="edit" onclick="editStudent(${index})">Sửa</button>
          <button class="delete" onclick="deleteStudent(${index})">Xóa</button>
          </td>
      </tr>`;
  });

  document.getElementById("grid-students").innerHTML = tableContent;
}

function save() {
  let fullName = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let gender = "";

  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if (document.getElementById("famale").checked) {
    gender = document.getElementById("famale").value;
  }
  if (_.isEmpty(fullName)) {
    document.getElementById("fullname-error").innerHTML = "Không được để trống";
  } else if (fullName.trim().length <= 5) {
    document.getElementById("fullname-error").innerHTML =
      "Không nhỏ hơn 5 kí tự";
  } else {
    document.getElementById("fullname-error").innerHTML = "";
  }

  if (_.isEmpty(email)) {
    document.getElementById("email-error").innerHTML =
      "Nhập đúng định dạng email";
  } else if (!emailIsValid(email)) {
    document.getElementById("email-error").innerHTML =
      "Email không đúng định dạng";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  if (_.isEmpty(phone)) {
    document.getElementById("phone-error").innerHTML =
      "Vui lòng nhập số điện thoại";
  } else if (phone.trim().length > 11) {
    document.getElementById("phone-error").innerHTML =
      "Số điện thoại không đúng";
  } else {
    document.getElementById("phone-error").innerHTML = "";
  }

  if (_.isEmpty(address)) {
    document.getElementById("address-error").innerHTML = "Không được để trống";
  } else {
    document.getElementById("address-error").innerHTML = "";
  }

  if (_.isEmpty(gender)) {
    document.getElementById("gender-error").innerHTML =
      "Vui lòng chọn giới tính";
  } else {
    document.getElementById("gender-error").innerHTML = "";
  }

  if (fullName && email && phone && address && gender) {
    student.push({
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
      gender: gender,
    });

    render();
  }
}
function deleteStudent(index) {
  student.splice(index, 1);
  render();
}
function editStudent(index) {
    const selectedStudent = student[index];
  
    document.getElementById("fullname").value = selectedStudent.fullName;
    document.getElementById("email").value = selectedStudent.email;
    document.getElementById("phone").value = selectedStudent.phone;
    document.getElementById("address").value = selectedStudent.address;
    if (selectedStudent.gender === "Nam") {
      document.getElementById("male").checked = true;
    } else if (selectedStudent.gender === "Nữ") {
      document.getElementById("female").checked = true;
    }
  
    render();
  }
  