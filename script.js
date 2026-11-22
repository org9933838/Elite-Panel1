
/* =================================
   ELITE PANEL - WEBSITE SCRIPT
================================= */

// WhatsApp Support Number
const WHATSAPP_NUMBER = "8801851634039";

// Meta Pixel ID
// নিজের Pixel ID বসাবেন
const META_PIXEL_ID = "";

// Meta Pixel Initialization
if (META_PIXEL_ID.trim() !== "") {
  !function(f,b,e,v,n,t,s) {
    if(f.fbq)return;
    n=f.fbq=function(){
      n.callMethod ?
      n.callMethod.apply(n,arguments) : n.queue.push(arguments)
    };
    if(!f._fbq)f._fbq=n;
    n.push=n;
    n.loaded=true;
    n.version='2.0';
    n.queue=[];
    t=b.createElement(e);
    t.async=true;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s);
  }(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
}

// Available Packages
const packages = {
  basic: {
    name: "২ মাসের প্যাকেজ",
    price: 99,
    duration: "২ মাস"
  },

  lifetime: {
    name: "Lifetime প্যাকেজ",
    price: 1000,
    duration: "Lifetime"
  }
};

// Order Button Function
function order(packageName, price) {

  if (!packageName || !Number.isFinite(price) || price <= 0) {
    alert("সঠিক প্যাকেজ নির্বাচন করুন।");
    return;
  }

  // Track checkout initiation
  if (typeof fbq === "function") {
    fbq('track', 'InitiateCheckout', {
      value: price,
      currency: 'BDT'
    });
  }

  const message =
    "আসসালামু আলাইকুম। আমি " +
    packageName +
    " অর্ডার করতে চাই। মূল্য: ৳" +
    price +
    "। বিস্তারিত জানাবেন।";

  const whatsappURL =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(event) {

    const target = document.querySelector(
      this.getAttribute('href')
    );

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// WhatsApp link protection
document.querySelectorAll('.whatsapp').forEach(button => {
  button.setAttribute('target', '_blank');
  button.setAttribute('rel', 'noopener noreferrer');
});

console.log("Elite Panel website loaded successfully.");
