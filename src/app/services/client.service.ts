import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/roles';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_CLIENT);
  }
  getAllUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getAllEmployees(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_EMP);
  }
  addUpdateClient(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + constant.API_METHOD.ADD_UPDATE_CLIENT, obj)
  }
  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + constant.API_METHOD.DELETE_CLIENT_ById + id);
  }
  AddUpdateClientProject(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + constant.API_METHOD.ADD_UPDATE_CLIENTPROJECT, obj);
  }
  getAllClientProject(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_CLIENTPROJECT);
  }
}
