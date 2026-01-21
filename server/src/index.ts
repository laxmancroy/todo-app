import app from './server';

const PORT = 5000;

// সার্ভার চালু করার ফাংশন
function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`====================================`);
      console.log(`🚀 server is running in port: ${PORT}`);
      console.log(`🔗 link: http://localhost:${PORT}`);
      console.log(`====================================`);
    });
  } catch (error) {
    console.error('server isnt running:', error);
  }
}

startServer();
