declare global {
	namespace NodeJS {
		interface ProcessEnv {
			RELEASE_MODE: string;
			BASE_PATH: string;
			ORIGIN: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { };