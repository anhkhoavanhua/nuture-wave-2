// authApi.ts
const BASE_URL = 'https://dev-api-nurture.vinova.sg/api/v1';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/admins/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return await response.json(); // Trả về token từ server
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
