const API_BASE = "http://localhost:8080";
const STORAGE_KEY = "tcet-student-hub-announcements";

let announcements = [];
let useApi = false;

const form = document.getElementById("announcementForm");
const announcementList = document.getElementById("announcementList");
const emptyMsg = document.getElementById("emptyMsg");
const feedStats = document.getElementById("feedStats");
const apiStatus = document.getElementById("apiStatus");
const submitBtn = document.getElementById("submitBtn");
const themeBtn = document.getElementById("themeBtn");

function setApiStatus(online) {
    useApi = online;
    apiStatus.textContent = online ? "Java API connected" : "Offline mode";
    apiStatus.className = "status " + (online ? "status--online" : "status--offline");
}

function saveLocal(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadLocal() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

async function fetchAnnouncements() {

}

async function createAnnouncement(payload) {

}

async function deleteAnnouncement(id) {

}

function formatDate(isoString) {

}

function createAnnouncementElement(item) {

}

function renderAnnouncements() {

}

async function refreshAnnouncements() {
}

form.addEventListener("submit", async function (event) {

});

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

refreshAnnouncements();
