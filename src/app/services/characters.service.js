import httpService from "./http.service";
import configFile from "../config.json";

// сервис для получения данных о персонажах, промежуточный модуль

const characterEndpoint = configFile.apiEndpoint + "character/";

const charactersService = {
  get: async (paramQuery = "") => {
    const { data } = await httpService.get(characterEndpoint + paramQuery);

    return data;
  },
};
export default charactersService;
