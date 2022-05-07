import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KonkursComponent } from './konkurs/konkurs.component';
import { LcabComponent } from './lcab/lcab.component';
import { MeropryComponent } from './meropry/meropry.component';
import { MpitComponent } from './mpit/mpit.component';
import { NewsComponent } from './news/news.component';
import { TransComponent } from './trans/trans.component';

const routes: Routes = [{path: '', component: HomeComponent  },
{path: 'meropry', component: MeropryComponent  },
{path: 'trans', component: TransComponent  },
{path: 'konkurs', component: KonkursComponent  },
{path: 'news', component: NewsComponent  },
{path: 'mpit', component: MpitComponent  },
{path: 'lcab', component: LcabComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
