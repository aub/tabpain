import React from 'react';
import { useParams } from 'react-router';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab2: React.FC = () => {
  let { groupName } = useParams<{ groupName: string }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Two for {groupName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/GROUP-ONE/tab2">
            <IonLabel>
              <h2>Go to group ONE</h2>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/GROUP-TWO/tab2">
            <IonLabel>
              <h2>Go to group TWO</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
