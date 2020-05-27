if('serviceWorker'in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(registro => console.log('Registro de SW realizado', registro))
    .catch(error=> console.warn('No se logró registrar el SW', error))
}