import { api } from '@shared/services/api';
import { CarType } from '@shared/types';

export async function getCarById(id: string) {
  try {
    const { data } = await api.get<CarType>(`/cars/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(
      'Oops ... there is an error while getting the car data, check if the server is online and try again later.'
    );
  }
}
