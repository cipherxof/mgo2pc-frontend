import { notification } from "antd";
import axios, { AxiosResponse } from "axios";

type WebAPIResponse<T> = {
  success: boolean;
  data: T;
  message: string;
}

export class WebAPI {
  public readonly url: string;

  constructor(url: string) {
    this.url = url;

    console.log(`API ${url} initialized`);
  }

  public async makeRequest(path: string, method: "get" | "post" | "put" = "get", data = {}, token = ''): Promise<any | boolean> {
    let output: AxiosResponse<any> | boolean = false;

    await axios({
      method,
      url: this.url + path,
      data,
      headers: {
        authorization: token
      }
    }).then((response: any) => {
      output = response;

      if (response && response.data) {
        if (!response.data.success && response.data.message.length > 0) {
          notification.error({ message: `Error`, description: response.data.message, placement: "topRight" });
          output = false;
        } else if (response.data.success && response.data.message.length > 0) {
          notification.success({ message: `Success`, description: response.data.message, placement: "topRight" });
        }
      }

    }).catch((error: any) => {
      console.error(error);
      output = false;
    });

    return output;
  }

  public async createAccount(username: string, password: string, email: string, captcha: string, displayName?: string): Promise<any | false> {
    return await this.makeRequest(`/api/v1/register`, 'post', { username, password, email, captcha, displayName });
  }

  public async activateAccount(userId: string, key: string): Promise<any | false> {
    return await this.makeRequest(`/api/v1/activate/${userId}/${key}`, 'get');
  }

  public async getProfile(character: string): Promise<any | false> {
    return await this.makeRequest(`/api/v1/profile/${character}`, 'get');
  }

  public async getTitles(character: string): Promise<any | false> {
    return await this.makeRequest(`/api/v1/titles/${character}`, 'get');
  }

  public async login(username: string, password: string): Promise<any | false> {
    return await this.makeRequest(`/api/v1/login`, "post", { username, password });
  }

  public async getStatus(): Promise<WebAPIResponse<{ status: number }> | false> {
    return await this.makeRequest(`/api/v1/status`);
  }

  public async getGames(): Promise<WebAPIResponse<{ players: number, lobbies: GameLobby[] }> | false> {
    const result = await this.makeRequest(`/api/v1/games`);
    return result.data;
  }

  public async getAccount(token: string): Promise<WebAPIResponse<UserAccount> | false> {
    const result = await this.makeRequest(`/api/v1/account`, 'get', {}, token);
    return result.data;
  }

  public async getCharacter(token: string, id: number): Promise<WebAPIResponse<any> | false> {
    const result = await this.makeRequest(`/api/v1/character?id=${id}`, 'get', {}, token);
    return result.data;
  }

  public async updateAccount(token: string, data: UserAccount): Promise<WebAPIResponse<any> | false> {
    const result = await this.makeRequest(`/api/v1/account`, 'put', data, token);
    return result.data;
  }
}

const host = window.location.hostname === "localhost" ? "localhost" : window.location.hostname;
const apiInstance = new WebAPI(`${window.location.protocol}//${host}`);
export default apiInstance;