import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../../../environments/environment.development';
import { IShared } from '../interfaces/shared.interface';

@Injectable({ providedIn: 'root' })
export class SharedApiService {
  constructor(private http: HttpClient) {}

  public getSpecializations() {
    return this.http.get<IShared[]>(`${API_PATH}/specializations`);
  }

  public getDepartments() {
    return this.http.get<IShared[]>(`${API_PATH}/departments`);
  }

  public getSkills() {
    return this.http.get<IShared[]>(`${API_PATH}/skills`);
  }

  public getTeamRoles() {
    return this.http.get<IShared[]>(`${API_PATH}/team-roles`);
  }

  public getResponsibilities() {
    return this.http.get<IShared[]>(`${API_PATH}/responsibilities`);
  }

  public getLanguages() {
    return this.http.get<IShared[]>(`${API_PATH}/languages`);
  }
}
