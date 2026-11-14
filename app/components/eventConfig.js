// Single source of truth for couple, date, venue and reveal-day info.
// Edit values here and the whole site updates automatically.
// NOTE: All values below are DEMO data — replace them with your event's details.

// Absolute moments in Tokyo time (UTC+9). The +09:00 suffix makes these
// unambiguous regardless of where the website is served from — the countdown
// timer and Add-to-Calendar links will be correct in every viewer's timezone.
const REVEAL_START = new Date("2027-03-20T14:00:00+09:00");
const REVEAL_END = new Date("2027-03-20T18:00:00+09:00");

export const eventConfig = {
  couple: {
    parent1: "Sithu",
    parent2: "Su",
    joined: "Sithu & Su",
  },
  reveal: {
    date: REVEAL_START,
    endDate: REVEAL_END,
    // Hardcoded display strings so they always read the same to every guest,
    // regardless of their browser locale or system timezone.
    displayDate: "Saturday, March 20, 2027",
    displayTime: "2:00 PM – 6:00 PM",
  },
  venue: {
    name: "Sunny Garden Café",
    nameJp: "サニーガーデンカフェ",
    city: "Shibuya, Tokyo",
    address: "〒150-0000 Tokyo, Shibuya City, Sample 1-2-3, Demo Building 2F",
    transit: "5 min walk from Shibuya Station (Hachiko Exit)",
    // Link to the venue on Google Maps. Tapping "Get Directions" on a phone
    // opens Google Maps with this destination, ready to navigate from the
    // guest's current location. Replace with your venue's coordinates, e.g.
    // https://www.google.com/maps/dir/?api=1&destination=LAT,LNG
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Shibuya+Station,+Tokyo",
  },
  dressCode: "Pink or blue, if possible 🫶",
  quote: {
    text: "A baby fills a place in your heart that you never knew was empty.",
    author: "Unknown",
  },
};

export default eventConfig;
