// Promo Code Logic
document.querySelector(".apply-promo-btn").addEventListener("click", function () {
    const promoCode = document.getElementById("promo-code").value;
    const originalPrice = 50; // Harga asli
    let discount = 0;
  
    if (promoCode === "DISCOUNT10") {
      discount = 10; // Potongan $10
    }
  
    document.getElementById("discount").innerText = `$${discount}`;
    document.getElementById("total-price").innerText = `$${originalPrice - discount}`;
    document.querySelector(".pay-btn").innerText = `Pay $${originalPrice - discount}`;
  });
  
  // Pembayaran Dinamis Berdasarkan Metode
  document.querySelectorAll("input[name='payment-method']").forEach((input) => {
    input.addEventListener("change", function () {
      let totalPrice = 50; // Harga awal
      const method = this.value;
  
      // Menampilkan/Menyembunyikan Opsi E-Wallet
      const eWalletOptions = document.querySelector(".e-wallet-options");
      if (method === "e-wallet") {
        eWalletOptions.classList.remove("hidden");
      } else {
        eWalletOptions.classList.add("hidden");
      }
  
      // Biaya tambahan untuk metode tertentu
      if (method === "e-wallet") {
        totalPrice += 2; // Biaya tambahan $2 untuk e-wallet
      } else if (method === "bank-transfer") {
        totalPrice += 1; // Biaya tambahan $1 untuk transfer bank
      }
  
      const discount = parseInt(document.getElementById("discount").innerText.replace("$", "")) || 0;
      totalPrice -= discount;
  
      document.getElementById("total-price").innerText = `$${totalPrice}`;
      document.querySelector(".pay-btn").innerText = `Pay $${totalPrice}`;
    });
  });
  