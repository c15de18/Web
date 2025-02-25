document.addEventListener("DOMContentLoaded", updateProgress);
function addItem() {
    let input = document.getElementById("new-item");
    let list = document.getElementById("bucket-list");
    if (input.value.trim() === "") return;
    
    let li = document.createElement("li");
    li.textContent = input.value;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        li.remove();
        updateProgress();
    };
    
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
    updateProgress();
}

function updateProgress() {
    let items = document.querySelectorAll(".bucket-list li").length;
    let progress = document.getElementById("progress-bar");
    progress.style.width = items * 10 + "%";
}