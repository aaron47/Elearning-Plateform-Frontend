import { AxiosRequestConfig } from './../../node_modules/axios/index.d';
import axios from 'axios';
import {
	AuthDto,
	User,
	Formation,
	CreateFormationDto,
	RegisterDto,
} from './types';
import { CreateCertificateDto } from './types/Certificate';

const BASE_URL = 'http://localhost:8000/';

const axiosClient = axios.create({
	baseURL: BASE_URL,
});

const config: AxiosRequestConfig = {
	withCredentials: true,
};

export type FormationParticipateParams = {
	user_id: number;
	formation_id: number;
};

// User API
export const postRegisterUser = (dto: RegisterDto) =>
	axiosClient.post('/api/register', dto, config);
export const postLoginUser = (dto: AuthDto) =>
	axiosClient.post<User>('/api/login', dto, config);
export const getUserById = (id: string) =>
	axiosClient.get<User>(`/api/user/${id}`, config);

// Formation API
export const getFormations = () => axiosClient.get('/api/formations', config);
export const postCreateFormation = (dto: CreateFormationDto) =>
	axiosClient.post('/api/formation/create', dto, config);
export const getUserFormations = (id: string) =>
	axiosClient.get<Formation[]>(`/api/formations/${id}`, config);
export const participateUserInFormation = (
	params: FormationParticipateParams,
) => axiosClient.post('/api/formation/participate', params, config);
export const getFormationParticipants = (formationId: string) =>
	axiosClient.get(`/api/formation/${formationId}/participants`, config);
export const deleteParticipant = (participantId: string) =>
	axiosClient.post(`/api/formation/participants/${participantId}`, config);

// Certificates API
export const createCertificate = (dto: CreateCertificateDto) =>
	axiosClient.post('/api/certificates/create', dto, config);
export const getUserCertificates = (id: string) =>
	axiosClient.get<CreateCertificateDto[]>(`/api/certificates/${id}`, config);
