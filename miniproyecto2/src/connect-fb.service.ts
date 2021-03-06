// src/app/service/news.service.ts

import { Injectable } from '@angular/core';
import { News } from '../model/news';  // News data type interface
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database

@Injectable({
  providedIn: 'root'
})
export class ConnectfbService {
  newsRef: AngularFireList<any>;  // Reference to News data list
  newRef: AngularFireObject<any>

  constructor(private db: AngularFireDatabase) { }

  // Fetch News List
  GetNewList() {
    this.newsRef = this.db.list('login');
    return this.newsRef;
  }

  // Update New Object
  ArchiveNew(id: string) {
    this.newRef = this.db.object('News-list/' + id);
    this.newRef.update({
      archived: true
    })
  }
}