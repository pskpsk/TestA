const profile =
JSON.parse(
localStorage.getItem(
"profile"
)
) || {};

document.getElementById(
"name"
).value =
profile.name || "";

document.getElementById(
"tower"
).value =
profile.tower || "";

document.getElementById(
"flat"
).value =
profile.flat || "";

function saveProfile(){

const data = {

name:
document.getElementById(
"name"
).value,

tower:
document.getElementById(
"tower"
).value,

flat:
document.getElementById(
"flat"
).value

};

localStorage.setItem(
"profile",
JSON.stringify(data)
);

alert(
"Profile Saved"
);
}
