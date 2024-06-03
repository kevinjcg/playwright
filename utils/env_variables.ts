import dotenv from 'dotenv';
import { iEnvVariables } from '../utils/types';
dotenv.config();

class EnvVariable {

constructor() {}

public getEnvVariables(): iEnvVariables {
  const envVars: Partial<iEnvVariables> = {
    AUTO_PLAYWRIGHT_DEBUG: Boolean(process.env.AUTO_PLAYWRIGHT_DEBUG),
    BASE_URL: process.env.BASE_URL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SCALAR_DASH409A_PASSWORD: process.env.SCALAR_DASH409A_PASSWORD,
    SCALAR_DASH409A_USERNAME: process.env.SCALAR_DASH409A_USERNAME,
    SCALAR_PASSWORD: process.env.SCALAR_PASSWORD,
    SCALAR_USERNAME: process.env.SCALAR_USERNAME,
    TESTRAIL_API_KEY: process.env.TESTRAIL_API_KEY,
    TESTRAIL_USERNAME: process.env.TESTRAIL_USERNAME,
  };

  // Check for missing environment variables
  for (const [key, value] of Object.entries(envVars)) {
    if (value === undefined) {
      throw new Error(`Missing environment variable: ${key}`);
    }
  }

  return envVars as iEnvVariables;
}

}

export default new EnvVariable();

// 