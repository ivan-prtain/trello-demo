import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardsListComponent } from './components/boards-list/boards-list.component';
import { BoardComponent } from './components/board/board.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BoardsService } from './services/boards.service';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { ColumnCardComponent } from './components/column-card/column-card.component';

const appRoutes: Routes = [
  { path: '', component: BoardsListComponent },
  { path: 'board/:id', component: BoardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardsListComponent,
    BoardComponent,
    BoardCardComponent,
    BoardColumnComponent,
    ColumnCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [BoardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
