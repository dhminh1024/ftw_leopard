function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const students = [
  "Nguyễn Minh Quân",
  "Cao Thiện Duy",
  "Nguyễn Thị Nhã Phương",
  "Nguyen Hoang Tan",
  "Le Minh Truong",
  "Trinh Tuyet Tran",
  "Le Anh Xuan",
  "Le Thuy Tra My",
  "Nguyen Minh Hai",
  "Nguyen The Duy",
  "Nguyen Truong Son",
  "Tran Don Hau",
  "Quach Trung Tin",
  "Pham Thien An",
  "Le Thanh Gia Phuc",
  "Le Thanh Phuc",
  "Lương Thị Thùy Trang",
];

const splitStudents = (nGroups) => {
  const result = {};

  shuffleArray(students);
  students.forEach((name, index) => {
    const groupNumber = (index % nGroups) + 1;
    const groupName = `group${groupNumber}`;
    if (result[groupName]) {
      result[groupName].push(name);
    } else {
      result[groupName] = [name];
    }
  });

  return result;
};

console.log(splitStudents(8));
