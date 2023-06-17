import { Injectable } from '@angular/core';


@Injectable()
  export class SessionStorageService {
    constructor() { }
  
    setValue(key: string, value: any): void {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  
    getValue(key: string): any {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
  
    removeValue(key: string): void {
      sessionStorage.removeItem(key);
    }
  
    clearAll(): void {
      sessionStorage.clear();
    }
  }
  