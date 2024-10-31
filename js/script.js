let $ = (id) => document.getElementById(id);

window.addEventListener("load", () => {
    let form = $("empForm");
    let elements = [
        { type: "text", id: "id", label: "8-Digit Employee ID", maxLength: 8 },
        { type: "text", id: "name", label: "Full Name" },
        { type: "text", id: "ext", label: "4-Digit Extension", maxLength: 4 },
        { type: "email", id: "email", label: "Email" },
        { type: "select", id: "department", label: "Department", options: ["Administrative", "Engineering", "Executive", "Marketing", "Quality Assurance", "Sales"] }
    ];

    elements.forEach(({ type, id, label, maxLength, options }) => {
        let group = document.createElement("div");
        group.className = "mb-3";
        group.innerHTML = `
            <label for="${id}" class="form-label">${label}</label>
            ${type === "select" ? 
                `<select id="${id}" class="form-control">${options.map(opt => `<option>${opt}</option>`).join('')}</select>` : 
                `<input type="${type}" id="${id}" class="form-control" ${maxLength ? `maxlength="${maxLength}"` : ""} required>`
            }`;
        form.appendChild(group);
    });

    form.innerHTML += `<button type="submit" class="btn btn-primary mt-3">Add Employee</button>`;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(`ID: ${$("id").value}`);
        console.log(`Name: ${$("name").value}`);
        console.log(`Extension: ${$("ext").value}`);
        console.log(`Email: ${$("email").value}`);
        console.log(`Department: ${$("department").value}`);
    });
});
