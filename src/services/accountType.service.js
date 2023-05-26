import httpService from "./http.service";

const accountTypeEndpoint = "accountType/";

const accountTypeService = {
    get: async () => {
        const { data } = await httpService.get(accountTypeEndpoint);
        return data;
    }
};
export default accountTypeService;
