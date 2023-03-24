import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardsListComponent } from './components/boards-list/boards-list.component';
import { BoardComponent } from './components/board/board.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: BoardsListComponent },
  { path: 'board/:id', component: BoardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardsListComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
