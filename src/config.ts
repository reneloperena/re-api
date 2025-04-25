import convict from "convict";

// Define a schema
const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 4100,
    env: "PORT",
    arg: "port",
  },
});

// Perform validation
config.validate({ allowed: "strict" });

export default config;
