import httpService from "./http.service";

const accountsEndpoint = "accounts/";

const accountsService = {
    get: async () => {
        const { data } = await httpService.get(accountsEndpoint);
        return data;
    }
};
export default accountsService;
