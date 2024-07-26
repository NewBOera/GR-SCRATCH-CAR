const $form = document.getElementById("send-form"),
   firstOffer = document.getElementById("1x"),
   secondOffer = document.getElementById("2x"),
   thirdOffer = document.getElementById("3x");

console.log($form, firstOffer, secondOffer, thirdOffer);

document.addEventListener("click", (event) => {
   if (event.target === firstOffer) {
      console.log("oferta1");
   }
});
