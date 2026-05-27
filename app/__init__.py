"""
MyArea Apps Hub
apps.wrds361.com — Directory of all MyArea platform apps.
"""
import os
from flask import Flask, render_template
import requests

app = Flask(__name__, template_folder="templates", static_folder="static")

APPS = [
    {
        "id":      "social",
        "name":    "MyArea Social",
        "tagline": "Your space on the internet. Connect, share, and build your profile.",
        "url":     "https://myarea.wrds361.com",
        "icon":    "bi-people-fill",
        "color":   "#e63946",
        "category": "Social",
        "description": "MySpace-style social network with profiles, wall posts, friends, messaging, groups, blogs, and events.",
        "features": ["Custom profiles", "Friends & messaging", "Groups & forums", "Photo albums", "Blog"],
    },
    {
        "id":      "positive",
        "name":    "Positive",
        "tagline": "A private sanctuary for prayer, meditation, and good thoughts.",
        "url":     "https://positive.wrds361.com",
        "icon":    "bi-heart-fill",
        "color":   "#00d4a0",
        "category": "Wellness",
        "description": "Self-hosted sovereign intent engine. Log prayers, meditations, and gratitude. Vision boards, timers, and group sessions. 16 languages.",
        "features": ["Prayer & gratitude journal", "Meditation timers", "Vision boards", "16 languages", "Group sessions"],
    },
    {
        "id":      "geozones",
        "name":    "GeoZones",
        "tagline": "Your free corner of the internet. Build your own personal website.",
        "url":     "https://geozones.wrds361.com",
        "icon":    "bi-globe2",
        "color":   "#ffff00",
        "category": "Hosting",
        "description": "GeoCities-style personal web hosting. Pick a neighborhood, build your site with our HTML editor, sign guestbooks, and join web rings.",
        "features": ["Free personal websites", "12 neighborhoods", "HTML/CSS editor", "Guestbooks & web rings", "Follow sites"],
    },
    {
        "id":      "games",
        "name":    "Games Hub",
        "tagline": "Browser-based games. Crime Wars and more.",
        "url":     "https://myareagames.wrds361.com",
        "icon":    "bi-controller",
        "color":   "#7c3aed",
        "category": "Games",
        "description": "The MyArea games arcade. Play Crime Wars — build your criminal empire, join gangs, and fight your way to the top.",
        "features": ["Crime Wars", "Gang system", "Leaderboards", "More games coming"],
    },
]

SERVICE_API_KEY = os.getenv("SERVICE_API_KEY", "")
SOCIAL_URL      = os.getenv("SOCIAL_API_URL", "http://myarea_social_web:5000")
GEOZONES_URL    = os.getenv("GEOZONES_API_URL", "http://geozones_web:5000")
POSITIVE_URL    = os.getenv("POSITIVE_API_URL", "http://positive_engine:8000")
CRIMEWARS_URL   = os.getenv("CRIMEWARS_API_URL", "http://myarea_games_web:5000")

def _headers():
    return {"X-Service-Key": SERVICE_API_KEY}


def _get_stats():
    stats = {}
    try:
        r = requests.get(f"{SOCIAL_URL}/api/v1/stats", headers=_headers(), timeout=2)
        if r.status_code == 200:
            stats["social"] = r.json()
    except Exception:
        pass
    try:
        r = requests.get(f"{GEOZONES_URL}/api/stats", headers=_headers(), timeout=2)
        if r.status_code == 200:
            stats["geozones"] = r.json()
    except Exception:
        pass
    try:
        r = requests.get(f"{CRIMEWARS_URL}/api/v1/stats", headers=_headers(), timeout=2)
        if r.status_code == 200:
            stats["games"] = r.json()
    except Exception:
        pass
    return stats


@app.route("/")
def index():
    stats = _get_stats()
    return render_template("index.html", apps=APPS, stats=stats)


@app.route("/health")
def health():
    return {"status": "ok"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
