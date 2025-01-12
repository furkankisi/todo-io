// HTML öğelerini seçiyoruz
const newTodoInput = document.getElementById("newTodoInput");
const todoList = document.getElementById("todoList");
const itemsLeft = document.getElementById("itemsLeft");

// Görev sayısını güncelleme işlevi
function updateItemsLeft() {
  const remainingItems = todoList.querySelectorAll("li").length;
  itemsLeft.textContent = `${remainingItems} item(s) left`;
}

// Görev Ekleme İşlevi
function addTodo() {
  const text = newTodoInput.value.trim(); // Kullanıcının yazdığı değeri al
  if (text) {
    const li = document.createElement("li"); // Yeni liste elemanı oluştur
    li.className = "todo-item";

    // Görev metni için input alanı
    const input = document.createElement("input");
    input.type = "text";
    input.value = text;
    input.className = "todo-input";
    input.setAttribute("readonly", true); // İlk başta düzenlenemez

    // Edit butonu
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";

    editButton.addEventListener("click", () => {
      if (editButton.textContent === "Edit") {
        input.removeAttribute("readonly"); // Düzenlenebilir yap
        input.focus(); // Otomatik olarak inputa odaklan
        editButton.textContent = "Save";
      } else {
        input.setAttribute("readonly", true); // Düzenlemeyi kapat
        editButton.textContent = "Edit";
      }
    });

    // Delete butonu
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";

    // Çöp kutusu simgesi ekle
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "asset/css/img/trash.png"; // Çöp kutusu simgesinin yolu
    deleteIcon.alt = "Delete"; // Erişilebilirlik için alt metin
    deleteIcon.style.width = "20px"; // İsteğe bağlı: ikon boyutu
    deleteIcon.style.height = "20px";

    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener("click", () => {
      li.remove(); // Görevi listeden sil
      updateItemsLeft(); // Görev sayısını güncelle
    });

    // Liste elemanını oluştur
    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li); // Listeye yeni görevi ekle
    newTodoInput.value = ""; // Input'u temizle
    updateItemsLeft(); // Görev sayısını güncelle
  }
}

// Enter Tuşu ile Ekleme
newTodoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
