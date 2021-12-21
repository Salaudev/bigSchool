let lastActive;
let lastActivepage = document.querySelector(`#${menuData[0].id}Page`);

body.onload = () => {
    menuElements.innerHTML = "";
    menuData.map((m) => {
        const li = document.createElement("li");
        li.className = "menu-item";

        const a = document.createElement("a");
        a.href = "#";
        a.innerHTML = `<span class="me-2">${m.icon}</span>${m.title}`;

        //Section tanlangan payti
        a.onclick = () => {

            // lastActive.classList.remove("active");
            lastActive.classList.remove("active");
            li.classList.add("active");

            lastActivepage.classList.add("d-none");
            const sectionPage = document.querySelector(`#${m.id}Page`);
            sectionPage.classList.remove("d-none");

            lastActivepage = sectionPage;
            lastActive = li;
        };
        li.appendChild(a);

        menuElements.appendChild(li);
    });

    lastActive = menuElements.children[0];
    lastActive.classList.add("active");
};