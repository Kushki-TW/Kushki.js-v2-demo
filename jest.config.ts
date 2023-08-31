import { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(png)$": "identity-obj-proxy",
    "\\.(svg)$": "identity-obj-proxy",
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>" })
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["showcase/*", "src/gateway/KushkiGateway.ts"],
  modulePathIgnorePatterns: ["showcase"]
};

export default config;
