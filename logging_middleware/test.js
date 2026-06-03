const Log = require("./logger");

const testLogger = async () => {

  const response = await Log(

    "backend",
    "info",
    "route",
    "Logger working successfully"

  );

  console.log(response);
};

testLogger();