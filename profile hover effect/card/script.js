function createCard(img, name) {
  let html = `<div class="profile">
    <img src="${img}" alt=""/><span class="name">${name}</span>
  </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}
let data = [
  {
    url: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Kalyan",
  },
  {
    url: "https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
    name: "Suchitra Tiwari",
  },
  {
    url: "https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
    name: "Sajid Ghani",
  },
  {
    url: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Dhriti",
  },
  {
    url: "https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Milind",
  },
  {
    url: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80",
    name: "Srikant Tiwari",
  },
];

data.forEach(function (obj) {
  let Url = obj.url;
  let Name = obj.name;
  /* console.log(Url);
     console.log(Name); */

  createCard(Url, Name);
});
