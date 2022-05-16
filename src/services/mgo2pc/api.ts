// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export async function getProfile(character: string) {
  return request<API.Profile>(`/api/v1/profile/${character}`, { method: 'GET' });
}
