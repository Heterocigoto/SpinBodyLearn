const cacheName = 'Que_Hora_Es_Version_1';
 let appShellFiles=[
    'index.html',
    'style.css',
    'javascript.js',
    'Imagenes/logo1024.png',
    'Imagenes/logo512.png',
    'Imagenes/logo256.png',
    'Imagenes/logo128.png',
    'Imagenes/logo32.png',
    'Imagenes/logo64.png',
    'Imagenes/Ambos.png',  
    'Imagenes/Fany1.png',
    'Imagenes/ruleta.png',
    'Imagenes/Toby1.png',
    'sw.js', 
    'manifest.json'
 ];
 var contentToCache = appShellFiles;
 
 self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado con éxito');
    e.waitUntil(
      caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Añadiendo la cache del sitio');
        return cache.addAll(contentToCache);
      })
    );
  });

  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((r) => {
            console.log('[Service Worker] Solicitando al cache: '+e.request.url);
        return r || fetch(e.request).then((response) => {
                  return caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Actualización de cache: '+e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
  });