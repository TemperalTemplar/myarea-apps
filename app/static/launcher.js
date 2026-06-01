(function(){
  if(document.getElementById('ma-launcher-wrap'))return;

  var APPS = [
    {name:'Social',    url:'https://myarea.wrds361.com',       color:'#e63946', icon:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7 a4 4 0 1 0 8 0 a4 4 0 1 0-8 0 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'},
    {name:'Positive',  url:'https://positive.wrds361.com',     color:'#00d4a0', icon:'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'},
    {name:'Journal',   url:'https://journal.wrds361.com',      color:'#f59e0b', icon:'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8'},
    {name:'GeoZones',  url:'https://geozones.wrds361.com',     color:'#cccc00', icon:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'},
    {name:'Games',     url:'https://myareagames.wrds361.com',  color:'#7c3aed', icon:'M2 6h20v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z M12 12h.01 M7 12h.01 M17 12h.01'},
    {name:'Chat',      url:'https://chat.wrds361.com',         color:'#06b6d4', icon:'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'},
    {name:'Forum',     url:'https://forum.wrds361.com',      color:'#e03030', icon:'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z M8 10h8 M8 14h5'},
    {name:'Forum',   url:'https://forum.wrds361.com',   color:'#e63946', icon:'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z M8 10h8 M8 14h5'},
    {name:'Groups',  url:'https://groups.wrds361.com',  color:'#4a9eff', icon:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'},
    {name:'Fitness', url:'https://fitness.wrds361.com', color:'#dc2626', icon:'M22 12h-4l-3 9L9 3l-3 9H2'},
  ];

  var TOOLS = [
    {name:'Mail',    url:'https://mail.wrds361.com',    color:'#e63946', icon:'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6'},
    {name:'Cloud',   url:'https://cloud.wrds361.com',   color:'#0082c9', icon:'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'},
    {name:'Vault',   url:'https://vault.wrds361.com',   color:'#175DDC', icon:'M3 11h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11z M7 11V7a5 5 0 0 1 10 0v4'},
    {name:'Radio',   url:'https://radio.wrds361.com',   color:'#e2533c', icon:'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0 M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49'},
    {name:'Family',  url:'https://family.wrds361.com',  color:'#16a34a', icon:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0'},
    {name:'Fitness', url:'https://fitness.wrds361.com', color:'#dc2626', icon:'M22 12h-4l-3 9L9 3l-3 9H2'},
    {name:'AI',      url:'https://ai.wrds361.com',      color:'#8b5cf6', icon:'M3 3h18v18H3z M9 9h.01 M15 9h.01 M9 15h6'},
    {name:'All Apps',url:'https://apps.wrds361.com',    color:'#6478a0', icon:'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z'},
  ];

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
      TOOLS.map(function(a){return makeAppCell(a,true);}).join('')+
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

  var wrap = document.createElement('div');
  wrap.id = 'ma-launcher-wrap';
  wrap.style.cssText = 'position:relative;display:inline-block;vertical-align:middle';
  wrap.appendChild(btn);
  wrap.appendChild(dd);

  btn.addEventListener('click',function(e){
    e.stopPropagation();
    var isOpen = dd.style.display==='block';
    dd.style.display = isOpen?'none':'block';
    btn.setAttribute('aria-expanded', isOpen?'false':'true');
  });
  document.addEventListener('click',function(){
    dd.style.display='none';
    btn.setAttribute('aria-expanded','false');
  });
  dd.addEventListener('click',function(e){e.stopPropagation();});

  // Auto-inject after body loads
  document.addEventListener('DOMContentLoaded',function(){
    // Try common nav right containers across all apps
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
        return;
      }
    }
    // Fallback — append to body
    document.body.appendChild(wrap);
  });
})();
