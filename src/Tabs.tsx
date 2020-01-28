import React from 'react';
import { Route } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { apps, flash, send } from 'ionicons/icons';
import NoTab from './pages/NoTab';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Details from './pages/Details';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const Tabs: React.FC = () => {
  const path = useLocation().pathname;
  const regex = /\/(.*)\/tab./;
  const match = path.match(regex);
  let groupName = 'GROUP-ONE';
  if (match) {
    if (match[1]) {
      groupName = match[1];
    }
  }

  console.log(`RENDERING TABS WITH ${groupName}`);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/:groupName/tab1" component={Tab1} exact={true} />
        <Route path="/:groupName/tab2" component={Tab2} exact={true} />
        <Route path="/:groupName/tab3" component={Tab3} exact={true} />
        <Route path="/" component={NoTab} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href={`/${groupName}/tab1`}>
          <IonIcon icon={flash} />
          <IonLabel>T1 for {groupName}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href={`/${groupName}/tab2`}>
          <IonIcon icon={apps} />
          <IonLabel>T2 for {groupName}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href={`/${groupName}/tab3`}>
          <IonIcon icon={send} />
          <IonLabel>T3 for {groupName}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};


export default Tabs;
