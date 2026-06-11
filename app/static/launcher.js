(function(){
  if(document.getElementById('ma-launcher-wrap'))return;

  var APPS = [
    {name:'Social',    url:'https://myarea.wrds361.com',       color:'#e63946', icon:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7 a4 4 0 1 0 8 0 a4 4 0 1 0-8 0 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'},
    {name:'Positive',  url:'https://positive.wrds361.com',     color:'#00d4a0', icon:'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'},
    {name:'Journal',   url:'https://journal.wrds361.com',      color:'#f59e0b', icon:'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8'},
    {name:'GeoZones',  url:'https://geozones.wrds361.com',     color:'#cccc00', icon:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'},
    {name:'Games',     url:'https://myareagames.wrds361.com',  color:'#7c3aed', icon:'M2 6h20v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z M12 12h.01 M7 12h.01 M17 12h.01'},
    {name:'Chat',      url:'https://chat.wrds361.com',         color:'#06b6d4', icon:'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'},
    {name:'Forum',     url:'https://forum.wrds361.com',        color:'#e03030', icon:'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z M8 10h8 M8 14h5'},
    {name:'Groups',    url:'https://groups.wrds361.com',       color:'#4a9eff', icon:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'},
    {name:'Fitness',   url:'https://fitness.wrds361.com',      color:'#dc2626', icon:'M22 12h-4l-3 9L9 3l-3 9H2'},
//    {name:'Vet App',   url:'https://wh.wrds361.com',           color:'#dc2626', icon:'M22 12h-4l-3 9L9 3l-3 9H2'},

  ];

  var COMMUNITY_TOOLS = [
    {name:'LMS',    url:'https://lms.wrds361.com',    color:'#e63946', icon:'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5'},
    {name:'CDDS',   url:'https://cdds.wrds361.com',   color:'#0082c9', icon:'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6'},
    {name:'Games',  url:'https://myareagames.wrds361.com', color:'#175DDC', icon:'M2 6h20v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z M12 12h.01 M7 12h.01 M17 12h.01'},
    {name:'Radio',  url:'https://radio.wrds361.com',  color:'#e2533c', icon:'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0 M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49'},
    {name:'Family', url:'https://family.wrds361.com', color:'#16a34a', icon:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0'},
    {name:'AI',     url:'https://ai.wrds361.com',     color:'#8b5cf6', icon:'M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1H1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z'},
    {name:'Apps',   url:'https://apps.wrds361.com',   color:'#6478a0', icon:'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z'},
  ];

//  var WORK_TOOLS = [
//    {name:'Case',    url:'https://case.wrds361.com',    color:'#e63946', icon:'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c->
//    {name:'Lexfile', url:'https://lex.wrds361.com',     color:'#0082c9', icon:'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10>
//    {name:'Spectra', url:'https://spect.wrds361.com',   color:'#175DDC', icon:'M3 11h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11>
//    {name:'Lineage', url:'https://Linage.wrds361.com',  color:'#e2533c', icon:'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0 M16.>
//  ];

  var THIRD_PARTY_TOOLS = [
    {name:'Mail',   url:'https://mail.wrds361.com',   color:'#e63946', icon:'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6'},
    {name:'Cloud',  url:'https://cloud.wrds361.com',  color:'#0082c9', icon:'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'},
    {name:'Vault',  url:'https://vault.wrds361.com',  color:'#175DDC', icon:'M3 11h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11z M7 11V7a5 5 0 0 1 10 0v4'},
    {name:'Radio',  url:'https://radio.wrds361.com',  color:'#e2533c', icon:'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0 M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49'},
    {name:'SSO',    url:'https://auth.wrds361.com',   color:'#8b5cf6', icon:'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'},
    {name:'Rocket', url:'https://rocket.wrds361.com', color:'#e2533c', icon:'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'},
  ];

  // ── Notification state ──────────────────────────────────────────────────
  var MA_USER      = null;   // set by host page: window.MA_USER = 'alva'
  var MA_AI_BASE   = window.MA_AI_BASE || 'https://ai.wrds361.com';
  var notifUnread  = 0;
  var notifItems   = [];
  var notifPanelOpen = false;

  function makeIcon(path, color, size){
    size = size||18;
    return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="'+color+'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+
      path.split(' M').map(function(p,i){return '<path d="'+(i===0?p:'M'+p)+'"/>';}).join('')+
    '</svg>';
  }

  function makeAppCell(a, small){
    var size = small?14:18;
    var iconSize = small?28:36;
    return '<a href="'+a.url+'" target="_blank" style="display:flex;flex-direction:column;align-items:center;gap:'+(small?4:5)+'px;padding:'+(small?'8px 4px':'10px 6px')+';border-radius:6px;text-decoration:none;border:1px solid transparent">'+
      '<div style="width:'+iconSize+'px;height:'+iconSize+'px;border-radius:'+(small?4:6)+'px;background:'+a.color+'22;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center">'+
        makeIcon(a.icon, a.color, size)+
      '</div>'+
      '<span style="font-size:'+(small?8:9)+'px;color:#8899bb;letter-spacing:1px;font-family:\'Courier New\',monospace;text-transform:uppercase">'+a.name+'</span>'+
    '</a>';
  }

  // ── Notification bell button ────────────────────────────────────────────
  var bellBtn = document.createElement('button');
  bellBtn.id = 'ma-notif-btn';
  bellBtn.setAttribute('aria-label', 'Notifications');
  bellBtn.style.cssText = 'position:relative;background:transparent;border:1px solid rgba(255,255,255,0.15);border-radius:6px;width:34px;height:34px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;flex-shrink:0;vertical-align:middle;margin-right:6px';
  bellBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>';

  var bellBadge = document.createElement('span');
  bellBadge.id = 'ma-notif-badge';
  bellBadge.style.cssText = 'display:none;position:absolute;top:-5px;right:-5px;background:#e03030;color:#fff;font-size:9px;font-family:\'Courier New\',monospace;font-weight:700;min-width:16px;height:16px;border-radius:8px;line-height:16px;text-align:center;padding:0 3px;pointer-events:none;animation:ma-badge-pop 0.3s ease';
  bellBtn.appendChild(bellBadge);

  // ── Notification panel ──────────────────────────────────────────────────
  var notifPanel = document.createElement('div');
  notifPanel.id = 'ma-notif-panel';
  notifPanel.style.cssText = 'display:none;position:absolute;top:calc(100% + 8px);right:0;width:320px;background:#1a2030;border:1px solid #2a3448;border-radius:8px;z-index:99999;overflow:hidden';

  function renderNotifPanel(){
    var header = '<div style="padding:10px 14px 8px;border-bottom:1px solid #243040;display:flex;align-items:center;justify-content:space-between">'+
      '<div style="font-family:\'Courier New\',monospace;font-size:11px;letter-spacing:2px;color:#e03030;font-weight:700">NOTIFICATIONS</div>'+
      '<div style="display:flex;align-items:center;gap:10px">'+
        '<div style="font-size:9px;color:#4a5a7a;font-family:\'Courier New\',monospace;letter-spacing:1px">'+(notifUnread > 0 ? notifUnread+' UNREAD' : 'ALL CLEAR')+'</div>'+
        (notifItems.length > 0 ? '<button id="ma-notif-clear" style="background:transparent;border:1px solid #2a3448;color:#6a7a9a;font-family:\'Courier New\',monospace;font-size:8px;letter-spacing:1px;padding:2px 7px;border-radius:4px;cursor:pointer">CLEAR ALL</button>' : '')+
      '</div>'+
    '</div>';

    var list = '';
    if(notifItems.length === 0){
      list = '<div style="padding:20px 14px;text-align:center;font-family:\'Courier New\',monospace;font-size:10px;color:#4a5a7a;letter-spacing:1px">NO NOTIFICATIONS</div>';
    } else {
      list = '<div style="max-height:320px;overflow-y:auto">';
      notifItems.forEach(function(n){
        var appColors = {forum:'#e03030',social:'#e63946',fitness:'#dc2626',groups:'#4a9eff',journal:'#f59e0b',silex:'#8b5cf6',system:'#4a5a7a'};
        var col = appColors[n.app] || '#4a5a7a';
        var ago = timeAgo(n.timestamp);
        list += '<a href="'+(n.url||'#')+'" style="display:block;padding:10px 14px;border-bottom:1px solid #1e2838;text-decoration:none;background:'+(n.read?'transparent':'rgba(224,48,48,0.04)')+'">'+
          '<div style="display:flex;align-items:flex-start;gap:8px">'+
            '<div style="width:6px;height:6px;border-radius:50%;background:'+col+';margin-top:5px;flex-shrink:0;'+(n.read?'opacity:0.3':'')+'"></div>'+
            '<div style="flex:1;min-width:0">'+
              '<div style="font-family:\'Courier New\',monospace;font-size:10px;color:#c8d8f0;letter-spacing:0.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+escHtml(n.title)+'</div>'+
              '<div style="font-size:9px;color:#4a5a7a;font-family:\'Courier New\',monospace;margin-top:2px">'+escHtml(n.body)+'</div>'+
              '<div style="font-size:8px;color:#2a3a5a;font-family:\'Courier New\',monospace;margin-top:3px;letter-spacing:1px">'+ago+' · '+n.app.toUpperCase()+'</div>'+
            '</div>'+
          '</div>'+
        '</a>';
      });
      list += '</div>';
    }

    notifPanel.innerHTML = header + list;
    var clearBtn = document.getElementById('ma-notif-clear');
    if(clearBtn){ clearBtn.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); clearAll(); }); }
  }

  function escHtml(s){
    return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function timeAgo(ts){
    var diff = Math.floor(Date.now()/1000) - ts;
    if(diff < 60)  return 'JUST NOW';
    if(diff < 3600) return Math.floor(diff/60)+'M AGO';
    if(diff < 86400) return Math.floor(diff/3600)+'H AGO';
    return Math.floor(diff/86400)+'D AGO';
  }

  function updateBadge(){
    if(notifUnread > 0){
      bellBadge.style.display = 'block';
      bellBadge.textContent   = notifUnread > 99 ? '99+' : notifUnread;
      bellBtn.style.borderColor = 'rgba(224,48,48,0.5)';
    } else {
      bellBadge.style.display = 'none';
      bellBtn.style.borderColor = 'rgba(255,255,255,0.15)';
    }
  }

  function pollNotifications(){
    var user = window.MA_USER || null;
    if(!user) return;
    fetch(MA_AI_BASE+'/api/notifications?user='+encodeURIComponent(user), {credentials:'include'})
      .then(function(r){ return r.json(); })
      .then(function(data){
        notifUnread = data.unread || 0;
        notifItems  = data.items  || [];
        updateBadge();
        if(notifPanelOpen) renderNotifPanel();
      })
      .catch(function(){});
  }

  function markRead(){
    var user = window.MA_USER || null;
    if(!user) return;
    fetch(MA_AI_BASE+'/api/notifications/mark-read', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({user:user}),
      credentials:'include'
    }).then(function(){
      notifUnread = 0;
      notifItems.forEach(function(n){ n.read = true; });
      updateBadge();
    }).catch(function(){});
  }
  function clearAll(){
    var user = window.MA_USER || null;
    if(!user) return;
    fetch(MA_AI_BASE+'/api/notifications/clear', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({user:user}),
      credentials:'include'
    }).then(function(){
      notifItems  = [];
      notifUnread = 0;
      updateBadge();
      renderNotifPanel();
    }).catch(function(){});
  }

  // Bell click
  bellBtn.addEventListener('click', function(e){
    e.stopPropagation();
    notifPanelOpen = !notifPanelOpen;
    if(notifPanelOpen){
      renderNotifPanel();
      notifPanel.style.display = 'block';
      if(notifUnread > 0) markRead();
    } else {
      notifPanel.style.display = 'none';
    }
  });

  // ── Launcher dropdown ───────────────────────────────────────────────────
  var dd = document.createElement('div');
  dd.id = 'ma-launcher-dd';
  dd.style.cssText = 'display:none;position:absolute;top:calc(100% + 8px);right:0;width:300px;background:#1a2030;border:1px solid #2a3448;border-radius:8px;z-index:99999';
  dd.innerHTML =
    '<div style="padding:10px 14px 8px;border-bottom:1px solid #243040;display:flex;align-items:center;justify-content:space-between">'+
      '<div>'+
        '<div style="font-family:\'Courier New\',monospace;font-size:12px;letter-spacing:3px;color:#e63946;font-weight:700">MY<span style="color:#8899bb">AREA</span></div>'+
        '<div style="font-size:9px;color:#4a5a7a;letter-spacing:2px;font-family:\'Courier New\',monospace">SOVEREIGN PLATFORM</div>'+
      '</div>'+
      '<div style="width:6px;height:6px;border-radius:50%;background:#00d4a0"></div>'+
    '</div>'+
    '<div style="font-size:9px;color:#4a5a7a;letter-spacing:2px;font-family:\'Courier New\',monospace;padding:10px 14px 4px">MYAREA APPS</div>'+
    '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;padding:4px 8px 8px">'+
      APPS.map(function(a){return makeAppCell(a,false);}).join('')+
    '</div>'+
    '<div style="height:1px;background:#243040;margin:0 8px"></div>'+
    '<div style="font-size:9px;color:#4a5a7a;letter-spacing:2px;font-family:\'Courier New\',monospace;padding:10px 14px 4px">TOOLS</div>'+
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;padding:4px 8px 10px">'+
      COMMUNITY_TOOLS.map(function(a){return makeAppCell(a,true);}).join('')+
    '</div>'+
    '<div style="height:1px;background:#243040;margin:0 8px"></div>'+
    '<div style="font-size:9px;color:#4a5a7a;letter-spacing:2px;font-family:\'Courier New\',monospace;padding:10px 14px 4px">THIRD PARTY</div>'+
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;padding:4px 8px 10px">'+
      THIRD_PARTY_TOOLS.map(function(a){return makeAppCell(a,true);}).join('')+
    '</div>'+
    '<div style="border-top:1px solid #243040;padding:8px 14px;display:flex;align-items:center;justify-content:space-between">'+
      '<a href="https://apps.wrds361.com" target="_blank" style="font-size:9px;color:#4a5a7a;letter-spacing:1px;font-family:\'Courier New\',monospace;text-decoration:none;text-transform:uppercase">apps.wrds361.com</a>'+
      '<span style="font-size:9px;color:#2a3a5a;font-family:\'Courier New\',monospace;letter-spacing:1px">SOVEREIGN · SELF-HOSTED</span>'+
    '</div>';

  var btn = document.createElement('button');
  btn.id = 'ma-launcher-btn';
  btn.setAttribute('aria-label','MyArea app launcher');
  btn.setAttribute('aria-expanded','false');
  btn.style.cssText = 'background:transparent;border:1px solid rgba(255,255,255,0.15);border-radius:6px;width:34px;height:34px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;flex-shrink:0;vertical-align:middle';
  btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="4" height="4" rx="1" fill="#888"/><rect x="6" y="1" width="4" height="4" rx="1" fill="#888"/><rect x="11" y="1" width="4" height="4" rx="1" fill="#888"/><rect x="1" y="6" width="4" height="4" rx="1" fill="#888"/><rect x="6" y="6" width="4" height="4" rx="1" fill="#888"/><rect x="11" y="6" width="4" height="4" rx="1" fill="#888"/><rect x="1" y="11" width="4" height="4" rx="1" fill="#888"/><rect x="6" y="11" width="4" height="4" rx="1" fill="#888"/><rect x="11" y="11" width="4" height="4" rx="1" fill="#888"/></svg>';

  // ── Wrapper: [bell] [9-dot] ─────────────────────────────────────────────
  // Bell has its own relative wrapper for panel positioning
  var bellWrap = document.createElement('div');
  bellWrap.style.cssText = 'position:relative;display:inline-block;vertical-align:middle';
  bellWrap.appendChild(bellBtn);
  bellWrap.appendChild(notifPanel);

  var wrap = document.createElement('div');
  wrap.id = 'ma-launcher-wrap';
  wrap.style.cssText = 'position:relative;display:inline-flex;align-items:center;vertical-align:middle;gap:0';
  wrap.appendChild(bellWrap);

  var dotWrap = document.createElement('div');
  dotWrap.style.cssText = 'position:relative;display:inline-block;vertical-align:middle';
  dotWrap.appendChild(btn);
  dotWrap.appendChild(dd);
  wrap.appendChild(dotWrap);

  // ── Badge animation keyframes ───────────────────────────────────────────
  if(!document.getElementById('ma-badge-style')){
    var style = document.createElement('style');
    style.id = 'ma-badge-style';
    style.textContent = '@keyframes ma-badge-pop{0%{transform:scale(0.5);opacity:0}70%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}}';
    document.head.appendChild(style);
  }

  btn.addEventListener('click',function(e){
    e.stopPropagation();
    var isOpen = dd.style.display==='block';
    dd.style.display = isOpen?'none':'block';
    btn.setAttribute('aria-expanded', isOpen?'false':'true');
    // close notif panel if open
    notifPanelOpen = false;
    notifPanel.style.display = 'none';
  });

  document.addEventListener('click',function(){
    dd.style.display='none';
    btn.setAttribute('aria-expanded','false');
    notifPanelOpen = false;
    notifPanel.style.display = 'none';
  });
  dd.addEventListener('click',function(e){e.stopPropagation();});
  notifPanel.addEventListener('click',function(e){e.stopPropagation();});

  // ── Auto-inject ─────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded',function(){
    var targets = [
      document.querySelector('.nav-right'),
      document.querySelector('.ma-nav-right'),
      document.querySelector('.gz-nav-links'),
      document.querySelector('.hub-nav-links'),
      document.querySelector('.user-chip'),
      document.querySelector('.topbar-right'),
    ];
    for(var i=0;i<targets.length;i++){
      if(targets[i]){
        targets[i].appendChild(wrap);
        break;
      }
    }
    if(!wrap.parentNode) document.body.appendChild(wrap);

    // Start polling — only if MA_USER is set by the host page
    pollNotifications();
    setInterval(pollNotifications, 50000);
  });
})();
