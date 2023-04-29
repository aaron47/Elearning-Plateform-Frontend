import { AxiosRequestConfig } from './../../node_modules/axios/index.d';
import axios from 'axios';
import { AuthDto, User, Formation, CreateFormationDto } from './types';
import { CreateCertificateDto } from './types/Certificate';

const BASE_URL = 'http://localhost:8080/api/';

const axiosClient = axios.create({
	baseURL: BASE_URL,
});

const config: AxiosRequestConfig = {
	withCredentials: true,
};

// User API
export const postRegisterUser = (dto: AuthDto) =>
	axiosClient.post('/api/register', dto, config);
export const postLoginUser = (dto: AuthDto) =>
	axiosClient.post('/api/login', dto, config);
export const getUserById = (id: string) =>
	axiosClient.get<User>(`/api/user/${id}`, config);

// Formation API
export const getFormations = () =>
	axiosClient.get<Formation[]>('/api/formations', config);
export const postCreateFormation = (dto: CreateFormationDto) =>
	axiosClient.post('/api/formations', dto, config);
export const getUserFormations = (id: string) =>
	axiosClient.get<Formation[]>(`/api/formations/${id}`, config);

// Certificates API
export const getCertificates = (dto: CreateCertificateDto) =>
	axiosClient.post('/api/certificates/create', dto, config);
export const getUserCertificates = (id: string) =>
	axiosClient.get<CreateCertificateDto[]>(`/api/certificates/${id}`, config);
