import httpService from "./http.service";
import configFile from "../config.json";

const characterEndpoint = configFile.apiEndpoint + "character/";

const charactersService = {
  get: async (paramQuery = "") => {
    const { data } = await httpService.get(characterEndpoint + paramQuery);

    return data;
  },
};
export default charactersService;
