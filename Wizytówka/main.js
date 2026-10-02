const formularz = document.querySelector("#formularz");
const podziekowanie = document.querySelector("#podziekowanie");
const podziekowanieTresc = document.querySelector("#podziekowanie-tresc");

const POLA = [
    {
        id: "imie",
        pusteKomunikat: "Podaj imię i nazwisko.",
        sprawdz: wartosc => wartosc.length < 3 ? "Imię i nazwisko musi mieć co najmniej 3 znaki." : "",
    },
    {
        id: "email",
        pusteKomunikat: "Podaj adres e-mail.",
        sprawdz: wartosc => !wartosc.includes("@") || !wartosc.includes(".") ? "To nie wygląda na poprawny adres e-mail." : "",
    },
    {
        id: "temat",
        pusteKomunikat: "Wybierz temat wiadomości.",
    },
    {
        id: "wiadomosc",
        pusteKomunikat: "Napisz wiadomość.",
        sprawdz: wartosc => wartosc.length < 10 ? "Wiadomość musi mieć co najmniej 10 znaków." : "",
    },
];

function pokazBlad(id, komunikat) {
    const pole = document.querySelector(`#${id}`);
    const miejsceNaBlad = document.querySelector(`#blad-${id}`);

    miejsceNaBlad.textContent = komunikat;
    pole.closest(".pole").classList.toggle("pole--blad", komunikat !== "");
}