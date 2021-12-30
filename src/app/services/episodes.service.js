import httpService from "./http.service";

// сервис для получения данных об эпизодах, промежуточный модуль

const episodesService = {
  get: async (episodeEndpoint = "") => {
    const { data } = await httpService.get(episodeEndpoint);

    return data;
  },
  getAll: async (paramQueryArray) => {
    const data = await httpService.getAll(paramQueryArray);

    return data;
  },
};
export default episodesService;
