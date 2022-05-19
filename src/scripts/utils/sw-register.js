const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('/sw.js');
  } else {
    console.log('Service worker not supported');
  }
};

export default swRegister;
