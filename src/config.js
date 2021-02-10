const dev = {
  STRIPE_KEY:
    "pk_test_51IHtc8IJhjzVz19W5I6utVKX8K0nUK085KeHCpCrIXtwUu62dEUGB0iHAKzumq4EAvJs62kQ2OSS9CroOrr3g4Jd00X5jZhA1u",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1v70byerypziv",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://fbe8pvl87h.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_8yULWE5Qr",
    APP_CLIENT_ID: "1paljebg3ndnqsv7q900god32a",
    IDENTITY_POOL_ID: "us-east-1:b38e3d89-3008-40dc-8a4a-44c8a6b838cd",
  },
};

const prod = {
  STRIPE_KEY:
    "pk_test_51IHtc8IJhjzVz19W5I6utVKX8K0nUK085KeHCpCrIXtwUu62dEUGB0iHAKzumq4EAvJs62kQ2OSS9CroOrr3g4Jd00X5jZhA1u",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-acyudpsvr83t",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://8j1tkcjgi4.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_RIIZd0e3b",
    APP_CLIENT_ID: "59v80putv8bpdceuf30i3gh53v",
    IDENTITY_POOL_ID: "us-east-1:68f895df-2257-4c95-9c22-6728d4d39848",
  },
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
