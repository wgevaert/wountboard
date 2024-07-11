const CACHE = "wountboardcache1";

// Select files for caching.
let urlsToCache = [
    "./index.html",
    "./manifest.json",
    "./assets/audio/Hmmm_nee.mp3",
    "./assets/audio/Maar_maar_nee.mp3",
    "./assets/audio/Hoe_durf_jij.mp3",
    "./assets/audio/Wat_doen_we_dr_aan.mp3",
    "./assets/audio/Ah_toeee.mp3",
    "./assets/audio/Ik_zie_een_plan_ontstaan.mp3",
    "./assets/audio/Ik_snap_het_niet_meer.mp3",
    "./assets/audio/Euh_ja_mmwaar_slaat_dat_nou_eigenlijk_op.mp3",
    "./assets/audio/Bietje_roaar.mp3",
    "./assets/audio/Oeh_wat_is_dat.mp3",
    "./assets/audio/Je_kan_het_ik_geloof_in_je.mp3",
    "./assets/audio/Wat_doe_je.mp3",
    "./assets/audio/Nee.mp3",
    "./assets/audio/Woohw.mp3",
    "./assets/audio/Wieuw.mp3",
    "./assets/audio/Oeh_ja_daar_heb_je_me.mp3",
    "./assets/audio/Jaaa_sorry_maar_das_een_beetje_vreemd.mp3",
    "./assets/audio/Neej.mp3",
    "./assets/audio/Oowh.mp3",
    "./assets/audio/Poedie_poedie_poedieee.mp3",
    "./assets/audio/Snel_neem_nog_een_biertje.mp3",
    "./assets/audio/Dan_huppelen_we_dr_heen.mp3",
    "./assets/audio/Maar_wat_nu_als_ik_ah_toeee_zeg.mp3",
    "./assets/audio/Waar_was_ik.mp3",
    "./assets/audio/Wat_doeee_je.mp3",
    "./assets/audio/Maar_ik_zeg_toch_ah_toeee.mp3",
    "./assets/audio/Lekker_hoor.mp3",
    "./assets/audio/Euh_nee.mp3",
    "./assets/audio/Mag_ik_nog_een_pitcher_water.mp3",
    "./assets/audio/Pimmieee.mp3",
    "./assets/audio/Ik_weet_niet_wat_ik_moet_doen.mp3",
    "./assets/audio/Hebben_jullie_ook_Fristi.mp3",
    "./assets/audio/Wout_remix.mp3",
    "./assets/audio/Hoiii.mp3",
    "./assets/audio/Ah_toe.mp3",
    "./assets/audio/Euhhh_nee.mp3",
    "./assets/audio/Wat_wat_moet_ik_doen.mp3",
    "./assets/audio/Pipipipiiim.mp3",
    "./assets/audio/Als_we_rennen_zijn_we_sneller.mp3",
    "./assets/ico/wountboard.ico"
];

// Cache all the selected items once application is installed.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Caching started.");
            return cache.addAll(urlsToCache);
        })
    );
});

// Whenever a resource is requested, return if its cached else fetch the resource from server.
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
