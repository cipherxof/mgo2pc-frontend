import { request } from '@umijs/max';

export async function getGames(extraData = false) {
  return request<API.GameList>(`/api/v1/games?extra=${extraData}`, { method: 'GET' });
}

export async function getClan(clanId: number | string) {
  return request<API.Clan>(`/api/v1/clan/${clanId}`, { method: 'GET' });
}

export async function getProfile(character: number | string) {
  return request<API.Profile>(`/api/v1/profile/${character}`, { method: 'GET' });
}

export async function getTitles(character: number | string) {
  return request<API.Titles>(`/api/v1/titles/${character}`, { method: 'GET' });
}

export async function getStatus() {
  return request<API.ServerStatus>(`/api/v1/status`, { method: 'GET' });
}

export async function getShopItems(id: number | string) {
  return request<API.ShopItems>(`/api/v1/shop` + `${id ? `/${id}` : ''}`, { method: 'GET' });
}

export async function getNotifications() {
  return request<any>(`/api/v1/notifications/get/0`, { method: 'GET' });
}

export async function readNotification(id: number | string) {
  return request<any>(`/api/v1/notifications/read/${id}`, { method: 'GET' });
}

export async function getAccount() {
  return request<API.Account>(`/api/v1/account`, { method: 'GET' });
}

export async function activateAccount(userId: string, key: string) {
  return request<API.Response>(`/api/v1/activate/${userId}/${key}`, { method: 'GET' });
}

export async function resetPassword(userId: string, key: string) {
  return request<API.ResetPassword>(`/api/v1/resetpw/${userId}/${key}`, { method: 'GET' });
}

export async function purchaseItem(id: number | string) {
  return request<API.Response>(`/api/v1/shopbuy/${id}`, { method: 'GET' });
}

export async function equipItem(id: number | string, chara: number | string) {
  return request<API.Response>(`/api/v1/shopequip/${id}/${chara}`, { method: 'GET' });
}

export async function getRankings(mode: string, page: number | string, weekly?: boolean) {
  return request<API.Rankings>(`/api/v1/rankings/${mode}/${page}/${weekly ? 'weekly' : ''}`, {
    method: 'GET',
  });
}

export async function recoverPassword(email: string, captcha: string) {
  return request(`/api/v1/recovery`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { email, captcha },
  });
}

export async function createAccount(
  username: string,
  password: string,
  email: string,
  captcha: string,
  displayName?: string,
) {
  return request(`/api/v1/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { username, password, email, captcha, displayName },
  });
}

export async function login(username: string, password: string) {
  return request(`/api/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { username, password },
  });
}

export async function updateAccount(body: any) {
  return request('/api/v1/account', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}
