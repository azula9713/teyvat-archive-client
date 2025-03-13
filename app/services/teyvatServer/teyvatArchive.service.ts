import { createAxiosService } from "../http/axios.service";

const ENKA_BASE_URL = import.meta.env.VITE_ENKA_BASE_URL as string;

const serverInstance = createAxiosService(ENKA_BASE_URL);

export const getCharacters = async () => {
  try {
    const response = await serverInstance.get("/characters/all");
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
    const response = await serverInstance.get(`/characters/id/${enkaId}`, {
      params: { skillDepotId },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWeapons = async () => {
  try {
    const response = await serverInstance.get("/weapons/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getWeaponSeries = async () => {
  try {
    const response = await serverInstance.get("/weapons/series");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getArtifacts = async () => {
  try {
    const response = await serverInstance.get("/artifacts/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMaterialById = async (materialId: string) => {
  try {
    const response = await serverInstance.get(`/materials/id/${materialId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllEvents = async () => {
  try {
    const response = await serverInstance.get("/events/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
