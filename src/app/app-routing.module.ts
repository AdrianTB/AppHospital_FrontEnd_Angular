import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/components/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'layout', loadChildren:()=> import('./shared/shared.module').then(m=>m.SharedModule)}, // Carga lo correpsondiente al SharedModule sólo cuando el logeo sea correcto
  { path: '**', component: LoginComponent } // Redirige a LoginComponent para rutas no coincidentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
