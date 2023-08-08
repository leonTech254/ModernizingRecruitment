module.exports = {
  apps: [
    {
      "name": "Vemona",
      "script": "mainApp.py",
      "args": [],
      "instances": "1",
      "wait_ready": true,
      "autorestart": false,
      "max_restarts": 5,
      "interpreter": ".venv/bin/python",
      //"interpreter": ".venv/bin/python",
    }
  ],
};










