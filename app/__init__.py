"""
MyArea Apps Hub
apps.wrds361.com — Directory of all MyArea platform apps.
"""
import os
from flask import Flask, render_template
import requests

app = Flask(__name__, template_folder="templates", static_folder="static")

APPS = [
    {"id":"social","name":"MyArea Social","tagline":"Your space on the internet. Connect, share, and build your profile.","url":"https://myarea.wrds361.com","icon":"bi-people-fill","color":"#e63946","category":"Social","native":True,"description":"MySpace-style social network with profiles, wall posts, friends, messaging, groups, blogs, and events.","features":["Custom profiles","Friends & messaging","Groups & forums","Photo albums","Blog"]},
    {"id":"positive","name":"Positive","tagline":"A private sanctuary for prayer, meditation, and good thoughts.","url":"https://positive.wrds361.com","icon":"bi-heart-fill","color":"#00d4a0","category":"Wellness","native":True,"description":"Self-hosted sovereign intent engine. Log prayers, meditations, and gratitude. Vision boards, timers, and group sessions.","features":["Prayer & gratitude journal","Meditation timers","Vision boards","16 languages","Group sessions"]},
    {"id":"journal","name":"MyArea Journal","tagline":"Your private journal. Write freely, think deeply.","url":"https://journal.wrds361.com","icon":"bi-journal-text","color":"#f59e0b","category":"Wellness","native":True,"description":"Private journaling with rich text editing, notebooks, mood tracking, tags, and deep MyArea platform integration.","features":["Private notebooks","Rich text editor","Mood tracking","Tags & search","Positive integration"]},
    {"id":"geozones","name":"GeoZones","tagline":"Your free corner of the internet. Build your own personal website.","url":"https://geozones.wrds361.com","icon":"bi-globe2","color":"#ffff00","category":"Hosting","native":True,"description":"GeoCities-style personal web hosting. Pick a neighborhood, build your site with our HTML editor.","features":["Free personal websites","12 neighborhoods","HTML/CSS editor","Guestbooks & web rings","Follow sites"]},
    {"id":"games","name":"Games Hub","tagline":"Browser-based games. Crime Wars and more.","url":"https://myareagames.wrds361.com","icon":"bi-controller","color":"#7c3aed","category":"Games","native":True,"description":"The MyArea games arcade. Play Crime Wars, build your criminal empire, join gangs, and fight your way to the top.","features":["Crime Wars","Gang system","Leaderboards","More games coming"]},
    {"id":"chat","name":"MyArea Chat","tagline":"Real-time messaging for the platform.","url":"https://chat.wrds361.com","icon":"bi-chat-dots-fill","color":"#06b6d4","category":"Social","native":True,"description":"Platform-integrated real-time chat. Connect with other MyArea members and stay in sync.","features":["Real-time messaging","Rooms & channels","Platform integration","Self-hosted"]},
    {"id":"forum","name":"MyArea Forum","tagline":"Community discussions. Yahoo-style flat threading.","url":"https://forum.wrds361.com","icon":"bi-chat-square-text-fill","color":"#e63946","category":"Community","native":True,"description":"Full-featured forum with categories, threads, replies, likes, trust levels, moderation tools, and BBCode.","features":["Categories & subcategories","Flat threading with quotes","Trust levels","Moderation tools","SSO login"]},
    {"id":"groups","name":"MyArea Groups","tagline":"Community groups with email digests and file sharing.","url":"https://groups.wrds361.com","icon":"bi-people-fill","color":"#4a9eff","category":"Community","native":True,"description":"Yahoo/Google Groups-style community platform. Create groups, post threads, share files, run polls, and send email digests.","features":["Public & private groups","Email digests","File sharing","Polls","Announcements"]},
    {"id":"fitness","name":"MyArea Fitness","tagline":"Track workouts, nutrition, and body measurements.","url":"https://fitness.wrds361.com","icon":"bi-heart-pulse-fill","color":"#dc2626","category":"Wellness","native":True,"description":"Full fitness tracker built for MyArea. Log workouts, meals, and measurements. Sync with Google Fit or import from Samsung Health.","features":["Workout logging","Nutrition tracking","Body measurements","Google Fit sync","Samsung Health import"]},
    {"id":"mail","name":"MyArea Mail","tagline":"Your sovereign email. Powered by Mailcow.","url":"https://mail.wrds361.com","icon":"bi-envelope-fill","color":"#e63946","category":"Communication","native":False,"description":"Full-featured self-hosted email. Webmail, calendar, contacts, spam filtering, and multi-domain support.","features":["Webmail (SOGo)","Spam & virus filtering","Multi-domain","IMAP/SMTP/POP3","Mobile sync"]},
    {"id":"nextcloud","name":"Nextcloud","tagline":"Your self-hosted cloud. Files, calendar, and more.","url":"https://cloud.wrds361.com","icon":"bi-cloud-fill","color":"#0082c9","category":"Tools","native":False,"description":"Self-hosted file storage, sync, and sharing. Calendar, contacts, and hundreds of apps.","features":["File sync & share","Calendar & contacts","Office documents","Mobile apps"]},
    {"id":"vaultwarden","name":"Vaultwarden","tagline":"Password manager. Keep your credentials safe.","url":"https://vault.wrds361.com","icon":"bi-shield-lock-fill","color":"#175DDC","category":"Tools","native":False,"description":"Self-hosted Bitwarden-compatible password manager. Store, sync, and autofill passwords.","features":["Password vault","Browser extension","Mobile apps","Secure sharing"]},
    {"id":"azuracast","name":"AzuraCast","tagline":"Self-hosted internet radio station.","url":"https://radio.wrds361.com","icon":"bi-broadcast","color":"#e2533c","category":"Media","native":False,"description":"Run your own internet radio station. Manage music libraries, schedule playlists, stream live.","features":["Live streaming","Music scheduler","Listener stats","Multiple stations"]},
    {"id":"webtrees","name":"Webtrees","tagline":"Family history and genealogy.","url":"https://family.wrds361.com","icon":"bi-diagram-3-fill","color":"#16a34a","category":"Tools","native":False,"description":"Self-hosted genealogy and family tree software. Build your family history, upload documents and photos.","features":["Family trees","GEDCOM import/export","Photo albums","Research tools"]},
    {"id":"openwebui","name":"Open WebUI","tagline":"AI assistant interface.","url":"https://ai.wrds361.com","icon":"bi-robot","color":"#8b5cf6","category":"Tools","native":False,"description":"Self-hosted interface for local and remote AI models. Keep your conversations private.","features":["Multiple AI models","Chat history","Self-hosted","Private conversations"]},
]

