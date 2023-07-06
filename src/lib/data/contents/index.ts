import { filterContents, importContents } from "./utils";

export const allContents = importContents(true);
export const filteredContents = filterContents(allContents);