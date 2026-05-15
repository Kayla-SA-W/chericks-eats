export const loadSquareSdk = () => {
    return new Promise((resolve, reject) => {
      const sqPaymentScript = document.createElement("script")
      sqPaymentScript.src = "https://js.squareup.com/v2/paymentform"
      sqPaymentScript.crossorigin = "anonymous"
      sqPaymentScript.onload = () => {
        resolve()
      }
      sqPaymentScript.onerror = () => {
        reject(`Failed to load ${sqPaymentScript.src}`)
      }
      document.getElementsByTagName("head")[0].appendChild(sqPaymentScript)
    })
  }