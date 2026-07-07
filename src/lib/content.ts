/**
 * Central site content. Contact details below are PLACEHOLDERS — Safir Countertop's
 * social pages did not expose a public phone/address/hours, so these must be
 * replaced with the real business details before launch.
 */
export const SITE = {
  name: "Safir Countertop",
  phoneDisplay: "(555) 010-2938", // PLACEHOLDER — replace with real number
  phoneHref: "+15550102938", // PLACEHOLDER
  email: "info@safircountertop.com", // PLACEHOLDER
  address: "123 Industrial Pkwy, Your City, ST 00000", // PLACEHOLDER
  mapEmbedSrc:
    "https://www.google.com/maps?q=granite+countertop+fabricators&output=embed", // PLACEHOLDER — swap for real business address embed
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php/?id=61588520364019",
    instagram: "https://www.instagram.com/safircountertop/",
  },
} as const
