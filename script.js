const PHONE = "918802323747";

function openWhatsApp(message) {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

document.querySelectorAll("[data-service]").forEach(btn => {
  btn.addEventListener("click", () => {
    const service = btn.dataset.service;
    const select = document.getElementById("service");
    if (select) select.value = service;
  });
});

document.querySelectorAll("[data-area]").forEach(btn => {
  btn.addEventListener("click", () => {
    const area = btn.dataset.area;
    document.getElementById("area").value = area;
    document.getElementById("booking").scrollIntoView({behavior:"smooth"});
  });
});

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const service = document.getElementById("service").value;
  const area = document.getElementById("area").value.trim();
  const problem = document.getElementById("problem").value.trim() || "Not specified";

  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  const message =
`Hello Expert Chimney & Microwave Repair,

I want to book a service.

Name: ${name}
Mobile: ${mobile}
Service: ${service}
Area: ${area}
Problem: ${problem}

Please confirm technician availability and service charges.`;

  openWhatsApp(message);
});
