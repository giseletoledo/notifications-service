import { Config } from "jest"; //habilita o autocomplete
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const config: Config = {   //habilita o autocomplete
        moduleFileExtensions: ["js","json","ts"],
        testRegex: ".*\\.spec\\.ts$",
        transform: {
          "^.+\\.(t|j)s$": "ts-jest"
        },
        collectCoverageFrom: ["**/*.(t|j)s"],
        coverageDirectory: "../coverage",
        testEnvironment: "node",

        moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
          prefix: '<rootDir>/'
        })
};

export default config;//habilita o autocomplete