SERVICE_API_KEY = os.getenv("SERVICE_API_KEY", "")
SOCIAL_URL      = os.getenv("SOCIAL_API_URL",   "http://myarea_social_web:5000")
GEOZONES_URL    = os.getenv("GEOZONES_API_URL",  "http://geozones_web:5000")
POSITIVE_URL    = os.getenv("POSITIVE_API_URL",  "http://positive_engine:8000")
CRIMEWARS_URL   = os.getenv("CRIMEWARS_API_URL", "http://myarea_games_web:5000")
JOURNAL_URL     = os.getenv("JOURNAL_API_URL",   "http://myarea_journal_web:5000")

def _headers():
    return {"X-Service-Key": SERVICE_API_KEY}

def _get_stats():
    stats = {}
    for key, url, path in [
        ("social",   SOCIAL_URL,    "/api/v1/stats"),
        ("geozones", GEOZONES_URL,  "/api/stats"),
        ("games",    CRIMEWARS_URL, "/api/v1/stats"),
        ("journal",  JOURNAL_URL,   "/api/stats"),
    ]:
        try:
            r = requests.get(f"{url}{path}", headers=_headers(), timeout=2)
            if r.status_code == 200:
                stats[key] = r.json()
        except Exception:
            pass
    return stats

@app.route("/")
def index():
    stats  = _get_stats()
    native = [a for a in APPS if a.get("native")]
    tools  = [a for a in APPS if not a.get("native")]
    return render_template("index.html", apps=APPS, native=native, tools=tools, stats=stats)

@app.route("/health")
def health():
    return {"status": "ok"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
