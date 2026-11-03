
/* ==========================================
   BOMBAY SURAKSHA FORCE
   Client-side Website Interactions
========================================== */

// WhatsApp Business Number
// India country code + number, without + or spaces
const WHATSAPP_NUMBER = "919029901444";

// Official Instagram Profile
const INSTAGRAM_URL =
  "https://www.instagram.com/forcebombaysuraksha/";


document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // CURRENT YEAR
  // ==========================================

  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  // ==========================================
  // INSTAGRAM PROFILE LINK
  // ==========================================

  const instagramLink =
    document.getElementById("instagramLink");

  if (instagramLink) {

    instagramLink.href = INSTAGRAM_URL;
    instagramLink.target = "_blank";
    instagramLink.rel = "noopener noreferrer";

    instagramLink.title =
      "Follow Bombay Suraksha Force on Instagram";

  }


  // ==========================================
  // FLOATING WHATSAPP BUTTON
  // ==========================================

  const floatingWhatsapp =
    document.getElementById("floatingWhatsapp");

  if (floatingWhatsapp) {

    const floatingMessage = `
🛡️ *SECURITY SERVICE ENQUIRY*

Hello *Bombay Suraksha Force*,

I visited your website and would like to enquire about your security services.

━━━━━━━━━━━━━━━━━━
📋 *MY REQUIREMENTS*

• Service Required: Please share available services
• Location: [Enter Your Location]
• Number of Security Personnel: [Enter Quantity]
• Duration: [Daily / Monthly / Long-term]

━━━━━━━━━━━━━━━━━━

Please contact me to discuss the requirements, availability and pricing.

Thank you.
*Bombay Suraksha Force – Security You Can Trust.*
    `.trim();

    const floatingUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(floatingMessage)}`;

    floatingWhatsapp.href = floatingUrl;
    floatingWhatsapp.target = "_blank";
    floatingWhatsapp.rel = "noopener noreferrer";

  }


  // ==========================================
  // CONTACT / ENQUIRY FORM
  // ==========================================

  const form = document.getElementById("enquiryForm");

  if (!form) return;


  form.addEventListener("submit", (event) => {

    event.preventDefault();


    // Validate form
    if (!form.checkValidity()) {

      form.reportValidity();

      return;

    }


    // ==========================================
    // GET FORM VALUES
    // ==========================================

    const name =
      document.getElementById("name").value.trim();

    const phone =
      document.getElementById("phone").value.trim();

    const service =
      document.getElementById("service").value;

    const message =
      document.getElementById("message").value.trim();


    // ==========================================
    // PROFESSIONAL WHATSAPP ENQUIRY MESSAGE
    // ==========================================

    const whatsappMessage = `
🛡️ *NEW SECURITY SERVICE ENQUIRY*

Hello *Bombay Suraksha Force*,

I would like to enquire about your security services.

👤 *CUSTOMER DETAILS*
━━━━━━━━━━━━━━━━━━
• Name: ${name}
• Contact Number: ${phone}

📋 *SERVICE REQUIREMENT*
━━━━━━━━━━━━━━━━━━
• Service Required: ${service}
${message ? `• Additional Details: ${message}` : ""}

━━━━━━━━━━━━━━━━━━

Kindly contact me to discuss the requirements, availability and pricing.

Thank you.
*Bombay Suraksha Force – Security You Can Trust.*
    `.trim();


    // ==========================================
    // OPEN WHATSAPP WITH PREFILLED MESSAGE
    // ==========================================

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

  });

});
