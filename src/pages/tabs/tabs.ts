import { Component } from '@angular/core';

// Needed to import these pages so the could be used // Juhopekka Kesti(1601537)

import { TechPage } from '../techskills/tech';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';
import { ProjectPage } from '../projectwork/project';
import { SkillsPage } from '../softskills/skills';
import { ActivitiesPage } from '../activities/activities';
import { TeamworkPage } from '../teamwork/teamwork';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // TabRoots // Juhopekka Kesti(1601537)

  tab1Root = ProfilePage; 
  tab2Root = TechPage;
  tab3Root = SkillsPage;
  tab4Root = ProjectPage;
  tab5Root = TeamworkPage;
  tab6Root = ActivitiesPage;
  tab7Root = ContactPage;

  constructor() {

  }
}
