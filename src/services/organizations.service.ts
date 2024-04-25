import axios from "axios";

import env from "configs";

export const register = async (
  id: string,
  details: {
    name?: string;
    phoneNumber?: string;
    industry?: string;
    website?: string;
    address?: string;
  }
) => {
  const response = await axios.post(`${env.API_BASE_URL}/organizations/register/${id}`, details);
  return response.data;
};

export const update = async (
  id: string,
  ownerId: string,
  details: {
    logo?: string;
    size?: number;
    name?: string;
    phoneNumber?: string;
    industry?: string;
    website?: string;
    address?: string;
  }
) => {
  const response = await axios.patch(
    `${env.API_BASE_URL}/organizations/register/continue/${id}/${ownerId}`,
    details
  );
  return response.data;
};

export const inviteTeam = async (id: string, ownerId: string, emails: string[]) => {
  const response = await axios.post(
    `${env.API_BASE_URL}/organizations/${id}/invite-team/${ownerId}`,
    { emails }
  );
  return response.data;
};
