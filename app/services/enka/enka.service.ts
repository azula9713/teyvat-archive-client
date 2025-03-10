import { createAxiosService } from "../http/axios.service";

const ENKA_BASE_URL = import.meta.env.VITE_ENKA_BASE_URL as string;

const enkaInstance = createAxiosService(ENKA_BASE_URL);

export const getCharacters = async () => {
  try {
    const response = await enkaInstance.get("/characters/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCharacterBySkillDepotId = async (
  enkaId: string,
  skillDepotId: string
) => {
  try {
    const response = await enkaInstance.get(`/characters/id/${enkaId}`, {
      params: { skillDepotId },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMaterialById = async (materialId: string) => {
  try {
    const response = await enkaInstance.get(`/materials/id/${materialId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
